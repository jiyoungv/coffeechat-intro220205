import React, { useMemo, useRef, useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReviewLists } from './Style';
import reviewData from '../../data/reviewData';
import { IsDesktop } from '../../utils/mediaQuery';
import useScroll from '../../hooks/useScroll';

const Review = () => {
    const isDesktop = IsDesktop();
    const [scrollY] = useScroll();
    const scrollRef = useRef(null); // 스크롤 기준 요소
    const [pointY, setPointY] = useState(0); // 스크롤 시작 지점
    const [on, setOn] = useState(false); // 스크롤 애니메이션 상태

    useEffect(() => {
        if (!isDesktop) return;
        if (scrollY <= 0) return;

        const el = scrollRef.current;
        const elPosY = scrollY + el.getBoundingClientRect().top;
        const elHeight = el.offsetHeight / 3;
        const clientH = document.documentElement.clientHeight;
        const result = Math.floor(elPosY + elHeight - clientH);

        setPointY(result);
    }, [isDesktop, scrollY, pointY]);

    useEffect(() => {
        if (scrollY > 0 && pointY > 0 && scrollY > pointY) {
            setOn(true);
        }
    }, [scrollY, pointY]);

    const reviewSwiperList = useMemo(() => reviewData.map((v, i) => {
        return (
            <SwiperSlide key={v.id} className='review-swiper-slide'>
                <div className={`review-list-item ${v.type && `type${v.type}`} ${`trans-delay${i + 1}`} ${on ? 'on' : ''}`}>
                    <div className='review-list-item-inner'>
                        <div className='review-list-chip'>
                            <i>{v.company}</i>
                        </div>
                        <div className='review-list-txt'>
                            <h3>{parse(v.title)}</h3>
                            <p>{parse(v.text)}</p>
                        </div>
                        <div className='review-list-foot'>
                            <h6>From. {v.nickname} 님</h6>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        );
    }), [on]);

    const reviewList = useMemo(() => reviewData.map((v, i) => {
        return (
            <div key={v.id} className={`review-list-item on ${v.type && `type${v.type}`}`}>
                <div className='review-list-item-inner'>
                    <div className='review-list-chip'>
                        <i>{v.company}</i>
                    </div>
                    <div className='review-list-txt'>
                        <h3>{parse(v.title)}</h3>
                        <p>{parse(v.text)}</p>
                    </div>
                    <div className='review-list-foot'>
                        <h6>From. {v.nickname} 님</h6>
                    </div>
                </div>
            </div>
        );
    }), []);

    return (
        <ReviewLists>
            {isDesktop 
                ? <Swiper
                    slidesPerView={3}
                    spaceBetween={16}
                    className='review-swiper'
                    ref={scrollRef}
                >
                    {reviewSwiperList}
                </Swiper>
                : reviewList 
            }
        </ReviewLists>
    );
};

export default Review;