import React from 'react';
import ChangeGeneral from './ChangeGeneral';
import ChangePassword from './ChangePassword';

const AccountSettings = () => {

    return (
        <section className="settings main">
            <div className="container">
                <div className="settings__inner">
                    <h1 className="settings__title">Настройки</h1>
                    <ChangeGeneral />
                    <div className="settings__edu">
                        <h2 className="settings__edu-title">Образование</h2>
                        <form className="settings__edu-form" action="#">
                            <div className="settings__edu-form-row settings__edu-form-row-1">
                                <input type="text" name="institution" placeholder="Учебное заведение" />
                            </div>
                            <div className="settings__edu-form-row settings__edu-form-row-2">
                                <input type="text" name="faculty" placeholder="Факультет" />
                                <input type="text" name="specialty" placeholder="Специальность" />
                                <input type="text" name="status" placeholder="Статус" />
                                <input type="number" name="course" placeholder="Курс" />
                            </div>

                            <button className="settings__form-btn">Сохранить</button>
                        </form>
                    </div>
                    <ChangePassword />
                </div>
            </div>
        </section>
    );
};

export default AccountSettings;