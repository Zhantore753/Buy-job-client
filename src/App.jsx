import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {auth} from './actions/user';
import Landing from './components/landing/Landing';
import Main from './components/main/Main';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(auth());
  },[]);

  return (
    <>
    {!isAuth ?
      <Landing />
    :
      <BrowserRouter className="App">
          <Switch>
            <Route path="/main" component={Main}/>
            <Redirect to="/main" />
          </Switch>
      </BrowserRouter>
    }
    </>
  );
}

export default App;