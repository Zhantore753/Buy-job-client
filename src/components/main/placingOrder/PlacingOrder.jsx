import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../../actions/order';
import Calendar from './Calendar';
import filesRender from './renderFiles';

const PlacingOrder = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState(0);
    const [subject, setSubject] = useState('');
    const [title, setTitle] = useState('');
    const [selectedDate, setSelectedDate] = useState();
    const [price, setPrice] = useState('');
    const [keyWords, setKeyWords] = useState('');
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState([]);
    const [valid, setValid] = useState([false, '']);
    const [disabledBtn, setDisabledBtn] = useState(false);
    const date = new Date();

    const offValidByTime = () =>{
        setDisabledBtn(true);
        setTimeout(() => {
            setValid(false);
            setDisabledBtn(false);
        }, 3000);
    }
    
    function changeFilesHandler(e) {
        const inputFiles = e.target.files;
        if(inputFiles.length < 1){
            setValid([true, 'Вы ничего не выбрали']);
            offValidByTime();
            return;
        }
        if(inputFiles.length > 10){
            setValid([true, 'Нельзя выбрать больше 10 файлов']);
            offValidByTime();
            return;
        }
        const fileArr = [];

        const addedFilesWrapper = document.querySelector('.placing-order__addedfiles');
        for(let i = 0; i < inputFiles.length; i++){
            fileArr.push(inputFiles[i]);
        }

        filesRender(fileArr, addedFilesWrapper, setFiles);
    }

    const createOrderHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if(!category){
            setValid([true, 'Вы не выбрали категорию']);
            offValidByTime();
            return;
        }
        if(!subject){
            setValid([true, 'Вы не написали предмет']);
            offValidByTime();
            return;
        }
        if(!title || title.length < 5){
            setValid([true, 'Заголовок должен быть больше 5 символов']);
            offValidByTime();
            return;
        }
        let d = new Date();
        if(!selectedDate || selectedDate.getTime() < d.getTime()){
            d.setDate(d.getDate() + 1);
            setValid([true, `Нельзя выбрать дату раньше чем ${d.getDate()}.${d.getMonth() + 1}`]);
            offValidByTime();
            return;
        }
        if(!price || price < 100){
            setValid([true, 'Нельзя указать цену ниже 100']);
            offValidByTime();
            return;
        }
        if(!description || description.length < 20 || description.length > 2000){
            setValid([true, 'Описание должно быть больше 20 и меньше 2000 символов']);
            offValidByTime();
            return;
        }
        let keys = [];
        if(keyWords){
            keyWords.toLowerCase();
            keys = keyWords.split(' ');
        }
        dispatch(createOrder(category, subject, title, selectedDate, price, keys, description, files))
        .then(async res =>{
            await setValid(res);
        });
        offValidByTime();

        setCategory('');
        setSubject('');
        setTitle('');
        setSelectedDate();
        setPrice('');
        setKeyWords('');
        setDescription('');
        setFiles([]);
    }
    
    return (
        <section className="placing-order main">
            <div className="container">
                <div className="placing-order__inner">
                    <h1 className="placing-order__title">Размещение заказа</h1>
                    <form className="placing-order__form">
                        <div className="placing-order__desc-col">

                            <label htmlFor="type-select">Категория работы</label>
                            <div className="custom-select">
                                <select value={category} onChange={e => setCategory(e.target.value)} name="type" className="placing-order__form-type" id="type-select">
                                    <option value={0} hidden disabled defaultValue>Категория</option>
                                    <option value='Программирование'>Программирование</option>
                                    <option value='Дизайн/Арт'>Дизайн/Арт</option>
                                    <option value='Услуги'>Услуги</option>
                                    <option value='Аудио/Видео'>Аудио/Видео</option>
                                    <option value='Продвижение'>Продвижение</option>
                                    <option value='Архитектура/инжиниринг'>Архитектура/инжиниринг</option>
                                    <option value='Мобильные приложения'>Мобильные приложения</option>
                                    <option value='Администрирование'>Администрирование</option>
                                    <option value='Аутсорсинг и консалтинг'>Аутсорсинг и консалтинг</option>
                                    <option value='Переводы'>Переводы</option>
                                </select>
                            </div>

                            <label htmlFor="subject">Предмет</label>
                            <input 
                            value={subject} 
                            onChange={e => setSubject(e.target.value)} 
                            name="subject" type="text" id="subject" 
                            className="placing-order__form-subject" 
                            placeholder="Введите ваш предмет" 
                            />

                            <label htmlFor="title">Название</label>
                            <input 
                            value={title} 
                            onChange={e => setTitle(e.target.value)}
                            name="title" type="text" id="title" 
                            className="placing-order__form-title" 
                            placeholder="Введите название" 
                            />
                            
                            <Calendar date={date} setSelectedDate={setSelectedDate}/>

                            <label htmlFor="cost">Цена</label>
                            <input 
                            min={0}
                            max={1000000}
                            value={price} 
                            onChange={e => setPrice(e.target.value)}
                            name="cost" type="number" id="cost" 
                            className="placing-order__form-cost" 
                            placeholder="Введите вашу цену" 
                            />

                            <label htmlFor="originality">Ключевые слова(через пробел)</label>
                            <input 
                            value={keyWords} 
                            onChange={e => setKeyWords(e.target.value)}
                            name="originality" type="text" id="originality" 
                            className="placing-order__form-originality" 
                            placeholder="Ключевые слова(через пробел)" 
                            />

                        </div>
                        <div className="placing-order__desc-col">
                            <label className="placing-order__description-label" htmlFor="description">Описание работы</label>
                            <textarea 
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className="placing-order__description" 
                            name="description" id="description" cols="30" rows="10"
                            ></textarea>

                            <input onChange={e => changeFilesHandler(e)} className="placing-order__file" type="file" id="file" name="file" multiple />
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

                        </div>
                        <div className="placing-order__desc-btn">
                            <button onClick={e => createOrderHandler(e)} disabled={disabledBtn}>Разместить заказ</button>
                        </div>
                        {valid[0] === 200 ?
                            <p className="reg-landing__success">{valid[1]}</p>
                        :
                            <p className="reg-landing__error">{valid[1]}</p>
                        }
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PlacingOrder;