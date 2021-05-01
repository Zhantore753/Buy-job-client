import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { rateOrder } from '../../../actions/order';

const OrderDetailFeedback = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const currentOrder = useSelector(state => state.order.currentOrder);
    const [stars, setStars] = useState(0);
    const [valid, setValid] = useState([false, '']);
    const [disabledBtn, setDisabledBtn] = useState(false);
    const dispatch = useDispatch();

    function offValidByTime(){
        setDisabledBtn(true);
        setTimeout(() => {
            setValid(false);
            setDisabledBtn(false);
        }, 3000);
    }

    const rateHandler = (newValue) => {
        if(disabledBtn){
            return;
        }
        if((currentUser.role === 'freelancer' && currentOrder.execFeedback === stars) 
            || (currentUser.role === 'customer' && currentOrder.userFeedback === stars)
        ){
            setValid([true, 'Нельзя менять оценку на ту же']);
            offValidByTime();
        }

        setStars(newValue);
        dispatch(rateOrder(currentOrder._id, newValue))
    }

    return (
        <div className="change__feedback-details__pay">
            {currentUser.role === 'freelancer' ?
                <h4>Оцените заказчика</h4>
            :
                <h4>Оцените исполнителя</h4>
            }
            <ReactStars
                size={40}
                count={5}
                color="#3C4852"
                activeColor="#FFCC80"
                value={stars}
                a11y={true}
                isHalf={true}
                emptyIcon={<i className="far fa-star"/>}
                halfIcon={<i className="fa fa-star-half-alt"/>}
                filledIcon={<i className="fa fa-star"/>}
                onChange={newValue => rateHandler(newValue)}
                disabled={true}
            />
            {valid[0] === 200 ?
                <p className="reg-landing__success">{valid[1]}</p>
            :
                <p className="reg-landing__error">{valid[1]}</p>
            }
        </div>
    );
};

export default OrderDetailFeedback;