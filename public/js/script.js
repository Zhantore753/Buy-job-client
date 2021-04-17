const enterBtn = document.querySelectorAll('.nav__list-btn');
const enterPopup = document.querySelector('.enter');
const registerPopup = document.querySelector('.register');
const popupCloses = document.querySelectorAll('.popup__close');
const regBtn = document.querySelector('#reg__open');
const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', ()=>{
    window.scrollTo(pageXOffset, 0);
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
    burger.classList.toggle('nav__burger-active');
    menu.classList.toggle('menu-active');
});

enterBtn.forEach(item=>{
    item.addEventListener('click', e=>{
        e.preventDefault();
        enterPopup.classList.add('popup-active');
        document.body.style.overflow = 'hidden';
    });
});

popupCloses.forEach(item=>{
    item.addEventListener('click', e=>{
        e.preventDefault();
        item.parentElement.parentElement.parentElement.classList.remove('popup-active');
        document.body.style.overflow = 'visible';
    });
});

regBtn.addEventListener('click', e=>{
    e.preventDefault();
    registerPopup.classList.add('popup-active');
    setTimeout(()=>regBtn.parentElement.parentElement.parentElement.parentElement.classList.remove('popup-active'), 500);
});