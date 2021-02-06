const initialState = {
    todoData:[
        {
          "status": false,
          "id": 1,
          "title": "accusamus"
        },
        {
          "status": true,
          "id": 2,
          "title": "reprehenderit"
        },
        {
          "status": false,
          "id": 3,
          "title": "officia porro"
        },
        {
          "status": false,
          "id": 4,
          "title": "culpa odio esse"
        },
        {
          "status": true,
          "id": 5,
          "title": "natus nisi"
        },
        {
          "status": true,
          "id": 6,
          "title": "accusamus ea"
        },
        {
          "status": true,
          "id": 7,
          "title": "officia delectus"
        },
        {
          "status": false,
          "id": 8,
          "title": "aut porro officiis"
        },
        {
          "status": false,
          "id": 9,
          "title": "qui eius qui"
        }
      ]
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TODO_DATAS':
            return{
                ...state
            }       
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