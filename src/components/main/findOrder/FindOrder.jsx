import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findOrder } from '../../../actions/order';
import FindOrderList from './FindOrderList';

const FindOrder = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.findOrders);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState(0);
    const [ordersCheck, setOrdersCheck] = useState(true);

    const loadOrders = useCallback((findCategory, findSearch) => {
        if(orders.length === 0){
            dispatch(findOrder(0, findCategory, findSearch, 'set'));
        }
    }, [dispatch, orders.length]);

    useEffect(()=>{
        loadOrders(category, search);
    }, [loadOrders, category, search]);

    useEffect(() => {
        dispatch(findOrder(0, category, search, 'set'));
        setOrdersCheck(true);
    }, [category, search, dispatch]);

    const searchHandler = async (e) => {
        setSearch(e.target.value);
    }

    return (
        <section className="search main">
            <div className="container">
                <div className="search__inner">
                    <div className="search__header">
                        <h1 className="search__title">Новые заказы</h1>
                        <form className="search__filter" >
                            <input placeholder="Поиск" className="search__filter-seacrh" value={search} onChange={e => searchHandler(e)} type="text"/>
                            <div className="custom-select-search custom-select">
                                <select value={category} onChange={e => setCategory(e.target.value)} name="type" className="placing-order__form-type" id="type-select">
                                    <option style={{background: '#ccc'}} value={0} defaultValue>Категория</option>
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
                        </form>
                    </div>
                    <FindOrderList ordersCheck={ordersCheck} setOrdersCheck={setOrdersCheck} search={search} category={category}/>
                </div>
            </div>
        </section>
    );
};

export default FindOrder;