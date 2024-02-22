import React from 'react';

import './Prices.css';

const Prices = () => (
    <div className='prices'>
        <div className='prices__title'>Праис</div>
        <div className='prices__card'>
            <img src={require('../../assets/images/sonya-prices.png')}/>
            <div className='card__info'>

            </div>
        </div>
    </div>
);

export default Prices;