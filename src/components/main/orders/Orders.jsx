import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../actions/order';
import OrdersList from './OrdersList';

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.orders);

    const loadOrders = useCallback(() => {
        if(orders.length === 0){
            dispatch(getOrders());
        }
    }, [dispatch, orders.length]);

    useEffect(()=>{
        loadOrders();
    }, [loadOrders]);

    return (
        <section className="orders main">
            <div className="container">
                <div className="orders__inner">
                    <div className="orders__head support__head">
                        <h1 className="orders__head-title support__head-title">Мои заказы</h1>
                    </div>
                    <OrdersList />
                </div>
            </div>
        </section>
    );
};

export default Orders;