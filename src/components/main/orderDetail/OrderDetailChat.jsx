import moment from 'moment';
import React, { useEffect, useRef, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages, downloadFile, getMessages } from '../../../actions/order';
import socket from '../../../socket'
import 'moment/locale/ru';
import avatarLogo from '../../../img/avatarlogo.svg';
import { API_URL } from '../../../config';
import Loader from 'react-loader';
import InfiniteScroll from "react-infinite-scroll-component";
import { addInputMessage, setDisabledChooseRespond } from '../../../reducers/orderReducer';
import SocketIOFileUpload from 'socketio-file-upload';

const OrderDetailChat = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const currentRespond = useSelector(state => state.order.currentRespond);
    const currentCustomer = useSelector(state => state.order.currentCustomer);
    const messages = useSelector(state => state.order.messages);
    const hasMore = useSelector(state => state.order.hasMoreMessages);
    const [message, setMessage] = useState('');
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const messageEl = useRef(null);
    const [valid, setValid] = useState([false, '']);
    const [disabledBtn, setDisabledBtn] = useState(false);

    const chatScrollToBottom = () => {
        if (messageEl && messageEl.current) {
            messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight});
            });
        }
    }

    useEffect(() => {
        if(socket){
            socket.removeAllListeners();
        }
        if(currentRespond && currentRespond._id && messages.length < 1){
            dispatch(setDisabledChooseRespond(true));
            setLoaded(false);
            socket.emit('ROOM:JOIN', ({roomId: currentRespond._id, userId: currentUser.id}));
            dispatch(getMessages(currentRespond._id, messages.length))
            .then(() => {
                setLoaded(true);
                dispatch(setDisabledChooseRespond(false));
            });
            chatScrollToBottom();
        }
        if(socket){
            socket.on('NEW_MESSAGE', ({room, text, user, time, files}) => {
                const newMessage ={
                    room, text, user, time, files
                }
                dispatch(addInputMessage([newMessage]));
            });
            socket.on('FILE_UPLOAD_ERROR', (message) => {
                setValid([true, message]);
                offValidByTime();
            });
            socket.on('FILE_UPLOAD_SUCCESS', ({message}) => {
                setValid([200, message]);
                offValidByTime();
            });
            socket.on('NEW_FILE_MESSAGE', ({message, file}) => {
                console.log(message);
                console.log(file);
                dispatch(addInputMessage([message]));
            });
        }
        if(socket && document.getElementById("siofu_input")){
            const siofu = new SocketIOFileUpload(socket);
            siofu.listenOnInput(document.getElementById("siofu_input"));
        }
    }, [currentRespond, socket]);

    const submitMessageHandler = (e) => {
        e.preventDefault();
        if(message){
            const room = currentRespond._id;
            const obj = {
                room, 
                text: message,
                user: currentUser.id,
                time: Date.now(),
                files: []
            }
            
            socket.emit('NEW_MESSAGE', obj);
            dispatch(addInputMessage([obj]));
            setMessage('');
        }
    }

    const loadMoreHandler = () => {
        dispatch(addMessages(currentRespond._id, messages.length))
    }

    function offValidByTime(){
        setDisabledBtn(true);
        setTimeout(() => {
            setValid(false);
            setDisabledBtn(false);
        }, 3000);
    }

    return (
        <div className="order__exec__details-dialog change__feedback-details__dialog">
        {currentRespond && currentRespond._id ?
            <>
            <Loader loaded={loaded}>
            <ul id="scrollableDiv" ref={messageEl} className="dialog__list"
             style={{
                display: 'flex',
                flexDirection: 'column-reverse',
              }}>
                
                <InfiniteScroll
                    dataLength={messages.length}
                    next={() => loadMoreHandler()}
                    style={{ display: 'flex', flexDirection: 'column-reverse', overflow: 'unset' }}
                    inverse={true}
                    hasMore={hasMore}
                    loader={<h4>{currentRespond ? 'Загрузка...' : 'Выберите отклик(предложение) для просмотра чата'}</h4>}
                    scrollableTarget="scrollableDiv"
                >
                {messages.map((currentMessage, index) => {
                    let sender;
                    let classes = 'dialog__item';
                    let avatar;
                    let filePath = currentMessage.filePath && currentMessage.filePath;
                    moment.locale('ru');
                    let date = moment(currentMessage.time).format('L');
                    let prevDate;
                    if(index > 0){
                        prevDate = moment(messages[index - 1].time).format('L');
                    }
                    if(currentMessage.user === currentUser.id){
                        sender = currentUser.fullName ? currentUser.fullName : currentUser.email;
                        classes = 'dialog__item dialog__item-my';
                        avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo;
                    }else{
                        if(currentUser.role === 'freelancer'){
                            sender = currentCustomer.fullName ? currentCustomer.fullName : currentCustomer.email;
                            avatar = currentCustomer.avatar ? `${API_URL + currentCustomer.avatar}` : avatarLogo;
                        }else{
                            sender = currentRespond.userFullName ? currentRespond.userFullName : currentRespond.userEmail
                            avatar = currentRespond.userAvatar ? `${API_URL + currentRespond.userAvatar}` : avatarLogo;
                        }
                    }

                    return(
                        <Fragment key={index}>
                            {date != prevDate &&
                                <>
                                    <li className='dialog__date-next'>{prevDate}</li>
                                    <li className='dialog__date'>{date}</li>
                                </>
                            }
                            <li className={classes}>
                                {prevDate && currentMessage.user !== currentUser.id &&
                                    <img className="dialog__item-avatar" src={avatar} alt="dialog__avatar" />
                                }
                                <div className="dialog__item-message">
                                    <div className="dialog__item-message-reply">
                                        <p>{sender}</p>
                                    </div>
                                    <div className="dialog__item-message-text">
                                        {currentMessage.text ? 
                                            <p>{currentMessage.text}</p>
                                        : 
                                            <p onClick={() => {downloadFile(currentMessage.filePath, currentMessage.fileName);}} className="dialog__item-file">{currentMessage.fileName}</p>
                                        }
                                        
                                        <span>{moment(currentMessage.time).format('LT')}</span>
                                    </div>
                                </div>
                                {currentMessage.user === currentUser.id &&
                                    <img className="dialog__item-avatar" src={avatar} alt="dialog__avatar" />
                                }
                            </li>
                        </Fragment>
                    )}
                )}
                </InfiniteScroll>
            </ul>
            </Loader>
            <form className="dialog__form">
                <input disabled={!loaded} className="dialog__form-file" type="file" id="siofu_input" name="file"/>
                <label disabled={!loaded && disabledBtn} htmlFor="siofu_input" className="dialog__form-btn">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2209 2.28462C14.8529 -0.0834793 10.9997 -0.0834793 8.63128 2.28462L1.26849 9.64738C-0.422922 11.339 -0.42281 14.0913 1.26871 15.7828C2.11454 16.6287 3.22523 17.0515 4.33636 17.0514C5.44719 17.0513 6.55847 16.6285 7.40415 15.7828L14.1532 9.03362C14.6449 8.542 14.9157 7.88832 14.9158 7.19304C14.9158 6.49772 14.645 5.84407 14.1533 5.3523C13.1383 4.3374 11.4867 4.33743 10.4719 5.35249L6.05834 9.76598C5.7195 10.1048 5.7195 10.6542 6.05827 10.9931C6.39708 11.332 6.94648 11.3319 7.28536 10.9931L11.699 6.57955C12.0373 6.24122 12.5877 6.24114 12.9261 6.57947C13.09 6.74335 13.1803 6.96125 13.1803 7.193C13.1803 7.42475 13.09 7.64258 12.9261 7.80653L6.17706 14.5557C5.16208 15.5705 3.51071 15.5707 2.49581 14.5558C1.4809 13.5408 1.48083 11.8893 2.49562 10.8744L9.85838 3.51171C11.55 1.82012 14.3024 1.82012 15.9938 3.51171C16.8133 4.33109 17.2646 5.42058 17.2646 6.5794C17.2646 7.73821 16.8133 8.8277 15.9938 9.64715L8.63117 17.01C8.29236 17.3489 8.29236 17.8982 8.63125 18.2371C8.80069 18.4066 9.02275 18.4912 9.24478 18.4912C9.46684 18.4912 9.6889 18.4065 9.85834 18.2371L17.2209 10.8743C18.3682 9.72712 18.9999 8.20185 19 6.57943C19 4.95705 18.3682 3.43178 17.2209 2.28462Z" fill="#3C4852"/>
                    </svg>
                </label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} className="dialog__form-message" autoComplete="off" name="message" type="text" placeholder="Введите сообщение ..."></textarea>
                <button disabled={!loaded} onClick={e => submitMessageHandler(e)} htmlFor="submit" className="dialog__form-sumbit-btn">
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
                </button>
            </form>
            {valid[0] === 200 ?
                <p className="reg-landing__success">{valid[1]}</p>
            :
                <p className="reg-landing__error">{valid[1]}</p>
            }
        </>
        : 
            <p>
                {currentUser.role === "customer" ?
                    'Выберите отклик для просмотра чата'
                : 
                    'Отправьте заявку для открытия чата'
                }
            </p>
        }
        </div>
    );
};

export default OrderDetailChat;