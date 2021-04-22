import React from 'react';
import ChangeGeneral from './ChangeGeneral';
import ChangePassword from './ChangePassword';
import ChangeEdu from './ChangeEdu';

const AccountSettings = () => {

    return (
        <section className="settings main">
            <div className="container">
                <div className="settings__inner">
                    <h1 className="settings__title">Настройки</h1>
                    <ChangeGeneral />
                    <ChangeEdu />
                    <ChangePassword />
                </div>
            </div>
        </section>
    );
};

export default AccountSettings;