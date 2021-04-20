const SET_TICKETS = "SET_TICKETS";
const ADD_TICKET =  "ADD_TICKET";

const defaultState = {
    tickets: []
};

export default function tiketsReducer(state = defaultState, action){
    switch(action.type){
        case SET_TICKETS:
            return{
                ...state,
                tickets: [...state.tickets, ...action.payload]
            }
        default:
            return state;
    }
}

export const setTickets = tickets => ({type: SET_TICKETS, payload: tickets});