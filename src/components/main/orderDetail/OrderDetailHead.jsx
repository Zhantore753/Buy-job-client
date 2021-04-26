import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrder } from '../../../actions/order';

const OrderDetailHead = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const currentOrder = useSelector(state => state.order.currentOrder);
    const dispatch = useDispatch();
    const [price, setPrice] = useState(currentOrder.price);
    const [valid, setValid] = useState([false, '']);
    const [disabledBtn, setDisabledBtn] = useState(false);

    const offValidByTime = () =>{
        setDisabledBtn(true);
        setTimeout(() => {
            setValid(false);
            setDisabledBtn(false);
        }, 3000);
    }

    const updateOrderHandler = (e, price, status) => {
        if(price < 100 || price > 999999){
            setValid([true, 'Предложение должно быть не меньше 100 и не больше 999999']);
            offValidByTime();
            return;
        }
        e.preventDefault();
        dispatch(updateOrder(currentOrder._id, price, status))
        .then(async res => await setValid(res));
        offValidByTime();
    }

    return (
        <>
            <h1 className="order__exec__title">Заказ {currentOrder._id}</h1>
            {currentUser.role === 'freelancer' ?
                <div className="order__exec__card">
                    <div className="order__exec__card-col">
                        <p className="order__exec__card-title">{currentOrder.title}</p>
                        <p className="order__exec__card-subtitle">{currentOrder.subject}, {currentOrder.category}</p>
                    </div>

                    <div className="order__exec__card-col-2">
                        <div className="order__exec__card-time">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5287 10.0012L9.15844 8.22346V4.60227C9.15844 4.23816 8.86412 3.94385 8.50002 3.94385C8.13591 3.94385 7.8416 4.23816 7.8416 4.60227V8.55271C7.8416 8.76009 7.93905 8.95566 8.10497 9.07944L10.7386 11.0547C10.8571 11.1435 10.9954 11.1863 11.133 11.1863C11.3338 11.1863 11.5313 11.0961 11.6604 10.9223C11.879 10.6319 11.8197 10.2191 11.5287 10.0012Z" fill="#8E8D8D"/>
                                <path d="M8.5 0C3.81281 0 0 3.81281 0 8.5C0 13.1872 3.81281 17 8.5 17C13.1872 17 17 13.1872 17 8.5C17 3.81281 13.1872 0 8.5 0ZM8.5 15.6832C4.5397 15.6832 1.3168 12.4603 1.3168 8.5C1.3168 4.5397 4.5397 1.3168 8.5 1.3168C12.461 1.3168 15.6832 4.5397 15.6832 8.5C15.6832 12.4603 12.4603 15.6832 8.5 15.6832Z" fill="#8E8D8D"/>
                            </svg>
                            <p>Сделать до {moment(currentOrder.deadline).format('L')}</p>
                        </div>
                        <p className="order__exec__card-cost">Предложение заказчика:  <span>{currentOrder.price}  ₽</span></p>
                    </div>
                </div>
            :
                <div className="order-change__item support__item">
                    <div className="order-change__item-col orders__item-col support__item-col">
                        <h3 className="orders__item-title support__item-title">{currentOrder.title}</h3>
                        <p className="orders__item-subtitle support__item-subtitle">{currentOrder.subject}, {currentOrder.category}</p>
                    </div>
                    <div className="order-change__item-col-2 orders__item-col support__item-col">
                        <p className="order-change__item-cost"><span>Ваше предложение:  </span><input className='price__input' min={100} max={999999} type="number" value={price} onChange={e => setPrice(e.target.value)}/> ₽</p>
                        <div className="order-change__item-btns">
                            <button disabled={disabledBtn} onClick={e => updateOrderHandler(e, currentOrder.price, 'Заказ отменён')} className="order-change__item-btn-close">Закрыть заказ</button>
                            <button disabled={disabledBtn} onClick={e => updateOrderHandler(e, price, currentOrder.status)} className="order-change__item-btn-change">
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.11042 10.982L3.74077 10.4562C5.04517 10.1955 6.23181 9.56051 7.17237 8.6199L10.0091 5.78321C11.3303 4.46201 11.3303 2.31215 10.0091 0.990942C8.6878 -0.330314 6.53804 -0.330314 5.21679 0.990942L2.3801 3.82763C1.43954 4.76819 0.804557 5.95483 0.543769 7.25928L0.0180138 9.88963C-0.0427965 10.194 0.0524573 10.5086 0.271932 10.7281C0.447771 10.9039 0.684654 11 0.928405 11C0.988937 11 1.04989 10.9941 1.11042 10.982ZM8.69616 2.30393C8.98549 2.59327 9.14486 2.97795 9.14486 3.3871C9.14486 3.79625 8.98549 4.18098 8.69616 4.47027L5.85947 7.30695C5.179 7.98743 4.32055 8.4468 3.37688 8.63541L2.11179 8.88826L2.36464 7.62321C2.55325 6.67949 3.01262 5.821 3.69309 5.14057L6.52978 2.30389C6.81912 2.01455 7.2038 1.85519 7.61295 1.85519C8.02209 1.85519 8.40682 2.0146 8.69616 2.30393Z" fill="white"/>
                                </svg> 
                                Изменить
                            </button>
                        </div>
                    </div>
                </div>
            }
            {valid[0] === 200 ?
                <p className="reg-landing__success">{valid[1]}</p>
            :
                <p className="reg-landing__error">{valid[1]}</p>
            }
        </>
    );
};

export default OrderDetailHead;