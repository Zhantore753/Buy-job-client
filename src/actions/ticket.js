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

            return [response.status, response.message];
        } catch (e) {
            return [e.response.status, e.response.data.message];
        }
    }
}

export function createTicket(title, description, date, files) {
    return async dispatch => {
        try {
            const formData = new FormData();
            for(let i = 0; i < files.length; i++){
                formData.append('files', files[i]);
            }
            formData.append('title', title);
            formData.append('description', description);
            formData.append('date', date);
            const response = await axios.post(`${API_URL}api/tickets`, formData, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            dispatch(addTicket([response.data.ticket]));
            return [response.status, response.data.message];
        } catch (e) {
            return [e.response.status, e.response.data.message];
        }
    }
}