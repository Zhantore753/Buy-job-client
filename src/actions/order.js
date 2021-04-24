import axios from 'axios';
import {API_URL} from "../config";
import { addFindOrders, addOrder, setFindOrders, setOrders } from '../reducers/orderReducer';

export const createOrder =  (category, subject, title, selectedDate, price, keyWords, description, files) => {
    return async dispatch =>{
        try {
            const formData = new FormData();
            for(let i = 0; i < files.length; i++){
                formData.append('files', files[i]);
            }
            formData.append('title', title);
            formData.append('category', category);
            formData.append('subject', subject);
            formData.append('selectedDate', selectedDate);
            formData.append('price', price);
            formData.append('keyWords', keyWords);
            formData.append('description', description);
            const response = await axios.post(`${API_URL}api/order/create`, formData, 
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            console.log(response);
            dispatch(addOrder(response.data.order));
            return [response.status, response.data.message];
        } catch (e) {
            console.log(e);
            return [e.response.status, e.response.data.message];
        }
    }
}

export const getOrders = (skip) => {
    return async dispatch => {
        try {
            let url = `${API_URL}api/order/orders`;
            if(skip){
                url = `${API_URL}api/order/orders?startfrom=${skip}`
            }
            const response = await axios.get(url, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            dispatch(setOrders(response.data));
            // return [response.status, response.data.message];
        } catch (e) {
            console.log(e);
            return [e.response.status, e.response.data.message];
        }
    }
}

export const findOrder = (skip, category, search, stateAction) => {
    return async dispatch => {
        try {
            let url = `${API_URL}api/order/find-orders`;
            if(skip) url = `${API_URL}api/order/find-orders?startfrom=${skip}`;
            if(category.length > 1) url = `${API_URL}api/order/find-orders?category=${category}`;
            if(search) url = `${API_URL}api/order/find-orders?search=${search}`;
            if(skip && category.length > 1) url = `${API_URL}api/order/find-orders?startfrom=${skip}&category=${category}`;
            if(skip && search) url = `${API_URL}api/order/find-orders?startfrom=${skip}&search=${search}`;
            if(category.length > 1 && search) url = `${API_URL}api/order/find-orders?search=${search}&category=${category}`;
            if(skip && category.length > 1 && search) url = `${API_URL}api/order/find-orders?startfrom=${skip}&search=${search}&category=${category}`;
            const response = await axios.get(url, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            });
            if(stateAction === 'set'){
                dispatch(setFindOrders(response.data));
            }
            if(stateAction === 'add'){
                dispatch(addFindOrders(response.data));
            }
            return response.data;
        } catch (e) {
            console.log(e);
            return [e.response.status, e.response.data.message];
        }
    }
}