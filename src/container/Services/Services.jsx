import React from 'react';

import './Sevices.css';

const Services = () => (
    <div className='services'>
        <div className='services__title'>Услугй</div>
        <div className='services__photos'>
            <img src={require('../../assets/images/services/image-individual.png')}/>
            <img src={require('../../assets/images/services/image-katzen.png')}/>
            <img src={require('../../assets/images/services/image-family.png')}/>
            <img src={require('../../assets/images/services/image-content.png')}/>
        </div>
    </div>
);

export default Services;