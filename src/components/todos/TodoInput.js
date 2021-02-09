import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { addItemToTodo } from '../../redux/action'

const TodoInput = () => {
    const dispatch = useDispatch()

    const [inputTodo, setInputTodo] = useState('')
    const [showField, setShowField] = useState(false)

    const addToTodoList = () => {
        dispatch(addItemToTodo(inputTodo))
        setInputTodo('')
    }


    return (
        <div className="row">

            <div className="col-md-12">
                <div className="d-flex align-items-center pt-3 pb-4" style={{ background: '#fff' }}>
                    <FontAwesomeIcon className="todoAddIcon mr-3" icon={faPlus} />
                    <p onClick={() => setShowField(true)} style={{cursor:'pointer'}} className="todoAdd pr-4">Add Task</p>
                    
                        <form className={showField ? "d-flex" : "d-none"}>
                        <input type="text" required className="form-control mr-4" placeholder="Todo" name="todoItem" value={inputTodo} onChange={e => setInputTodo(e.target.value)}></input>
                        <button onClick={addToTodoList} className="addItemBtn">Add</button>
                        </form>

                </div>
            </div>
        </div>
    );
};

export default TodoInput;