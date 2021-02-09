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
                dispatch({ type: 'TODO_DATAS', payload: todoJson[0].Body })
            }
        });
        xhr.open("POST", "https://quality.vizru.com/workflow.trigger/6012a83e56e22e19105ea8fc");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.send(data);
    }

export const todoComplete = (completedItem) =>

    (dispatch, getState) => {
        const updateData = {
            ...completedItem,
            "Type": "Insert"
        }
        const newFormData = new FormData()

        Object.keys(updateData).forEach(key => {
            newFormData.append(key, updateData[key])
        })
        const allTodoItems = getState().todoReducer.todoData

        axios.post('https://quality.vizru.com/workflow.trigger/6012a83e56e22e19105ea8fc', newFormData)
            .then(res => {
                const updateData = allTodoItems.find(allTodoItem => allTodoItem.rowID === completedItem.rowID)
                if (updateData) {
                    const currentIndex = allTodoItems.findIndex(allTodoItem => allTodoItem.rowID === completedItem.rowID)
                    allTodoItems.splice(currentIndex, 1, completedItem)
                    const updatedItems = [...allTodoItems]

                    dispatch({ type: 'ADD_TO_TODO', payload: updatedItems })
                }
            }).catch(err => {
                console.log({ err })
            })


    }

export const addItemToTodo = (getTodoItem) =>
    (dispatch, getState) => {
        const allTodoItems = getState().todoReducer.todoData
        const newFormData = new FormData()
        const addTodo = {
            "Status": "Pending",
            "Title": getTodoItem,
            "Description": 'Test Description',
            "Type": "Insert"
        }

        Object.keys(addTodo).forEach(key => {
            newFormData.append(key, addTodo[key])
        })


        axios.post('https://quality.vizru.com/workflow.trigger/6012a83e56e22e19105ea8fc', newFormData)
            .then(res => {
                allTodoItems.push(addTodo)
                const updatedData = [...allTodoItems]
                dispatch({ type: 'ADD_TO_TODO', payload: updatedData })
            }).catch(err => {
                console.log({ err })
            })

    }

export const searchItems = (itemToSearch) =>
(dispatch,getState)=>{
    const allTodoItems = getState().todoReducer.todoData

}


