import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Support from './Support';
import SupportCreate from './SupportCreate';

const SupportRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/list" component={Support}/>
                <Route path="/create" component={SupportCreate}/>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default SupportRoute;