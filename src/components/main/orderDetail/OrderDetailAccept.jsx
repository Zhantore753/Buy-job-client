import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptRespond } from '../../../actions/order';

const OrderDetailAccept = () => {
    const currentRespond = useSelector(state => state.order.currentRespond);
    const currentOrder = useSelector(state => state.order.currentOrder);
    const dispatch = useDispatch();
    const [sure, setSure] = useState();

    const acceptHandler = () => {
        dispatch(acceptRespond(currentRespond._id));
    }

    return (
        <>
            {currentRespond.offer ? 
                <div className="change__feedback-details__pay">
                    {currentOrder.executorRespond ? 
                        <p>{currentRespond.userFullName ? currentRespond.userFullName : currentRespond.userEmail} был выбран за: <span> {currentRespond.offer}  ₽</span></p>
                    :
                        <>
                        {!sure ?
                            <>
                                <p>{currentRespond.userFullName ? currentRespond.userFullName : currentRespond.userEmail} готов взяться за работу за: <span> {currentRespond.offer}  ₽</span></p>
                                <button onClick={() => setSure(true)} className="change__feedback-details__pay-btn">Начать сотрудничать</button>
                            </>
                        :
                            <>
                                <p>Вы уверенны что принимаете предложение от {currentRespond.userFullName ? currentRespond.userFullName : currentRespond.userEmail}</p>
                                <div className='order-change__item-btns'>
                                    <button onClick={() => acceptHandler()} className="order-change__item-btn-change">Принять</button>
                                    <button onClick={() => setSure(false)} className="order-change__item-btn-close">Отмена</button>
                                </div>
                            </>
                        }
                        </>
                    }
                </div>
            :
                <p>Выберите отклик</p>
            }
        </>
    );
};

export default OrderDetailAccept;