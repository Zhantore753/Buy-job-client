import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { feedback } from '../../../actions/order';

const OrderDetailFeedback = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const currentOrder = useSelector(state => state.order.currentOrder);
    const rate = useSelector(state => state.order.rate);
    const [stars, setStars] = useState(rate.rating);
    const [valid, setValid] = useState([false, '']);
    const dispatch = useDispatch();

    let timeout;

    function offValidByTime(){
        timeout = setTimeout(() => {
            setValid(false);
        }, 3000);
    }

    const rateHandler = (newValue) => {
        let id = window.setTimeout(() => {}, 0);
        while (id) {
            window.clearTimeout(id);
            id--;
        }
        setValid(false);
        
        setStars(newValue);

        if(currentUser.role === 'freelancer'){
            dispatch(feedback(currentOrder._id, currentOrder.user, currentUser.id,  newValue))
            .then(res => {
                setValid(res);
                offValidByTime();
            });
        }else{
            dispatch(feedback(currentOrder._id, currentOrder.executor, currentUser.id,  newValue))
            .then(res => {
                setValid(res);
                offValidByTime();
            });
        }
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
                edit={true}
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