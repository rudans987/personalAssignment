
// Action;
const CREATE = "todo/CREATE";
const UPDATE = "todo/UPDATE";
const DELETE = "todo/DELETE";

const initialState = {
    list: [
      {
        id: 0,
        title: "테스트제목",
        body: "테스트내용",
        isDone: true,
      },
      {
        id: 1,
        title: "테스트제목2",
        body: "테스트내용2",
        isDone: false,
      },
    ]
  };

  
// Action Creators
export function createTodo(todo) {

  return { type: CREATE, todo };
}

export function updateTodo(todo_id) {
  return { type: UPDATE, todo_id };
}

export function deleteTodo(todo_id) {
  return { type: DELETE, todo_id };
}

// 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "todo/CREATE": {
      const new_todo_list = [...state.list, action.todo];
      console.log(new_todo_list);
      return { ...state, list: new_todo_list };
    }

      case "todo/UPDATE": {
        const new_todo_list = state.list.map((cur) => {
           if(parseInt(action.todo_id) === cur.id){
              return{...cur, isDone: !cur.isDone };
            }else{
              return cur;
            }
        })
        return {list: new_todo_list}
    }

    case "todo/DELETE": {
      const new_todo_list = state.list.filter((cur) => {

        console.log(parseInt(action.todo_id) !== cur.id, parseInt(action.todo_id), cur.id)
        return parseInt(action.todo_id) !== cur.id;
      });

      return { list: new_todo_list };
    }

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default reducer;








// import {createSlice, configureStore} from '@reduxjs/toolkit';
// const todos = createSlice({
//   name: 'todos',
//   initialState: {
//         list: [
//           {
//             id: 0,
//             title: "테스트제목",
//             body: "테스트내용",
//             isDone: true,
//           },
//           {
//             id: 1,
//             title: "테스트제목2",
//             body: "테스트내용2",
//             isDone: false,
//           },
//         ]
//       },
//   reducers: {
//       createTodo: (state, action) => {
//           state.list.push(action.payload);
//       },
//       updateTodo: (state, action) => {
//         state.list.map(cur => {
//                      if(cur.id === parseInt(action.payload.id)) {                      
//                       cur.isDone= !action.payload.isDone;
//                      }
//                      }
//         )}
//       ,
//       deleteTodo: (state, action) => {
//      state.list= state.list.filter(cur=>action.payload !== cur.id)
//       }
//   }   
// });

// const store = configureStore({reducer: todos.reducer});

// export const{createTodo, updateTodo, deleteTodo} = todos.actions;

// export default store;