const initialState = {
    searchItem : []
}

const SearchTodoReducer = (state=initialState,action) => {
    switch(action.type){
        case 'SEARCH_FOR_TODO':
            return{
                ...state,
                searchItem:action.payload
            }
        default:
            return state
    }
}

export default SearchTodoReducer