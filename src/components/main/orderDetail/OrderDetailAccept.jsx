import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentOrder } from '../../../reducers/orderReducer';
import { setCurrentBalance } from '../../../reducers/userReducer';
import socket from '../../../socket';

const OrderDetailAccept = ({isAccept, acceptedText, acceptText, isSureText, btnText, accept}) => {
    const currentRespond = useSelector(state => state.order.currentRespond);
    const currentOrder = useSelector(state => state.order.currentOrder);
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const [valid, setValid] = useState([false, '']);
    const [disabledBtn, setDisabledBtn] = useState(false);
    const [sure, setSure] = useState();

    const offValidByTime = () =>{
        setDisabledBtn(true);
        setTimeout(() => {
            setValid(false);
            setDisabledBtn(false);
        }, 5000);
    }

    const acceptHandler = () => {
        if(accept === 'respond'){
            if(socket){
                socket.emit('ACCEPT_RESPOND');
                const newOrder = currentOrder;
                newOrder.executorRespond = currentRespond._id;
                newOrder.executor = currentRespond.executor;
                newOrder.status = 'Выполняется';
                newOrder.price = currentRespond.offer;
                dispatch(setCurrentOrder(newOrder));
            }
        }else{
            if(+currentUser.balance - +currentRespond.offer < 0){
                setValid([true, 'Не достаточно средств чтобы принять работу, пополните баланс']);
                offValidByTime();
                return;
            }
            if(socket){
                socket.emit('ACCEPT_WORK');
                const newOrder = currentOrder;
                newOrder.status = 'Исполнено';
                let balance = currentUser.balance - currentRespond.offer;
                dispatch(setCurrentOrder(newOrder));
                dispatch(setCurrentBalance(balance));
            }
        }
    }

    return (
        <>
            {currentRespond && currentRespond.offer ? 
                <div className="change__feedback-details__pay">
                    {isAccept ? 
                        acceptedText
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
                                    <button disabled={disabledBtn} onClick={() => acceptHandler()} className="order-change__item-btn-change">Принять</button>
                                    <button disabled={disabledBtn} onClick={() => setSure(false)} className="order-change__item-btn-close">Отмена</button>
                                </div>
                            </>
                        }
                        </>
                    }
                    {valid[0] === 200 ?
                        <p className="reg-landing__success">{valid[1]}</p>
                    :
                        <p className="reg-landing__error">{valid[1]}</p>
                    }
                </div>
            :
                <p>Выберите отклик(предложение)</p>
            }
        </>
    );
};

export default OrderDetailAccept;