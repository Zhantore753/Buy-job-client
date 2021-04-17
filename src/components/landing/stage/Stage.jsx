import React from 'react';

const Stage = () => {
    return (
        <section className="stage">
            <div className="container">
                <div className="stage__inner">
                    <h2 className="stage__title title">Этапы работы</h2>
                    <ul className="stage__list">
                        <li className="stage__item">
                            <img src="img/stage__1.png" alt="stage1"/>
                            <p><span>1.</span> Размещаете заказ</p>
                        </li>
                        <li className="stage__item">
                            <img src="img/stage__2.png" alt="stage2"/>
                            <p><span>2.</span> Мы подбираем исполнителей</p>
                        </li>
                        <li className="stage__item">
                            <img src="img/stage__3.png" alt="stage3"/>
                            <p><span>3.</span> Вы сами выбираете наиболее подходящего исполнителя</p>
                        </li>
                        <li className="stage__item">
                            <img src="img/stage__4.png" alt="stage4"/>
                            <p><span>4.</span> Договариваетесь с испольтелем о цене и сроках</p>
                        </li>
                        <li className="stage__item">
                            <img src="img/stage__5.png" alt="stage5"/>
                            <p><span>5.</span> Оплачиваете заказ</p>
                        </li>
                        <li className="stage__item">
                            <img src="img/stage__6.png" alt="stage6"/>
                            <p><span>6.</span> Получаете работу</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Stage;