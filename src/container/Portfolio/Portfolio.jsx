import React from 'react';

import './Portfolio.css';

const Portfolio = () => (
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
            </div>
        </div>
    </div>
);

export default Portfolio;