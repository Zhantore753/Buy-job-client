const SET_TICKETS = "SET_TICKETS";
const ADD_TICKET =  "ADD_TICKET";

const defaultState = {
    tickets: []
};

export default function userReducer(state = defaultState, action){
    switch(action.type){
        case SET_TICKETS:
            return{
                ...state,
                tickets: action.payload
            }
        default:
            return state;
    }
}

export const setTickets = user => ({type: SET_TICKETS, payload: user});