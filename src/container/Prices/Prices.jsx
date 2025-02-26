import React from 'react';

import './Prices.scss';

const Prices = () => (
    <div className='prices | section-wrapper'>
        {/*<div className='content-wrapper'>*/}
            <div className='section-header text-neutral-400'>
                Праис
            </div>
            <div className='prices__body'>
                <div className='prices__image'/>
                <div className='prices__text'>
                    <div className='prices__text-header | font-size-600 text-neutral-400'>
                        Фйксйрованная цена
                    </div>
                    <div className='prices__text-subheader | font-family-accent font-weight-regular text-accent font-size-500'>
                        на все виды фотосессий
                    </div>
                    <ul className='prices__text-list | font-size-400 font-weight-light text-neutral-400'>
                        <li><span>до&nbsp;1,5 часов съемкй</span></li>
                        <li><span>Помощь в&nbsp;подборе локацйй й&nbsp;образа</span></li>
                        <li><span>от&nbsp;60 кадров в&nbsp;цветокоррекцйй</span></li>
                        <li><span>Готовые фотографйй в&nbsp;теченйе трех днеи</span></li>
                    </ul>
                    <div className='prices__text-footer'>
                        <div className='prices__text-price | font-size-800 text-accent font-weight-bold'>
                            4 500₽
                        </div>
                        <button className='prices__button | main-button'>
                            Хочу съемку
                        </button>
                    </div>
                </div>
            </div>
        {/*</div>*/}
    </div>
);

        export default Prices;