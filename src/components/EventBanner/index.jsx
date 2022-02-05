import React from 'react';
import { EventBanners } from './Style';
import eb_coupon from '../../assets/images/eb_coupon.png';

const EventBanner = () => {
    return (
        <EventBanners>
            <article className='eb-content'>
                <div className='eb-txt'>
                    <h3>
                        전 세계 25개국 이상 다양한 <br/>
                        커리어의 파트너와 자유로운 1:1 커피챗 <br/>
                        신규 가입하면 <strong>누구나 첫 커피챗 무료</strong>
                    </h3>
                </div>
                <figure className='eb-img'>
                    <img src={eb_coupon} alt='' />
                </figure>
                <div className='eb-btn-wrap'>
                    <a href='/' title='지금 바로 혜택 받기' className='eb-btn'>지금 바로 혜택 받기</a>
                </div>
                <div className='eb-btn-wrap'>
                    <button type='button' title='나중에 받기' className='eb-btn2'>나중에 받기</button>
                </div>
            </article>
            <button type='button' className='eb-close' title='배너 닫기'>
                <span className='hidden'>배너 닫기</span>
            </button>
        </EventBanners>
    );
};

export default EventBanner;