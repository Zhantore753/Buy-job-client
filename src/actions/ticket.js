import axios from 'axios';
import {addTicket, setTickets} from "../reducers/ticketsReducer";
import {API_URL} from "../config";

export function getTickets(skip) {
    return async dispatch => {
        try {
            let url = `${API_URL}api/tickets`;
            if(skip){
                url = `${API_URL}api/tickets?startfrom=${skip}`
            }
            const response = await axios.get(url, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            dispatch(setTickets(response.data));
        } catch (e) {
            return [e.response.status, e.response.data.message];
        }
    }
}

export function createTicket(title, description, date) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/tickets`, {
                title,
                description,
                date
            }, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            console.log(response);
            dispatch(addTicket([response.data]));
            return response.data;
        } catch (e) {
            return e;
        }
    }
}