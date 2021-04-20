import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Support from './support/Support';
import SupportCreate from './support/SupportCreate';

const Main = () => {
    const burgerHandler = () =>{
        const burger = document.querySelector('.nav__burger');
        const header = document.querySelector('.header');
        const body = document.querySelector('.main-body');

        body.classList.toggle('overflow-h');
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
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default Main;