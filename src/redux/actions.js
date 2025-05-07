// export const INCREMENT = "INCREMENT";
// export const DECREMENT = "DECREMENT";

// export const increment = () => ({ type: INCREMENT });
// export const decrement = () => ({ type: DECREMENT });

// trang Home
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

//trang About
export const ADD_JOB = 'ADD_JOB';
export const DELETE_JOB = 'DELETE_JOB';

//trang Todo
export const ADD_TODO = 'ADD_TODO';
export const SET_SEARCH_FILTER = 'SET_SEARCH_FILTER';

export const SET_STATUS_FILTER = 'SET_STATUS_FILTER';
export const SET_PRIORITY_FILTER = 'SET_PRIORITY_FILTER';

// trang Home
export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
});

export const deleteUser = (userId) => ({
    type: DELETE_USER,
    payload: userId,
});

//trang about 
export const addJob = (job) => ({
    type: ADD_JOB,
    payload: job,
})

export const deleteJob = (jobId) => ({
    type: DELETE_JOB,
    payload: jobId,
})

// trang todo
export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
})
export const setSearchFilter = (searchText) => ({
    type: SET_SEARCH_FILTER,
    payload: searchText,
});

export const setStatusFilter = (status) => ({
    type: SET_STATUS_FILTER,
    payload: status,
});

export const setPriorityFilter = (priorities) => ({
    type: SET_PRIORITY_FILTER,
    payload: priorities,
});




