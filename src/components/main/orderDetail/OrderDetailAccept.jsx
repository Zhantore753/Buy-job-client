import React from 'react';
import { useSelector } from 'react-redux';

const OrderDetailAccept = () => {
    const currentRespond = useSelector(state => state.order.currentRespond);
    return (
        <>
            {currentRespond.offer ? 
                <div className="change__feedback-details__pay">
                    <p>{currentRespond.userFullName ? currentRespond.userFullName : currentRespond.userEmail} готов взяться за работу за: <span> {currentRespond.offer}  ₽</span></p>
                    <button className="change__feedback-details__pay-btn">Начать сотрудничать</button>
                </div>
            :
                <p>Выберите отклик</p>
            }
        </>
    );
};

export default OrderDetailAccept;