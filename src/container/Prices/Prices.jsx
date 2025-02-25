import React from 'react';

import './Prices.scss';

const Prices = () => (
<<<<<<< HEAD
    <div className='prices | section-wrapper'>
        <div className='content-wrapper'>
            <div className='section-header text-neutral-400'>
                Праис
            </div>
            <div className='prices__body'>
                <img className='prices__image' src={require('../../assets/images/prices/sonya-prices.png')} alt=''/>
                <div className='prices__text'>
                    <div className='prices__text-header | font-size-800 text-neutral-400'>
                        Фйксйрованная цена
                    </div>
                    <div className='prices__text-subheader | font-family-accent text-accent font-size-800'>
                        на все виды фотосессий
                    </div>
                    <ul className='prices__text-list | font-size-500 font-weight-light text-neutral-400'>
                        <li><span>до&nbsp;1,5 часов съемкй</span></li>
                        <li><span>Помощь в&nbsp;подборе локацйй й&nbsp;образа</span></li>
                        <li><span>от&nbsp;60 кадров в&nbsp;цветокоррекцйй</span></li>
                        <li><span>Готовые фотографйй в&nbsp;теченйе трех днеи</span></li>
                    </ul>
                    <div className='prices__text-footer'>
                        <div className='prices__text-price | font-size-800 text-accent font-weight-bold'>
                            4 500 р.
                        </div>
                        <button className='prices__button | main-button'>
                            Хочу съемку
                        </button>
=======
    <div className='prices'>
        <div className='prices__title'>Праис</div>
        <div className='prices__content'>
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
>>>>>>> master
                    </div>
                </div>
            </div>
        </div>
    </div>
);

        export default Prices;