import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { addItemToTodo } from '../../redux/action'

const TodoInput = () => {
    const dispatch = useDispatch()

    const [inputTodo, setInputTodo] = useState()
    const [showField, setShowField] = useState(false)

    // const showFieldToAddItem = () => setShowField(true)

    const addToTodoList = () => dispatch(addItemToTodo(inputTodo))


    return (
        <div className="row">

            <div className="col-md-12">
                <div className="d-flex align-items-center pt-4 pb-5" style={{ background: '#fff' }}>
                    {/* <input type="checkbox" className="itemCheck mr-3"></input> */}
                    <FontAwesomeIcon className="todoAddIcon mr-3" icon={faPlus} />
                    <p onClick={() => setShowField(true)} className="todoAdd pr-4">Add Task</p>
                    <div className={showField ? "d-flex" : "d-none"}>
                        <input type="text" className="form-control mr-4" name="todoItem" value={inputTodo} onChange={e => setInputTodo(e.target.value)}></input>
                        <button onClick={addToTodoList} className="addItemBtn">Add</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TodoInput;