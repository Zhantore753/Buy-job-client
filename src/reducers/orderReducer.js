const SET_ORDERS = "SET_ORDERS";
const ADD_ORDER =  "ADD_ORDER";
const SET_FIND_ORDERS = "SET_FIND_ORDERS";
const ADD_FIND_ORDERS = "ADD_FIND_ORDERS";

const defaultState = {
    orders: [],
    findOrders: []
};

export default function orderReducer(state = defaultState, action){
    switch(action.type){
        case SET_ORDERS:
            return{
                ...state,
                orders: [...state.orders, ...action.payload]
            }
        case ADD_ORDER: 
            return{
                ...state,
                orders: [...action.payload, ...state.orders]
            }
        case SET_FIND_ORDERS:
            return{
                ...state,
                findOrders: action.payload
            }
        case ADD_FIND_ORDERS:
            return{
                ...state,
                findOrders: [...state.findOrders, ...action.payload]
            }
        default:
            return state;
    }
}

export const setOrders = orders => ({type: SET_ORDERS, payload: orders});
export const addOrder = order => ({type: ADD_ORDER, payload: [order]});
export const setFindOrders = orders => ({type: SET_FIND_ORDERS, payload: orders});
export const addFindOrders = orders => ({type: ADD_FIND_ORDERS, payload: orders});