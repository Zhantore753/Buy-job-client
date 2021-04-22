import axios from 'axios';
import {setEmail, setUser} from "../reducers/userReducer";
import {API_URL} from "../config";

export const updateAvatar = async (avatar) => {
    try {
        const formData = new FormData();
        formData.append('file', avatar);
        const response = await axios.post(`${API_URL}api/update/avatar`, formData,
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
        );
        console.log(response);
        // dispatch(setUser(response.data));
    } catch (e) {
        return [e.response.status, e.response.data.message];
    }
}

export const updateEmail = (email) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/update/email`, {email},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            ); 
            dispatch(setEmail(response.data.user.email));
            return [response.status, response.data.message];
        }catch (e) {
            return [e.response.status, e.response.data.message];
        }
    }
}

export const updateFullName = (fullName) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/update/fullname`, {fullName},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            ); 
            dispatch(setUser(response.data.user));
            return [response.status, response.data.message];
        } catch (e) {
            return [e.response.status, e.response.data.message];
        }
    }
}

export const updatePassword = async (newPassword, password) => {
    try {
        const response = await axios.post(`${API_URL}api/update/password`, {newPassword, password},
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
        );
        return [response.status, response.data.message];
    }catch (e) {
        console.log(e.response);
        return [e.response.status, e.response.data.message];
    }
}

export const updateEdu = (eduObj) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/update/edu`, eduObj,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            ); 
            console.log(response);
            dispatch(setUser(response.data.user))
            return [response.status, response.data.message];
        }catch (e) {
            return [e.response.status, e.response.data.message];
        }
    }
}