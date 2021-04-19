import React from 'react';
import Header from './header/Header';
import Advantages from './advantages/Advantages';
import Stage from './stage/Stage';
import Economy from './economy/Economy';
import Guarantee from './guarantee/Guarantee';
import Footer from './footer/Footer';
import Login from './login/Login';
import Reg from './login/Reg';

const Landing = () => {

    const burgerHandler = () => {
        const burger = document.querySelector('.nav-landing__burger');
        const menu = document.querySelector('.menu-landing');
        window.scrollTo({top: 0, behavior: 'smooth'});

        let div = document.createElement('div');

        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';

        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        if(document.body.classList.length > 0){
            document.body.style.paddingRight = 0;
        }else{
            document.body.style.paddingRight = scrollWidth+'px';
        }

        document.body.classList.toggle('overflow-h');
        burger.classList.toggle('nav-landing__burger-active');
        menu.classList.toggle('menu-landing-active');
    };

    const loginPopupHandler = (e) =>{
        const enterPopup = document.querySelector('.enter-landing');
        e.preventDefault();
        enterPopup.classList.add('popup-landing-active');
        document.body.style.overflow = 'hidden';
    }

    const popupCloseHandler = (e) =>{
        e.preventDefault();
        const popup = document.querySelector('.popup-landing-active');
        popup.classList.remove('popup-landing-active');
        document.body.style.overflow = 'visible';
    }

    const regPopupHandler = (e) =>{
        e.preventDefault();
        const registerPopup = document.querySelector('.register-landing');
        const popup = document.querySelector('.popup-landing-active');
        registerPopup.classList.add('popup-landing-active');
        setTimeout(()=>popup.classList.remove('popup-landing-active'), 500);
    }
    
    return (
        <>
            <Header burgerHandler={burgerHandler} loginPopupHandler={loginPopupHandler}/>
            <Advantages />
            <Stage />
            <Economy />
            <Guarantee />
            <Footer />
            <Login popupClose={popupCloseHandler} regPopupHandler={regPopupHandler}/>
            <Reg popupClose={popupCloseHandler}/>
        </>
    );
};

export default Landing;