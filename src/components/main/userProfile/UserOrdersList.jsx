import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserOrdersList = () => {
    const orders = useSelector(state => state.user.orders);
    const dispatch = useDispatch();
    const [ordersCheck, setOrdersCheck] = useState(true);
    const [ordersCount, setOrdersCount] = useState(-1);

    useEffect(() => {
        if(ordersCount >= orders.length){
            setOrdersCheck(false);
        }else{
            setOrdersCheck(true);
            setOrdersCount(orders.length);
        }
    }, [orders]);

    return (
        <>
            <ul className="executor__history-list orders__list support__list">
            {orders.map((order, index) =>
                <li
                key={index}
                className={
                    order.status === "Участвует в конкурсе" ?
                        "orders__item orders__item-search support__item"
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
            )}
            </ul>
            {ordersCheck &&
                <div className="support__load-more">
                    <button className="support__head-btn">Загрузить еще</button>

                </div>
            }
        </>
    );
};

export default UserOrdersList;