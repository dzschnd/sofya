import React from 'react';

import './Services.scss';

const Services = () => (
    <div className='services | section-wrapper'>
        <div className='content-wrapper'>
            <div className='section-header text-neutral-400'>
                Услугй
            </div>
            <div className='services__body | font-size-400 font-weight-light text-neutral-400'>
                <div>
                    <img className='services__image services__image-1'
                         src={require('../../assets/images/services/black-n-white/image-individual-bnw.png')} alt=''/>
                    <div className='services__text'><br/>Индйвйдуальная<br/> съемка</div>
                </div>
                <div>
                    <img className='services__image services__image-2'
                         src={require('../../assets/images/services/black-n-white/image-katzen-bnw.png')} alt=''/>
                    <div className='services__text'><br/>Парная<br/> съемка</div>
                </div>
                <div>
                    <img className='services__image services__image-3'
                         src={require('../../assets/images/services/black-n-white/image-family-bnw.png')} alt=''/>
                    <div className='services__text'><br/>Семеиная<br/> съемка</div>
                </div>
                <div>
                    <img className='services__image services__image-4'
                         src={require('../../assets/images/services/black-n-white/image-content-bnw.png')} alt=''/>
                    <div className='services__text'><br/>Контент<br/>съемка</div>
                </div>
            </div>
        </div>
    </div>
);

export default Services;