import React from 'react';

import './Portfolio.css';

const Portfolio = () => (
    <div className='portfolio'>
            <div className='portfolio__title'>
                Портфолйо
            </div>
            <div className='portfolio__card'>
                <img src={require('../../assets/images/portfolio/image-1.png')}/>
                <img src={require('../../assets/images/portfolio/image-2.png')}/>
                <img src={require('../../assets/images/portfolio/image-3.png')}/>
                <img src={require('../../assets/images/portfolio/image-4.png')}/>
                <img src={require('../../assets/images/portfolio/image-5.png')}/>
                <img src={require('../../assets/images/portfolio/image-6.png')}/>
                <img src={require('../../assets/images/portfolio/image-7.png')}/>
                <img src={require('../../assets/images/portfolio/image-8.png')}/>
                <img src={require('../../assets/images/portfolio/image-9.png')}/>
            </div>
    </div>
);

export default Portfolio;