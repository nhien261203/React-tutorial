// import { INCREMENT, DECREMENT } from "./actions";

// const initialState = {
//   count: 0,
// };



// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, count: state.count + 1 };
//     case DECREMENT:
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// };

import { ADD_USER, DELETE_USER } from "./actions";

const initialState = {
  users: [
    { id:1, name:'Do Van Nhien' },
    { id:2, name:'Minh Chau' },
    { id:3, name:'Eric' },
  ]
};

export const userReducer = (state= initialState, action) => {
  switch (action.type){
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case 'DELETE_USER' :
      return {
        ...state,
        users: state.users.filter(user=> user.id !== action.payload)
      };
    default:
      return state;
  };

}
