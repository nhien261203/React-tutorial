import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { jobReducer } from "./reducers/jobReducer";

const rootReducer = combineReducers({
    user: userReducer,
    job: jobReducer,
    
})
export const store = createStore(rootReducer);
