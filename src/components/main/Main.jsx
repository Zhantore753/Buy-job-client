import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Support from './support/Support';
import SupportCreate from './support/SupportCreate';
import AccountSettings from './accountSettings/AccountSettings';
import PlacingOrder from './placingOrder/PlacingOrder';
import Orders from './orders/Orders';
import FindOrder from './findOrder/FindOrder';
import OrderDetail from './orderDetail/OrderDetail';
import UserProfile from './userProfile/UserProfile';
import Balance from './balance/Balance';

const Main = () => {
    const burgerHandler = () =>{
        const burger = document.querySelector('.nav__burger');
        const header = document.querySelector('.header');
        header.scrollTo({top: 0, behavior: 'smooth'});

        document.body.classList.toggle('overflow-h');
        burger.classList.toggle('nav__burger-active');
        header.classList.toggle('header-active');
    }

    return (
        <BrowserRouter>
            <div className="main-body">
                <Header burgerHandler={burgerHandler}/>
                <Switch>
                    <Route path="/support" component={Support}/>
                    <Route path="/support-create" component={SupportCreate}/>
                    <Route path="/account-settings" component={AccountSettings}/>
                    <Route path="/placing-order" component={PlacingOrder} />
                    <Route path="/orders" component={Orders}/>
                    <Route path="/find-order" component={FindOrder}/>
                    <Route path="/order-detail" component={OrderDetail}/>
                    <Route path="/user" component={UserProfile} />
                    <Route path="/balance" component={Balance} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default Main;