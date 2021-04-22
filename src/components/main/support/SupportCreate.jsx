import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {NavLink} from "react-router-dom";
import {createTicket} from '../../../actions/ticket';

const SupportCreate = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [valid, setValid] = useState([]);

    const createHandler = () => {
        setValid([])
        if(title.length < 4 || title.length > 51){
            setValid([false, 'Заголовок должен быть не меньше 4 и не больше 50 символов']);
            return;
        }
        if(description.length < 14 || description.length > 1000){
            setValid([false, 'Описание должно быть не меньше 14 и не больше 1000 символов']);
            return;
        }
        dispatch(createTicket(title, description, Date.now()));
        setDescription('');
        setTitle('');
        setValid([true, 'Тикет был создан']);
    }

    return (
        <section className="placing-order main">
            <div className="container">
                <div className="placing-order__inner">
                    <NavLink to="/support" className="placing-order__back">
                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7602 5.91716L9.3432 0.500008C9.18857 0.345375 8.98248 0.260498 8.76272 0.260498C8.54272 0.260498 8.33675 0.345497 8.18212 0.500008L7.69029 0.991955C7.53578 1.14634 7.45066 1.35256 7.45066 1.57244C7.45066 1.79219 7.53578 2.00536 7.69029 2.15975L10.8505 5.32692H0.810358C0.35768 5.32692 0 5.68131 0 6.13411V6.82959C0 7.28239 0.35768 7.67251 0.810358 7.67251H10.8864L7.69042 10.8574C7.5359 11.012 7.45078 11.2126 7.45078 11.4325C7.45078 11.6521 7.5359 11.8556 7.69042 12.0102L8.18224 12.5005C8.33687 12.6552 8.54285 12.7394 8.76284 12.7394C8.9826 12.7394 9.18869 12.6541 9.34333 12.4994L14.7603 7.08239C14.9153 6.92727 15.0006 6.7202 15 6.50008C15.0005 6.27923 14.9153 6.07204 14.7602 5.91716Z" fill="#3C4852"/>
                        </svg>
                    </NavLink>
                    <h1 className="placing-order__title placing-ticket__title">Создание тикета</h1>
                    <form className="placing-order__desc-col placing-ticket">
                        <label className="placing-order__description-label" htmlFor="title">Заголовок</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className="placing-ticket__input" id="title" placeholder="Заголовок"/>
                        <label className="placing-order__description-label" htmlFor="description">Опишите проблему</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="placing-order__description placing-ticket__description" name="description" id="description" cols="30" rows="10"></textarea>
                        <input className="placing-order__file" type="file" id="file" name="file" multiple />
                        <label htmlFor="file" className="placing-order__file-btn">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6891 1.68344C10.9443 -0.0614726 8.10503 -0.0614726 6.35989 1.68344L0.934674 7.10863C-0.311627 8.35507 -0.311545 10.3831 0.934838 11.6295C1.55808 12.2527 2.37648 12.5643 3.19521 12.5643C4.01372 12.5642 4.83255 12.2526 5.45569 11.6295L10.4286 6.65639C10.7909 6.29414 10.9905 5.81248 10.9906 5.30017C10.9906 4.78783 10.7911 4.3062 10.4287 3.94384C9.68082 3.19602 8.46391 3.19604 7.71617 3.94398L4.46404 7.19602C4.21437 7.44567 4.21437 7.8505 4.46399 8.1002C4.71364 8.34993 5.11846 8.34985 5.36816 8.1002L8.62032 4.84812C8.86961 4.59883 9.27518 4.59878 9.5245 4.84807C9.64525 4.96882 9.71177 5.12938 9.71177 5.30014C9.71177 5.47091 9.64527 5.63141 9.5245 5.75222L4.55151 10.7253C3.80364 11.4731 2.58684 11.4732 1.83901 10.7253C1.09119 9.97746 1.09114 8.7606 1.83888 8.01273L7.26407 2.58762C8.51056 1.34118 10.5386 1.34118 11.7849 2.58762C12.3888 3.19137 12.7213 3.99415 12.7213 4.84802C12.7213 5.70188 12.3887 6.50466 11.7849 7.10847L6.35981 12.5337C6.11016 12.7834 6.11016 13.1882 6.35987 13.4379C6.48472 13.5628 6.64834 13.6252 6.81194 13.6252C6.97557 13.6252 7.13919 13.5627 7.26404 13.4379L12.6891 8.01267C13.5344 7.16739 14 6.04351 14 4.84804C14 3.6526 13.5344 2.52872 12.6891 1.68344Z" fill="white"/>
                            </svg>
                            <span>Добавить файл</span>
                        </label>
                        <p className="placing-order__files">Добавленные файлы:</p>
                        <ul className="placing-order__addedfiles">
                            Ничего не было добавленно
                        </ul>
                    </form>
                    <div className="placing-order__desc-btn placing-ticket__btn">
                        <button onClick={createHandler}>Отправить вопрос</button>
                    </div>
                    {!valid[0] ?
                        <p className="reg-landing__error">{valid}</p>
                    :
                        <p className="reg-landing__success">{valid}</p>
                    }
                </div>
            </div>
        </section>
    );
};

export default SupportCreate;