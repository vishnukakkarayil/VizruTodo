import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { TodoList, todoComplete } from '../../redux/action'

const TodoSelectedItem = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(TodoList())
    }, [])

    const handleCheckedItem = (item) => {
        const updatedItem = {
            ...item,
            Status: "Pending"
        }
        dispatch(todoComplete(updatedItem))
    }

    const todoItems = useSelector(state => state.todoReducer.todoData)


    return (
        <div className="row">
            <div className="todoCompleteWrap">
            {
                todoItems.length > 0 ?
                    todoItems.filter(completed => completed.Status === "Completed")
                        .map(completedItem => {
                            return (

                                <div className="col-md-12" key={completedItem.rowID}>
                                        
                                    <div className="todo-items d-flex align-items-center pt-3 pb-3 border-bottom">
                                        {/* <input type="checkbox" className="itemCheck mr-3" checked onChange={() => handleCheckedItem(completedItem)}></input> */}
                                        <div class="round">
                                            <input type="checkbox" id="checkbox" className="itemCheck mr-3" checked ></input>
                                            <label for="checkbox" onClick={() => handleCheckedItem(completedItem)}></label>
                                        </div>
                                        <div>
                                            <p className="selected-item">{completedItem.Title}</p>
                                        </div>

                                    </div>
                                </div>

                            )
                        }) :
                    <p>No Completed Items</p>
            }
        </div>
    </div>
    );
};

export default TodoSelectedItem;