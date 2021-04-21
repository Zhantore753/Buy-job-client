import React, { useState } from 'react';
import {updatePassword} from '../../../actions/updateUser';

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordShown, setNewPasswordShown] = useState(false);
    const [newPasswordRepeat, setNewPasswordRepeat] = useState('');
    const [newPasswordRepeatShown, setNewPasswordRepeatShown] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const [valid, setValid] = useState([false, '']);

    const updatePasswordHandler = (e) => {
        setValid([]);
        e.preventDefault();
        e.stopPropagation();
        if(newPassword.length < 4 || newPassword.length > 20){
            setValid([true, 'Пароль должен быть больше 3 и меньше 21 символа']);
            return;
        }
        if(newPassword != newPasswordRepeat){
            setValid([true, 'Пароли не совпадают']);
            return;
        }

        updatePassword(newPassword, password)
        .then(async res =>{
            await setValid(res);
        });
        
        setPassword('');
        setNewPasswordRepeat('');
        setNewPassword('');
    }

    return (
        <div className="settings__password">
            <h2 className="settings__password-title">Пароль</h2>
            <form className="settings__password-form" action="#">
                <div className="settings__password-form-row">
                    <div className="form__pass">
                        <input autoComplete="new-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type={newPasswordShown ? "text" : "password"} name="newpass" placeholder="Новый пароль" />
                        <button onClick={(e) => {e.preventDefault();setNewPasswordShown(newPasswordShown ? false : true)}} className="form__pass-btn">
                            <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.50008 3.90912C8.07076 3.90912 6.90918 5.0707 6.90918 6.50003C6.90918 7.92936 8.07076 9.09093 9.50008 9.09093C10.9294 9.09093 12.091 7.92936 12.091 6.50003C12.091 5.0707 10.9294 3.90912 9.50008 3.90912Z" fill="#C4C4C4"/>
                                <path d="M9.50002 0.0227489C5.18182 0.0227489 1.49411 2.70863 0 6.50003C1.49411 10.2914 5.18182 12.9773 9.50002 12.9773C13.8225 12.9773 17.5059 10.2914 19 6.50003C17.5059 2.70863 13.8225 0.0227489 9.50002 0.0227489ZM9.50002 10.8182C7.11638 10.8182 5.18182 8.88363 5.18182 6.49999C5.18182 4.11635 7.11638 2.18183 9.50002 2.18183C11.8837 2.18183 13.8182 4.11639 13.8182 6.50003C13.8182 8.88367 11.8837 10.8182 9.50002 10.8182Z" fill="#C4C4C4"/>
                            </svg> 
                        </button>
                    </div>
                    <div className="form__pass">
                        <input autoComplete="new-password-repeat" value={newPasswordRepeat} onChange={(e) => setNewPasswordRepeat(e.target.value)} type={newPasswordRepeatShown ? "text" : "password"} name="newpassrepeat" placeholder="Новый пароль ещё раз" />
                        <button onClick={(e) => {e.preventDefault();setNewPasswordRepeatShown(newPasswordRepeatShown ? false : true)}} className="form__pass-btn" >
                            <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.50008 3.90912C8.07076 3.90912 6.90918 5.0707 6.90918 6.50003C6.90918 7.92936 8.07076 9.09093 9.50008 9.09093C10.9294 9.09093 12.091 7.92936 12.091 6.50003C12.091 5.0707 10.9294 3.90912 9.50008 3.90912Z" fill="#C4C4C4"/>
                                <path d="M9.50002 0.0227489C5.18182 0.0227489 1.49411 2.70863 0 6.50003C1.49411 10.2914 5.18182 12.9773 9.50002 12.9773C13.8225 12.9773 17.5059 10.2914 19 6.50003C17.5059 2.70863 13.8225 0.0227489 9.50002 0.0227489ZM9.50002 10.8182C7.11638 10.8182 5.18182 8.88363 5.18182 6.49999C5.18182 4.11635 7.11638 2.18183 9.50002 2.18183C11.8837 2.18183 13.8182 4.11639 13.8182 6.50003C13.8182 8.88367 11.8837 10.8182 9.50002 10.8182Z" fill="#C4C4C4"/>
                            </svg> 
                        </button>
                    </div>
                    <div className="form__pass">
                        <input autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} type={passwordShown ? "text" : "password"} name="oldpass" placeholder="Старый пароль" />
                        <button onClick={(e) => {e.preventDefault();setPasswordShown(passwordShown ? false : true)}} className="form__pass-btn" >
                            <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.50008 3.90912C8.07076 3.90912 6.90918 5.0707 6.90918 6.50003C6.90918 7.92936 8.07076 9.09093 9.50008 9.09093C10.9294 9.09093 12.091 7.92936 12.091 6.50003C12.091 5.0707 10.9294 3.90912 9.50008 3.90912Z" fill="#C4C4C4"/>
                                <path d="M9.50002 0.0227489C5.18182 0.0227489 1.49411 2.70863 0 6.50003C1.49411 10.2914 5.18182 12.9773 9.50002 12.9773C13.8225 12.9773 17.5059 10.2914 19 6.50003C17.5059 2.70863 13.8225 0.0227489 9.50002 0.0227489ZM9.50002 10.8182C7.11638 10.8182 5.18182 8.88363 5.18182 6.49999C5.18182 4.11635 7.11638 2.18183 9.50002 2.18183C11.8837 2.18183 13.8182 4.11639 13.8182 6.50003C13.8182 8.88367 11.8837 10.8182 9.50002 10.8182Z" fill="#C4C4C4"/>
                            </svg> 
                        </button>
                    </div>
                </div>
                
                <button onClick={(e) => updatePasswordHandler(e)} className="settings__form-btn">Изменить</button>
                {valid[0] === 200 ?
                    <p className="reg-landing__success">{valid[1]}</p>
                :
                    <p className="reg-landing__error">{valid[1]}</p>
                }
            </form>
        </div>
    );
};

export default ChangePassword;