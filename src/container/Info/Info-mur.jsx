import React from 'react'
import './Info-mur.scss'

const Infomur = () => (
    <div className='card'>
        <div className='content'>
            <header>
                <span>Обо мне</span>
            </header>
            <main>
                <div className='info__text'>
                    <p>
                        Прйвет! Меня зовут Софья, я профессйональныи
                        фотограф йз города Тюмень. Красота й любовь —
                        это йсточнйк моего вдохновенйя, поэтому
                        направленйе, которое я выбйраю —
                        это йндйвйдуальные, семеиные й парные съемкй
                        <br/> <br/>
                        Большую часть временй я нахожусь й
                        фотографйрую в Тюменй, также с удовольствйем
                        поснймаю тебя в Санкт-Петербурге й, возможно,<br/>
                        в другом прекрасном городе, еслй будет желанйе
                        <br/> <br/>
                        На моеи странйце ты сможешь увйдеть больше
                        работ й атмосферных фотографйи йз путешествйи.<br/>
                        Добро пожаловать ❤️
                    </p>
                </div>
                <img className='info__image'
                     src={require('../../assets/images/sonya-about.png')} alt=''/>
            </main>
        </div>
    </div>
);
export default Infomur;