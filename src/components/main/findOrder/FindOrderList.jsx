import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findOrder } from '../../../actions/order';
import moment from 'moment';

const FindOrderList = ({search, category, setOrdersCheck, ordersCheck}) => {
    const orders = useSelector(state => state.order.findOrders);
    const dispatch = useDispatch();
    const [ordersCount, setOrdersCount] = useState(-1);

    useEffect(() => {
        if(ordersCount !== orders.length){
            setOrdersCount(orders.length);
        }
    }, [orders]);

    const loadMoreHandler = () => {
        let skip = Math.ceil(orders.length / 10) * 10;
        dispatch(findOrder(skip, category, search, 'add'))
        .then(async (res) =>{
            if(res.length < 10){
                await setOrdersCheck(false);
            }else{
                await setOrdersCheck(true);
            }
        });
    }

    return (
        <>
            <ul className="search__list orders__list support__list">
                {orders.map((order, index) =>
                    <li key={index} className="search__item orders__item support__item">
                        <div className="search__item-col orders__item-col support__item-col">
                            <h3 className="search__item-title orders__item-title support__item-title">{order.title}</h3>
                            <p className="search__item-subtitle orders__item-subtitle support__item-subtitle">{order.subject}, {order.category}</p>
                        </div>
                        <div className="search__item-col orders__item-col support__item-col">
                            <div className="search__item-details">
                                <p>Сделать до {moment(order.deadline).format('L')}</p>
                                <button>Подробнее</button>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
            {ordersCheck && ordersCount > 9 &&
                <div className="support__load-more">
                    <button onClick={() => loadMoreHandler()} className="support__head-btn">Загрузить еще</button>
                </div>
            }
            {!ordersCheck && ordersCount < 1 &&
                <p>Ничего не найдено</p>
            }
        </>
    );
};

export default FindOrderList;