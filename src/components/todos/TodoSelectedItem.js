import React, {useEffect, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { TodoList } from '../../redux/action'

const TodoSelectedItem = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(TodoList())
    },[])

    const todoItems = useSelector(state=>state.todoReducer.todoData)


    return (
        <div className="row">
        {
            todoItems != undefined ?
            todoItems.filter(completed =>completed.status === false)
            .map(completedItem =>{
                return(
                
                    <div className="col-md-12" key={completedItem.id}>
                        <div className="todo-items d-flex align-items-center pt-3 pb-3 border-bottom">
                            <input type="checkbox" className="itemCheck mr-3" checked></input>
                            <div>
                                    <p className="selected-item">{completedItem.title}</p>
                            </div>
                            
                        </div>
                    </div>
                
                )
            }) :
            <p>No Completed Items</p>
        }
        </div>
    );
};

export default TodoSelectedItem;