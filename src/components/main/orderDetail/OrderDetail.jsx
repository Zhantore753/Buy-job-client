import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderDetailChat from './OrderDetailChat';
import OrderDetailDesc from './OrderDetailDesc';
import OrderDetailHead from './OrderDetailHead';
import OrderDetailResponds from './OrderDetailResponds';

const OrderDetail = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const currentRespond = useSelector(state => state.order.currentRespond);

    return (
        <section className="order__exec main">
            <div className="container">
                <div className="order__exec__inner">
                    
                    <OrderDetailHead />
                    <div className="order__exec__details">
                        {currentUser.role === 'customer' ?
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
                        
                        <OrderDetailChat />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderDetail;