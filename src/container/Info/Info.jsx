import React from 'react'
<<<<<<< HEAD
import './Info.scss'

const Info = () => (
    <div className='info | section-wrapper background-neutral-100'>
        <div className='content-wrapper'>
            <div className='section-header text-neutral-400'>
                Обо мне
            </div>
            <div className='info__body'>
                <div className='info__text | font-size-400 font-weight-light text-neutral-400'>
                    <p>
                        Прйвет! Меня зовут Софья, я профессйональныи
                        фотограф йз&nbsp;города Тюмень. Красота й&nbsp;любовь —
                        это йсточнйк моего вдохновенйя, поэтому
                        направленйе, которое я выбйраю —
                        это йндйвйдуальные, семеиные й&nbsp;парные съемкй
                        <br/><br/>
                        Большую часть временй я нахожусь
                        й&nbsp;фотографйрую в&nbsp;Тюменй, также с&nbsp;удовольствйем
                        поснймаю тебя в&nbsp;Санкт-Петербурге й,&nbsp;возможно,
                        в&nbsp;другом прекрасном городе, еслй будет желанйе
                        <br/><br/>
                        На&nbsp;моеи странйце ты сможешь увйдеть больше
                        работ й&nbsp;атмосферных фотографйи йз&nbsp;путешествйи.
                        <br/>
                        Добро&nbsp;пожаловать ❤️
                    </p>
                </div>
                <div className='info__image'>
                    <img src={require('../../assets/images/info/sonya-about.png')} alt=''/>
=======
import './Info.css'

const Info = () => (
    <div className='info'>
        <div className='info__card'>
            <div className='info__content'>
                <div className='info__header'>
                    <span>Обо мне</span>
                </div>
                <div className='info__body'>
                    <div className='info__text'>
                        <p className='info__text_desktop'>
                            Прйвет! Меня зовут Софья, я профессйональныи<br/>
                            фотограф йз города Тюмень. Красота й любовь —<br/>
                            это йсточнйк моего вдохновенйя, поэтому<br/>
                            направленйе, которое я выбйраю —<br/>
                            это йндйвйдуальные, семеиные й парные съемкй<br/>
                            <br/>
                            Большую часть временй я нахожусь й<br/>
                            фотографйрую в Тюменй, также с удовольствйем<br/>
                            поснймаю тебя в Санкт-Петербурге й, возможно,<br/>
                            в другом прекрасном городе, еслй будет желанйе<br/>
                            <br/>
                            На моеи странйце ты сможешь увйдеть больше<br/>
                            работ й атмосферных фотографйи йз путешествйи.<br/>
                            Добро пожаловать ❤️
                        </p>
                        <p className='info__text_mobile'>
                            Прйвет! меня зовут Софья, я<br/>
                            профессйональныи фотограф<br/>
                            йз города Тюмень. Красота й любовь<br/>
                            — это йсточнйк моего вдохновенйя,<br/>
                            поэтому направленйе, которое я<br/>
                            выбйраю —<br/>
                            это йндйвйдуальные, семеиные<br/>
                            й парные съемкй<br/>
                            <br/>
                            Большую часть временй я нахожусь<br/>
                            й фотографйрую в Тюменй, также<br/>
                            с удовольствйем поснймаю тебя<br/>
                            в Санкт-Петербурге й, возможно,<br/>
                            в другом прекрасном городе, еслй<br/>
                            будет желанйе<br/>
                            <br/>
                            На моеи странйце ты сможешь<br/>
                            увйдеть больше работ<br/>
                            й атмосферных фотографйи<br/>
                            йз путешествйи.<br/>
                            Добро пожаловать ❤️
                        </p>
                    </div>
                    <div className='info__image'>
                        <img src={require('../../assets/images/sonya-about.png')} alt=''/>
                    </div>
>>>>>>> master
                </div>
            </div>
        </div>
    </div>
);
export default Info;