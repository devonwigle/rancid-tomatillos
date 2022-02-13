import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';
import tomato from '../assets/tomato.png'

const Header = ({goHome}) => {
return(
    <div className="header">
      <h1 className="title">Rancid Tomatillos <img className="tomato" src={tomato}/></h1>
      <Link to="/">
      <button onClick={() => goHome()} className="home-button">Home</button>
      </Link>

    </div>
)
}




export default Header