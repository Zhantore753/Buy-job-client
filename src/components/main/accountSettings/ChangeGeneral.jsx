import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { updateEmail } from '../../../actions/updateUser';

const ChangeGeneral = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const [email, setEmail] = useState(currentUser.email);
    const [fullName, setFullName] = useState(currentUser.fullName || 'ФИО');
    const [valid, setValid] = useState([false, '']);
    const [disabledBtn, setDisabledBtn] = useState(false);

    const offValidByTime = () =>{
        setDisabledBtn(true);
        setTimeout(() => {
            setValid(false);
            setDisabledBtn(false);
        }, 3000);
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

        updateEmail(email)
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
                    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.2" clipPath="url(#clip0)">
                        <path d="M46.9713 45.7839L45.7963 41.0839C45.2388 38.8038 43.5487 36.9702 41.3215 36.2292L32.7048 33.3582C30.6035 32.4829 29.642 29.0989 29.4344 27.8142C31.0355 26.4828 32.0657 24.5884 32.3131 22.5208C32.2778 22.1677 32.3611 21.8128 32.55 21.5122C32.8553 21.4358 33.1053 21.2171 33.2217 20.9247C33.7855 19.5595 34.1394 18.1168 34.2714 16.6458C34.2717 16.5658 34.2619 16.4863 34.242 16.4089C34.1018 15.8373 33.7657 15.3328 33.2922 14.9832V9.79161C33.2922 6.63673 32.3287 5.3423 31.3143 4.59223C31.1206 3.07262 29.4932 0 23.5007 0C18.1841 0.21407 13.9231 4.4751 13.709 9.7917V14.9833C13.2355 15.3329 12.8994 15.8373 12.7592 16.409C12.7393 16.4864 12.7295 16.566 12.7298 16.6459C12.8616 18.1177 13.2155 19.561 13.7795 20.9268C13.8643 21.2036 14.0867 21.4165 14.367 21.4889C14.4767 21.5437 14.6823 21.8277 14.6823 22.521C14.9312 24.5945 15.9674 26.4931 17.5768 27.8242C17.3711 29.1069 16.4154 32.4889 14.373 33.3427L5.67989 36.2293C3.45446 36.9702 1.7654 38.802 1.20709 41.0801L0.0320875 45.7801C-0.100926 46.3043 0.21614 46.8371 0.7403 46.9701C0.818603 46.99 0.899109 47.0001 0.97989 47.0002H46.0216C46.5624 47 47.0006 46.5615 47.0005 46.0207C47.0004 45.9408 46.9906 45.8613 46.9713 45.7839Z" fill="#3C4852"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="47" height="47" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>                            
                    <button disabled={disabledBtn} className="setting__general-btn">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.11042 10.982L3.74077 10.4562C5.04517 10.1955 6.23181 9.56051 7.17237 8.6199L10.0091 5.78321C11.3303 4.46201 11.3303 2.31215 10.0091 0.990942C8.6878 -0.330314 6.53804 -0.330314 5.21679 0.990942L2.3801 3.82763C1.43954 4.76819 0.804557 5.95483 0.543769 7.25928L0.0180138 9.88963C-0.0427965 10.194 0.0524573 10.5086 0.271932 10.7281C0.447771 10.9039 0.684654 11 0.928405 11C0.988937 11 1.04989 10.9941 1.11042 10.982ZM8.69616 2.30393C8.98549 2.59327 9.14486 2.97795 9.14486 3.3871C9.14486 3.79625 8.98549 4.18098 8.69616 4.47027L5.85947 7.30695C5.179 7.98743 4.32055 8.4468 3.37688 8.63541L2.11179 8.88826L2.36464 7.62321C2.55325 6.67949 3.01262 5.821 3.69309 5.14057L6.52978 2.30389C6.81912 2.01455 7.2038 1.85519 7.61295 1.85519C8.02209 1.85519 8.40682 2.0146 8.69616 2.30393Z" fill="#FFCC80"/>
                        </svg>                            
                    </button>
                </div>
                <div className="settings__general-col-name">
                    <div className="settings__general-name">
                        <input type="text" name="fullName" autoComplete="name" value={fullName} onChange={e => setFullName(e.target.value)} />
                        <button disabled={disabledBtn} className="setting__general-btn">
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
        {/* {valid[0] === 200 ?
            <p className="reg-landing__success">{valid[1]}</p>
        :
            <p className="reg-landing__error">{valid[1]}</p>
        } */}
        </>
    );
};

export default ChangeGeneral;