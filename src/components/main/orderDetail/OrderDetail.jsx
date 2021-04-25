import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import OrderDetailDesc from './OrderDetailDesc';

const OrderDetail = () => {
    const currentOrder = useSelector(state => state.order.currentOrder);

    return (
        <section className="order__exec main">
            <div className="container">
                <div className="order__exec__inner">
                    <h1 className="order__exec__title">Заказ {currentOrder._id}</h1>
                    <div className="order__exec__card">
                        <div className="order__exec__card-col">
                            <p className="order__exec__card-title">{currentOrder.title}</p>
                            <p className="order__exec__card-subtitle">{currentOrder.subject}, {currentOrder.category}</p>
                        </div>
                        <div className="order__exec__card-col-2">
                            <div className="order__exec__card-time">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5287 10.0012L9.15844 8.22346V4.60227C9.15844 4.23816 8.86412 3.94385 8.50002 3.94385C8.13591 3.94385 7.8416 4.23816 7.8416 4.60227V8.55271C7.8416 8.76009 7.93905 8.95566 8.10497 9.07944L10.7386 11.0547C10.8571 11.1435 10.9954 11.1863 11.133 11.1863C11.3338 11.1863 11.5313 11.0961 11.6604 10.9223C11.879 10.6319 11.8197 10.2191 11.5287 10.0012Z" fill="#8E8D8D"/>
                                    <path d="M8.5 0C3.81281 0 0 3.81281 0 8.5C0 13.1872 3.81281 17 8.5 17C13.1872 17 17 13.1872 17 8.5C17 3.81281 13.1872 0 8.5 0ZM8.5 15.6832C4.5397 15.6832 1.3168 12.4603 1.3168 8.5C1.3168 4.5397 4.5397 1.3168 8.5 1.3168C12.461 1.3168 15.6832 4.5397 15.6832 8.5C15.6832 12.4603 12.4603 15.6832 8.5 15.6832Z" fill="#8E8D8D"/>
                                </svg>
                                <p>Сделать до {moment(currentOrder.deadline).format('L')}</p>
                            </div>
                            <p className="order__exec__card-cost">Предложение заказчка:  <span>{currentOrder.price}  ₽</span></p>
                        </div>
                    </div>
                    <div className="order__exec__details">
                        <OrderDetailDesc />
                        <div className="order__exec__details-dialog change__feedback-details__dialog">
                            <ul className="dialog__list">
                                <li className="dialog__item dialog__item-my">
                                    <div className="dialog__item-message">
                                        <div className="dialog__item-message-reply">
                                            <p>Максим</p>
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.84015 4.61144L6.2288 1.00001C6.12571 0.896917 5.98832 0.840332 5.84181 0.840332C5.69515 0.840332 5.55783 0.896998 5.45475 1.00001L5.12686 1.32797C5.02385 1.4309 4.96711 1.56837 4.96711 1.71496C4.96711 1.86146 5.02385 2.00357 5.12686 2.1065L7.23367 4.21795H0.540239C0.238453 4.21795 0 4.4542 0 4.75607V5.21973C0 5.52159 0.238453 5.78167 0.540239 5.78167H7.25757L5.12694 7.90491C5.02394 8.008 4.96719 8.14174 4.96719 8.28832C4.96719 8.43474 5.02394 8.57043 5.12694 8.67344L5.45483 9.00035C5.55791 9.10343 5.69523 9.15961 5.8419 9.15961C5.9884 9.15961 6.1258 9.1027 6.22888 8.99961L9.84023 5.38826C9.94356 5.28485 10.0004 5.1468 9.99999 5.00005C10.0003 4.85282 9.94356 4.71469 9.84015 4.61144Z" fill="#8E8D8D"/>
                                            </svg>                                        
                                            <p>Сергей Галка</p>
                                        </div>
                                        <div className="dialog__item-message-text">
                                            <p>
                                                Что думаете?
                                            </p>
                                            <span>
                                                12:20
                                            </span>
                                        </div>
                                    </div>
                                    <img className="dialog__item-avatar" src="img/dialog__avatar.png" alt="dialog__avatar" />
                                </li>
                                <li className="dialog__item">
                                    <img className="dialog__item-avatar" src="img/feedback__avatar.png" alt="dialog__avatar" />
                                    <div className="dialog__item-message">
                                        <div className="dialog__item-message-reply">
                                            <p>Максим</p>
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.84015 4.61144L6.2288 1.00001C6.12571 0.896917 5.98832 0.840332 5.84181 0.840332C5.69515 0.840332 5.55783 0.896998 5.45475 1.00001L5.12686 1.32797C5.02385 1.4309 4.96711 1.56837 4.96711 1.71496C4.96711 1.86146 5.02385 2.00357 5.12686 2.1065L7.23367 4.21795H0.540239C0.238453 4.21795 0 4.4542 0 4.75607V5.21973C0 5.52159 0.238453 5.78167 0.540239 5.78167H7.25757L5.12694 7.90491C5.02394 8.008 4.96719 8.14174 4.96719 8.28832C4.96719 8.43474 5.02394 8.57043 5.12694 8.67344L5.45483 9.00035C5.55791 9.10343 5.69523 9.15961 5.8419 9.15961C5.9884 9.15961 6.1258 9.1027 6.22888 8.99961L9.84023 5.38826C9.94356 5.28485 10.0004 5.1468 9.99999 5.00005C10.0003 4.85282 9.94356 4.71469 9.84015 4.61144Z" fill="#8E8D8D"/>
                                            </svg>                                        
                                            <p>Сергей Галка</p>
                                        </div>
                                        <div className="dialog__item-message-text">
                                            <p>
                                                Сервис "РыбаТекст.рф" генерирует заданное количество абзацев более-менее осмысленного текста на русском языке. 
                                            </p>
                                            <span>
                                                12:20
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="dialog__item">
                                    <img className="dialog__item-avatar" src="img/feedback__avatar.png" alt="dialog__avatar"/>
                                    <div className="dialog__item-message">
                                        <div className="dialog__item-message-reply">
                                            <p>Максим</p>
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.84015 4.61144L6.2288 1.00001C6.12571 0.896917 5.98832 0.840332 5.84181 0.840332C5.69515 0.840332 5.55783 0.896998 5.45475 1.00001L5.12686 1.32797C5.02385 1.4309 4.96711 1.56837 4.96711 1.71496C4.96711 1.86146 5.02385 2.00357 5.12686 2.1065L7.23367 4.21795H0.540239C0.238453 4.21795 0 4.4542 0 4.75607V5.21973C0 5.52159 0.238453 5.78167 0.540239 5.78167H7.25757L5.12694 7.90491C5.02394 8.008 4.96719 8.14174 4.96719 8.28832C4.96719 8.43474 5.02394 8.57043 5.12694 8.67344L5.45483 9.00035C5.55791 9.10343 5.69523 9.15961 5.8419 9.15961C5.9884 9.15961 6.1258 9.1027 6.22888 8.99961L9.84023 5.38826C9.94356 5.28485 10.0004 5.1468 9.99999 5.00005C10.0003 4.85282 9.94356 4.71469 9.84015 4.61144Z" fill="#8E8D8D"/>
                                            </svg>                                        
                                            <p>Сергей Галка</p>
                                        </div>
                                        <div className="dialog__item-message-text">
                                            <p>
                                                Сервис "РыбаТекст.рф" генерирует заданное количество абзацев более-менее осмысленного текста на русском языке. 
                                            </p>
                                            <span>
                                                12:20
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <form className="dialog__form">
                                <input className="dialog__form-file" type="file" id="file" name="file" multiple />
                                <label htmlFor="file" className="dialog__form-btn">
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.2209 2.28462C14.8529 -0.0834793 10.9997 -0.0834793 8.63128 2.28462L1.26849 9.64738C-0.422922 11.339 -0.42281 14.0913 1.26871 15.7828C2.11454 16.6287 3.22523 17.0515 4.33636 17.0514C5.44719 17.0513 6.55847 16.6285 7.40415 15.7828L14.1532 9.03362C14.6449 8.542 14.9157 7.88832 14.9158 7.19304C14.9158 6.49772 14.645 5.84407 14.1533 5.3523C13.1383 4.3374 11.4867 4.33743 10.4719 5.35249L6.05834 9.76598C5.7195 10.1048 5.7195 10.6542 6.05827 10.9931C6.39708 11.332 6.94648 11.3319 7.28536 10.9931L11.699 6.57955C12.0373 6.24122 12.5877 6.24114 12.9261 6.57947C13.09 6.74335 13.1803 6.96125 13.1803 7.193C13.1803 7.42475 13.09 7.64258 12.9261 7.80653L6.17706 14.5557C5.16208 15.5705 3.51071 15.5707 2.49581 14.5558C1.4809 13.5408 1.48083 11.8893 2.49562 10.8744L9.85838 3.51171C11.55 1.82012 14.3024 1.82012 15.9938 3.51171C16.8133 4.33109 17.2646 5.42058 17.2646 6.5794C17.2646 7.73821 16.8133 8.8277 15.9938 9.64715L8.63117 17.01C8.29236 17.3489 8.29236 17.8982 8.63125 18.2371C8.80069 18.4066 9.02275 18.4912 9.24478 18.4912C9.46684 18.4912 9.6889 18.4065 9.85834 18.2371L17.2209 10.8743C18.3682 9.72712 18.9999 8.20185 19 6.57943C19 4.95705 18.3682 3.43178 17.2209 2.28462Z" fill="#3C4852"/>
                                    </svg>
                                </label>
                                <textarea className="dialog__form-message" autoComplete="off" name="message" type="text" placeholder="Введите сообщение ..."></textarea>
                                <input className="dialog__form-sumbit" type="submit" value="Отправить" id="submit" />
                                <label htmlFor="submit" className="dialog__form-sumbit-btn">
                                    <p>Отправить</p>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0)">
                                        <path d="M6.19788 12.4751V15.7603C6.19788 15.9898 6.34521 16.1931 6.56337 16.2654C6.61792 16.2831 6.67387 16.2916 6.72912 16.2916C6.89487 16.2916 7.05495 16.2137 7.15695 16.0748L9.07865 13.4597L6.19788 12.4751Z" fill="#3C4852"/>
                                        <path d="M16.7764 0.0977887C16.6135 -0.0176697 16.3996 -0.033253 16.2225 0.0595387L0.285002 8.38245C0.0965851 8.48091 -0.0146235 8.68208 0.000959893 8.89387C0.0172516 9.10637 0.15821 9.28771 0.358669 9.35641L4.7893 10.8708L14.225 2.80291L6.92351 11.5997L14.349 14.1377C14.4042 14.1561 14.4623 14.166 14.5204 14.166C14.6167 14.166 14.7124 14.1398 14.7967 14.0888C14.9312 14.0066 15.0226 13.8685 15.046 13.7134L16.9939 0.609205C17.023 0.410872 16.9394 0.213955 16.7764 0.0977887Z" fill="#3C4852"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0">
                                        <rect width="17" height="17" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderDetail;