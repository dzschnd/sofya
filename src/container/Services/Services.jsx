import React from 'react';

import './Sevices.scss';

const Services = () => (
    <div className='services'>
        <div className='services__card'>
        <div className='services__content'>
            <div className='services__header'>Услугй</div>
            <div className='services__body'>
                <div className='services__image'>
                    <img className='services__image-1' src={require('../../assets/images/services/black-n-white/image-individual.png')}/>
                    <span>Индйвйдуальная<br/>съемка</span>
                </div>
                <div className='services__image'>
                    <img className='services__image-2' src={require('../../assets/images/services/black-n-white/image-katzen.png')}/>
                    <span>Парная<br id='adapting'/> съемка</span>
                </div>
                <div className='services__image'>
                    <img className='services__image-3' src={require('../../assets/images/services/black-n-white/image-family.png')}/>
                    <span>Семеиная<br id='adapting'/> съемка</span>
                </div>
                <div className='services__image'>
                    <img className='services__image-4' src={require('../../assets/images/services/black-n-white/image-content.png')}/>
                    <span>Контент-<br id='adapting'/>съемка</span>
                </div>
            </div>
        </div>
        </div>
    </div>
);

export default Services;