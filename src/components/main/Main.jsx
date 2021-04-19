import React from 'react';
// import './main.css';
import Header from './header/Header';

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
        <div className="main-body">
            <Header burgerHandler={burgerHandler}/>
        </div>
    );
};

export default Main;