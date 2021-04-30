import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defineCurrentCustomer, defineCurrentFiles, downloadFile, respondToOrder } from '../../../actions/order';
import {API_URL} from "../../../config";
import avatarLogo from '../../../img/avatarlogo.svg';
import { formatBytes } from '../../formatBytes';
import { Redirect } from "react-router-dom";
import OrderDetailOffer from './OrderDetailOffer';

const OrderDetailDesc = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const currentOrder = useSelector(state => state.order.currentOrder);
    const currentCustomer = useSelector(state => state.order.currentCustomer);
    const currentFiles = useSelector(state => state.order.currentFiles);
    const dispatch = useDispatch();

    const avatar = currentCustomer.avatar ? `${API_URL +  currentCustomer.avatar}` : avatarLogo;

    useEffect(() => {
        if(currentOrder.user){
            dispatch(defineCurrentCustomer(currentOrder.user));
            dispatch(defineCurrentFiles(currentOrder.files));
        }
    }, [currentOrder]);

    function downloadClickHandler(e, file){
        e.stopPropagation();
        downloadFile(file.path, file.name);
    }

    if(!currentOrder.user){
        return <Redirect to='/' />
    }

    return (
        <form className="order__exec__details-bid">
            <div className="order__detail-head">
                <img className='order__detail-avatar' src={avatar} alt="avatar"/>
                <h3>{currentCustomer.fullName}</h3>
            </div>
            <p className="order__detail-desc">
                {currentOrder.description}
            </p>
            <ul className="order__detail-files">
                {currentOrder.files &&
                currentFiles.map((file, index) => 
                    <li onClick={(e) => downloadClickHandler(e, file)} key={index}>
                        <svg width="50" height="50" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8928 4.75001C12.518 4.75001 12.2142 4.4462 12.2142 4.07143V0H4.07136C2.94706 0 2.03564 0.911419 2.03564 2.03571V16.9643C2.03564 18.0886 2.94706 19 4.07136 19H14.9285C16.0528 19 16.9642 18.0886 16.9642 16.9643V4.75001H12.8928Z" fill="#3C4852"/>
                            <path d="M13.5713 0.397705V3.39291H16.5665L13.5713 0.397705Z" fill="#3C4852"/>
                        </svg>
                        <div>
                            <span>{formatBytes(file.size, 1)}</span>
                            <span>{file.type}</span>
                        </div>
                    </li>
                )}
            </ul>
            {currentUser.role === 'freelancer' &&
                <OrderDetailOffer />
            }
        </form>
    );
};

export default OrderDetailDesc;