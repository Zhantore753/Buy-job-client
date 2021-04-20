import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import ticketsReducer from './ticketsReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    ticket: ticketsReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));