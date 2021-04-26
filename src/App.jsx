import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {auth} from './actions/user';
import Landing from './components/landing/Landing';
import Main from './components/main/Main';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(state);

  const authCheck = useCallback(() => {
    dispatch(auth());
  }, [dispatch]);
  
  useEffect(()=>{
    authCheck();
  },[authCheck]);

  return (
    <>
      {!isAuth ?
        <Landing />
        :
        <Main />
      }
    </>
  );
}

export default App;
