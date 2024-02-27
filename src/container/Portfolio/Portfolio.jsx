import React from 'react';

import './Portfolio.scss';

const Portfolio = () => (
    <div className='portfolio'>
        <div className='portfolio__card'>
            <div className='portfolio__header'>
                Портфолйо
            </div>
            <div className='portfolio__body'>
                <img className="portfolio__image image-1"
                     src={require('../../assets/images/portfolio/black-n-white/image-1.png')} alt=''/>
                <img className="portfolio__image image-2"
                     src={require('../../assets/images/portfolio/black-n-white/image-2.png')} alt=''/>
                <img className="portfolio__image image-3"
                     src={require('../../assets/images/portfolio/black-n-white/image-3.png')} alt=''/>
                <img className="portfolio__image image-4"
                     src={require('../../assets/images/portfolio/black-n-white/image-4.png')} alt=''/>
                <img className="portfolio__image image-5"
                     src={require('../../assets/images/portfolio/black-n-white/image-5.png')} alt=''/>
                <img className="portfolio__image image-6"
                     src={require('../../assets/images/portfolio/black-n-white/image-6.png')} alt=''/>
                <img className="portfolio__image image-7"
                     src={require('../../assets/images/portfolio/black-n-white/image-7.png')} alt=''/>
                <img className="portfolio__image image-8"
                     src={require('../../assets/images/portfolio/black-n-white/image-8.png')} alt=''/>
                <img className="portfolio__image image-9"
                     src={require('../../assets/images/portfolio/black-n-white/image-9.png')} alt=''/>
            </div>
        </div>
    </div>
);

export default Portfolio;