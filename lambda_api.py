import json
import boto3
from twilio.rest import Client
from newsapi import NewsApiClient
import requests
import pickle
import datetime
from googleapiclient.discovery import build

def lambda_handler(input, context):
    """
    #Calling and sending event to S3 bucket
    s3 = boto3.resource('s3')
    bucket = "cal-remind"
    s3_path = "data.txt"
    interests = event
    string = str(interests).encode("utf-8")
    s3.Bucket(bucket).put_object(Key=s3_path, Body=string)
    """
    
    #Calling and formatting weather API
    api_key = "bb995c71ea024b7284965801220611"
    base_url = 'http://api.weatherapi.com/v1/forecast.json?key='
    city_name = input['location']
    complete_url = base_url + api_key + "&q=" + city_name + "&aqi=no"
    response = requests.get(complete_url)
    x = response.json()
    current_temp = x['current']['temp_f']
    condition = x['current']['condition']['text'].lower()
    day = x['forecast']['forecastday'][0]['day']
    low = day['mintemp_f']
    high = day['maxtemp_f']
    text = f"Today's weather is {condition} with a current temperature of {current_temp} degrees. There is a low of {low} and a high of {high} degrees. \n"
    
    #Integrating Google Calendar Response
    bucket = 'cal-remind'
    s3_path = 'token.pkl'
    s3 = boto3.resource('s3')
    today = datetime.date.today()
    response = s3.Bucket(bucket).Object(s3_path).get()
    body_string = response['Body'].read()
    credentials = pickle.loads(body_string)
    service = build("calendar","v3", credentials=credentials)
    result = service.calendarList().list().execute()
    calendar_id = result['items'][0]['id']
    result = service.events().list(calendarId=calendar_id).execute()
    event = result['items'][0]
    eventDate = event['start']['dateTime'][5:10]
    tdelta1 = datetime.timedelta(days=2) 
    tdelta2 = datetime.timedelta(days=10)
    
    eventStart = event['start']['dateTime'][11:16]
    start_hour = int(event['start']['dateTime'][11:13])
    start_minutes = event['start']['dateTime'][14:16]
    if start_hour > 12:
        start_hour = start_hour - 12
    
    eventStart = f'{start_hour}:{start_minutes}'
    #print(eventStart)
    
    
    eventEnd = event['end']['dateTime'][11:16]
    end_hour = int(event['end']['dateTime'][11:13])
    end_minutes = event['end']['dateTime'][14:16]
    if end_hour > 12:
      end_hour = end_hour - 12
      
    eventEnd = f'{end_hour}:{end_minutes}'
    summary = event['summary']
    summary =event['summary']
    datetimes = event['start']['dateTime'][5:10]
    page_token = None
    cal = ""
    while True:
      events = service.events().list(calendarId=calendar_id, pageToken=page_token).execute()
      cal = cal + f"Your Day at a Glance: \n"
      for event in events['items']:
        eventStart = event['start']['dateTime'][11:16]
        start_hour = int(event['start']['dateTime'][11:13])
        start_minutes = event['start']['dateTime'][14:16]
        if start_hour > 12:
            start_hour = start_hour - 12
    
        eventStart = f'{start_hour}:{start_minutes}'
        #print(eventStart)
    
    
        eventEnd = event['end']['dateTime'][11:16]
        end_hour = int(event['end']['dateTime'][11:13])
        end_minutes = event['end']['dateTime'][14:16]
        if end_hour > 12:
          end_hour = end_hour - 12
      
        eventEnd = f'{end_hour}:{end_minutes}'
        #print(eventEnd)
        # events today
        # replace 6 with today var
        if int(event['start']['dateTime'][8:10]) == today.day:
            summary = event['summary']
            cal = cal + f'   {summary}, {eventStart} to {eventEnd} \n'
      print("Upcoming tests:")
      for event in events['items']:
        # tests within next two days
        # replace 6 with today var
        # replace 8 with today var + 2
        if (("test" in (event['summary']).lower()) &
            (int(event['start']['dateTime'][8:10]) > today.day) &
            (int(event['start']['dateTime'][8:10]) <= (today+tdelta1).day)):
            summary =event['summary']
            date = event['start']['dateTime'][5:10]
            cal = cal + f'   {summary}, {date} -> Last Stretch! \n'
        # tests within next third day to tenth day from today
        # replace 8 with today var + 2
        # replace 16 with today var + 10
        # don't worry about num > 31 edge case because calendar will never ouput it
        elif (("test" in (event['summary']).lower()) &
            (int(event['start']['dateTime'][8:10]) > (today+tdelta1).day) &
             (int(event['start']['dateTime'][8:10]) <= (today+tdelta2).day)):
            summary =event['summary']
            date = event['start']['dateTime'][5:10]
            cal = cal + f'   {summary}, {date} -> Start Studying! \n'
      page_token = events.get('nextPageToken')
      if not page_token:
        break
    text = text + cal
    
    #Calling news API and formatting data
    interests = input['topics']
    newsapi = NewsApiClient(api_key='3add96d35d3a40fe9c6a7450d538a35d')
    titles = []
    source = []
    descr = []
    url = []
    for i in interests:
      top_headlines = newsapi.get_top_headlines(q=i, language='en')
      articles = top_headlines['articles']
      if(len(articles) != 0):
        titles.append(articles[0]['title'])
        descr.append(articles[0]['description'])
        source.append(articles[0]["source"]["name"])
        url.append(articles[0]["url"])
      else:
        titles.append("No articles found for today!")
        descr.append("N/A")
        source.append("N/A")
        url.append("N/A")
    
    text = text + f"Your top news articles for today: \n\n"
    for i in range(len(titles)):
      text = text + f"{titles[i]}\n{descr[i]}\nLink: {url[i]}\n\n"
    
    #Sending text message to person
    account_sid = 'ACce493235e27b21d81e34eff0bf90e54c'
    auth_token = 'ea88f9666c34d079f5a2289bedff7823'
    
    client = Client(account_sid, auth_token)
    
    message = client.messages \
                    .create(
                         body= text,
                         from_='+15139826027',
                         to='+17049711696'
                     )
    
    return {
        'statusCode': 200,
        'body': json.dumps(text)
    }
