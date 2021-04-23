import axios from 'axios';
import {API_URL} from "../config";

export const createOrder = async (category, subject, title, selectedDate, price, keyWords, description, files) => {
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
        console.log(formData);
        const response = await axios.post(`${API_URL}api/order/create`, formData, 
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
        )
        console.log(response);
        // dispatch(setUser(response.data.user));
        return [response.status, response.data.message];
    } catch (e) {
        console.log(e);
        return [e.response.status, e.response.data.message];
    }
}

