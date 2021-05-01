import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResponds } from '../../../actions/order';
import {API_URL} from "../../../config";
import avatarLogo from '../../../img/avatarlogo.svg';
import { setCurrentRespond, setMessage } from '../../../reducers/orderReducer';
import socket from '../../../socket';

const OrderDetailResponds = () => {
    const currentOrder = useSelector(state => state.order.currentOrder);
    const currentRespond = useSelector(state => state.order.currentRespond);
    const responds = useSelector(state => state.order.responds);
    const dispatch = useDispatch();
    const disabledChooseRespond = useSelector(state => state.order.disabledChooseRespond)

    useEffect(() => {
        dispatch(getResponds(currentOrder._id));
    }, [currentOrder, dispatch]);

    const respondChooseHandler = (id, respond) => {
        if(currentRespond._id === respond._id || disabledChooseRespond){
            return;
        }

        const respondsElements = document.querySelectorAll('.feedback-executors__item');

        respondsElements.forEach(item => {
            item.classList.remove('feedback-executors__item-active');
        });
        respondsElements[id].classList.add('feedback-executors__item-active');

        dispatch(setMessage([]));
        try{
            if(currentRespond._id){
                socket.emit('ROOM:LEAVE', currentRespond._id);
            }
        }catch(e){}

        dispatch(setCurrentRespond(respond));
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
                    let classes = 'feedback-executors__item';
                    if(respond._id === currentRespond._id){
                        classes += ' feedback-executors__item-active'
                    }

                    return(
                        <button disabled={disabledChooseRespond} className="feedback-executors__item-btn-respond" onClick={() => respondChooseHandler(index, respond)} key={index}>
                            <li className={classes}>
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