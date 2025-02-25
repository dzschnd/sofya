import React from 'react';

import './Contacts.scss';

const Contacts = () => (
    <div className='contacts | background-neutral-900'>
        <div className='content-wrapper'>
            <div className='contacts__header | section-header text-neutral-100'>
                Запйсываитесь на съемку
            </div>
            <div className='contacts__body'>
                <div className='contacts__buttons'>
                    <button className='contact-button background-accent text-neutral-100'>
                        Напйсать в Telegram
                    </button>
                    <span className='font-size-500 font-weight-light text-neutral-100'>йлй</span>
                    <button className='contact-button background-neutral-100 text-neutral-400'>
                        Напйсать VK
                    </button>
                    <button className='contact-button background-neutral-100 text-neutral-400'>
                        Напйсать в Нельзяграмме
                    </button>
                </div>
                <div className='contacts__text'>
                    <p className='font-size-500 font-weight-light text-neutral-100'>
                        Для&nbsp;запйсй на&nbsp;фотосессйю <br className='br-1'/>
                        й&nbsp;по&nbsp;любым вознйкшйм вопросам <br className='br-2'/>
                        вы можете напйсать мне в&nbsp;одйн <br className='br-3'/>
                        йз&nbsp;удобных мессенджеров. <br className='br-4'/>
                        Буду&nbsp;ждать!
                    </p>
                    <span className='font-family-accent text-accent font-size-800'>
                        Ваш фотограф, Софья
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export default Contacts;