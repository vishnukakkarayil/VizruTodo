import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { addItemToTodo } from '../../redux/action'

const TodoInput = () => {
    const dispatch = useDispatch()

    const [inputTodo, setInputTodo ] = useState()
    console.log(inputTodo)
    const [ showField, setShowField ] = useState(false)

    // const showFieldToAddItem = () => setShowField(true)

    const addToTodoList = () => dispatch(addItemToTodo(inputTodo))


    return (
        <div className="row">
        
            <div className="col-md-12">
                <div className="d-flex align-items-center pt-4 pb-5" style={{background:'#fff'}}>
                    <input type="checkbox" className="itemCheck mr-3"></input>
                    <p className="" onClick={()=>setShowField(true)}>Add Task</p>
                    <div className={ showField ? "d-flex" : "d-none" }>
                        <input type="text" name="todoItem" value={inputTodo} onChange={e=>setInputTodo(e.target.value)}></input>
                        <button onClick={addToTodoList}>Add Todo</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default TodoInput;