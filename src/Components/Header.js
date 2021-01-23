import React from 'react';
import logo from '../logo.svg';

const Header = ({titulo}) => (
    <h1><img src={logo} className="App-logo" alt="logo" /> {titulo} <img src={logo} className="App-logo" alt="logo" /></h1>
)



export default Header;
