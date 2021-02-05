import React, {useEffect, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { TodoList, todoComplete, addItemToTodo, editItem } from '../../redux/action'
const TodoItems = () => {
    const dispatch = useDispatch()

    const [ showField, setShowField ] = useState(false)
    // const [ updateTodoItem, setUpdateTodoItem ] = useState(false)
    const [inputTodo, setInputTodo ] = useState([])


    useEffect(()=>{
        dispatch(TodoList())
    },[])

    const setItemComplete =(id)=>{
        dispatch(todoComplete(id))
    }

    const showFieldToAddItem = () => setShowField(true)

    const inputItemToTodo = (e) => {
        setInputTodo({...inputTodo, [e.target.name]:e.target.value})
    }

    const addToTodoList = () => dispatch(addItemToTodo(inputTodo))

    const editTodoItem = (uicompleteId) =>{
        dispatch(editItem(uicompleteId))
        setShowField(true)
    } 

    const updateTodoItems = (id) => {
        console.log(id)
    }
    
    const todoItems = useSelector(state=>state.todoReducer.todoData)
    const itemToBeEdit = useSelector(state => state.todoEditReducer.editData)
    console.log(itemToBeEdit)
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
                                    <p>{uncompletedItem.title}</p>
                                    {/* <input type="text"
                                    className=""
                                    name="todoItem"
                                    value={ updateTodoItem ? inputTodo.todoItem : uncompletedItem.title}
                                    readOnly = { updateTodoItem ? '' :'readOnly' }
                                    onChange = {updateTodoItem ? inputItemToTodo : null}
                                     ></input> */}
                                </div>
                                <button onClick={()=>editTodoItem(uncompletedItem.id) }>edit</button>
                            </div>
                        </div>
                    )
                })
                 : <p>No Item</p>
            }
           

           <div className="col-md-12">
               <div className="d-flex align-items-center pt-4 pb-5" style={{background:'#fff'}}>
                   <input type="checkbox" className="itemCheck mr-3"></input>
                   <p className="" onClick={()=>showFieldToAddItem()}>Add Task</p>
                   <div className={ showField ? "d-flex" : "d-none" }>
                        <input type="text" name="todoItem" value={showField ?itemToBeEdit.title : inputTodo.todoItem || ''} onChange={inputItemToTodo}></input>
                        <button onClick={showField ? () => updateTodoItems(itemToBeEdit.id) : addToTodoList}>{showField ? 'Update' : 'Add Todo' }</button>
                    </div>
                   
               </div>
           </div>
           {/* <div className="row"> */}
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
            
        // </div>
    );
};

export default TodoItems;