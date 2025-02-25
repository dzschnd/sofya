import React from 'react'
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
                </div>
            </div>
        </div>
    </div>
);
export default Info;