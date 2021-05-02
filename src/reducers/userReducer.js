const SET_USER = "SET_USER";
const SET_EMAIL = "SET_EMAIL";
const LOGOUT =  "LOGOUT";
const SET_BALANCE = "SET_BALANCE";
const SET_SELECTED_USER = "SET_SELECTED_USER";
const SET_SELECTED_USER_ID = "SET_SELECTED_USER_ID";

const defaultState = {
    currentUser: {},
    isAuth: false,
    selectedUser: {},
    selectedUserId: ''
};

export default function userReducer(state = defaultState, action){
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return{
                ...state,
                currentUser: {},
                isAuth: false
            }
        case SET_EMAIL:
            state.currentUser.email = action.payload
            return state;
        case SET_BALANCE: 
            state.currentUser.balance = action.payload
            return state;
        case SET_SELECTED_USER:
            return{
                ...state,
                selectedUser: action.payload
            }
        case SET_SELECTED_USER_ID:
            return{
                ...state,
                selectedUserId: action.payload
            }
        default:
            return state;
    }
}

export const setUser = user => ({type: SET_USER, payload: user});
export const logout = () => ({type: LOGOUT});
export const setEmail = email => ({type: SET_EMAIL, payload: email});
export const setCurrentBalance = balance => ({type: SET_BALANCE, payload: balance});
export const setSelectedUser = user => ({type: SET_SELECTED_USER, payload: user});
export const setSelectedUserId = userId => ({type: SET_SELECTED_USER_ID, payload: userId});