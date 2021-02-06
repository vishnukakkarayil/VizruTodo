import React from 'react';
import TodoItems from './TodoItems'
import TodoInput from './TodoInput'
import TodoSelectedItem from './TodoSelectedItem'
import './TodoStyle.css'

const Todo = () => {
    return (
        <div className="container">
            <TodoItems />
            <TodoInput />
            <TodoSelectedItem />
        </div>
    );
};

export default Todo;