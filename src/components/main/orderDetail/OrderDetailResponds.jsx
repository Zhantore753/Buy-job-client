import React from 'react';

const OrderDetailResponds = () => {
    return (
        <div className="order-change__feedback-executors">
            <h2>Отклики</h2>
            <ul className="order-change__feedback-executors__list feedback-executors__list">
                <button>
                    <li className="feedback-executors__item feedback-executors__item-active">
                        <img className="feedback-executors__item-avatar" src="img/feedback__avatar.png" alt="feedback__avatar" />
                        <p className="feedback-executors__item-name">Ксения Галка Александровка</p>
                        <div className="feedback-executors__item-cost">
                            <p>Предложение:</p>
                            <p>1234 ₽</p>
                        </div>
                    </li>
                </button>
                <button>
                    <li className="feedback-executors__item">
                        <img className="feedback-executors__item-avatar" src="img/feedback__avatar.png" alt="feedback__avatar" />
                        <p className="feedback-executors__item-name">Ксения Галка Александровка</p>
                        <div className="feedback-executors__item-cost">
                            <p>Предложение:</p>
                            <p>1234 ₽</p>
                        </div>
                    </li>
                </button>
            </ul>
        </div>
    );
};

export default OrderDetailResponds;