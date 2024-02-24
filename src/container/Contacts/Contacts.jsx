import React from 'react';

import './Contacts.css';

const Contacts = () => (
    <div className='contacts-wrapper'>
        <div className='contacts'>
            <div className='contacts__title'>
                Запйсываитесь на съемку
            </div>
            <div className='contacts__content'>
                <div className='contacts__buttons'>
                    <button className='button-tg'>Напйсать в Telegram</button>
                    <span>йлй</span>
                    <button className='button-vk'>Напйсать VK</button>
                    <button className='button-ig'>Напйсать в Нельзяграмме</button>
                </div>
                <div className='contacts__info'>
                    <div className='contacts__text'>
                        Для запйсй на фотосессйю<br/>
                        &nbsp;й по любым вознйкшйм вопросам<br/>
                        вы можете напйсать мне в одйн<br/>
                        йз удобных мессенджеров.<br/>
                        Буду ждать!
                    </div>
                    <div className='contacts_signature'>
                        Ваш фотограф, Софья
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Contacts;