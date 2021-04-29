const SET_ORDERS = "SET_ORDERS";
const ADD_ORDER =  "ADD_ORDER";
const RESET_ORDERS = "RESET_ORDERS";
const SET_FIND_ORDERS = "SET_FIND_ORDERS";
const ADD_FIND_ORDERS = "ADD_FIND_ORDERS";
const SET_CURRENT_ORDER = "SET_CURRENT_ORDER"
const SET_CURRENT_CUSTOMER = "SET_CURRENT_CUSTOMER";
const SET_CURRENT_FILES = "SET_CURRENT_FILES";
const SET_CURRENT_OFFER = "SET_CURRENT_OFFER";
const SET_RESPONDS = "SET_RESPONDS";
const SET_CURRENT_RESPOND = "SET_CURRENT_RESPOND";
const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_INPUT_MESSAGE = 'ADD_INPUT_MESSAGE';
const SET_MESSAGE = "SET_MESSAGE";
const NO_HAS_MORE_MESSAGES = "NO_HAS_MORE_MESSAGES";

const defaultState = {
    orders: [],
    findOrders: [],
    currentOrder: {},
    currentCustomer: {},
    currentFiles: [],
    currentOffer: {},
    responds: [],
    currentRespond: {},
    messages: [],
    hasMoreMessages: true
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
        case RESET_ORDERS: 
            return{
                ...state,
                orders: [...action.payload]
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
        case SET_RESPONDS:
            return{
                ...state,
                responds: action.payload
            }
        case SET_CURRENT_RESPOND: 
            return{
                ...state,
                currentRespond: action.payload
            }
        case SET_MESSAGE: 
            return{
                ...state,
                messages: action.payload
            }
        case ADD_MESSAGE:
            return{
                ...state,
                messages: [...state.messages, ...action.payload]
            }
        case ADD_INPUT_MESSAGE:
            return{
                ...state,
                messages: [...action.payload, ...state.messages]
            }
        case NO_HAS_MORE_MESSAGES:
            return{
                ...state,
                hasMoreMessages: action.payload
            }
        default: 
            return state;
    }
}

export const setOrders = orders => ({type: SET_ORDERS, payload: orders});
export const addOrder = order => ({type: ADD_ORDER, payload: [order]});
export const resetOrders = orders => ({type: RESET_ORDERS, payload: orders});
export const setFindOrders = orders => ({type: SET_FIND_ORDERS, payload: orders});
export const addFindOrders = orders => ({type: ADD_FIND_ORDERS, payload: orders});
export const setCurrentOrder = order => ({type: SET_CURRENT_ORDER, payload: order});
export const setCurrentCustomer = customer => ({type: SET_CURRENT_CUSTOMER, payload: customer});
export const setCurrentFiles = files => ({type: SET_CURRENT_FILES, payload: files});
export const setCurrentOffer = offer => ({type: SET_CURRENT_OFFER, payload: offer});
export const setResponds = responds => ({type: SET_RESPONDS, payload: responds});
export const setCurrentRespond = respond => ({type: SET_CURRENT_RESPOND, payload: respond});
export const addMessage = message => ({type:ADD_MESSAGE, payload: message});
export const addInputMessage = message => ({type: ADD_INPUT_MESSAGE, payload: message});
export const setMessage = message => ({type:SET_MESSAGE, payload: message});
export const changeHasMoreMessages = hasMore => ({type: NO_HAS_MORE_MESSAGES, payload: hasMore});