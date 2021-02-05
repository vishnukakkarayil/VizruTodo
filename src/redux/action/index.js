export const TodoList = () =>
(dispatch, getState) => {
    dispatch({ type: 'TODO_DATAS' })
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
    const allTodoItems = getState().todoReducer.todoData
    const addTodo = {
        "status": true,
        "id": ++allTodoItems.length,
        "title": getTodoItem.todoItem,
      }
const data = {...allTodoItems,addTodo}
console.log(data)
      dispatch({type:'ADD_TO_TODO',payload:addTodo})
}

export const editItem = (id) => 
(dispatch,getState)=>{
    const allTodoItems = getState().todoReducer.todoData
    const updateData = allTodoItems.find(allTodoItem => allTodoItem.id === id)
    if(updateData){
        dispatch({type:'EDIT_TODO_ITEM',payload:updateData})
    }

}

