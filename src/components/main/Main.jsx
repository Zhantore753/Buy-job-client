import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Header from './header/Header';
import Support from './support/Support';
import Footer from './footer/Footer';

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
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default Main;