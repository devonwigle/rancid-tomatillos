import React from 'react';
import '../CSS/Header.css';
import tomato from '../assets/tomato.png'

const Header = () => {
return(
    <div className="header">
      <h1 className="title"><img className="tomato" src={tomato} /> Rancid Tomatillos <img className="tomato" src={tomato} /></h1>
    </div>
)
}




export default Header