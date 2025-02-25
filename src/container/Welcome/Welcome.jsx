import React from 'react';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import {ReactComponent as BurgerMenu} from '../../assets/images/burger-menu.svg';
import {ReactComponent as Title} from '../../assets/images/hero-title.svg';
import {ReactComponent as SubTitle} from '../../assets/images/hero-subtitle.svg';

import './Welcome.scss';

const Welcome = () => (
    <div className='welcome'>
        <div className='content-wrapper'>
            <div className='header'>
                <Logo/>
                <nav>
                    <div className='burger-menu'><BurgerMenu/></div>
                    <ul className='nav-list | font-size-200'>
                        <li><a className='text-neutral-100' href='#info'>Обо мне</a></li>
                        <li><a className='text-neutral-100' href='#portfolio'>Портфолйо</a></li>
                        <li><a className='text-neutral-100' href='#prices'>Праис</a></li>
                        <li><a className='text-neutral-100' href='#QnA'>Q&A</a></li>
                    </ul>
                </nav>
            </div>
            <div className='hero'>
                <div className='hero__title-container'>
                    <div className='hero__title'><Title/></div>
                    <div className='hero__subtitle'><SubTitle/></div>
                </div>
                <p className='hero__quote | font-size-500 font-weight-light text-neutral-400'>
                    Покажу твою красоту<br/>
                    й чувственность через<br/>
                    свои взгляд
                </p>
                <button className='main-button'>
                    Хочу съемку
                </button>
            </div>
        </div>
    </div>
);
export default Welcome;