import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptRespond, acceptWork } from '../../../actions/order';

const OrderDetailAccept = ({isAccept, acceptText, isSureText, btnText, accept}) => {
    const currentRespond = useSelector(state => state.order.currentRespond);
    const dispatch = useDispatch();
    const [sure, setSure] = useState();

    const acceptHandler = () => {
        if(accept === 'respond'){
            dispatch(acceptRespond(currentRespond._id));
        }else{
            dispatch(acceptWork(currentRespond._id));
        }
    }

    return (
        <>
            {currentRespond.offer ? 
                <div className="change__feedback-details__pay">
                    {isAccept ? 
                        <p>{currentRespond.userFullName ? currentRespond.userFullName : currentRespond.userEmail} был выбран за: <span> {currentRespond.offer}  ₽</span></p>
                    :
                        <>
                        {!sure ?
                            <>
                                {acceptText}
                                <button onClick={() => setSure(true)} className="change__feedback-details__pay-btn">{btnText}</button>
                            </>
                        :
                            <>
                                {isSureText}
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
                <p>Выберите отклик(предложение)</p>
            }
        </>
    );
};

export default OrderDetailAccept;