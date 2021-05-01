import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../actions/order';
import { resetOrders } from '../../../reducers/orderReducer';
import OrdersList from './OrdersList';

const Orders = () => {
    const dispatch = useDispatch();
    const hasFetchedData = useRef(false);
    const orders = useSelector(state => state.order.orders);

    const loadOrders = useCallback(() => {
        if (!hasFetchedData.current){
            if(orders.length > 0){
                dispatch(resetOrders([]));
            }
            dispatch(getOrders());
            hasFetchedData.current = true;
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
                    {orders.length > 0 ?
                        <OrdersList />
                    :
                        <p>У вас пока нет заказов</p>
                    }
                </div>
            </div>
        </section>
    );
};

export default Orders;