import React from "react"
import { useNavigate } from "react-router-dom"
import image from './image.png';
import Imessage from './Imessage.png';
import list from './list.png';
const Home = () =>{
  const navigate = useNavigate()
  
  const navToSignUp = () => {
    navigate('/signup');
  };

  return(
    <div>
      <header className="What-is-GYST">
        <form>
          <img style={{height:"400px", marginLeft:"500px"}}src={image} />
            <h1 style={{textAlign: "center", color: "white"}}>Start Your Day With A Plan Made For You</h1>
            <h3 style={{textAlign: "center", color: "white"}}>A Smarter, Faster, and Better Way to Navigate Your Life.</h3>
            <button style={{height:"50px", marginLeft:"540px", padding:"0.2rem calc((100vw - 1250px) / 2)",}} onClick={navToSignUp}>
              Get Your S*** Together!
            </button>
            <h1 style={{height:"50px"}}></h1>
          <img style={{height:"200px", marginLeft:"600px"}}src={Imessage} />
            <h1 style={{marginLeft:"495px", color: "white"}}>Every Morning GSYT texts you:</h1>
              <h2 style={{marginLeft:"560px", color: "white"}}>1. A Daily Rundown</h2>
              <h2 style={{marginLeft:"560px", color: "white"}}>2. Future Tests, Essays, etc.</h2>
              <h2 style={{marginLeft:"560px", color: "white"}}>3. Personalized News</h2>
              <button style={{height:"50px", marginLeft:"560px", padding:"0.2rem calc((100vw - 1250px) / 2)",}} onClick={navToSignUp}>
                Sign Up Here!
              </button>
              <h1 style={{height:"50px"}}></h1>
          <img style={{height:"200px", marginLeft:"595px"}}src={list} />
            <h1 style={{marginLeft:"475px", color: "white"}}>First, GYST will need a few things:</h1>
            <h2 style={{marginLeft:"580px", color: "white"}}>1. Google Calendar</h2>
            <h2 style={{marginLeft:"580px", color: "white"}}>2. Location</h2>
            <h2 style={{marginLeft:"580px", color: "white"}}>3. Top 2 News Topics</h2>
            <h2 style={{marginLeft:"580px", color: "white"}}>4. Phone Number</h2>
            <h2 style={{width: "740px", marginLeft: "330px", textAlign: "center", color: "white"}}>GYST then analyzes your events and creates a plan to help you crush 
            your day and prepare for your future, while staying updated on the things that are important to you.</h2>
            <button style={{height:"50px", marginLeft:"525px", padding:"0.2rem calc((100vw - 1250px) / 2)",}} onClick={navToSignUp}>
              Control Your Schedule!
            </button>
            <h1 style={{height:"50px"}}></h1>
        </form>    
      </header>
    </div>

  )
}
function changeBackground(color) {
  document.body.style.background = color;
}

window.addEventListener("load",function() { changeBackground('black') });

export default Home;