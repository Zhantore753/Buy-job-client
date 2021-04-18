import axios from 'axios';
import {setUser} from "../reducers/userReducer";
import {API_URL} from "../config";

export const registration = async (login, email, password) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/registration`, {
            login,
            email,
            password
        });
        return [response.status, response.data.message];
    } catch (e) {
        return [e.response.status, e.response.data.message];
    }
}

export const login =  (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/auth/login`, {
                email,
                password
            });
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            alert(e.response.data.message);
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}