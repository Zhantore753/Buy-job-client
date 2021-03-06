import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defineCurrentRespond, respondToOrder } from '../../../actions/order';

const OrderDetailOffer = () => {
    const currentOrder = useSelector(state => state.order.currentOrder);
    const currentRespond = useSelector(state => state.order.currentRespond);
    const [offer, setOffer] = useState(currentOrder.price);
    const [valid, setValid] = useState([]);
    const [disabledBtn, setDisabledBtn] = useState(false);
    const dispatch = useDispatch();

    const offValidByTime = () =>{
        setDisabledBtn(true);
        setTimeout(() => {
            setValid(false);
            setDisabledBtn(false);
        }, 3000);
    }

    useEffect(() => {
        dispatch(defineCurrentRespond(currentOrder._id));
    }, [currentOrder, dispatch]);

    const respondHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(+offer < 100 || +offer > 999999){
            setValid([true, 'Сумма не должна быть меньше 100 и превышать 999999']);
            offValidByTime();
            return;
        }
        if(currentRespond){
            if(+offer === +currentRespond.offer){
                setValid([true, 'Нелья поменять цену на ту же']);
                offValidByTime();
                return;
            }
        }

        const respondId = currentRespond ? currentRespond._id : null

        dispatch(respondToOrder(offer, currentOrder._id, respondId))
        .then(async res => {
            await setValid(res);
        });
        offValidByTime();
    }

    return (
        <>
        {currentRespond && currentOrder.executorRespond &&
            <p className="reg-landing__success">Заказчик выбрал вашу цену {currentOrder.price}</p>
        }
        {currentRespond && !currentOrder.executorRespond &&
            <p className="reg-landing__success">Вы уже делали ставку {currentRespond.offer}, хотите изменить ее?</p>
        }
        {!currentOrder.executorRespond &&
            <>
            <div className="order__exec__details-price">
                <label htmlFor="price">Предложение: </label>
                <input value={offer} onChange={e => setOffer(e.target.value)} type="text" id="price" name="price" />
            </div>
            <button disabled={disabledBtn} onClick={e => respondHandler(e)} className="order__exec__details-submit">Отправить заявку</button>
            {valid[0] === 200 ?
                <p className="reg-landing__success">{valid[1]}</p>
            :
                <p className="reg-landing__error">{valid[1]}</p>
            }
            </>
        }
        </>
    );
};

export default OrderDetailOffer;