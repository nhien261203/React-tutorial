import { ADD_JOB, DELETE_JOB } from "./actions";

const initialState = {
    jobs: [
        { id: 1, title:'Dev', salary:500 },
        { id: 2, title: 'Tester', salary: 300 },
        { id: 3, title:'BA', salary:100 },
    ]
};


export const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_JOB':
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            };
        case 'DELETE_JOB': 
            return {
                ...state,
                jobs: state.jobs.filter( (job)=> job.id !== action.payload )
            }
        default: 
            return state;
    }
}