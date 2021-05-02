import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_URL } from '../../../config';
import avatarLogo from '../../../img/avatarlogo.svg';
import ReactStars from "react-rating-stars-component";

const ProfileRating = ({stars}) => {
    const selectedUser = useSelector(state => state.user.selectedUser);

    const [starKeyForce, setStarKeyForce] = useState(0)

    useEffect(() => {
        setStarKeyForce(prev => prev + 1)
    }, [ stars ]);

    const avatar = selectedUser.avatar ? `${API_URL +  selectedUser.avatar}` : avatarLogo;

    return (
        <div className="executor__rating">
            <div className="executor__rating-name">
                <img className="order__detail-avatar" src={avatar} alt="executor__avatar" />
                <p>{selectedUser.fullName ? selectedUser.fullName : selectedUser.email}</p>
            </div>
            <div className="executor__rating-average">
                <p>Рейтинг <span> {selectedUser.rating}</span></p>
                <div className="executor__rating-average-general">
                    {stars >= 0 &&
                        <div className="executor__rating-average-stars">
                            <ReactStars
                                key={starKeyForce}
                                size={16}
                                count={5}
                                color="#D5E5E7"
                                activeColor="#66B87A"
                                value={stars}
                                edit={false}
                                isHalf={true}
                                emptyIcon={<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#D5E5E7"/>
                                </svg>}
                                halfIcon={<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5149 0.557434C6.88172 -0.185812 7.94156 -0.185811 8.30838 0.557435L9.82404 3.62843C9.96964 3.92358 10.2512 4.12814 10.5769 4.17547L13.9659 4.66793C14.7862 4.78712 15.1137 5.79509 14.5202 6.37362L12.0678 8.76406C11.8321 8.9938 11.7246 9.3248 11.7802 9.64919L12.3591 13.0245C12.4993 13.8414 11.6418 14.4644 10.9082 14.0787L7.87698 12.485C7.58566 12.3319 7.23762 12.3319 6.9463 12.485L3.91504 14.0787C3.18142 14.4644 2.32399 13.8414 2.4641 13.0245L3.04301 9.64919C3.09865 9.3248 2.9911 8.9938 2.75542 8.76406L0.303081 6.37362C-0.290436 5.79509 0.037075 4.78712 0.857291 4.66793L4.24634 4.17547C4.57205 4.12814 4.85361 3.92358 4.99928 3.62843L6.5149 0.557434Z" fill="#66B87A"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.41162 12.3702V1.82127e-10C7.76829 -6.71721e-06 8.12497 0.185805 8.30838 0.557435L9.82404 3.62843C9.96964 3.92358 10.2512 4.12814 10.5769 4.17547L13.9659 4.66793C14.7862 4.78712 15.1137 5.79509 14.5202 6.37362L12.0678 8.76406C11.8321 8.9938 11.7246 9.3248 11.7802 9.64919L12.3591 13.0245C12.4993 13.8414 11.6418 14.4644 10.9082 14.0787L7.87698 12.485C7.73131 12.4085 7.57147 12.3702 7.41162 12.3702Z" fill="#D5E5E7"/>
                                </svg>}
                                filledIcon={<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#66B87A"/>
                                </svg>}
                                disabled={true}
                            />
                        </div>
                    }
                    <p>({selectedUser.ratingCount} отзыва(-ов))</p>
                </div>
            </div>
            <ul className="executor__rating-orders">
                <li className="executor__rating-order">
                    <p className="executor__rating-order-id">Заказ № 123334455</p>
                    <div className="executor__rating-order-general">
                        <div className="executor__rating-order-stars">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#66B87A"/>
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#66B87A"/>
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#66B87A"/>
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#66B87A"/>
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5149 0.557434C6.88172 -0.185812 7.94156 -0.185811 8.30838 0.557435L9.82404 3.62843C9.96964 3.92358 10.2512 4.12814 10.5769 4.17547L13.9659 4.66793C14.7862 4.78712 15.1137 5.79509 14.5202 6.37362L12.0678 8.76406C11.8321 8.9938 11.7246 9.3248 11.7802 9.64919L12.3591 13.0245C12.4993 13.8414 11.6418 14.4644 10.9082 14.0787L7.87698 12.485C7.58566 12.3319 7.23762 12.3319 6.9463 12.485L3.91504 14.0787C3.18142 14.4644 2.32399 13.8414 2.4641 13.0245L3.04301 9.64919C3.09865 9.3248 2.9911 8.9938 2.75542 8.76406L0.303081 6.37362C-0.290436 5.79509 0.037075 4.78712 0.857291 4.66793L4.24634 4.17547C4.57205 4.12814 4.85361 3.92358 4.99928 3.62843L6.5149 0.557434Z" fill="#66B87A"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.41162 12.3702V1.82127e-10C7.76829 -6.71721e-06 8.12497 0.185805 8.30838 0.557435L9.82404 3.62843C9.96964 3.92358 10.2512 4.12814 10.5769 4.17547L13.9659 4.66793C14.7862 4.78712 15.1137 5.79509 14.5202 6.37362L12.0678 8.76406C11.8321 8.9938 11.7246 9.3248 11.7802 9.64919L12.3591 13.0245C12.4993 13.8414 11.6418 14.4644 10.9082 14.0787L7.87698 12.485C7.73131 12.4085 7.57147 12.3702 7.41162 12.3702Z" fill="#D5E5E7"/>
                            </svg>
                        </div>
                        <p>Предмет, Тип задачи</p>
                    </div>
                    <p className="executor__rating-order-text">Сервис "РыбаТекст.рф" генерирует заданное количество абзацев более-менее осмысленного текста </p>
                    <a className="executor__rating-order-btn" href="#">Читать весь отзыв</a>
                </li>
                <li className="executor__rating-order">
                    <p className="executor__rating-order-id">Заказ № 123334455</p>
                    <div className="executor__rating-order-general">
                        <div className="executor__rating-order-stars">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#66B87A"/>
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#66B87A"/>
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#66B87A"/>
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#66B87A"/>
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5149 0.557434C6.88172 -0.185812 7.94156 -0.185811 8.30838 0.557435L9.82404 3.62843C9.96964 3.92358 10.2512 4.12814 10.5769 4.17547L13.9659 4.66793C14.7862 4.78712 15.1137 5.79509 14.5202 6.37362L12.0678 8.76406C11.8321 8.9938 11.7246 9.3248 11.7802 9.64919L12.3591 13.0245C12.4993 13.8414 11.6418 14.4644 10.9082 14.0787L7.87698 12.485C7.58566 12.3319 7.23762 12.3319 6.9463 12.485L3.91504 14.0787C3.18142 14.4644 2.32399 13.8414 2.4641 13.0245L3.04301 9.64919C3.09865 9.3248 2.9911 8.9938 2.75542 8.76406L0.303081 6.37362C-0.290436 5.79509 0.037075 4.78712 0.857291 4.66793L4.24634 4.17547C4.57205 4.12814 4.85361 3.92358 4.99928 3.62843L6.5149 0.557434Z" fill="#66B87A"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.41162 12.3702V1.82127e-10C7.76829 -6.71721e-06 8.12497 0.185805 8.30838 0.557435L9.82404 3.62843C9.96964 3.92358 10.2512 4.12814 10.5769 4.17547L13.9659 4.66793C14.7862 4.78712 15.1137 5.79509 14.5202 6.37362L12.0678 8.76406C11.8321 8.9938 11.7246 9.3248 11.7802 9.64919L12.3591 13.0245C12.4993 13.8414 11.6418 14.4644 10.9082 14.0787L7.87698 12.485C7.73131 12.4085 7.57147 12.3702 7.41162 12.3702Z" fill="#D5E5E7"/>
                            </svg>
                        </div>
                        <p>Предмет, Тип задачи</p>
                    </div>
                    <p className="executor__rating-order-text">Сервис "РыбаТекст.рф" генерирует заданное количество абзацев более-менее осмысленного текста </p>
                    <a className="executor__rating-order-btn" href="#">Читать весь отзыв</a>
                </li>
                <li className="executor__rating-order">
                    <p className="executor__rating-order-id">Заказ № 123334455</p>
                    <div className="executor__rating-order-general">
                        <div className="executor__rating-order-stars">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#66B87A"/>
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#66B87A"/>
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#66B87A"/>
                            </svg>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.10328 0.8172C7.4701 0.0739537 8.52994 0.0739546 8.89676 0.817201L10.4124 3.88819C10.558 4.18334 10.8396 4.3879 11.1653 4.43523L14.5543 4.92769C15.3746 5.04689 15.7021 6.05485 15.1086 6.63338L12.6562 9.02382C12.4205 9.25356 12.313 9.58456 12.3686 9.90895L12.9475 13.2843C13.0877 14.1012 12.2302 14.7242 11.4966 14.3385L8.46536 12.7448C8.17404 12.5917 7.826 12.5917 7.53468 12.7448L4.50342 14.3385C3.7698 14.7242 2.91237 14.1012 3.05248 13.2843L3.63139 9.90895C3.68703 9.58456 3.57948 9.25356 3.3438 9.02382L0.89146 6.63338C0.297943 6.05485 0.625454 5.04689 1.44567 4.92769L4.83472 4.43523C5.16043 4.3879 5.44199 4.18334 5.58766 3.88819L7.10328 0.8172Z" fill="#66B87A"/>
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5149 0.557434C6.88172 -0.185812 7.94156 -0.185811 8.30838 0.557435L9.82404 3.62843C9.96964 3.92358 10.2512 4.12814 10.5769 4.17547L13.9659 4.66793C14.7862 4.78712 15.1137 5.79509 14.5202 6.37362L12.0678 8.76406C11.8321 8.9938 11.7246 9.3248 11.7802 9.64919L12.3591 13.0245C12.4993 13.8414 11.6418 14.4644 10.9082 14.0787L7.87698 12.485C7.58566 12.3319 7.23762 12.3319 6.9463 12.485L3.91504 14.0787C3.18142 14.4644 2.32399 13.8414 2.4641 13.0245L3.04301 9.64919C3.09865 9.3248 2.9911 8.9938 2.75542 8.76406L0.303081 6.37362C-0.290436 5.79509 0.037075 4.78712 0.857291 4.66793L4.24634 4.17547C4.57205 4.12814 4.85361 3.92358 4.99928 3.62843L6.5149 0.557434Z" fill="#66B87A"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.41162 12.3702V1.82127e-10C7.76829 -6.71721e-06 8.12497 0.185805 8.30838 0.557435L9.82404 3.62843C9.96964 3.92358 10.2512 4.12814 10.5769 4.17547L13.9659 4.66793C14.7862 4.78712 15.1137 5.79509 14.5202 6.37362L12.0678 8.76406C11.8321 8.9938 11.7246 9.3248 11.7802 9.64919L12.3591 13.0245C12.4993 13.8414 11.6418 14.4644 10.9082 14.0787L7.87698 12.485C7.73131 12.4085 7.57147 12.3702 7.41162 12.3702Z" fill="#D5E5E7"/>
                            </svg>
                        </div>
                        <p>Предмет, Тип задачи</p>
                    </div>
                    <p className="executor__rating-order-text">Сервис "РыбаТекст.рф" генерирует заданное количество абзацев более-менее осмысленного текста </p>
                    <a className="executor__rating-order-btn" href="#">Читать весь отзыв</a>
                </li>
            </ul>
            <a className="executor__rating-orders-more-btn" href="#">Показать ещё отзывы</a>
        </div>
    );
};

export default ProfileRating;