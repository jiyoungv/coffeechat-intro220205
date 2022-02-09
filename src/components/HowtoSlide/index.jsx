import React, { useMemo } from 'react';
import parse from 'html-react-parser';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';
import { Scrollbar, Mousewheel } from "swiper";
import { HowtoSlides } from './Style';
import howtoData from '../../data/howtoData';
import { IsMobile } from '../../utils/mediaQuery';

const HowtoSlide = () => {
    const howtoList = useMemo(() => howtoData.map((v, i) => {
        return (
            <SwiperSlide key={v.id} className='howto-swiper-slide'>
                <div className={`howto-list-item type${i + 1}`}>
                    <div className={`howto-list-bg type${i + 1}`}></div>
                    <div className='howto-list-txt'>
                        <i>{`${i < 9 ? 0 : ''}${i + 1}`}</i>
                        <h3>{v.title}</h3>
                        <p>{parse(v.text)}</p>
                    </div>
                </div>
            </SwiperSlide>
        );
    }), []);

    return (
        <HowtoSlides>
            <Swiper
                direction={'vertical'}
                speed={600}
                effect={'fade'}
                scrollbar={true}
                mousewheel={true}
                modules={[EffectFade, Scrollbar, Mousewheel]}
                className='howto-swiper howto-swiper-desktop'
            >
                {howtoList}
            </Swiper>
            <Swiper
                direction={'horizontal'}
                speed={500}
                effect={'slide'}
                scrollbar={true}
                slidesPerView={'auto'}
                spaceBetween={IsMobile() ? 16 : 40}
                modules={[Scrollbar]}                               
                className='howto-swiper howto-swiper-mobile'
            >
                {howtoList}
            </Swiper>
        </HowtoSlides>
    );
};

export default HowtoSlide;