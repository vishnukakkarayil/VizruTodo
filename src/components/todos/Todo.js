import React from 'react';
import TodoItems from './TodoItems'
import TodoSelectedItem from './TodoSelectedItem'
import './TodoStyle.css'

const Todo = () => {
    return (
        <div className="container">
            <TodoItems />
            {/* <TodoSelectedItem /> */}
        </div>
    );
};

export default Todo;