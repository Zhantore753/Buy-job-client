import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {defineCurrentOrder, getOrders} from '../../../actions/order';

const OrdersList = () => {
    const orders = useSelector(state => state.order.orders);
    const dispatch = useDispatch();
    const [ordersCheck, setOrdersCheck] = useState(true);
    const [ordersCount, setOrdersCount] = useState(-1);

    useEffect(() => {
        if(ordersCount < orders.length){
            setOrdersCount(orders.length);
        }else{
            setOrdersCheck(false);
        }
    }, [orders]);

    const orderDetailHandler = (order) => {
        dispatch(defineCurrentOrder(order));
    }

    return (
        <>
            <ul className="orders__list support__list">
                {orders.map((order, index) =>
                <NavLink key={index} to='/order-detail'>
                    <li
                    onClick={() => orderDetailHandler(order)}
                    className={
                        order.status === "Участвует в конкурсе" ?
                            "orders__item support__item"
                        : order.status === "Выполняется" || order.status === "Исполнено" ?
                            "orders__item orders__item-done support__item"
                        : "orders__item orders__item-cancel support__item"
                    }>
                        <div className="orders__item-col support__item-col">
                            <h3 className="orders__item-title support__item-title">{order.title}</h3>
                            <p className="orders__item-subtitle support__item-subtitle">{`${order.subject}, ${order.category}`}</p>
                        </div>
                        {order.status === "Выполняется" || order.status === "Исполнено" ?
                            <div className="orders__item-col support__item-col">
                                <div className="orders__item-cost">
                                    <p><span>Цена: </span>{order.price}</p>
                                </div>
                                <div className="orders__item-executor">
                                    <p>Исполнитель: {order.executor}</p>
                                </div>
                            </div>
                            :
                            <div className="orders__item-col support__item-col">
                                <div className="orders__item-status support__item-status">
                                    <p>{order.status}</p>
                                </div>
                            </div>
                        }
                    </li>
                </NavLink>
                )}
            </ul>
            {ordersCheck &&
                <div className="support__load-more">
                    <button onClick={() => dispatch(getOrders(orders.length))} className="support__head-btn">Загрузить еще</button>
                </div>
            }
            {!ordersCheck && ordersCount < 1 &&
                <p>У вас пока нет заказов</p>
            }
        </>
    );
};

export default OrdersList;