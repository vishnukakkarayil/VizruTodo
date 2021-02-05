import React from 'react';
import { Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar style={{background:'#d34a44'}}>
        <Navbar.Brand href="#home" style={{color:'#fff'}}>
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
    );
};

export default Header;