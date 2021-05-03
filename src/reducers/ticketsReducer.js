const SET_TICKETS = "SET_TICKETS";
const ADD_TICKET =  "SORT_TICKET";
const RESET_TICKETS = "RESET_TICKETS";
const RESET_ALL_TICKETS = "RESET_ALL_TICKETS";

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
        case ADD_TICKET: 
            return{
                ...state,
                tickets: [...action.payload, ...state.tickets]
            }
        case RESET_TICKETS:
            return{
                ...state,
                tickets: [...action.payload]
            }
        case RESET_ALL_TICKETS: 
            return{
                tickets: []
            }
        default:
            return state;
    }
}

export const setTickets = tickets => ({type: SET_TICKETS, payload: tickets});
export const addTicket = ticket => ({type: ADD_TICKET, payload: ticket});
export const resetTickets = tickets => ({type: RESET_TICKETS, payload: tickets});
export const resetAllTickets = () => ({type: RESET_ALL_TICKETS});