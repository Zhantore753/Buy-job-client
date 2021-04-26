const SET_ORDERS = "SET_ORDERS";
const ADD_ORDER =  "ADD_ORDER";
const SET_FIND_ORDERS = "SET_FIND_ORDERS";
const ADD_FIND_ORDERS = "ADD_FIND_ORDERS";
const SET_CURRENT_ORDER = "SET_CURRENT_ORDER"
const SET_CURRENT_CUSTOMER = "SET_CURRENT_CUSTOMER";
const SET_CURRENT_FILES = "SET_CURRENT_FILES";
const SET_CURRENT_OFFER = "SET_CURRENT_OFFER"

const defaultState = {
    orders: [],
    findOrders: [],
    currentOrder: {},
    currentCustomer: {},
    currentFiles: [],
    currentOffer: 0,
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
        case SET_CURRENT_ORDER:
            return{
                ...state,
                currentOrder: action.payload
            }
        case SET_CURRENT_CUSTOMER:
            return{
                ...state,
                currentCustomer: action.payload
            }
        case SET_CURRENT_FILES:
            return{
                ...state,
                currentFiles: action.payload
            }
        case SET_CURRENT_OFFER: 
            return{
                ...state,
                currentOffer: action.payload
            }
        default:
            return state;
    }
}

export const setOrders = orders => ({type: SET_ORDERS, payload: orders});
export const addOrder = order => ({type: ADD_ORDER, payload: [order]});
export const setFindOrders = orders => ({type: SET_FIND_ORDERS, payload: orders});
export const addFindOrders = orders => ({type: ADD_FIND_ORDERS, payload: orders});
export const setCurrentOrder = order => ({type: SET_CURRENT_ORDER, payload: order});
export const setCurrentCustomer = customer => ({type: SET_CURRENT_CUSTOMER, payload: customer});
export const setCurrentFiles = files => ({type: SET_CURRENT_FILES, payload: files});
export const setCurrentOffer = offer => ({type: SET_CURRENT_OFFER, payload: offer});