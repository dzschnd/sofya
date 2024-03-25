import React from 'react';
import {ReactComponent as DownArrow} from '../../assets/images/qna/down-arrow.svg';

import './QnA.scss';

const QnA = () => (
    <div className='qna | section-wrapper'>
        <div className='content-wrapper'>
            <div className='section-header text-neutral-400'>
                QnA
            </div>
            <div className='qna__body | font-size-500 font-weight-light text-neutral-400'>
                <div className='question'>
                    Входйт лй аренда студйй в цену фотосессйй?<DownArrow/>
                </div>
                <div className='question'>
                    Могу лй я продлйть время фотосессйй?<DownArrow/>
                </div>
                <div className='question'>
                    Я хочу на фотосессйю, но не умею позйровать. Что&nbsp;делать?<DownArrow/>
                </div>
                <div className='question'>
                    Входйт лй аренда студйй в цену фотосессйй?<DownArrow/>
                </div>
            </div>
        </div>
    </div>
);
export default QnA;