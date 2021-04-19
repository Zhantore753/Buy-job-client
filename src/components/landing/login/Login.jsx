import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../../../actions/user';

const Login = ({popupClose, regPopupHandler}) => {
    const dispatch = useDispatch();
    const [currentLogin, setCurrentLogin] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState([]);

    const cleanInputsHandler = () =>{
        setCurrentLogin('');
        setPassword('');
    }

    const popupCloseHandler = (e) =>{
        popupClose(e);
        cleanInputsHandler();
    }

    const loginBtnHandler = async (e) =>{
        e.preventDefault();
        e.stopPropagation();
        if(currentLogin.length <= 3 || currentLogin.length >= 21){
            console.log(currentLogin);
            setResponse([400, ['Логин должен быть больше 3 и меньше 15 символов']])
            return;
        }
        if(password.length <= 3 || password.length >= 21){
            console.log(password);
            setResponse([400, ['Пароль должен быть больше 3 и меньше 21 символов']])
            return;
        }
        await dispatch(login(currentLogin, password)).then(res => {
            setResponse(res)
        });
        cleanInputsHandler();
    }

    return (
        <div className="enter popup">
            <div className="popup__body">
                <div className="popup__content">
                    <button className="popup__close" onClick={(e) => popupCloseHandler(e)}></button>
                    <div className="popup__logo">
                        <svg width="153" height="59" viewBox="0 0 153 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                <path d="M71.102 22.2153C71.2798 22.5342 71.3121 22.8133 71.1989 23.0525C71.102 23.2757 70.8595 23.3873 70.4717 23.3873H67.8534C67.1908 23.3873 66.714 23.3235 66.4231 23.196C66.1322 23.0684 65.8897 22.7973 65.6958 22.3827L63.5867 18.1013C63.3766 17.6707 63.1584 17.3677 62.9321 17.1923C62.7058 17.001 62.3745 16.9053 61.9381 16.9053H61.5018V22.3827C61.5018 22.7495 61.429 23.0126 61.2836 23.1721C61.1381 23.3156 60.8714 23.3873 60.4836 23.3873H57.7441C57.3562 23.3873 57.0815 23.3156 56.9198 23.1721C56.7744 23.0126 56.7017 22.7495 56.7017 22.3827V7.40949C56.7017 7.04274 56.7744 6.7876 56.9198 6.64409C57.0815 6.48463 57.3562 6.4049 57.7441 6.4049H60.4836C60.8714 6.4049 61.1381 6.48463 61.2836 6.64409C61.429 6.7876 61.5018 7.04274 61.5018 7.40949V12.7195H61.8412H62.0351L65.5261 7.2899C65.7685 6.9072 65.9948 6.66801 66.2049 6.57233C66.4312 6.46071 66.8514 6.4049 67.4655 6.4049H70.2535C70.6252 6.4049 70.8595 6.50058 70.9565 6.69193C71.0697 6.88328 71.0292 7.13841 70.8353 7.45733L66.4231 14.3938C66.9888 14.7925 67.4817 15.4064 67.9019 16.2356L71.102 22.2153ZM86.8664 6.4049C87.4967 6.4049 87.6664 6.73976 87.3755 7.40949L80.9753 22.5023C80.8137 22.8691 80.6278 23.1083 80.4177 23.2199C80.2076 23.3315 79.8359 23.3873 79.3026 23.3873H76.2237C75.5772 23.3873 75.4075 23.0525 75.7146 22.3827L77.5328 18.3644L72.3933 7.40949C72.0701 6.73976 72.264 6.4049 72.9751 6.4049H75.8358C76.45 6.4049 76.8702 6.45274 77.0964 6.54841C77.3389 6.64409 77.5409 6.89125 77.7025 7.2899L80.0541 12.5999L82.2844 7.2899C82.4299 6.89125 82.6077 6.64409 82.8178 6.54841C83.0279 6.45274 83.4158 6.4049 83.9814 6.4049H86.8664ZM102.914 6.4049C103.285 6.4049 103.544 6.48463 103.689 6.64409C103.851 6.7876 103.932 7.04274 103.932 7.40949V22.3827C103.932 22.7495 103.851 23.0126 103.689 23.1721C103.544 23.3156 103.285 23.3873 102.914 23.3873H100.15C99.7782 23.3873 99.5115 23.3156 99.3499 23.1721C99.2044 23.0126 99.1317 22.7495 99.1317 22.3827V10.5907H94.5498V22.3827C94.5498 22.7495 94.477 23.0126 94.3316 23.1721C94.1861 23.3156 93.9194 23.3873 93.5316 23.3873H90.7921C90.4042 23.3873 90.1295 23.3156 89.9678 23.1721C89.8224 23.0126 89.7497 22.7495 89.7497 22.3827V7.40949C89.7497 7.04274 89.8224 6.7876 89.9678 6.64409C90.1295 6.48463 90.4042 6.4049 90.7921 6.4049H102.914ZM120.94 6.38098C121.328 6.38098 121.595 6.46071 121.74 6.62017C121.902 6.76368 121.983 7.02679 121.983 7.40949V22.3827C121.983 22.7495 121.902 23.0126 121.74 23.1721C121.595 23.3156 121.328 23.3873 120.94 23.3873H118.225C117.837 23.3873 117.562 23.3156 117.401 23.1721C117.255 23.0126 117.182 22.7415 117.182 22.3588V18.2926C117.182 17.9099 117.182 17.575 117.182 17.288C117.199 16.985 117.223 16.6821 117.255 16.3791C117.287 16.0761 117.312 15.8449 117.328 15.6854C117.344 15.51 117.384 15.2629 117.449 14.944C117.53 14.6091 117.586 14.3699 117.619 14.2264C117.667 14.0829 117.748 13.7879 117.861 13.3414C117.974 12.8949 118.055 12.568 118.104 12.3607H117.91C117.457 13.5885 117.094 14.4975 116.819 15.0875C116.56 15.6775 116.164 16.411 115.631 17.288L112.285 22.909C112.108 23.2279 111.776 23.3873 111.291 23.3873H108.358C107.97 23.3873 107.695 23.3156 107.534 23.1721C107.388 23.0126 107.316 22.7495 107.316 22.3827V7.40949C107.316 7.04274 107.388 6.7876 107.534 6.64409C107.695 6.48463 107.97 6.4049 108.358 6.4049H111.097C111.485 6.4049 111.752 6.48463 111.897 6.64409C112.043 6.7876 112.116 7.04274 112.116 7.40949V11.4996C112.116 12.7913 112.059 13.7799 111.946 14.4656C111.849 15.1513 111.607 16.1319 111.219 17.4076H111.388C112.261 15.223 113.037 13.5646 113.716 12.4325L117.013 6.85936C117.223 6.54044 117.562 6.38098 118.031 6.38098H120.94ZM64.4352 35.6391C66.3423 35.6391 67.8615 36.1653 68.9928 37.2178C70.1242 38.2702 70.6898 39.7372 70.6898 41.6189C70.6898 43.4845 70.1323 44.9356 69.0171 45.9721C67.9019 47.0086 66.3908 47.5268 64.4836 47.5268H61.5018V51.617C61.5018 51.9837 61.429 52.2468 61.2836 52.4063C61.1381 52.5498 60.8714 52.6216 60.4836 52.6216H57.7441C57.3562 52.6216 57.0815 52.5498 56.9198 52.4063C56.7744 52.2468 56.7017 51.9837 56.7017 51.617V36.6437C56.7017 36.277 56.7744 36.0218 56.9198 35.8783C57.0815 35.7189 57.3562 35.6391 57.7441 35.6391H64.4352ZM63.9018 43.341C64.4675 43.341 64.9119 43.1816 65.2352 42.8626C65.5584 42.5437 65.72 42.1212 65.72 41.5949C65.72 41.0687 65.5584 40.6462 65.2352 40.3272C64.9119 39.9924 64.4675 39.8249 63.9018 39.8249H61.5018V43.341H63.9018ZM87.1988 51.6409C87.4412 52.2947 87.2068 52.6216 86.4957 52.6216H83.8775C83.2633 52.6216 82.827 52.5498 82.5684 52.4063C82.3259 52.2628 82.1562 51.9997 82.0593 51.617L81.5017 49.8948H76.2652L75.7076 51.617C75.5783 51.9997 75.3924 52.2628 75.15 52.4063C74.9237 52.5498 74.5197 52.6216 73.9379 52.6216H71.3924C70.7135 52.6216 70.4954 52.2947 70.7378 51.6409L76.3137 36.4763C76.4268 36.1414 76.5723 35.9182 76.75 35.8066C76.9278 35.6949 77.2026 35.6391 77.5743 35.6391H80.338C80.6936 35.6391 80.9602 35.6949 81.138 35.8066C81.332 35.9182 81.4855 36.1255 81.5986 36.4285L87.1988 51.6409ZM79.5137 43.341C79.3683 42.8626 79.2471 42.3444 79.1501 41.7863C79.0693 41.2282 79.0208 40.7897 79.0046 40.4708L78.9804 39.9924H78.738C78.7541 41.1405 78.6006 42.2487 78.2773 43.3171L77.3804 46.1395H80.4107L79.5137 43.341ZM101.223 35.6152C101.595 35.6152 101.853 35.6949 101.999 35.8544C102.16 35.9979 102.241 36.261 102.241 36.6437V38.5094C102.241 38.8921 102.16 39.1552 101.999 39.2987C101.853 39.4422 101.595 39.514 101.223 39.514H94.2896V41.6428H97.7563C99.4695 41.6428 100.835 42.1371 101.853 43.1258C102.888 44.0985 103.405 45.4379 103.405 47.1441C103.405 48.8185 102.888 50.1499 101.853 51.1386C100.835 52.1272 99.4695 52.6216 97.7563 52.6216H90.5077C90.1359 52.6216 89.8693 52.5498 89.7076 52.4063C89.5622 52.2628 89.4894 52.0156 89.4894 51.6648V36.6437C89.4894 36.261 89.5622 35.9979 89.7076 35.8544C89.8693 35.6949 90.144 35.6152 90.5319 35.6152H101.223ZM98.5078 47.1202C98.5078 46.0678 97.9179 45.5416 96.7381 45.5416H94.2896V48.7228H96.7381C97.9179 48.7228 98.5078 48.1886 98.5078 47.1202ZM105.578 41.9776C105.578 39.8887 106.224 38.2543 107.517 37.0743C108.826 35.8783 110.669 35.2803 113.044 35.2803C115.404 35.2803 117.23 35.8783 118.523 37.0743C119.832 38.2543 120.487 39.8887 120.487 41.9776V46.2831C120.487 48.372 119.832 50.0144 118.523 51.2104C117.23 52.3904 115.404 52.9804 113.044 52.9804C110.669 52.9804 108.826 52.3904 107.517 51.2104C106.224 50.0144 105.578 48.372 105.578 46.2831V41.9776ZM115.687 41.7624C115.687 41.0129 115.453 40.4468 114.984 40.0641C114.531 39.6655 113.885 39.4662 113.044 39.4662C112.188 39.4662 111.525 39.6655 111.057 40.0641C110.604 40.4468 110.378 41.0129 110.378 41.7624V46.4983C110.378 47.2478 110.604 47.8218 111.057 48.2205C111.525 48.6032 112.188 48.7945 113.044 48.7945C113.885 48.7945 114.531 48.6032 114.984 48.2205C115.453 47.8218 115.687 47.2478 115.687 46.4983V41.7624ZM135.368 35.6391C135.756 35.6391 136.023 35.7189 136.168 35.8783C136.33 36.0218 136.411 36.277 136.411 36.6437V38.7964C136.411 39.1791 136.33 39.4502 136.168 39.6097C136.023 39.7532 135.756 39.8249 135.368 39.8249H131.78V51.617C131.78 51.9837 131.7 52.2468 131.538 52.4063C131.393 52.5498 131.126 52.6216 130.738 52.6216H127.999C127.611 52.6216 127.344 52.5498 127.199 52.4063C127.053 52.2468 126.98 51.9837 126.98 51.617V39.8249H123.368C122.98 39.8249 122.714 39.7532 122.568 39.6097C122.423 39.4502 122.35 39.1791 122.35 38.7964V36.6437C122.35 36.277 122.423 36.0218 122.568 35.8783C122.714 35.7189 122.98 35.6391 123.368 35.6391H135.368ZM152.157 35.6391C152.788 35.6391 152.958 35.974 152.667 36.6437L146.266 51.7366C146.105 52.1033 145.919 52.3425 145.709 52.4541C145.499 52.5658 145.127 52.6216 144.594 52.6216H141.515C140.868 52.6216 140.699 52.2867 141.006 51.617L142.824 47.5986L137.684 36.6437C137.361 35.974 137.555 35.6391 138.266 35.6391H141.127C141.741 35.6391 142.161 35.687 142.388 35.7826C142.63 35.8783 142.832 36.1255 142.994 36.5241L145.345 41.8341L147.576 36.5241C147.721 36.1255 147.899 35.8783 148.109 35.7826C148.319 35.687 148.707 35.6391 149.273 35.6391H152.157Z" fill="#3C4852"/>
                                <path d="M14.3618 50.1389H29.2758C25.1941 54.5899 21.8149 57.2236 21.8149 57.2236C21.8149 57.2236 18.4436 54.5899 14.3618 50.1389Z" fill="#FFCC80"/>
                                <path d="M13.9315 12.5348C12.8875 12.5371 11.8645 12.8175 10.9757 13.345C10.0869 13.8725 9.3669 14.6265 8.89546 15.5236C8.42401 16.4208 8.21946 17.426 8.30441 18.4282C8.38937 19.4304 8.76056 20.3903 9.37692 21.2019C9.99323 22.0135 10.8307 22.6451 11.7966 23.0267C12.7625 23.4084 13.8191 23.5252 14.8497 23.3643C15.8803 23.2034 16.8446 22.7711 17.6358 22.1152C18.4271 21.4592 19.0145 20.6052 19.3331 19.6476C19.3315 19.4655 19.2312 14.9825 13.9315 12.5348ZM13.9541 20.2876C13.4796 20.2876 13.0157 20.1521 12.6212 19.8982C12.2266 19.6443 11.9191 19.2834 11.7375 18.8612C11.5559 18.4389 11.5084 17.9743 11.601 17.5261C11.6935 17.0778 11.9221 16.6661 12.2576 16.3429C12.5931 16.0198 13.0206 15.7997 13.486 15.7105C13.9515 15.6213 14.4338 15.6671 14.8723 15.842C15.3107 16.0169 15.6854 16.3131 15.949 16.6931C16.2127 17.0731 16.3534 17.5199 16.3534 17.9769C16.3534 18.5897 16.1006 19.1775 15.6507 19.6108C15.2007 20.0442 14.5905 20.2876 13.9541 20.2876Z" fill="#FFCC80"/>
                                <path d="M24.3042 19.6118C24.6162 20.5735 25.1987 21.4329 25.9869 22.0947C26.775 22.7564 27.7381 23.1945 28.7689 23.3603C29.7999 23.5261 30.8582 23.4131 31.8265 23.0338C32.7948 22.6545 33.635 22.0239 34.2539 21.2119C34.8728 20.4 35.2461 19.4384 35.3323 18.4343C35.4185 17.43 35.2143 16.4225 34.7423 15.5234C34.2703 14.6244 33.5491 13.8691 32.6586 13.3415C31.7682 12.814 30.7435 12.5347 29.6984 12.5348C24.6272 14.8798 24.3187 19.0933 24.3042 19.6118ZM29.6903 15.6692C30.1645 15.6689 30.6281 15.8042 31.0225 16.058C31.4169 16.3118 31.7243 16.6727 31.9059 17.095C32.0875 17.5173 32.1351 17.982 32.0427 18.4304C31.9503 18.8788 31.722 19.2907 31.3866 19.6139C31.0514 19.9372 30.6242 20.1573 30.1591 20.2464C29.6941 20.3355 29.212 20.2896 28.774 20.1145C28.336 19.9394 27.9617 19.643 27.6985 19.2628C27.4353 18.8826 27.2949 18.4356 27.2952 17.9784C27.2956 17.3667 27.5477 16.78 27.9961 16.3471C28.4444 15.9143 29.0525 15.6705 29.6871 15.6692H29.6903Z" fill="#FFCC80"/>
                                <path d="M43.6373 21.7309C43.6373 31.2143 38.5064 39.8965 33.2211 46.324H10.421C5.13087 39.8965 8.48365e-06 31.2143 8.48365e-06 21.7309C-0.00305658 18.3423 0.824455 15.0022 2.4134 11.9897C3.691 12.8681 5.0847 13.5732 6.55637 14.0857C6.01161 15.1817 5.65346 16.3572 5.49609 17.5658C4.32641 27.1074 12.0927 28.1411 21.8267 28.1411C31.5607 28.1411 39.3237 27.1074 38.1541 17.5658C37.9974 16.3544 37.6376 15.1765 37.089 14.0794C38.5583 13.5669 39.9511 12.8652 41.2303 11.9929C42.8174 15.0046 43.6427 18.3438 43.6373 21.7309Z" fill="#FFCC80"/>
                                <path d="M2.21679 41.9641H41.4222C42.0097 41.9641 42.5731 42.1937 42.9885 42.6024C43.4039 43.011 43.6373 43.5653 43.6373 44.1432C43.6375 44.4296 43.5804 44.7131 43.4692 44.9777C43.3579 45.2422 43.1948 45.4826 42.9891 45.6851C42.7834 45.8877 42.5391 46.0483 42.2702 46.1579C42.0014 46.2676 41.7132 46.324 41.4222 46.324H2.21679C1.92568 46.324 1.63742 46.2676 1.36846 46.158C1.09951 46.0484 0.85513 45.8878 0.64928 45.6853C0.443435 45.4827 0.280147 45.2424 0.168743 44.9778C0.0573389 44.7132 0 44.4296 0 44.1432C-7.75311e-08 43.8569 0.0573508 43.5734 0.168775 43.3089C0.280199 43.0444 0.443511 42.8041 0.649383 42.6018C0.855248 42.3994 1.09964 42.2389 1.36858 42.1295C1.63753 42.0201 1.92575 41.9639 2.21679 41.9641Z" fill="#3C4852"/>
                                <path d="M43.6373 1.09129C42.0283 2.65028 40.4274 3.20155 38.6922 3.20155C34.5153 3.20155 29.5573 0 21.8211 0C14.0849 0 9.12688 3.20155 4.94508 3.20155C3.20993 3.20155 1.61063 2.65189 0 1.09129C0 6.51238 3.53335 10.5272 10.9623 11.9061H10.9413C11.9957 12.1428 13.0206 12.4942 13.9976 12.9541C19.2984 15.4806 19.3987 20.1077 19.4003 20.2958V20.307L21.8065 23.9795L24.2322 20.3215C24.2322 20.3215 24.2322 20.299 24.2322 20.2636C24.25 19.7284 24.5556 15.3793 29.6333 12.9589C30.6095 12.5003 31.6333 12.1495 32.6863 11.9126H32.6734C40.1056 10.5304 43.6373 6.51562 43.6373 1.09129Z" fill="#3C4852"/>
                                </g>
                                <defs>
                                <clippath id="clip0">
                                <rect width="153" height="59" fill="white"/>
                                </clippath>
                                </defs>
                        </svg>
                    </div>
                    <form className="form">
                        <div className="login__wrapper input__wrap">
                            <input type="text" name="login" value={currentLogin} autoComplete="username" onChange={(e) => setCurrentLogin(e.target.value)} placeholder="Логин"/>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21H1L1.02071 20.6621C1.19849 17.7428 3.60962 16.8091 5.54691 16.0589C6.794 15.5757 7.87367 15.158 8.20081 14.3677C8.2528 13.7758 8.24883 13.3234 8.24443 12.802C8.24355 12.702 8.24267 12.6005 8.24223 12.496C7.77476 12.0884 7.25706 11.0309 7.10065 10.1454C6.7658 10.0152 6.31882 9.62983 6.18268 8.51635C6.11395 7.9544 6.31155 7.54557 6.54991 7.31177C6.45981 6.5928 6.25207 3.99908 7.66637 2.35596C8.44049 1.45611 9.56202 1 10.9999 1C12.4378 1 13.5593 1.45611 14.3334 2.35596C15.7477 3.99929 15.54 6.59302 15.4499 7.31177C15.6882 7.54557 15.8856 7.95462 15.8164 8.51656C15.6807 9.62961 15.2335 10.015 14.8985 10.1452C14.7436 11.0329 14.2393 12.0876 13.7842 12.4936C13.7838 12.6025 13.7829 12.7081 13.7818 12.8117C13.7769 13.3301 13.7728 13.7795 13.8247 14.3675C14.1517 15.1576 15.2269 15.5755 16.469 16.0583C18.399 16.8087 20.8006 17.7424 20.9789 20.6617L21 21ZM1.7001 20.3624H20.2997C19.9939 18.1146 18.0826 17.3717 16.2317 16.6519C14.8844 16.1281 13.6117 15.6334 13.2033 14.5522L13.1843 14.47C13.1253 13.8283 13.1297 13.3318 13.1348 12.8063C13.1361 12.6547 13.1376 12.4994 13.1376 12.335V12.1422L13.311 12.0526C13.5315 11.939 14.179 10.8537 14.2869 9.85583L14.3151 9.5934L14.5821 9.57171C14.7936 9.55457 15.0754 9.24833 15.1741 8.44087C15.2395 7.90755 14.9381 7.7193 14.935 7.71734L14.7493 7.60522L14.7848 7.3931C14.7896 7.36382 15.2635 4.4207 13.8382 2.76652C13.1927 2.01784 12.238 1.63786 11.0001 1.63786C9.76139 1.63786 8.80596 2.01806 8.16072 2.76804C6.73342 4.42677 7.21058 7.36339 7.21543 7.39289L7.25134 7.60457L7.06541 7.71691C7.06232 7.71886 6.76096 7.90755 6.82594 8.44044C6.92464 9.24768 7.20617 9.55414 7.41744 9.57127L7.68444 9.59296L7.71264 9.85539C7.81992 10.8455 8.48719 11.9344 8.71564 12.0522L8.88946 12.1416V12.3346C8.88946 12.4953 8.89078 12.6478 8.8921 12.7963C8.89673 13.3249 8.90091 13.8242 8.84187 14.4694L8.82271 14.5518C8.41406 15.6334 7.13656 16.1281 5.78394 16.6517C3.92553 17.372 2.00653 18.115 1.7001 20.3624Z" fill="#ABAAAC" stroke="#ABAAAC" strokeWidth="0.5"/>
                            </svg>
                        </div>
                        <div className="password__wrapper input__wrap">
                            <input type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Пароль"/>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3954 7.67444H1.60467C0.963496 7.67444 0.441895 8.19608 0.441895 8.83721V18.8372C0.441895 19.4784 0.963535 20 1.60467 20H14.3954C15.0365 20 15.5581 19.4783 15.5581 18.8372V8.83721C15.5581 8.19608 15.0365 7.67444 14.3954 7.67444ZM14.1628 18.6047H1.83725V9.06979H14.1628V18.6047H14.1628Z" fill="#ABAAAC"/>
                                <path d="M7.9999 0C4.85826 0 2.30225 2.57699 2.30225 5.74418V8.13953H3.6976V5.74418C3.6976 3.34629 5.6276 1.39535 7.99994 1.39535C10.3723 1.39535 12.3023 3.34629 12.3023 5.74418V8.13953H13.6976V5.74418C13.6976 2.57699 11.1418 0 7.9999 0Z" fill="#ABAAAC"/>
                                <path d="M7.88369 13.0232C7.49834 13.0232 7.18604 13.3355 7.18604 13.7209V15.3487C7.18604 15.7341 7.49838 16.0464 7.88369 16.0464C8.269 16.0464 8.58135 15.7341 8.58135 15.3487V13.7209C8.58139 13.3355 8.26904 13.0232 7.88369 13.0232Z" fill="#ABAAAC"/>
                            </svg>                            
                        </div>
                        <input onClick={(e) => loginBtnHandler(e)} className="enter__btn form__btn" type="submit" value="Войти"/>
                        <input onClick={regPopupHandler} id="reg__open" className="form__btn" type="button" value="Регистрация"/>
                        {response[0] >= 400 && <p className="reg__error">{response[1]}</p>}
                        {response[0] === 200 && <p className="reg__success">{response[1]}</p>}
                    </form>
                    <div className="popup__or">
                        <span></span>
                        <p>Или войти через</p> 
                        <span></span>
                    </div>
                    <div className="popup__socials">
                        <button>
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.8031 0.189209H10C4.47715 0.189209 0 4.66636 0 10.1892V40.9923C0 46.5151 4.47715 50.9923 10 50.9923H40.8031C46.3259 50.9923 50.8031 46.5151 50.8031 40.9923V10.1892C50.8031 4.66636 46.3259 0.189209 40.8031 0.189209Z" fill="#3B5998"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M28.3411 20.2506L28.7097 17.9112C27.7653 17.8469 26.8175 17.854 25.8742 17.9325C25.2164 18.0201 24.615 18.3505 24.1883 18.8588C23.7855 19.4038 23.5861 20.0726 23.6247 20.7491V23.8115L21.2617 23.7938V26.165L23.6247 26.1733V33.2621L26.0029 33.2561V26.1673H28.8078L29.174 23.7961H26.0029C26.0029 23.7961 26.0029 21.0965 26.0029 20.8318C26.0134 20.7403 26.0428 20.6519 26.0892 20.5724C26.1356 20.4928 26.1982 20.4237 26.2727 20.3696C26.3473 20.3155 26.4322 20.2775 26.5223 20.258C26.6123 20.2385 26.7055 20.238 26.7957 20.2564C27.3179 20.2494 28.3411 20.2506 28.3411 20.2506Z" fill="white"/>
                                <path d="M30.7181 16.7297H20.0849C18.1274 16.7297 16.5405 18.3166 16.5405 20.2741V30.9073C16.5405 32.8649 18.1274 34.4517 20.0849 34.4517H30.7181C32.6756 34.4517 34.2625 32.8649 34.2625 30.9073V20.2741C34.2625 18.3166 32.6756 16.7297 30.7181 16.7297Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M29.5227 22.6135L29.8913 20.2742C28.947 20.2098 27.9992 20.2169 27.0559 20.2954C26.398 20.383 25.7966 20.7134 25.3699 21.2217C24.9672 21.7667 24.7677 22.4355 24.8063 23.1121V26.1744L22.4434 26.1567V28.5279L24.8063 28.5362V35.625L27.1846 35.6191V28.5303H29.9894L30.3557 26.159H27.1846C27.1846 26.159 27.1846 23.4594 27.1846 23.1947C27.195 23.1032 27.2244 23.0149 27.2708 22.9353C27.3173 22.8557 27.3798 22.7867 27.4544 22.7325C27.5289 22.6784 27.6139 22.6404 27.7039 22.6209C27.794 22.6014 27.8871 22.6009 27.9774 22.6194C28.4996 22.6123 29.5227 22.6135 29.5227 22.6135Z" fill="#3B5998"/>
                            </svg>
                        </button>
                        <button>
                            <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.6024 0.0078125H10.7993C5.27647 0.0078125 0.799316 4.48496 0.799316 10.0078V40.8109C0.799316 46.3337 5.27647 50.8109 10.7993 50.8109H41.6024C47.1252 50.8109 51.6024 46.3337 51.6024 40.8109V10.0078C51.6024 4.48497 47.1253 0.0078125 41.6024 0.0078125Z" fill="#6695BD"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.9661 21.0025V24.8505C27.9619 24.9141 27.9729 24.9777 27.9982 25.0362C28.0235 25.0947 28.0623 25.1463 28.1115 25.1868C28.1607 25.2273 28.2187 25.2556 28.2809 25.2692C28.3432 25.2828 28.4078 25.2814 28.4694 25.2652C28.8238 25.2404 29.6248 21.9571 29.9805 21.2411C30.1692 20.8374 30.4724 20.4981 30.8524 20.2652C30.9721 20.1568 31.1249 20.0919 31.286 20.0809H34.6863C34.7781 20.0964 34.8644 20.1349 34.9372 20.193C35.0099 20.251 35.0666 20.3266 35.1021 20.4127C35.1375 20.4987 35.1505 20.5923 35.1398 20.6848C35.129 20.7772 35.0949 20.8654 35.0407 20.941C34.7749 21.5317 32.4946 25.2061 32.3765 25.355C32.2343 25.5471 32.1384 25.7695 32.0965 26.0048C32.143 26.2829 32.2713 26.5408 32.4651 26.7456C32.7014 27.0126 34.6106 29.1144 34.789 29.2916C34.9572 29.4847 35.0696 29.72 35.114 29.9722C35.0714 30.1871 34.952 30.3793 34.778 30.5126C34.604 30.6459 34.3875 30.7112 34.1688 30.6964C33.4292 30.6964 31.6097 30.6964 31.4018 30.6964C30.9862 30.551 30.6038 30.324 30.2771 30.0289C30.0112 29.7926 29.0259 28.6678 28.8782 28.5201C28.8282 28.46 28.7643 28.413 28.692 28.3832C28.6198 28.3533 28.5413 28.3415 28.4635 28.3488C28.2862 28.3488 27.9495 28.3665 27.9649 29.04C28.0071 29.5065 27.9092 29.9751 27.6837 30.3857C27.5684 30.4963 27.4316 30.5822 27.2819 30.638C27.1322 30.6939 26.9726 30.7186 26.813 30.7106C25.6045 30.7838 24.4026 30.484 23.3702 29.8517C21.5106 28.6974 19.3933 25.6126 18.408 23.6442C17.8203 22.667 17.4571 21.5713 17.3447 20.4365C17.4038 20.2286 17.4037 20.0821 17.6117 20.0821C17.8196 20.0821 20.4343 20.0821 20.6835 20.0821C20.8564 20.1673 21.0005 20.3012 21.0983 20.4672C21.1869 20.5854 21.8626 22.6081 22.0694 22.9637C22.2761 23.3193 23.2957 25.2676 23.8486 25.2676C24.0322 25.2315 24.1941 25.1243 24.299 24.9694C24.4039 24.8145 24.4433 24.6244 24.4087 24.4405C24.4087 23.9679 24.4087 22.1024 24.4087 21.8649C24.1839 21.3411 23.772 20.9198 23.2532 20.6835C23.3824 20.5119 23.5472 20.3703 23.7362 20.2683C23.9253 20.1663 24.1341 20.1064 24.3484 20.0927C25.0573 20.0632 26.8354 20.0632 27.2194 20.1211C27.4255 20.1613 27.6117 20.2705 27.7475 20.4307C27.8832 20.5909 27.9603 20.7926 27.9661 21.0025Z" fill="white"/>
                            </svg>
                        </button>
                        <button>
                            <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.4017 0.0078125H10.5986C5.07579 0.0078125 0.598633 4.48496 0.598633 10.0078V40.8109C0.598633 46.3337 5.07578 50.8109 10.5986 50.8109H41.4017C46.9246 50.8109 51.4017 46.3337 51.4017 40.8109V10.0078C51.4017 4.48497 46.9246 0.0078125 41.4017 0.0078125Z" fill="#EDEDED"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.0001 16.5483C27.4093 16.5497 28.7978 16.8883 30.0495 17.5357C31.3012 18.1831 32.3798 19.1206 33.1953 20.27L30.3172 22.3257C29.8872 21.7157 29.3324 21.204 28.6898 20.8246C28.0471 20.4451 27.3311 20.2065 26.5892 20.1247C25.8474 20.0428 25.0967 20.1194 24.3867 20.3496C23.6767 20.5798 23.0238 20.9582 22.4711 21.4597L20.1294 18.7837C21.7457 17.3435 23.8352 16.5479 26.0001 16.5483Z" fill="#EA4335"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M30.7263 28.363H25.4097V24.8186H34.8614V28.363C34.2335 30.0097 33.1156 31.4241 31.6584 32.4154L27.899 30.3656C29.0317 30.0183 30.0228 29.3162 30.7263 28.363Z" fill="#4285F4"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M27.9367 30.3857L31.6406 32.406C29.9975 33.5938 28.0276 34.245 26.0003 34.2704C24.8347 34.2726 23.68 34.0441 22.6031 33.598C21.5262 33.1519 20.5482 32.497 19.7256 31.6711L22.2172 29.1464C22.7113 29.6478 23.3002 30.0457 23.9498 30.3169C24.5993 30.5882 25.2964 30.7272 26.0003 30.726C26.6602 30.7202 27.3145 30.6053 27.9367 30.3857Z" fill="#34A853"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.4712 21.4598C21.9316 21.9358 21.495 22.5171 21.1881 23.1679C20.8813 23.8188 20.7108 24.5255 20.687 25.2447C20.6633 25.9639 20.7867 26.6803 21.0498 27.35C21.313 28.0198 21.7102 28.6287 22.2172 29.1393L19.7255 31.6641C18.8713 30.8118 18.2014 29.7931 17.7573 28.6712C17.3132 27.5493 17.1044 26.348 17.1439 25.142C17.1833 23.9361 17.4701 22.751 17.9866 21.6605C18.503 20.57 19.238 19.5972 20.1461 18.8026L22.4712 21.4598Z" fill="#FBBC05"/>
                            </svg>
                        </button>
                        <button>
                            <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.201 0.189209H10.3979C4.8751 0.189209 0.397949 4.66636 0.397949 10.1892V40.9923C0.397949 46.5151 4.8751 50.9923 10.3979 50.9923H41.201C46.7239 50.9923 51.201 46.5151 51.201 40.9923V10.1892C51.201 4.66636 46.7239 0.189209 41.201 0.189209Z" fill="#7B519D"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.1487 19.0018C22.5858 19.7106 23.5664 21.4202 23.7081 21.7321C23.8294 21.9389 23.8675 22.184 23.8149 22.4178C23.7622 22.6516 23.6227 22.8567 23.4246 22.9915C23.0392 23.2252 22.6789 23.498 22.3494 23.8056C22.184 24.1211 22.0305 25.3415 23.8499 27.1527C25.6694 28.9639 27.1344 29.3301 27.5124 28.9249C27.8905 28.5196 28.1151 28.0719 28.3514 27.8356C28.5238 27.6484 28.76 27.5324 29.0136 27.5106C29.2672 27.4887 29.5198 27.5625 29.7218 27.7174C30.723 28.2465 31.6899 28.8384 32.6164 29.4896C33.1954 29.9362 33.6324 30.2611 33.4198 30.8424C33.2244 31.4225 32.9015 31.9514 32.4747 32.3901C32.1268 32.7358 31.6987 32.9899 31.2286 33.1297C30.7585 33.2695 30.2611 33.2906 29.7809 33.1912C28.412 32.8551 27.1125 32.2821 25.9411 31.4981C24.698 30.6085 23.5427 29.6021 22.4912 28.4925C21.5297 27.5481 20.6485 26.5253 19.8565 25.4349C19.0784 24.1338 18.516 22.7154 18.1908 21.2347C18.082 20.8438 18.0714 20.4321 18.1601 20.0362C18.2487 19.6402 18.4337 19.2723 18.6987 18.9651C19.1715 18.4749 19.7738 18.1291 20.4355 17.968C20.8962 17.8475 21.4162 17.8475 22.1487 19.0018ZM25.7994 19.1896V17.9113C27.8361 17.9113 29.7894 18.7203 31.2296 20.1605C32.6698 21.6007 33.4789 23.5541 33.4789 25.5908H32.203C32.202 23.893 31.527 22.265 30.3262 21.0647C29.1254 19.8644 27.4972 19.1899 25.7994 19.1896ZM30.9151 25.5896H29.6391C29.6382 24.5716 29.2333 23.5957 28.5133 22.876C27.7934 22.1562 26.8173 21.7516 25.7994 21.751V20.4703C26.4715 20.4706 27.1369 20.6033 27.7578 20.8608C28.3786 21.1183 28.9427 21.4956 29.4177 21.971C29.8928 22.4465 30.2695 23.0109 30.5264 23.632C30.7833 24.2531 30.9154 24.9187 30.9151 25.5908V25.5896Z" fill="white"/>
                            </svg>
                        </button>
                        <button>
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.0004 0.189209H10.1973C4.67442 0.189209 0.197266 4.66636 0.197266 10.1892V40.9923C0.197266 46.5151 4.67442 50.9923 10.1973 50.9923H41.0004C46.5232 50.9923 51.0004 46.5151 51.0004 40.9923V10.1892C51.0004 4.66636 46.5232 0.189209 41.0004 0.189209Z" fill="#2AA1DA"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M30.8918 31.0256C30.8701 31.2607 30.7786 31.484 30.6288 31.6666C30.4791 31.8491 30.2781 31.9827 30.0518 32.0499C29.8255 32.1172 29.5842 32.1151 29.3591 32.0439C29.134 31.9727 28.9352 31.8357 28.7887 31.6505C27.5009 30.6262 25.4925 29.1518 25.4925 29.1518C25.4925 29.1518 24.0392 31.712 23.7793 31.9743C23.6935 32.0466 23.5937 32.1002 23.486 32.1316C23.3782 32.163 23.265 32.1716 23.1538 32.1568C23.0426 32.142 22.9357 32.1042 22.84 32.0457C22.7442 31.9872 22.6618 31.9093 22.5978 31.8171C22.5846 31.7768 22.5689 31.7374 22.5507 31.699L23.3658 27.6205L29.1787 21.9105L21.2509 26.4344C21.2509 26.4344 17.6711 25.364 17.1395 25.1549C17.0023 25.0799 16.8892 24.9677 16.8132 24.8311C16.7373 24.6946 16.7016 24.5393 16.7103 24.3832C16.7189 24.2272 16.7715 24.0768 16.8621 23.9495C16.9527 23.8222 17.0777 23.7231 17.2222 23.6638C17.9784 23.2787 31.3171 18.1842 31.766 18.053C32.215 17.9219 33.3965 17.5804 33.2665 18.73C33.1366 19.8796 31.0217 30.3947 30.8918 31.0256Z" fill="white"/>
                            </svg>                        
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;