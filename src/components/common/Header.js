import React, {useState} from 'react';
import { Navbar } from 'react-bootstrap'
import _ from 'lodash'
import {useSelector, useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/images/Logo.png'
import { searchItems } from '../../redux/action'
import './CommonStyle.css'

const Header = () => {
  const dispatch = useDispatch()
  
  const [searchTodo, setSearchTodo] = useState(null)

  const todoDatas = useSelector(state => state.todoReducer.todoData)

  const todoSearch = (e) => {
    setSearchTodo(e.target.value)
    e.preventDefault()
      let val = e.target.value
      
      const re = new RegExp(_.escapeRegExp(val), 'i')
      const checkFrom = todoDatas
      
      const isMatch = (checkFrom) => re.test(checkFrom.Title)
      
      const results = _.filter(checkFrom, isMatch)
      // setCopyArticle({
      //   ...copyArticle,
      //   results,
      // })



    
    dispatch(searchItems(results))

    
  }
  // console.log(search)
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

          <input type="text" class="search-box" name="search" placeholder="Search" value={searchTodo} onChange={(e)=>todoSearch(e)} />
        </div>
      </Navbar>
      </>
    );
};

export default Header;