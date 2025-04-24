import { createStore, combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { jobReducer } from "./jobReducer";

const rootReducer = combineReducers({
    user: userReducer,
    job: jobReducer,
    
})
export const store = createStore(rootReducer);
