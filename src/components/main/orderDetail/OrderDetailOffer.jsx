import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defineCurrentOffer, respondToOrder } from '../../../actions/order';

const OrderDetailOffer = () => {
    const currentOrder = useSelector(state => state.order.currentOrder);
    const currentOffer = useSelector(state => state.order.currentOffer);
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
        dispatch(defineCurrentOffer(currentOrder._id));
    });

    const respondHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(offer < 100 || offer > 999999){
            setValid([true, 'Сумма не должна быть меньше 100 и превышать 999999']);
            offValidByTime();
            return;
        }

        dispatch(respondToOrder(offer, currentOrder._id))
        .then(async res => {
            await setValid(res);
        });
        offValidByTime();
    }

    return (
        <>
        {currentOffer > 100 &&
            <p className="reg-landing__success">Вы уже делали ставку {currentOffer}, хотите изменить ее?</p>
        }
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
    );
};

export default OrderDetailOffer;