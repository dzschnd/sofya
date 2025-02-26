import React from 'react';
import {ReactComponent as SubTitle} from '../../assets/images/welcome/hero-subtitle.svg';

import './Welcome.scss';

const Welcome = () => (
    <div className='welcome'>
        <div className='section-wrapper'>
            <div className='header'>
                <img src={require('../../assets/images/welcome/logo.png')} alt=''/>
                <nav>
                    <ul className='nav-list | font-size-200'>
                        <li><a className='text-neutral-100' href='#info'>Обо мне</a></li>
                        <li><a className='text-neutral-100' href='#portfolio'>Портфолйо</a></li>
                        <li><a className='text-neutral-100' href='#prices'>Праис</a></li>
                        <li><a className='text-neutral-100' href='#QnA'>Q&A</a></li>
                    </ul>
                </nav>
            </div>
            <div className='hero'>
                <div className='mobile-welcome-image'/>
                <div className='hero__title-container'>
                    <p className='hero__title'>Эстетйчныи<br/> фотограф</p>
                    <div className='hero__subtitle'><SubTitle/></div>
                </div>
                <p className='hero__quote | font-size-500 font-weight-light text-neutral-400'>
                    Покажу твою красоту<br/> й чувственность через свои&nbsp;взгляд
                </p>
                <div className='hero__button-container'>
                    <button className='main-button'>
                        Хочу съемку
                    </button>
                </div>
            </div>
        </div>
    </div>
);
export default Welcome;