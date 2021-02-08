import axios from 'axios'
import { v4 as uuid } from 'uuid'
export const TodoList = () =>
    (dispatch, getState) => {
        const data = new FormData()
        data.append('Type', 'Getlist')

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            const todoJson = JSON.parse(this.responseText)
            dispatch({ type: 'TODO_DATAS',payload:todoJson[0].Body })
        }
        });
        xhr.open("POST", "https://quality.vizru.com/workflow.trigger/6012a83e56e22e19105ea8fc");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.send(data);
    }

export const todoComplete = (completedItem) =>

    (dispatch, getState) => {
        
        const allTodoItems = getState().todoReducer.todoData
        const updateData = allTodoItems.find(allTodoItem => allTodoItem.rowID === completedItem.rowID)
        if (updateData) {
            const currentIndex = allTodoItems.findIndex(allTodoItem => allTodoItem.rowID === completedItem.rowID)
            allTodoItems.splice(currentIndex, 1, completedItem)
            const updatedItems = [...allTodoItems]
            
            dispatch({ type: 'ADD_TO_TODO', payload: updatedItems })
        }

    }

export const addItemToTodo = (getTodoItem) =>
    (dispatch, getState) => {
        const allTodoItems = getState().todoReducer.todoData
        const addTodo = {
            "Status": "Pending",
            "rowID": uuid(),
            "Title": getTodoItem,
        }
        allTodoItems.push(addTodo)

        const updatedData = [...allTodoItems]
        dispatch({ type: 'ADD_TO_TODO', payload: updatedData })

    }

// export const editItem = (id) => 
// (dispatch,getState)=>{
//     const allTodoItems = getState().todoReducer.todoData
//     const updateData = allTodoItems.find(allTodoItem => allTodoItem.id === id)
//     if(updateData){
//         dispatch({type:'EDIT_TODO_ITEM',payload:updateData})
//     }

// }

export const updateTodos = (id) =>
    (dispatch, getState) => {
        console.log(id + 'sdfsdf')
    }


