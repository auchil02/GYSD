import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import axios from 'axios';


const SignUp = () => {

  const api = "https://gksz66wied.execute-api.us-east-1.amazonaws.com/staging"
  const [data, setData] = useState({"query":""})
  const [res, setRes] = useState("")
  const [location, setLocation] = useState("")
  const [topic1, setTopic1] = useState("")
  const [topic2, setTopic2] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = () => {
    console.log("Working...")
    axios
    .post(api, data)
    .then((response) => {
        //console.log(response['data']['statusText']);
        setRes(JSON.parse(response['data']['statusText']));
    })
    .catch((error) => {
        console.log(error);
    });
  }

  const handleLocation =(e, func)=>{
    func(e.target.value);
    setData({"name": name, "location": location, "topics": [topic1, topic2], "phone": phone});
    console.log(data);
  }


  return (
    <div className="App" style={{height: "1000px"}}>
      <header className="App-header">
        <form>
            <h2 style={{textAlign: "center"}}>Enter Your Gmail</h2>
            <p style={{marginTop:"-20px", fontSize: "20px"}}>We're going to need this to access your Google Calendar.</p>
            <div style={{display: 'inline-flex', alignItems:"center", width:"400px"}}>
                <label style={{display:"flex"}}>
                    <input style={{height: "40px", width: "250px", marginLeft:"68px"}}type ="text" value={email} onChange={(e) => {handleLocation(e, setEmail)}}/>
                </label>
            </div>
            <h2 style={{textAlign: "center"}}>Enter Your Location</h2>
            <p style={{marginTop:"-20px", fontSize: "20px"}}>We're going to need this to give you real-time weather updates.</p>
            <div style={{display: 'inline-flex', alignItems:"center", width:"400px"}}>
                <label style={{display:"flex"}}>
                    <input style={{height: "40px", width: "250px", marginLeft:"68px"}}type ="text" value={location} onChange={(e) => {handleLocation(e, setLocation)}}/>
                </label>
            </div>
            <h2 style={{textAlign: "center"}}>Enter Your Phone Number</h2>
            <p style={{marginTop:"-20px", fontSize: "20px"}}>Enter the phone number you would like to recieve texts on.</p>
            <div style={{display: 'inline-flex', alignItems:"center", width:"400px"}}>
                <label style={{display:"flex"}}>
                    <input style={{height: "40px", width: "250px", marginLeft:"68px"}}type ="text" value={phone} onChange={(e) => {handleLocation(e, setPhone)}}/>
                </label>
            </div>
            <h2 style={{textAlign: "center"}}>
                List Your Top 2 News Topics
            </h2>
            <p style={{textAlign: "center", width: "800px", marginTop: "-20px", fontSize: "20px"}}>
                We'll try to find the most relevant articles related to your 2 topics and send you a short description and the link of the article.
            </p>
            <div style={{position:"absolute", alignItems:"center", justifyContent:"center", width:"400px", marginLeft: "190px"}}>
                <label>
                <input style={{height: "40px", width: "400px", marginTop: "20px"}}type ="text" value={topic1} onChange={(e) => {handleLocation(e, setTopic1)}}/>
                </label>
                <label>
                <input style={{height: "40px", width: "400px", marginTop: "20px"}}type ="text" value={topic2} onChange={(e) => {handleLocation(e, setTopic2)}}/>
                </label>
            <button style={{height: "40px", width: "100px", marginTop: "40px"}} onClick={handleSubmit}>
              Sign Me Up!
            </button>
            </div>
        </form>
      </header>
    </div>
  );
}

export default SignUp;