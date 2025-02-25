import React from 'react';

import './Portfolio.scss';

const Portfolio = () => (
<<<<<<< HEAD
    <div className='portfolio | section-wrapper background-neutral-900'>
        <div className='content-wrapper'>
            <div className='portfolio__header | section-header text-neutral-100'>
                Портфолйо
            </div>
            <div className='portfolio__body'>
                <img className="portfolio__image portfolio__image-1"
                     src={require('../../assets/images/portfolio/black-n-white/image-1-bnw.png')} alt=''/>
                <img className="portfolio__image portfolio__image-2"
                     src={require('../../assets/images/portfolio/black-n-white/image-2-bnw.png')} alt=''/>
                <img className="portfolio__image portfolio__image-3"
                     src={require('../../assets/images/portfolio/black-n-white/image-3-bnw.png')} alt=''/>
                <img className="portfolio__image portfolio__image-4"
                     src={require('../../assets/images/portfolio/black-n-white/image-4-bnw.png')} alt=''/>
                <img className="portfolio__image portfolio__image-5"
                     src={require('../../assets/images/portfolio/black-n-white/image-5-bnw.png')} alt=''/>
                <img className="portfolio__image portfolio__image-6"
                     src={require('../../assets/images/portfolio/black-n-white/image-9-bnw.png')} alt=''/>
                <img className="portfolio__image portfolio__image-7"
                     src={require('../../assets/images/portfolio/black-n-white/image-7-bnw.png')} alt=''/>
                <img className="portfolio__image portfolio__image-8"
                     src={require('../../assets/images/portfolio/black-n-white/image-8-bnw.png')} alt=''/>
                <img className="portfolio__image portfolio__image-9"
                     src={require('../../assets/images/portfolio/black-n-white/image-6-bnw.png')} alt=''/>
                <img className="portfolio__image portfolio__image-10" alt=''/>
=======
    <div className='portfolio'>
        <div className='portfolio__card'>
            <div className='portfolio__content'>
                <div className='portfolio__header'>
                    Портфолйо
                </div>
                <div className='portfolio__body'>
                    <div className='image'>
                        <img src={require('../../assets/images/portfolio/image-1.png')} alt=''/>
                    </div>
                    <div className='image'>
                        <img src={require('../../assets/images/portfolio/image-2.png')} alt=''/>
                    </div>
                    <div className='image'>
                        <img src={require('../../assets/images/portfolio/image-3.png')} alt=''/>
                    </div>
                    <div className='image'>
                        <img src={require('../../assets/images/portfolio/image-4.png')} alt=''/>
                    </div>
                    <div className='image'>
                        <img src={require('../../assets/images/portfolio/image-5.png')} alt=''/>
                    </div>
                    <div className='image'>
                        <img src={require('../../assets/images/portfolio/image-6.png')} alt=''/>
                    </div>
                    <div className='image'>
                        <img src={require('../../assets/images/portfolio/image-7.png')} alt=''/>
                    </div>
                    <div className='image'>
                        <img src={require('../../assets/images/portfolio/image-8.png')} alt=''/>
                    </div>
                    <div className='image' id='last'>
                        <img src={require('../../assets/images/portfolio/image-9.png')} alt=''/>
                    </div>
                </div>
>>>>>>> master
            </div>
        </div>
    </div>
);

export default Portfolio;