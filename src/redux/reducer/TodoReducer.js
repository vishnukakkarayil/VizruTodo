const initialState = {
    todoData:[
      {Description: "Test data",
      Status: "Pending",
      Title: "Test",
      rowID: "bf9d9fd69aeb18e6c74f7d2751b59e9c"},
      {Description: "",
      Status: "ssss",
      Title: "qwer",
      rowID: "34e9a9d9-752e-4375-b2e8-d74dbe451a08"},
      {Description: "Test Description",
      Status: "oilaH",
      Title: "My Test Title",
      rowID: "6a712b14-066c-499f-8b7e-52cda531a0ad"},
      {Description: "Test Description",
      Status: "Pending",
      Title: "My Test Title",
      rowID: "89b7f30e-b638-49bf-aff8-a92e0ac0236d"},
      {Description: "Test Description",
      Status: "Pending",
      Title: "My Test Title",
      rowID: "bf33fdee-34dc-4b30-83a0-8a9b3002f91c"},
      {Description: "Test Description",
      Status: "Pending",
      Title: "My Test Title",
      rowID: "815ff33b-ba7a-456f-8045-34c1ed12556d"},
      {Description: "Test Description",
      Status: "Pending",
      Title: "My Test Title",
      rowID: "798d0dee-abe2-4dde-8ad5-b96ff77b20b9"}
      ]
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TODO_DATAS':
          console.log(action.payload)
            // return{
            //     ...state,
            //     // todoData: action.payload
            // }       
        case 'COMPLETE_TODO':
            // console.log(action.payload)
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