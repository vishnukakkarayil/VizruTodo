const initialState = {
    todoData:[]
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TODO_DATAS':
          const usingObjectAssign = JSON.parse(action.payload);
            return{
                ...state,
                todoData: usingObjectAssign
            }   
                
        case 'COMPLETE_TODO':
            return{
                ...state,
                todoData:action.payload
            }
        case 'ADD_TO_TODO':
          return{
            ...state,
            todoData:action.payload
          }
        default:
            return state
    }
}
export default TodoReducer