import React from 'react';
import SupportList from './SupportList';

const Support = () => {
    return (
        <section class="support main">
            <div class="container">
                <div class="support__inner">
                    <div class="support__head">
                        <h1 class="support__head-title">Поддержка</h1>
                        <button class="support__head-btn">
                            <p>Создать тикет</p>
                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7602 5.91716L9.3432 0.500008C9.18857 0.345375 8.98248 0.260498 8.76272 0.260498C8.54272 0.260498 8.33675 0.345497 8.18212 0.500008L7.69029 0.991955C7.53578 1.14634 7.45066 1.35256 7.45066 1.57244C7.45066 1.79219 7.53578 2.00536 7.69029 2.15975L10.8505 5.32692H0.810358C0.35768 5.32692 0 5.68131 0 6.13411V6.82959C0 7.28239 0.35768 7.67251 0.810358 7.67251H10.8864L7.69042 10.8574C7.5359 11.012 7.45078 11.2126 7.45078 11.4325C7.45078 11.6521 7.5359 11.8556 7.69042 12.0102L8.18224 12.5005C8.33687 12.6552 8.54285 12.7394 8.76284 12.7394C8.9826 12.7394 9.18869 12.6541 9.34333 12.4994L14.7603 7.08239C14.9153 6.92727 15.0006 6.7202 15 6.50008C15.0005 6.27923 14.9153 6.07204 14.7602 5.91716Z" fill="#3C4852"/>
                            </svg>
                        </button>
                    </div>
                    <SupportList />
                </div>
            </div>
        </section>
    );
};

export default Support;