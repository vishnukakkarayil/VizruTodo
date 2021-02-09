import { combineReducers } from 'redux'
import TodoReducer from './TodoReducer'
import SearchTodoReducer from './SearchReducer'

const RootReducer = combineReducers({
    todoReducer: TodoReducer,
    searchTodoReducer: SearchTodoReducer
})

export default RootReducer