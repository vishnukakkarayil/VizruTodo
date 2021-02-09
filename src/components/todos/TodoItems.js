import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons'
import { TodoList, todoComplete, updateTodos } from '../../redux/action'
const TodoItems = ( props ) => {
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [todos, setTodos] = useState(null)
    const [selectedTodo, setSelected] = useState(null)

    useEffect(() => {
        dispatch(TodoList())
    }, [dispatch])

    const setItemComplete = (item) => {
        const updatedItem = {
            ...item,
            Status: "Completed"
        }
        dispatch(todoComplete(updatedItem))
        setEditable(false)
        setTodos(null)
        setSelected(null)
    }

    const editTodoItem = (id, title) => {
        setEditable(true)
        setTodos(title)
        setSelected(id)
    }

    const handleUpdateTodo = (uncompleted) => {
        const updatedList = {
            ...uncompleted,
            "Status": uncompleted.Status,
            "Title": todos,
            "rowID": selectedTodo,
            
        }
        dispatch(todoComplete(updatedList))
        setEditable(false)
        setTodos(null)
        setSelected(null)

    }
    let itemsPending = []
    const todoDatas = useSelector(state => state.todoReducer.todoData)
    const searchData = useSelector(state => state.searchTodoReducer.searchItem)
    searchData.length > 0 || props.searchedItem.length > 0 ?
    itemsPending = searchData.filter(uncompleted => uncompleted.Status === "Pending")
    :itemsPending = todoDatas.filter(uncompleted => uncompleted.Status === "Pending")
    
    return (
        <div className="row">
            <div className="todoCompleteWrap">
                {
                    itemsPending.length > 0 ?
                    itemsPending.map(uncompletedItem => {
                                return (
                                    <>{
                                        uncompletedItem ?
                                            <div className="col-md-12" key={uncompletedItem.rowID}>
                                                <div className={selectedTodo === uncompletedItem.rowID && editable ? 'todo-items d-flex align-items-center border-bottom pl-4' : 'todo-items d-flex align-items-center border-bottom'}>
                                                    {selectedTodo === uncompletedItem.rowID && editable ? null :
                                                        // <input type="checkbox" className="itemCheck mr-3" onClick={() => setItemComplete(uncompletedItem)}></input>}
                                                        <div class="round-checkbox">
                                                            <input type="checkbox" id="roundedCheckbox" className="itemCheck mr-3" />
                                                            <label for="roundedCheckbox" onClick={() => setItemComplete(uncompletedItem)}></label>
                                                        </div>}

                                                    <div>
                                                        {
                                                            selectedTodo === uncompletedItem.rowID && editable ? <input type="text"
                                                                className="form-control"
                                                                name="todoItem"
                                                                value={todos}
                                                                onChange={(e) => setTodos(e.target.value)}></input> :
                                                                <p>{uncompletedItem.Title}</p>
                                                        }
                                                    </div>
                                                    <div className="ml-auto pr-4">
                                                        {selectedTodo === uncompletedItem.rowID && editable ? <FontAwesomeIcon className="todoIcon" icon={faSave} onClick={selectedTodo === uncompletedItem.rowID && editable
                                                            ? () => handleUpdateTodo(uncompletedItem) : null} /> : <FontAwesomeIcon className="todoIcon" icon={faEdit} onClick={selectedTodo === uncompletedItem.rowID && editable
                                                                ? null : () => editTodoItem(uncompletedItem.rowID, uncompletedItem.Title)} />}
                                                    </div>
                                                </div>
                                            </div>
                                            : <p  style={{color:'#949494',marginLeft: '17px'}}>No Item</p>
                                    }
                                    </>

                                )
                            })
                        : <p  style={{color:'#949494',marginLeft: '17px'}}>No Item</p>
                }
            </div>
        </div>

    );
};

export default TodoItems;