import { combineReducers, createStore } from "redux";
import { UserReducer } from "./reducers/user.reducer";

const rootReducer = combineReducers({ userReducer: UserReducer });


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())