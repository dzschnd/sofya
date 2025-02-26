import React from 'react';

import './Portfolio.scss';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Portfolio = () => (
    <div className='portfolio | section-wrapper background-neutral-900'>
     <div className='content-wrapper'>
             <div className='portfolio__header | section-header text-neutral-100'>
                 Портфолйо
             </div>
         <div className='portfolio__body'>
             <img className="portfolio__image portfolio__image-1"
                  src={require('../../assets/images/portfolio/black-n-white/image-1-bnw.png')} alt=''/>
             <img className="portfolio__image portfolio__image-2"
                  src={require('../../assets/images/portfolio/black-n-white/image-2-bnw.png')} alt=''/>
             <img className="portfolio__image portfolio__image-3"
                  src={require('../../assets/images/portfolio/black-n-white/image-3-bnw.png')} alt=''/>
             <img className="portfolio__image portfolio__image-4"
                  src={require('../../assets/images/portfolio/black-n-white/image-4-bnw.png')} alt=''/>
             <img className="portfolio__image portfolio__image-5"
                  src={require('../../assets/images/portfolio/black-n-white/image-5-bnw.png')} alt=''/>
             <img className="portfolio__image portfolio__image-6"
                  src={require('../../assets/images/portfolio/black-n-white/image-9-bnw.png')} alt=''/>
             <img className="portfolio__image portfolio__image-7"
                  src={require('../../assets/images/portfolio/black-n-white/image-7-bnw.png')} alt=''/>
             <img className="portfolio__image portfolio__image-8"
                  src={require('../../assets/images/portfolio/black-n-white/image-8-bnw.png')} alt=''/>
             <img className="portfolio__image portfolio__image-9"
                  src={require('../../assets/images/portfolio/black-n-white/image-6-bnw.png')} alt=''/>
             <img className="portfolio__image portfolio__image-10" alt=''/>
         </div>
         <div className='portfolio__body-mobile'>
             <Carousel
                 autoPlay={true}
                 interval={7000}
                 showThumbs={false}
                 showStatus={false}
                 swipeable={true}
                 emulateTouch={true}
             >
                 <img className="portfolio__image portfolio__image-1"
                      src={require('../../assets/images/portfolio/black-n-white/image-1-bnw.png')} alt=''/>
                 <img className="portfolio__image portfolio__image-2"
                      src={require('../../assets/images/portfolio/black-n-white/image-2-bnw.png')} alt=''/>
                 <img className="portfolio__image portfolio__image-3"
                      src={require('../../assets/images/portfolio/black-n-white/image-3-bnw.png')} alt=''/>
                 <img className="portfolio__image portfolio__image-4"
                      src={require('../../assets/images/portfolio/black-n-white/image-4-bnw.png')} alt=''/>
                 <img className="portfolio__image portfolio__image-5"
                      src={require('../../assets/images/portfolio/black-n-white/image-5-bnw.png')} alt=''/>
                 <img className="portfolio__image portfolio__image-6"
                      src={require('../../assets/images/portfolio/black-n-white/image-9-bnw.png')} alt=''/>
                 <img className="portfolio__image portfolio__image-7"
                      src={require('../../assets/images/portfolio/black-n-white/image-7-bnw.png')} alt=''/>
                 <img className="portfolio__image portfolio__image-8"
                      src={require('../../assets/images/portfolio/black-n-white/image-8-bnw.png')} alt=''/>
                 <img className="portfolio__image portfolio__image-9"
                      src={require('../../assets/images/portfolio/black-n-white/image-6-bnw.png')} alt=''/>
             </Carousel>
         </div>
     </div>
    </div>
);

export default Portfolio;