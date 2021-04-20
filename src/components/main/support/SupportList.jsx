import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../../../actions/ticket';

const SupportList = () => {
    const tickets = useSelector(state => state.ticket.tickets);
    const dispatch = useDispatch();
    const [ticketsCheck, setTicketsCheck] = useState(true);
    const [ticketsCount, setTicketsCount] = useState(-1);

    useEffect(() => {
        if(ticketsCount < tickets.length){
            setTicketsCount(tickets.length);
        }else{
            setTicketsCheck(false);
        }
    }, [tickets]);

    return (
        <>
            <ul className="support__list">
                {tickets.map(ticket =>
                    <li key={ticket._id} className="support__item">
                        <div className="support__item-col">
                            <h3 className="support__item-title">{ticket.title}</h3>
                            <p className="support__item-subtitle">{ticket.description}</p>
                        </div>
                        <div className="support__item-col">
                            {ticket.status === 'Исполнено' ?
                                <div className="support__item-status support__item-status-done">
                                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.586445 8.44638C0.40157 8.66172 0.311611 8.93584 0.33357 9.21917C0.355528 9.50251 0.485861 9.76034 0.701903 9.94451L5.94569 14.4396C6.14049 14.6061 6.38203 14.6953 6.63561 14.6953C6.66678 14.6953 6.69865 14.6939 6.73053 14.6911C7.0174 14.6656 7.27594 14.5288 7.45869 14.3071L16.4276 3.39101C16.6075 3.17142 16.6918 2.89517 16.6642 2.61255C16.6359 2.32992 16.5006 2.07492 16.281 1.8943L14.6391 0.545633C14.1864 0.174466 13.5164 0.239633 13.1438 0.692258L6.24107 9.0938L3.46724 6.71734C3.0224 6.33768 2.3509 6.38797 1.96911 6.8328L0.586445 8.44638Z" fill="#E1B26C"/>
                                    </svg>
                                    <p>{ticket.status}</p>
                                </div>
                            :
                                <div className="support__item-status">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5287 10.0012L9.15839 8.22346V4.60227C9.15839 4.23816 8.86408 3.94385 8.49997 3.94385C8.13587 3.94385 7.84155 4.23816 7.84155 4.60227V8.55271C7.84155 8.76009 7.939 8.95566 8.10492 9.07944L10.7385 11.0547C10.857 11.1435 10.9953 11.1863 11.1329 11.1863C11.3337 11.1863 11.5313 11.0961 11.6603 10.9223C11.879 10.6319 11.8197 10.2191 11.5287 10.0012Z" fill="#66B87A"/>
                                        <path d="M8.5 0C3.81281 0 0 3.81281 0 8.5C0 13.1872 3.81281 17 8.5 17C13.1872 17 17 13.1872 17 8.5C17 3.81281 13.1872 0 8.5 0ZM8.5 15.6832C4.5397 15.6832 1.3168 12.4603 1.3168 8.5C1.3168 4.5397 4.5397 1.3168 8.5 1.3168C12.461 1.3168 15.6832 4.5397 15.6832 8.5C15.6832 12.4603 12.4603 15.6832 8.5 15.6832Z" fill="#66B87A"/>
                                    </svg>
                                    <p>{ticket.status}</p>
                                </div>
                            }
                            <div className="support__item-date-t">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.8086 1.32812H13.2812V0.53125C13.2812 0.237867 13.0434 0 12.75 0C12.4566 0 12.2188 0.237867 12.2188 0.53125V1.32812H4.78125V0.53125C4.78125 0.237867 4.54342 0 4.25 0C3.95658 0 3.71875 0.237867 3.71875 0.53125V1.32812H2.19141C0.983045 1.32812 0 2.31117 0 3.51953V14.8086C0 16.017 0.983045 17 2.19141 17H14.8086C16.017 17 17 16.017 17 14.8086V3.51953C17 2.31117 16.017 1.32812 14.8086 1.32812ZM2.19141 2.39062H3.71875V2.92188C3.71875 3.21526 3.95658 3.45312 4.25 3.45312C4.54342 3.45312 4.78125 3.21526 4.78125 2.92188V2.39062H12.2188V2.92188C12.2188 3.21526 12.4566 3.45312 12.75 3.45312C13.0434 3.45312 13.2812 3.21526 13.2812 2.92188V2.39062H14.8086C15.4311 2.39062 15.9375 2.89704 15.9375 3.51953V4.78125H1.0625V3.51953C1.0625 2.89704 1.56891 2.39062 2.19141 2.39062ZM14.8086 15.9375H2.19141C1.56891 15.9375 1.0625 15.4311 1.0625 14.8086V5.84375H15.9375V14.8086C15.9375 15.4311 15.4311 15.9375 14.8086 15.9375Z" fill="#8E8D8D"/>
                                </svg>
                                <p>Дата запроса</p>
                            </div>
                            <div className="support__item-date">
                                <p>
                                    <span className="date__day">11</span>.
                                    <span className="date__month">02</span>.
                                    <span className="date__year">11</span>
                                </p>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
            {ticketsCheck &&
                <div className="support__load-more">
                    <button onClick={() => dispatch(getTickets(tickets.length))} className="support__head-btn">Загрузить еще</button>
                </div>
            }
        </>
    );
};

export default SupportList;