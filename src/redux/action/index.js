import axios from 'axios'
export const TodoList = () =>
(dispatch, getState) => {
    dispatch({ type: 'TODO_DATAS' })
    axios.post('https://quality.vizru.com/workflow.trigger/6012a83e56e22e19105ea8fc')
    .then(todos => console.log(todos))
    .catch(err=>console.log(err))

    // fetch('https://quality.vizru.com/workflow.trigger/6012a83e56e22e19105ea8fc')
    //             .then(res => res.json())
    //             .then(data => console.log(data))
                
    
    // console.log('dfdfdfd')
}

export const todoComplete =(id)=>
(dispatch,getState) => {
    const allTodoItems = getState().todoReducer.todoData
    const updateData = allTodoItems.find(allTodoItem => allTodoItem.id === id)
    if(updateData){
        updateData.status = false
        const currentIndex = allTodoItems.findIndex(allTodoItem => allTodoItem.id === id)
        allTodoItems.splice(currentIndex,1,updateData)
        dispatch({type:'COMPLETE_TODO',payload:allTodoItems})
        // console.log(allTodoItems)
    }

}

export const addItemToTodo = (getTodoItem) => 
(dispatch,getState)=>{
    // console.log(getTodoItem)
    const allTodoItems = getState().todoReducer.todoData
   let todoId = allTodoItems.length
    const addTodo = {
        "status": true,
        "id": ++todoId,
        "title": getTodoItem,
      }
      
      allTodoItems.push(addTodo)
      dispatch({type:'ADD_TO_TODO',payload:allTodoItems})
      
}

// export const editItem = (id) => 
// (dispatch,getState)=>{
//     const allTodoItems = getState().todoReducer.todoData
//     const updateData = allTodoItems.find(allTodoItem => allTodoItem.id === id)
//     if(updateData){
//         dispatch({type:'EDIT_TODO_ITEM',payload:updateData})
//     }

// }

// export const updateTodos = (id) =>
// (dispatch,getState) =>{
//     console.log(id+'sdfsdf')
// }


