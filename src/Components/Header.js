import React from 'react';
import App from '../App';
import '../CSS/Header.css';
import tomato from '../assets/tomato.png'

const Header = ({goHome}) => {
return(
  <div className="header">
  <h1 className="title">Rancid Tomatillos <img className="tomato" src={tomato}/></h1>
  <button onClick={() => goHome()} className="home-button">Home</button>
  </div>
)
}




export default Header