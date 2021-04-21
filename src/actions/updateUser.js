import axios from 'axios';
import {setUser} from "../reducers/userReducer";
import {API_URL} from "../config";

export const updateGeneral = async (avatar, email, fullname, edu) => {
    try {
        let responses = [];
        if(avatar){
            const formData = new FormData();
            formData.append('file', avatar);
            const response = await axios.post(`${API_URL}api/update/avatar`, formData,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            );
            console.log(response.data);
            // dispatch(setUser(response.data));
            responses.push(response);
        }

        if(email){
            const response = await axios.post(`${API_URL}api/update/email`, {email},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            ); 
            console.log(response.data);
            // dispatch(setUser(response.data));
            responses.push(response);
        }

        if(fullname){
            const response = await axios.post(`${API_URL}api/update/fullname`, {fullname},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            ); 
            console.log(response.data);
            // dispatch(setUser(response.data));
            responses.push(response);
        }

        if(edu){
            const response = await axios.post(`${API_URL}api/update/edu`, edu,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            ); 
            console.log(response.data);
            // dispatch(setUser(response.data));
            responses.push(response);
        }

        console.log(responses);

    } catch (e) {
        return [e.response.status, e.response.data.message];
    }
}

export const updatePassword = async (newPassword, password) => {
    try {
        const response = await axios.post(`${API_URL}api/update/password`, {newPassword, password},
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
        ); 
        console.log(response);
        return [response.status, response.data.message];
    }catch (e) {
        console.log(e.response);
        return [e.response.status, e.response.data.message];
    }
}