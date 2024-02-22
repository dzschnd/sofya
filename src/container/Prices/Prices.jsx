import React from 'react';

import './Prices.css';

const Prices = () => (
    <div className='prices'>
        <div className='prices__title'>Праис</div>
        <div className='prices__card'>
            <img src={require('../../assets/images/sonya-prices.png')}/>
            <div className='card__info'>
                <div className='card__info-header'>
                    Фйксйрованная цена
                </div>
                <div className='card__info-subheader'>
                    на все виды фотосессий
                </div>
                <ul className='card__info-list'>
                    <li><span>до 1,5 часов съемкй</span></li>
                    <li><span>Помощь в подборе локацйй й образа</span></li>
                    <li><span>от 60 кадров в цветокоррекцйй</span></li>
                    <li><span>Готовые фотографйй в теченйе трех днеи</span></li>
                </ul>
                <div className='card__info-footer'>
                    <div className='card__info-price'>
                        4 500 р.
                    </div>
                    <button className='card__info-button'>
                        Хочу съемку
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Prices;