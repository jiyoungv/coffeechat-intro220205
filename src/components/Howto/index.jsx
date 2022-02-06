import React from 'react';
import parse from 'html-react-parser';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Mousewheel } from "swiper";
import { Inners } from '../../styles/Common';
import { Howtos } from './Style';
import howtoData from '../../data/howtoData';
import { breakPoint } from '../../styles/Variable';

const Howto = () => {
    return (
        <Howtos>
            <Inners>
                <div className='howto-tit'>
                    <h2>커피챗 이용방법.</h2>
                </div>
                <article className='howto-content'>
                    <div className='howto-ball'></div>
                    <div className='howto-list'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={40}
                            scrollbar={true}
                            mousewheel={true}
                            modules={[Scrollbar, Mousewheel]}
                            className='howto-swiper'
                            breakpoints={{
                                [breakPoint.tablet + 1]: {
                                    direction: 'vertical',
                                },
                            }}
                        >
                            {howtoData.map((v, i) => {
                                return (
                                    <SwiperSlide key={v.id}>
                                        <div className='howto-list-item'>
                                            <div className='howto-list-txt'>
                                                <i>{`${i < 9 ? 0 : ''}${i + 1}`}</i>
                                                <h3>{v.title}</h3>
                                                <p>{parse(v.text)}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </article>
            </Inners>
        </Howtos>
    );
};

export default Howto;