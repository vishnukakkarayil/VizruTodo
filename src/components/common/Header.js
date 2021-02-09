import React, {useState} from 'react';
import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/images/Logo.png'
import './CommonStyle.css'

const Header = (props) => {
    return (
      <>
        <Navbar style={{background:'#d34a44'}}>
          <Navbar.Brand href="#home" style={{color:'#fff'}}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Vizru Task
          </Navbar.Brand>
          <div class="form-group has-search mb-0" >
          <span class="form-control-feedback">
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
          </span>

          <input type="text" class="search-box" name="search" placeholder="Search" value={props.searchTodo} onChange={(e)=>props.todoSearch(e)} />
        </div>
      </Navbar>
      </>
    );
};

export default Header;