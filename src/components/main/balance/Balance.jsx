import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputBalance, outputBalance } from '../../../actions/user';
import { setCurrentBalance } from '../../../reducers/userReducer';

const Balance = () => {
    const currentUser = useSelector(state => state.user.currentUser);
    const [output, setOutput] = useState(false);
    const [sum, setSum] = useState(0);
    const [valid, setValid] = useState([false, '']);
    const [disabledBtn, setDisabledBtn] = useState(false);
    const dispatch = useDispatch();

    const offValidByTime = () =>{
        setDisabledBtn(true);
        setTimeout(() => {
            setValid(false);
            setDisabledBtn(false);
        }, 5000);
    }

    const changeAction = (e, change) => {
        const btns = document.querySelectorAll('.balance__head-btn');
        btns.forEach(btn => {
            btn.classList.remove('balance__head-btn-active');
        });

        e.target.classList.add('balance__head-btn-active');
        setOutput(change);
    }

    const balanceAction = (action) => {
        if(sum < 100 || sum > 999999){
            setValid([true, 'Сумма должна быть не меньше 100 и не превышать 999999']);
            offValidByTime();
            return;
        }
        if(action === 'input'){
            if(+sum + +currentUser.balance > 999999){
                setValid([true, 'Баланс пользователя не может превышать 999999, максимальная сумма ввода ' + (999999 - currentUser.balance)]);
                offValidByTime();
                return;
            }

            dispatch(inputBalance(sum))
            .then(async res =>{
                await setValid(res);
            });
            offValidByTime();
        }else{
            if(+currentUser.balance - +sum < 0){
                setValid([true, 'Введена недопустимая сумма вывода, у вас на балансе ' + currentUser.balance]);
                offValidByTime();
                return;
            }

            dispatch(outputBalance(sum))
            .then(async res =>{
                await setValid(res);
            });
            offValidByTime();
        }
    }

    return (
        <section className="balance main">
            <div className="container">
                <div className="balance__inner">
                    <div className="balance__tabs">
                        <div className="balance__head">
                            <button onClick={e => changeAction(e, false)} className="balance__input_btn balance__head-btn balance__head-btn-active">Пополнение баланса</button>
                            <button onClick={e => changeAction(e, true)} className="balance__output_btn balance__head-btn">Вывести деньги</button>
                        </div>
                        <div className="balance__action">
                            <label htmlFor="sum">Введите сумму: </label>
                            <input value={sum} onChange={e => setSum(e.target.value)} className="balance__action-input" id="sum" type="number" min={100} max={999999}/>
                            {output ? 
                                <button disabled={disabledBtn} onClick={() => balanceAction('output')} className="balance__input-btn-action">Вывести</button>
                            :
                                <button disabled={disabledBtn} onClick={() => balanceAction('input')} className="balance__input-btn-action">Пополнить</button>
                            }
                        </div>
                        {valid[0] === 200 ?
                            <p className="reg-landing__success">{valid[1]}</p>
                        :
                            <p className="reg-landing__error">{valid[1]}</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Balance;