import { combineReducers } from 'redux'
import TodoReducer from './TodoReducer'
import TodoEditReducer from './TodoEditReducer'

const RootReducer = combineReducers({
    todoReducer : TodoReducer,
    // todoEditReducer : TodoEditReducer
})

export default RootReducer