import React from 'react'
import {Link} from 'react-router-dom'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components'
import './Footer.css'
import { FaFacebook, FaFacebookF } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import facebook from './facebookLogoGray.jpeg';
import twitter from './twitterLogoGray.jpeg';
import insta from './instaLogoGray.jpeg';
import pinterest from './pinterestLogoWhite.jpeg';
//import logopic from '../assets/sociallogo.png'

const footer = () => {
  return (
   <div className = "main-footer">
   <div className = "container">
   {/* <div classNAme = "row"> */}
   <Stack direction="horizontal" gap={3}>
    {/*column 1*/}
    <div className = "column2">
      <h4 className = "column2h">Hack NC 2022</h4>
      <p>Hamza Ishaque, Dhruv Kaushal, Aadit Metha, Adi Uchil</p>
      <br></br>
      {/*<img src = {logopic} width = "750"></img>*/}
    </div>
    <div className = "column1">
      <h3 className = "column1h">We're on a mission to</h3>
      <p>help students succeed in their daily lives by<br></br>bringing ingenuinty and simplicity through<br></br>  text alerts of whats important to them.</p>
    
      
    </div>

    </Stack>
   {/* </div> */}
    <div className = "footer-bottom">
      
    </div>
    </div>
    <p className = "sociallogos">
      {/*<img src = {facebook} width = "50"></img>
      <img src = {twitter} width = "50"></img>
      <img src = {insta} width = "50"></img>
      <img src = {pinterest} width = "50"></img>*/}
    </p>
    <p className = "copyright">
        &copy;{new Date().getFullYear} GYST - All Rights Reservered
        <br></br><br></br>
        <img src = {facebook} width = "60"></img>
        <img src = {twitter} width = "60"></img>
        <img src = {insta} width = "60"></img>
        <img src = {pinterest} width = "60"></img>
      </p>
   </div>
  );
}

export default footer

