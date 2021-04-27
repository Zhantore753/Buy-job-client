import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResponds } from '../../../actions/order';
import {API_URL} from "../../../config";
import avatarLogo from '../../../img/avatarlogo.svg';

const OrderDetailResponds = () => {
    const currentOrder = useSelector(state => state.order.currentOrder);
    const responds = useSelector(state => state.order.responds);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getResponds(currentOrder._id));
    }, [currentOrder]);

    const respondChooseHandler = (e, id) => {
        const respondsElements = document.querySelectorAll('.feedback-executors__item');

        respondsElements.forEach(item => {
            item.classList.remove('feedback-executors__item-active');
        });
        respondsElements[id].classList.add('feedback-executors__item-active');
    }

    return (
        <div className="order-change__feedback-executors">
            <h2>Отклики</h2>
            <ul className="order-change__feedback-executors__list feedback-executors__list">
                {responds.length < 1 && 
                    <p>Откликов еще не было</p>
                }
                {responds.map((respond, index) => {
                    const avatar = respond.userAvatar ? `${API_URL +  respond.userAvatar}` : avatarLogo;
                    const name = respond.userFullName ? respond.userFullName : respond.userEmail;

                    return(
                        <button onClick={e => respondChooseHandler(e, index)} key={index}>
                            <li className="feedback-executors__item">
                                <img className="feedback-executors__item-avatar" src={avatar} alt="feedback__avatar" />
                                <p className="feedback-executors__item-name">{name}</p>
                                <div className="feedback-executors__item-cost">
                                    <p>Предложение:</p>
                                    <p>{respond.offer} ₽</p>
                                </div>
                            </li>
                        </button>
                    )
                })}
            </ul>
        </div>
    );
};

export default OrderDetailResponds;