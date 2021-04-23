import React from 'react';

const Orders = () => {
    return (
        <section class="orders main">
            <div class="container">
                <div class="orders__inner">
                    <div class="orders__head support__head">
                        <h1 class="orders__head-title support__head-title">Мои заказы</h1>
                    </div>
                    <ul class="orders__list support__list">
                        <a href="order__change.html">
                            <li class="orders__item orders__item-search support__item">
                                <div class="orders__item-col support__item-col">
                                    <h3 class="orders__item-title support__item-title">Название заказа</h3>
                                    <p class="orders__item-subtitle support__item-subtitle">Предмет, Тип задачи</p>
                                </div>
                                <div class="orders__item-col support__item-col">
                                    <div class="orders__item-status support__item-status">
                                        <p>Подбор исполнителей</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                        <a href="order__change.html">
                            <li class="orders__item orders__item-done support__item">
                                <div class="orders__item-col support__item-col">
                                    <h3 class="orders__item-title support__item-title">Название заказа</h3>
                                    <p class="orders__item-subtitle support__item-subtitle">Предмет, Тип задачи</p>
                                </div>
                                <div class="orders__item-col support__item-col">
                                    <div class="orders__item-cost">
                                        <p><span>Цена: </span>1234 ₽</p>
                                    </div>
                                    <div class="orders__item-executor">
                                        <p>Исполнитель: НИК</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                        <a href="order__change.html">
                            <li class="orders__item orders__item-done support__item">
                                <div class="orders__item-col support__item-col">
                                    <h3 class="orders__item-title support__item-title">Название заказа</h3>
                                    <p class="orders__item-subtitle support__item-subtitle">Предмет, Тип задачи</p>
                                </div>
                                <div class="orders__item-col support__item-col">
                                    <div class="orders__item-cost">
                                        <p><span>Цена: </span>1234 ₽</p>
                                    </div>
                                    <div class="orders__item-executor">
                                        <p>Исполнитель: НИК</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                        <a href="order__change.html">
                            <li class="orders__item orders__item-cancel support__item">
                                <div class="orders__item-col support__item-col">
                                    <h3 class="orders__item-title support__item-title">Название заказа</h3>
                                    <p class="orders__item-subtitle support__item-subtitle">Предмет, Тип задачи</p>
                                </div>
                                <div class="orders__item-col support__item-col">
                                    <div class="orders__item-status orders__item-status-search support__item-status">
                                        <p>Заказ отменён</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                        <a href="order__change.html">
                            <li class="orders__item orders__item-done support__item">
                                <div class="orders__item-col support__item-col">
                                    <h3 class="orders__item-title support__item-title">Название заказа</h3>
                                    <p class="orders__item-subtitle support__item-subtitle">Предмет, Тип задачи</p>
                                </div>
                                <div class="orders__item-col support__item-col">
                                    <div class="orders__item-cost">
                                        <p><span>Цена: </span>1234 ₽</p>
                                    </div>
                                    <div class="orders__item-executor">
                                        <p>Исполнитель: НИК</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                        <a href="order__change.html">
                            <li class="orders__item orders__item-done support__item">
                                <div class="orders__item-col support__item-col">
                                    <h3 class="orders__item-title support__item-title">Название заказа</h3>
                                    <p class="orders__item-subtitle support__item-subtitle">Предмет, Тип задачи</p>
                                </div>
                                <div class="orders__item-col support__item-col">
                                    <div class="orders__item-cost">
                                        <p><span>Цена: </span>1234 ₽</p>
                                    </div>
                                    <div class="orders__item-executor">
                                        <p>Исполнитель: НИК</p>
                                    </div>
                                </div>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Orders;