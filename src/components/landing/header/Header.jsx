import React from 'react';

const Header = ({burgerHandler, loginPopupHandler}) => {
    return (
        <header className="header-landing">
            <nav className="nav-landing">
                <div className="container-landing">
                    <div className="nav-landing__inner">
                        <div className="nav-landing__logo">
                            <button>
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
                            </button>
                        </div>
                        <div onClick={burgerHandler} className="nav-landing__burger">
                            <span></span>
                        </div>
                        <ul className="nav-landing__list">
                            <li className="nav-landing__list-item">
                                <button className="nav-landing__list-link">
                                    О сервисе
                                </button>
                            </li>
                            <li className="nav-landing__list-item">
                                <button className="nav-landing__list-link nav-landing__list-i">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9539 25.9999C16.4127 25.9999 19.6704 24.6684 22.1274 22.2502C24.5911 19.8253 25.9661 16.5854 25.9994 13.1274C26.033 9.61668 24.6983 6.31686 22.241 3.83569C19.7911 1.36219 16.5093 0 13 0C9.51577 0 6.23879 1.37125 3.7728 3.86113C1.30843 6.34926 -0.0310594 9.63741 0.000562161 13.1204L0 24.5945C0 25.1515 0.328934 25.6559 0.838603 25.8806C1.02074 25.9609 1.21363 25.9999 1.40519 25.9999C1.74959 25.9999 2.08948 25.8733 2.3537 25.6318C2.3537 25.6318 3.65953 24.2412 5.39646 24.2412C5.98793 24.2412 6.58248 24.3751 7.13431 24.6516C8.91953 25.5463 10.8736 25.9999 12.9411 25.9999H12.9539ZM5.39794 21.4295C4.51331 21.4295 3.63346 21.6047 2.81101 21.9463C2.81101 21.9463 2.81144 13.1048 2.81137 13.1003C2.78516 10.3705 3.83583 7.79176 5.76995 5.8391C7.70399 3.88629 10.2717 2.8108 13 2.8108C15.7534 2.8108 18.326 3.87722 20.2438 5.81366C22.1693 7.75775 23.2151 10.3455 23.1886 13.1004C23.1352 18.6646 18.5347 23.1896 12.9423 23.1891C11.3148 23.1891 9.78427 22.8358 8.39362 22.1388C7.44139 21.6615 6.41636 21.4295 5.39794 21.4295Z" fill="#FFCC80"/>
                                        <path d="M20.2378 13.0701C20.2378 14.0403 19.4512 14.8269 18.481 14.8269C17.5108 14.8269 16.7243 14.0403 16.7243 13.0701C16.7243 12.0999 17.5108 11.3134 18.481 11.3134C19.4513 11.3134 20.2378 12.0999 20.2378 13.0701ZM14.6864 13.0701C14.6864 14.0403 13.8999 14.8269 12.9297 14.8269C11.9595 14.8269 11.1729 14.0403 11.1729 13.0701C11.1729 12.0999 11.9595 11.3134 12.9297 11.3134C13.9 11.3134 14.6864 12.0999 14.6864 13.0701ZM9.13509 13.0701C9.13509 14.0403 8.34855 14.8269 7.37833 14.8269C6.40812 14.8269 5.62158 14.0403 5.62158 13.0701C5.62158 12.0999 6.40812 11.3134 7.37833 11.3134C8.34862 11.3134 9.13509 12.0999 9.13509 13.0701Z" fill="#FFCC80"/>
                                    </svg> 
                                    <p>
                                        Поддержка
                                    </p>
                                </button>
                            </li>
                            <li className="nav-landing__list-item">
                                <button className="nav-landing__list-btn nav-landing__list-i" onClick={(e) => loginPopupHandler(e)}>
                                    <p>
                                        Войти
                                    </p>
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5 23C8.42824 23 5.54035 21.8038 3.36824 19.6318C1.19622 17.4597 0 14.5718 0 11.5C0 8.42824 1.19622 5.54035 3.36824 3.36824C5.54035 1.19622 8.42824 0 11.5 0C14.5718 0 17.4597 1.19622 19.6318 3.36824C21.8038 5.54035 23 8.42824 23 11.5C23 14.5718 21.8038 17.4597 19.6318 19.6318C17.4597 21.8038 14.5718 23 11.5 23ZM11.5 1.79688C6.14967 1.79688 1.79688 6.14967 1.79688 11.5C1.79688 16.8503 6.14967 21.2031 11.5 21.2031C16.8503 21.2031 21.2031 16.8503 21.2031 11.5C21.2031 6.14967 16.8503 1.79688 11.5 1.79688ZM11.4551 12.3535C9.07714 12.3535 7.14258 10.419 7.14258 8.04102C7.14258 5.66308 9.07714 3.72852 11.4551 3.72852C13.833 3.72852 15.7676 5.66308 15.7676 8.04102C15.7676 10.419 13.833 12.3535 11.4551 12.3535ZM11.4551 5.52539C10.0679 5.52539 8.93945 6.65392 8.93945 8.04102C8.93945 9.42811 10.0679 10.5566 11.4551 10.5566C12.8422 10.5566 13.9707 9.42811 13.9707 8.04102C13.9707 6.65392 12.8422 5.52539 11.4551 5.52539Z" fill="#3C4852"/>
                                        <path d="M16.5783 17.7891C16.3183 17.7891 16.0604 17.6768 15.8827 17.4599C14.955 16.3273 13.5845 15.6777 12.1227 15.6777H11.0567C9.59485 15.6777 8.22437 16.3273 7.29669 17.4599C6.98228 17.8437 6.41618 17.9001 6.03232 17.5856C5.64842 17.2712 5.59213 16.7052 5.90654 16.3213C7.17697 14.7704 9.05412 13.8809 11.0567 13.8809H12.1227C14.1253 13.8809 16.0024 14.7704 17.2728 16.3213C17.5872 16.7052 17.5309 17.2712 17.147 17.5857C16.9801 17.7224 16.7786 17.7891 16.5783 17.7891Z" fill="#3C4852"/>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="menu-landing">
                <div className="container-landing">
                    <ul className="menu-landing__list nav-landing__list">
                        <li className="nav-landing__list-item">
                            <button className="nav-landing__list-link" >
                                О сервисе
                            </button>
                        </li>
                        <li className="nav-landing__list-item">
                            <button className="menu-landing__list-link nav-landing__list-link nav-landing__list-i" >
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9539 25.9999C16.4127 25.9999 19.6704 24.6684 22.1274 22.2502C24.5911 19.8253 25.9661 16.5854 25.9994 13.1274C26.033 9.61668 24.6983 6.31686 22.241 3.83569C19.7911 1.36219 16.5093 0 13 0C9.51577 0 6.23879 1.37125 3.7728 3.86113C1.30843 6.34926 -0.0310594 9.63741 0.000562161 13.1204L0 24.5945C0 25.1515 0.328934 25.6559 0.838603 25.8806C1.02074 25.9609 1.21363 25.9999 1.40519 25.9999C1.74959 25.9999 2.08948 25.8733 2.3537 25.6318C2.3537 25.6318 3.65953 24.2412 5.39646 24.2412C5.98793 24.2412 6.58248 24.3751 7.13431 24.6516C8.91953 25.5463 10.8736 25.9999 12.9411 25.9999H12.9539ZM5.39794 21.4295C4.51331 21.4295 3.63346 21.6047 2.81101 21.9463C2.81101 21.9463 2.81144 13.1048 2.81137 13.1003C2.78516 10.3705 3.83583 7.79176 5.76995 5.8391C7.70399 3.88629 10.2717 2.8108 13 2.8108C15.7534 2.8108 18.326 3.87722 20.2438 5.81366C22.1693 7.75775 23.2151 10.3455 23.1886 13.1004C23.1352 18.6646 18.5347 23.1896 12.9423 23.1891C11.3148 23.1891 9.78427 22.8358 8.39362 22.1388C7.44139 21.6615 6.41636 21.4295 5.39794 21.4295Z" fill="#FFCC80"/>
                                    <path d="M20.2378 13.0701C20.2378 14.0403 19.4512 14.8269 18.481 14.8269C17.5108 14.8269 16.7243 14.0403 16.7243 13.0701C16.7243 12.0999 17.5108 11.3134 18.481 11.3134C19.4513 11.3134 20.2378 12.0999 20.2378 13.0701ZM14.6864 13.0701C14.6864 14.0403 13.8999 14.8269 12.9297 14.8269C11.9595 14.8269 11.1729 14.0403 11.1729 13.0701C11.1729 12.0999 11.9595 11.3134 12.9297 11.3134C13.9 11.3134 14.6864 12.0999 14.6864 13.0701ZM9.13509 13.0701C9.13509 14.0403 8.34855 14.8269 7.37833 14.8269C6.40812 14.8269 5.62158 14.0403 5.62158 13.0701C5.62158 12.0999 6.40812 11.3134 7.37833 11.3134C8.34862 11.3134 9.13509 12.0999 9.13509 13.0701Z" fill="#FFCC80"/>
                                </svg> 
                                <p>
                                    Поддержка
                                </p>
                            </button>
                        </li>
                        <li className="nav-landing__list-item">
                            <button onClick={(e) => {burgerHandler(); loginPopupHandler(e)}} className="nav-landing__list-btn nav-landing__list-i">
                                <p>
                                    Войти
                                </p>
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 23C8.42824 23 5.54035 21.8038 3.36824 19.6318C1.19622 17.4597 0 14.5718 0 11.5C0 8.42824 1.19622 5.54035 3.36824 3.36824C5.54035 1.19622 8.42824 0 11.5 0C14.5718 0 17.4597 1.19622 19.6318 3.36824C21.8038 5.54035 23 8.42824 23 11.5C23 14.5718 21.8038 17.4597 19.6318 19.6318C17.4597 21.8038 14.5718 23 11.5 23ZM11.5 1.79688C6.14967 1.79688 1.79688 6.14967 1.79688 11.5C1.79688 16.8503 6.14967 21.2031 11.5 21.2031C16.8503 21.2031 21.2031 16.8503 21.2031 11.5C21.2031 6.14967 16.8503 1.79688 11.5 1.79688ZM11.4551 12.3535C9.07714 12.3535 7.14258 10.419 7.14258 8.04102C7.14258 5.66308 9.07714 3.72852 11.4551 3.72852C13.833 3.72852 15.7676 5.66308 15.7676 8.04102C15.7676 10.419 13.833 12.3535 11.4551 12.3535ZM11.4551 5.52539C10.0679 5.52539 8.93945 6.65392 8.93945 8.04102C8.93945 9.42811 10.0679 10.5566 11.4551 10.5566C12.8422 10.5566 13.9707 9.42811 13.9707 8.04102C13.9707 6.65392 12.8422 5.52539 11.4551 5.52539Z" fill="#3C4852"/>
                                    <path d="M16.5783 17.7891C16.3183 17.7891 16.0604 17.6768 15.8827 17.4599C14.955 16.3273 13.5845 15.6777 12.1227 15.6777H11.0567C9.59485 15.6777 8.22437 16.3273 7.29669 17.4599C6.98228 17.8437 6.41618 17.9001 6.03232 17.5856C5.64842 17.2712 5.59213 16.7052 5.90654 16.3213C7.17697 14.7704 9.05412 13.8809 11.0567 13.8809H12.1227C14.1253 13.8809 16.0024 14.7704 17.2728 16.3213C17.5872 16.7052 17.5309 17.2712 17.147 17.5857C16.9801 17.7224 16.7786 17.7891 16.5783 17.7891Z" fill="#3C4852"/>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-landing">
                <article className="header-landing__inner">
                    <h1 className="header-landing__title">Купи работу</h1>
                    <div className="header-landing__subtitle">
                        <h3>
                            экономим твои деньги и время
                        </h3>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36 18C36 27.941 27.941 36 18 36C8.06 36 0 27.941 0 18C0 8.06 8.06 0 18 0C27.941 0 36 8.06 36 18Z" fill="#FFCC80"/>
                            <path d="M11.5 19.9999C12.8807 19.9999 14 18.4328 14 16.4999C14 14.5669 12.8807 12.9999 11.5 12.9999C10.1193 12.9999 9 14.5669 9 16.4999C9 18.4328 10.1193 19.9999 11.5 19.9999Z" fill="#3C4852"/>
                            <path d="M28.457 17.7968C28.397 17.6618 26.9579 14.4999 23.9999 14.4999C21.0429 14.4999 19.6029 17.6618 19.5429 17.7968C19.451 18.0038 19.511 18.2459 19.688 18.3878C19.8629 18.5299 20.114 18.5348 20.2979 18.4019C20.3099 18.3929 21.56 17.4998 23.9999 17.4998C26.426 17.4998 27.674 18.3809 27.7019 18.4009C27.7899 18.4669 27.896 18.4999 27.9999 18.4999C28.1099 18.4999 28.2209 18.4628 28.3119 18.3908C28.4889 18.2489 28.55 18.0049 28.457 17.7968ZM5.99895 12.4579C5.79094 12.4579 5.57995 12.3929 5.39995 12.2579C4.95795 11.9269 4.86895 11.2999 5.19994 10.8579C8.46195 6.50788 12.816 6.45789 12.9999 6.45789C13.5519 6.45789 13.9999 6.90588 13.9999 7.45788C13.9999 8.00889 13.5549 8.45589 13.0039 8.45788C12.8479 8.45988 9.43495 8.54387 6.79894 12.0579C6.60394 12.3199 6.30295 12.4579 5.99895 12.4579ZM29.0009 14.5829C28.6959 14.5829 28.397 14.4449 28.1999 14.1829C25.6079 10.7259 21.239 11.5559 21.1959 11.5629C20.6489 11.6709 20.1279 11.3199 20.0189 10.7789C19.9109 10.2369 20.2619 9.71088 20.8029 9.60189C21.0339 9.55488 26.4599 8.52988 29.7989 12.9819C30.131 13.4239 30.041 14.0509 29.5989 14.3819C29.42 14.5189 29.21 14.5829 29.0009 14.5829ZM23.2539 23.5769C23.066 23.4668 22.8219 23.4899 22.6569 23.6369C22.6469 23.6449 21.644 24.4999 17.9999 24.4999C14.3589 24.4999 13.3539 23.6459 13.3539 23.6459C13.1949 23.4859 12.9499 23.4559 12.7539 23.5639C12.5589 23.6749 12.4609 23.9029 12.516 24.1208C12.5259 24.1649 13.6599 28.4999 17.9999 28.4999C22.34 28.4999 23.474 24.1649 23.4849 24.1208C23.5379 23.9078 23.441 23.6899 23.2539 23.5769Z" fill="#3C4852"/>
                        </svg>
                    </div>
                    <div className="header-landing__btns">
                        <button className="header-landing__btn-1">
                            <p>Разместить заказ</p>
                        </button>
                        <button className="header-landing__btn-2">
                            <p>Стать автором</p>
                        </button>
                    </div>
                </article>
            </div>
        </header>
    );
};

export default Header;