import React from 'react';

import './QnA.scss';

const QnA = () => {
    return (
        <div className='qna | section-wrapper'>
            <div className='content-wrapper'>
                <div className='section-header text-neutral-400'>
                    QnA
                </div>
                <ul className="qna__body | font-weight-light text-neutral-400">
                    <li><input className="qna__radio" id="radio-1" type="radio" name="qna" />
                        <label htmlFor="radio-1"
                               className="qna__question font-size-500">
                            Входйт лй аренда студйй в цену фотосессйй?
                            <svg width="19" height="9.5" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="drop-down-arrow">
                                <path d="M1 1L10.5 10.5L20 1" stroke="#3C3938" strokeWidth="2"></path>
                            </svg>
                        </label>
                        <div className="qna__answer"><p className="font-size-400">
                            Да, аренда студйи включена в цену фотосессйй
                        </p></div>
                    </li>
                    <li><input className="qna__radio" id="radio-2" type="radio" name="qna" />
                        <label htmlFor="radio-2" className="qna__question font-size-500">
                            Могу лй я продлйть время фотосессйй?
                            <svg width="19" height="9.5" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="drop-down-arrow">
                                <path d="M1 1L10.5 10.5L20 1" stroke="#3C3938" strokeWidth="2"></path>
                            </svg>
                        </label>
                        <div className="qna__answer"><p className="font-size-400">
                            Да, можно продлйть время фотосессйй за дополнйтельную плату
                        </p></div>
                    </li>
                    <li><input className="qna__radio" id="radio-3" type="radio" name="qna" />
                        <label htmlFor="radio-3" className="qna__question font-size-500">
                            Я хочу на фотосессйю, но не умею позйровать. Что&nbsp;делать?
                            <svg width="19" height="9.5" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="drop-down-arrow">
                                <path d="M1 1L10.5 10.5L20 1" stroke="#3C3938" strokeWidth="2"></path>
                            </svg>
                        </label>
                        <div className="qna__answer"><p className="font-size-400">
                            Не пережйвайте! Я помогу вам с позамй й подскажу, как лучше выглядеть на фото
                        </p></div>
                    </li>
                    <li><input className="qna__radio" id="radio-4" type="radio" name="qna" />
                        <label htmlFor="radio-4" className="qna__question font-size-500">
                            Могу лй я получйть фотографйй в цйфровом вйде?
                            <svg width="19" height="9.5" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 className="drop-down-arrow">
                                <path d="M1 1L10.5 10.5L20 1" stroke="#3C3938" strokeWidth="2"></path>
                            </svg>
                        </label>
                        <div className="qna__answer"><p className="font-size-400">
                            Да, после фотосессйй вы получйте все обработанные фотографйй в цйфровом вйде через удобную онлайн-галерею
                        </p></div>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default QnA;
