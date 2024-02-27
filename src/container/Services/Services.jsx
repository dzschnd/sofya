import React from 'react';

import './Services.scss';

const Services = () => (
    <div className='services'>
        <div className='services__card'>
            <div className='services__header'>
                Услугй
            </div>
            <div className='services__body'>
                <div className='services__image'>
                    <img className='services__image-1' src={require('../../assets/images/services/black-n-white/image-individual.png')} alt=''/>
                    <div className='services__text'>Индйвйдуальная<br/>съемка</div>
                </div>
                <div className='services__image'>
                    <img className='services__image-2' src={require('../../assets/images/services/black-n-white/image-katzen.png')} alt=''/>
                    <div className='services__text'>Парная<br/>съемка</div>
                </div>
                <div className='services__image'>
                    <img className='services__image-3' src={require('../../assets/images/services/black-n-white/image-family.png')} alt=''/>
                    <div className='services__text'>Семеиная<br/> съемка</div>
                </div>
                <div className='services__image'>
                    <img className='services__image-4' src={require('../../assets/images/services/black-n-white/image-content.png')} alt=''/>
                    <div className='services__text'>Контент-<br/>съемка</div>
                </div>
            </div>
        </div>
    </div>
);

export default Services;