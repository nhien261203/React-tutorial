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
    type:ADD_JOB,
    payload:job,
})

export const deleteJob = (jobId) => ({
    type: DELETE_JOB,
    payload:jobId,
})

