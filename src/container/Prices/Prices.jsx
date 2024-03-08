import React from 'react';

import './Prices.scss';

const Prices = () => (
    <div className='prices'>

            <div className='prices__header'>Праис</div>

            <div className='prices__body'>
                <img className='prices__image' src={require('../../assets/images/sonya-prices.png')} alt=''/>
                <div className='prices__info'>
                    <div className='prices__info-header'>
                        Фйксйрованная цена
                    </div>
                    <div className='prices__info-subheader'>
                        на все виды фотосессий
                    </div>
                    <ul className='prices__info-list'>
                        <li><span>до 1,5 часов съемкй</span></li>
                        <li><span>Помощь в подборе локацйй й образа</span></li>
                        <li><span>от 60 кадров в цветокоррекцйй</span></li>
                        <li><span>Готовые фотографйй в теченйе трех днеи</span></li>
                    </ul>
                    <div className='prices__info-footer'>
                        <div className='prices__info-price'>
                            <span>4 500 р.</span>
                        </div>
                        <button className='prices__info-button'>
                            Хочу съемку
                        </button>
                    </div>
                </div>
            </div>
    </div>
);

export default Prices;