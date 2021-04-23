import React, { useEffect } from 'react';
import renderCalendar from './renderCalendar';

const Calendar = ({date, setSelectedDate}) => {
    
    const prevHandeler = () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar(date, setSelectedDate);
    };

    const nextHandler =  () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar(date, setSelectedDate);
    };

    useEffect(() => {
        renderCalendar(date, setSelectedDate);
    }, []);

    return (
        <div className="calendar">
            <div className="month">
                <p className="calendar__title">Срок сдачи</p>
                <div className="month__controller">
                    <svg onClick={prevHandeler} className="prev" width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.11099 8.0853L7.34117 14.7604C7.48526 14.9149 7.67762 15 7.88272 15C8.08783 15 8.28018 14.9149 8.42428 14.7604L8.88309 14.2689C9.18164 13.9487 9.18164 13.4282 8.88309 13.1084L3.65146 7.50311L8.88889 1.89157C9.03299 1.73706 9.11255 1.53109 9.11255 1.31145C9.11255 1.09158 9.03299 0.885603 8.88889 0.730969L8.43008 0.239633C8.28587 0.0851212 8.09363 1.04275e-06 7.88853 1.06068e-06C7.68342 1.07861e-06 7.49107 0.0851213 7.34697 0.239633L1.11099 6.9208C0.966551 7.0758 0.887219 7.28275 0.887674 7.50274C0.887219 7.7236 0.966551 7.93042 1.11099 8.0853Z" fill="#8E8D8D"/>
                    </svg>
                    <div className="date">
                        <h2>Месяц</h2>
                        <p>Год</p>
                    </div>
                    <svg onClick={nextHandler} className="next" width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.88901 6.9147L2.65883 0.239632C2.51474 0.0851213 2.32238 0 2.11728 0C1.91217 0 1.71982 0.0851213 1.57572 0.239632L1.11691 0.731092C0.818362 1.05133 0.818362 1.57182 1.11691 1.89157L6.34854 7.49689L1.11111 13.1084C0.967011 13.2629 0.887451 13.4689 0.887451 13.6885C0.887451 13.9084 0.967011 14.1144 1.11111 14.269L1.56992 14.7604C1.71413 14.9149 1.90637 15 2.11147 15C2.31658 15 2.50893 14.9149 2.65303 14.7604L8.88901 8.0792C9.03345 7.9242 9.11278 7.71725 9.11233 7.49726C9.11278 7.2764 9.03345 7.06958 8.88901 6.9147Z" fill="#8E8D8D"/>
                    </svg>
                </div>
            </div>
            <div className="calendar__body">
                <div className="weekdays">
                    <div>ПН</div>
                    <div>ВТ</div>
                    <div>СР</div>
                    <div>ЧТ</div>
                    <div>ПТ</div>
                    <div>СБ</div>
                    <div>ВС</div>
                </div>
                <div className="days">
                    <div className="days__row">
                        <div className="prev-date">28</div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                    </div>
                    <div className="days__row">
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                        <div>13</div>
                    </div>
                    <div className="days__row">
                        <div>14</div>
                        <div>15</div>
                        <div>16</div>
                        <div>17</div>
                        <div>18</div>
                        <div>19</div>
                        <div>20</div>
                    </div>
                    <div className="days__row">
                        <div>21</div>
                        <div>22</div>
                        <div>23</div>
                        <div>24</div>
                        <div>25</div>
                        <div>26</div>
                        <div>27</div>      
                    </div>
                    <div className="days__row">
                        <div>28</div>
                        <div>29</div>
                        <div className="today">30</div>
                        <div>31</div>
                        <div className="next-date">1</div>
                        <div className="next-date">2</div>
                        <div className="next-date">3</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;