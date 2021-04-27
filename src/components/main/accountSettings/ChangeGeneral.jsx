import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar, updateEmail, updateFullName } from '../../../actions/updateUser';
import {API_URL} from "../../../config";
import avatarLogo from '../../../img/avatarlogo.svg';

const ChangeGeneral = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const [email, setEmail] = useState(currentUser.email);
    const [fullName, setFullName] = useState(currentUser.fullName ? currentUser.fullName : 'ФИО');
    const [valid, setValid] = useState([false, '']);
    const [disabledBtn, setDisabledBtn] = useState(false);

    const avatar = currentUser.avatar ? `${API_URL +  currentUser.avatar}` : avatarLogo;

    const offValidByTime = () =>{
        setDisabledBtn(true);
        setTimeout(() => {
            setValid(false);
            setDisabledBtn(false);
        }, 3000);
    }

    const updateFullNameHandler = () => {
        setValid([]);
        if(fullName === currentUser.fullName){
            setValid([true, 'Нельзя поменять имя на то же']);
            offValidByTime();
            return;
        }
        if(fullName.length < 4 || fullName.length > 25){
            setValid([true, 'ФИО должно быть не меньше 4 символов и не больше 25']);
            offValidByTime();
            return;
        }

        dispatch(updateFullName(fullName))
        .then(async res =>{
            await setValid(res);
        });
        offValidByTime();
    }

    const updateEmailHandler = () => {
        setValid([]);
        if(email === currentUser.email){
            setValid([true, 'Нельзя поменять почту на ту же']);
            offValidByTime();
            return;
        }
        if(email < 4){
            setValid([true, 'Почта дожна быть больше 4 смоволов']);
            offValidByTime();
            return;
        }

        dispatch(updateEmail(email))
        .then(async res =>{
            await setValid(res);
        });
        offValidByTime();
    }

    function changeAvatarHandler(e) {
        const file = e.target.files[0];
        if(!file){
            setValid([true, 'Вы ничего не выбрали']);
            offValidByTime();
            return;
        }
        dispatch(updateAvatar(file))
        .then(async res =>{
            await setValid(res);
        });
        offValidByTime();
    }

    return (
        <>
        <div className="settings__general">
            <div className="settings__general-col">
                <div className="settings__general-avatar">
                    <img src={avatar} alt="avatar"/>
                    <input id='fileInput' style={{display:"none"}} accept="image/*" onChange={e => changeAvatarHandler(e)} type="file" placeholder="Загрузить аватар"/>
                    <button onClick={(e) => {e.preventDefault(); e.stopPropagation(); document.getElementById('fileInput').click()}} disabled={disabledBtn} className="setting__general-btn">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.11042 10.982L3.74077 10.4562C5.04517 10.1955 6.23181 9.56051 7.17237 8.6199L10.0091 5.78321C11.3303 4.46201 11.3303 2.31215 10.0091 0.990942C8.6878 -0.330314 6.53804 -0.330314 5.21679 0.990942L2.3801 3.82763C1.43954 4.76819 0.804557 5.95483 0.543769 7.25928L0.0180138 9.88963C-0.0427965 10.194 0.0524573 10.5086 0.271932 10.7281C0.447771 10.9039 0.684654 11 0.928405 11C0.988937 11 1.04989 10.9941 1.11042 10.982ZM8.69616 2.30393C8.98549 2.59327 9.14486 2.97795 9.14486 3.3871C9.14486 3.79625 8.98549 4.18098 8.69616 4.47027L5.85947 7.30695C5.179 7.98743 4.32055 8.4468 3.37688 8.63541L2.11179 8.88826L2.36464 7.62321C2.55325 6.67949 3.01262 5.821 3.69309 5.14057L6.52978 2.30389C6.81912 2.01455 7.2038 1.85519 7.61295 1.85519C8.02209 1.85519 8.40682 2.0146 8.69616 2.30393Z" fill="#FFCC80"/>
                        </svg>
                    </button>
                </div>
                <div className="settings__general-col-name">
                    <div className="settings__general-name">
                        <input type="text" name="fullName" autoComplete="name" value={fullName} onChange={e => setFullName(e.target.value)} />
                        <button onClick={updateFullNameHandler} disabled={disabledBtn} className="setting__general-btn">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.11042 10.982L3.74077 10.4562C5.04517 10.1955 6.23181 9.56051 7.17237 8.6199L10.0091 5.78321C11.3303 4.46201 11.3303 2.31215 10.0091 0.990942C8.6878 -0.330314 6.53804 -0.330314 5.21679 0.990942L2.3801 3.82763C1.43954 4.76819 0.804557 5.95483 0.543769 7.25928L0.0180138 9.88963C-0.0427965 10.194 0.0524573 10.5086 0.271932 10.7281C0.447771 10.9039 0.684654 11 0.928405 11C0.988937 11 1.04989 10.9941 1.11042 10.982ZM8.69616 2.30393C8.98549 2.59327 9.14486 2.97795 9.14486 3.3871C9.14486 3.79625 8.98549 4.18098 8.69616 4.47027L5.85947 7.30695C5.179 7.98743 4.32055 8.4468 3.37688 8.63541L2.11179 8.88826L2.36464 7.62321C2.55325 6.67949 3.01262 5.821 3.69309 5.14057L6.52978 2.30389C6.81912 2.01455 7.2038 1.85519 7.61295 1.85519C8.02209 1.85519 8.40682 2.0146 8.69616 2.30393Z" fill="#FFCC80"/>
                            </svg>                            
                        </button>
                    </div>
                    <div className="settings__general-email">
                        <p><span>Email:  </span><input name="email" autoComplete="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/></p>
                        <button disabled={disabledBtn} onClick={updateEmailHandler} className="setting__general-btn" >
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.11042 10.982L3.74077 10.4562C5.04517 10.1955 6.23181 9.56051 7.17237 8.6199L10.0091 5.78321C11.3303 4.46201 11.3303 2.31215 10.0091 0.990942C8.6878 -0.330314 6.53804 -0.330314 5.21679 0.990942L2.3801 3.82763C1.43954 4.76819 0.804557 5.95483 0.543769 7.25928L0.0180138 9.88963C-0.0427965 10.194 0.0524573 10.5086 0.271932 10.7281C0.447771 10.9039 0.684654 11 0.928405 11C0.988937 11 1.04989 10.9941 1.11042 10.982ZM8.69616 2.30393C8.98549 2.59327 9.14486 2.97795 9.14486 3.3871C9.14486 3.79625 8.98549 4.18098 8.69616 4.47027L5.85947 7.30695C5.179 7.98743 4.32055 8.4468 3.37688 8.63541L2.11179 8.88826L2.36464 7.62321C2.55325 6.67949 3.01262 5.821 3.69309 5.14057L6.52978 2.30389C6.81912 2.01455 7.2038 1.85519 7.61295 1.85519C8.02209 1.85519 8.40682 2.0146 8.69616 2.30393Z" fill="#FFCC80"/>
                            </svg>                            
                        </button>
                    </div>
                </div>
            </div>
            <div className="settings__general-id">
                <p><span>ID: </span>{currentUser.id}</p>
            </div>
        </div>
        {valid[0] === 200 ?
            <p className="reg-landing__success">{valid[1]}</p>
        :
            <p className="reg-landing__error">{valid[1]}</p>
        }
        </>
    );
};

export default ChangeGeneral;