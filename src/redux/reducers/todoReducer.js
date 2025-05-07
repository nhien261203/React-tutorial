import { ADD_TODO, SET_SEARCH_FILTER, SET_STATUS_FILTER, SET_PRIORITY_FILTER } from "../actions";

const initialState = {
    filters: {
        search: '',
        status: 'All',
        priority: [],
    },
    todos: [
        { id: 1, name: 'Learn JavaScript', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn Redux', completed: false, priority: 'High' },
        { id: 3, name: 'Learn C', completed: true, priority: 'Low' },
    ]
}
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        case SET_SEARCH_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload, // update search filter
                }
            };
        case SET_STATUS_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload,
                }
            };

        case SET_PRIORITY_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    priority: action.payload,
                }
            };


        default:
            return state;
    }
}