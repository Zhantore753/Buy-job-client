import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { setCurrentRespondByOrder } from '../../../actions/order';
import { setCurrentRespond, setMessage } from '../../../reducers/orderReducer';
import socket from '../../../socket';
import OrderDetailAccept from './OrderDetailAccept';
import OrderDetailChat from './OrderDetailChat';
import OrderDetailDesc from './OrderDetailDesc';
import OrderDetailHead from './OrderDetailHead';
import OrderDetailResponds from './OrderDetailResponds';

const OrderDetail = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const currentOrder = useSelector(state => state.order.currentOrder);
    const currentRespond = useSelector(state => state.order.currentRespond);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMessage([]));
        try{
            if(currentRespond._id){
                socket.emit('ROOM:LEAVE', currentRespond._id);
            }
        }catch(e){}
        dispatch(setCurrentRespond({}));
        if(currentOrder.executorRespond){
            dispatch(setCurrentRespondByOrder(currentOrder.executorRespond));
        }
    }, [currentOrder]);

    return (
        <section className="order__exec main">
            <div className="container">
                <div className="order__exec__inner">
                    
                    <OrderDetailHead />
                    <div className="order__exec__details">
                        {currentUser.role === 'customer' && !currentOrder.executorRespond ?
                            <Tabs className='order__tabs'>
                                <TabList className='order__tabs-btns'>
                                    <Tab className="order__tabs-btn" selectedClassName="order__tabs-btn-active">Описание</Tab>
                                    <Tab className="order__tabs-btn" selectedClassName="order__tabs-btn-active">Предложения</Tab>
                                </TabList>

                                <TabPanel>
                                    <OrderDetailDesc />
                                </TabPanel>
                                <TabPanel>
                                    <OrderDetailResponds />
                                </TabPanel>
                            </Tabs>
                        :
                            <OrderDetailDesc />
                        }
                        <div className="order-change__feedback-details">
                            {currentUser.role === 'customer' &&
                                <OrderDetailAccept />
                            }
                            <OrderDetailChat />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderDetail;