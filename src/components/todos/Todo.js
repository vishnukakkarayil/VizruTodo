import React, {useState} from 'react';
import _ from 'lodash'
import {useSelector, useDispatch} from 'react-redux'
import TodoItems from './TodoItems'
import TodoInput from './TodoInput'
import TodoSelectedItem from './TodoSelectedItem'
import Header from '../common/Header'
import { searchItems } from '../../redux/action'
import './TodoStyle.css'

const Todo = () => {
    const dispatch = useDispatch()
    const [searchTodo, setSearchTodo] = useState('')

    const todoDatas = useSelector(state => state.todoReducer.todoData)

    const todoSearch = (e) => {
        setSearchTodo(e.target.value)
        e.preventDefault()
          let val = e.target.value
          const re = new RegExp(_.escapeRegExp(val), 'i')
          const checkFrom = todoDatas
          
          const isMatch = (checkFrom) => re.test(checkFrom.Title)
          
          const results = _.filter(checkFrom, isMatch)
        
        dispatch(searchItems(results))
    
        
      }
    return (
        <>
        <Header searchTodo = {searchTodo} todoSearch = {todoSearch} />
        <div className="container">
            <TodoItems searchedItem = {searchTodo}/>
            <TodoInput />
            <TodoSelectedItem />
        </div>
        </>
    );
};

export default Todo;