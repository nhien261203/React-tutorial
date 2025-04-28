import { ADD_TODO } from "../actions";
const initialState = {
    filters: {
        search: '',
        status: 'All',
        priority: [],
    },
    todos: [
        { id: 1, name: 'job A', completed: false, priority: 'Medium' },
        { id: 2, name: 'job B', completed: false, priority: 'High' },
        { id: 3, name: 'job C', completed: true, priority: 'Low' },
    ]
}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        default:
            return state;
    }
}