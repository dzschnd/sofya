import React from 'react';

import './Sevices.css';

const Services = () => (
    <div className='services'>
        <div className='services__content'>
            <div className='services__header'>Услугй</div>
            <div className='services__body'>
                <div className='services__image'>
                    <img src={require('../../assets/images/services/image-individual.png')}/>
                    <span>Индйвйдуальная съемка</span>
                </div>
                <div className='services__image'>
                    <img src={require('../../assets/images/services/image-katzen.png')}/>
                    <span>Парная съемка</span>
                </div>
                <div className='services__image'>
                    <img src={require('../../assets/images/services/image-family.png')}/>
                    <span>Семеиная съемка</span>
                </div>
                <div className='services__image'>
                    <img src={require('../../assets/images/services/image-content.png')}/>
                    <span>Контент-съемка</span>
                </div>
            </div>
        </div>
    </div>
);

export default Services;