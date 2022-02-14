import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';
import tomato from '../assets/tomato.png'

const Header = ({goHome}) => {
return(
    <div className="header">
      <img className="tomato" src={tomato} />
      <h1 className="title">Rancid Tomatillos</h1>
      <img className="tomato" src={tomato} />
      <Link to="/">
      <button onClick={goHome} className="home-button">Home</button>
      </Link>

    </div>
)
}




export default Header