const SET_ORDERS = "SET_ORDERS";
const ADD_ORDER =  "ADD_ORDER";

const defaultState = {
    orders: []
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
        default:
            return state;
    }
}

export const setOrders = orders => ({type: SET_ORDERS, payload: orders});
export const addOrder = order => ({type: ADD_ORDER, payload: order});