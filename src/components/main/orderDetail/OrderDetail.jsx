import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { setCurrentRespondByOrder, getFeedback } from '../../../actions/order';
import { setCurrentRespond, setMessage, setRate } from '../../../reducers/orderReducer';
import socket from '../../../socket';
import OrderDetailAccept from './OrderDetailAccept';
import OrderDetailChat from './OrderDetailChat';
import OrderDetailDesc from './OrderDetailDesc';
import OrderDetailFeedback from './OrderDetailFeedback';
import OrderDetailHead from './OrderDetailHead';
import OrderDetailResponds from './OrderDetailResponds';

const OrderDetail = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const currentOrder = useSelector(state => state.order.currentOrder);
    const currentRespond = useSelector(state => state.order.currentRespond);
    const rate = useSelector(state => state.order.rate);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMessage([]));
        if(currentRespond){
            socket.emit('ROOM:LEAVE', currentRespond._id);
        }
        dispatch(setCurrentRespond({}));
        if(currentOrder.executorRespond){
            dispatch(setCurrentRespondByOrder(currentOrder.executorRespond));
        }
    }, [currentOrder, dispatch]);

    useEffect(() => {
        dispatch(setRate({}));
        if(currentUser.role === 'freelancer' && currentOrder.execFeedback){
            dispatch(getFeedback(currentOrder.execFeedback));
        }else if(currentUser.role === 'customer' && currentOrder.userFeedback){
            dispatch(getFeedback(currentOrder.userFeedback));
        }else{
            dispatch(setRate({rating: 0}));
        }
    }, [currentOrder, dispatch]);

    return (
        <section className="order__exec main">
            <div className="container">
                <div className="order__exec__inner">
                    
                    <OrderDetailHead />
                    <div className="order__exec__details">
                        {currentUser.role === 'customer' && !currentOrder.executorRespond && currentOrder.status !== '?????????? ??????????????' ?
                            <Tabs className='order__tabs'>
                                <TabList className='order__tabs-btns'>
                                    <Tab className="order__tabs-btn" selectedClassName="order__tabs-btn-active">????????????????</Tab>
                                    <Tab className="order__tabs-btn" selectedClassName="order__tabs-btn-active">??????????????????????</Tab>
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
                        {currentOrder.status !== '?????????? ??????????????' &&
                            <div className="order-change__feedback-details">
                                {currentUser.role === 'customer' &&
                                    <OrderDetailAccept 
                                    isAccept={currentOrder.executorRespond}
                                    acceptedText={<p>{currentRespond.userFullName ? currentRespond.userFullName : currentRespond.userEmail} ?????? ???????????? ????: <span> {currentRespond.offer}  ???</span></p>}
                                    acceptText={<p>{currentRespond.userFullName ? currentRespond.userFullName : currentRespond.userEmail} ?????????? ?????????????? ???? ???????????? ????: <span> {currentRespond.offer}  ???</span></p>}
                                    isSureText={<p>???? ???????????????? ?????? ???????????????????? ?????????????????????? ???? {currentRespond.userFullName ? currentRespond.userFullName : currentRespond.userEmail}</p>}
                                    btnText='???????????? ????????????????????????'
                                    accept='respond'
                                    />
                                }
                                {currentUser.role === 'customer' && currentOrder.executorRespond &&
                                    <OrderDetailAccept 
                                    isAccept={currentOrder.status === '??????????????????'}
                                    acceptedText={<p>???????????? {currentRespond.userFullName ? currentRespond.userFullName : currentRespond.userEmail} ???????? ??????????????</p>}
                                    acceptText={<p>?????????????? ???????????? ???? {currentRespond.userFullName ? currentRespond.userFullName : currentRespond.userEmail}</p>}
                                    isSureText={<p>???? ???????????????? ?????? ???????????????????? ???????????? ???? {currentRespond.userFullName ? currentRespond.userFullName : currentRespond.userEmail}, ???????????? {currentRespond.offer}  ??? ?????????? ????????????????????</p>}
                                    btnText='?????????????? ????????????'
                                    accept='work'
                                    />
                                }
                                {currentUser.role === 'freelancer' && currentOrder.executorRespond &&
                                    <OrderDetailAccept 
                                    isAccept={true}
                                    acceptedText={<p className="reg-landing__success">???????? ?????????????????????? ???????? ??????????????</p>}
                                    />
                                }
                                {currentUser.role === 'freelancer' && currentOrder.executorRespond && currentOrder.status === '??????????????????' &&
                                    <OrderDetailAccept 
                                    isAccept={true}
                                    acceptedText={<p className="reg-landing__success">???????? ???????????? ???????? ??????????????</p>}
                                    />
                                }
                                {currentOrder.executorRespond && currentOrder.status === '??????????????????' && rate && rate.rating >= 0 &&
                                    <OrderDetailFeedback />
                                }
                                <OrderDetailChat />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderDetail;