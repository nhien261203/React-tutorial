import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { jobReducer } from "./reducers/jobReducer";
import { todoReducer } from "./reducers/todoReducer";

const rootReducer = combineReducers({
    user: userReducer,
    job: jobReducer,
    todo: todoReducer,
    
})
export const store = createStore(rootReducer);
