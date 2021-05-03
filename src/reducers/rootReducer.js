import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import ticketsReducer from './ticketsReducer';
import orderReducer from "./orderReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    ticket: ticketsReducer,
    order: orderReducer
});
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     trace: true,
//     traceLimit: 25,
// }) || composeWithDevTools;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));