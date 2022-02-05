import React from 'react';
import App from '../App';
import '../CSS/Header.css';


const Header = ({goHome}) => {
return(
  <div className="header">
  <h1 className="title">Rancid Tomatillos</h1>
  <button onClick={() => goHome()} className="home-button">Home</button>
  </div>
)
}




export default Header