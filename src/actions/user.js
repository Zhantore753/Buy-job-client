import axios from 'axios';
import {addFeedbacks, addUserOrders, setRole, setSelectedUser, setUser} from "../reducers/userReducer";
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

export const login = (login, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/auth/login`, {
                login,
                password
            });
            setTimeout(() => dispatch(setUser(response.data.user)), 1000);
            localStorage.setItem('token', response.data.token);
            return [response.status, response.data.message];
        } catch (e) {
            return [e.response.status, e.response.data.message];
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            localStorage.removeItem('token');
        }
    }
}

export const getSelectedUser = (userId) => {
    return async dispatch => {
        try{
            const response = await axios.get(`${API_URL}api/user/get-user?userId=${userId}`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            );
            await dispatch(setSelectedUser(response.data.resUser));
        } catch (e) {
            console.log(e);
            return [e.response.status, e.response.data.message];
        }
    }
}

export const getFeedbacks = (userId, skip) => {
    return async dispatch => {
        try {
            let url = `${API_URL}api/user/feedbacks?userId=${userId}`;
            if(skip){
                url = `${API_URL}api/user/feedbacks?userId=${userId}&startfrom=${skip}`
            }
            const response = await axios.get(url, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            dispatch(addFeedbacks(response.data));
        } catch (e) {
            console.log(e);
        }
    }
}

export const getUserOrders = (userId, skip) => {
    return async dispatch => {
        try {
            let url = `${API_URL}api/user/orders?userId=${userId}`;
            if(skip){
                url = `${API_URL}api/user/orders?userId=${userId}&startfrom=${skip}`
            }
            const response = await axios.get(url, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            console.log(response);
            dispatch(addUserOrders(response.data));
        } catch (e) {
            console.log(e);
        }
    }
}

export const changeRole = (role) => {
    return async dispatch => {
        try{
            const response = await axios.post(`${API_URL}api/user/change-role`, {role}, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            console.log(response);
            dispatch(setRole(response.data.role));
            return [response.status, response.data.message];
        }catch(e){
            console.log(e);
            return [e.response.status, e.response.data.message];
        }
    }
}