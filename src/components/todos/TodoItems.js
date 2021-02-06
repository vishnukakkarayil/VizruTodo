import React, {useEffect, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { TodoList, todoComplete, updateTodos } from '../../redux/action'
const TodoItems = () => {
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [todos, setTodos] = useState()

    useEffect(()=>{
        dispatch(TodoList())
    },[])

    const setItemComplete =(id)=>{
        dispatch(todoComplete(id))
    }

    const editTodoItem = (id,title) =>{
        setEditable(!editable)
        setTodos(title)
        // dispatch(editItem(uicompleteId))
    } 

    const updateTodos = (id) => {
        console.log(id)
    }

    const todoItems = useSelector(state=>state.todoReducer.todoData)
    console.log(todoItems)
    // const itemToBeEdit = useSelector(state => state.todoEditReducer.editData)
    // console.log(itemToBeEdit)
    return (
        <div className="row">
            {
                todoItems != undefined ?                
                todoItems.filter(uncompleted =>uncompleted.status !== false)
                .map(uncompletedItem =>{
                    return(
                        <div className="col-md-12" key={uncompletedItem.id}>
                            <div className="todo-items d-flex align-items-center pt-3 pb-3 border-bottom">
                                <input type="checkbox" className="itemCheck mr-3" onClick={() => setItemComplete(uncompletedItem.id)}></input>
                                <div>
                                    {
                                        editable ? <input type="text"
                                        className="form-control"
                                        name="todoItem"
                                        value={todos}
                                        onChange={(e)=>setTodos(e.target.value)}></input> :
                                        <p>{uncompletedItem.title}</p>
                                    }
                                    
                                    {/* <p>{uncompletedItem.title}</p> */}
                                </div>
                                <button onClick={editable ? ()=>dispatch(updateTodos(uncompletedItem.id)) : () => editTodoItem(uncompletedItem.id,uncompletedItem.title) }>{ editable ? 'Update' : 'edit' }</button>
                            </div>
                        </div>
                    )
                })
                 : <p>No Item</p>
            }
            
            </div>

    );
};

export default TodoItems;