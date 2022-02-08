import React from 'react';
import parse from 'html-react-parser';
import { Inners, Buttons } from '../../styles/Common';
import { Reviews } from './Style';
import reviewData from '../../data/reviewData';

const Review = () => {
    return (
        <Reviews>
            <Inners>
                <div className='review-tit'>
                    <h2>
                        커리어 커뮤니케이션 시장을<br/>
                        의미있게 변화시키는 커피챗.                        
                    </h2> 
                </div>
                <article className='review-list'>
                    {reviewData.map((review, i) => {
                        return (
                            <div 
                                key={review.id} 
                                className={`review-list-item ${review.type && `type${review.type}`}`}
                            >
                                <div className='review-list-item-inner'>
                                    <div className='review-list-chip'>
                                        <i>{review.company}</i>
                                    </div>
                                    <div className='review-list-txt'>
                                        <h3>{parse(review.title)}</h3>
                                        <p>{parse(review.text)}</p>
                                    </div>
                                    <div className='review-list-foot'>
                                        <h6>From. {review.nickname} 님</h6>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </article>
                <Buttons className='review-btn'>
                    <a href='https://www.coffeechat.kr/reviewAll' target='_blank' rel='noreferrer' title='커피챗 실시간 리뷰 더 보러 가기'>커피챗 실시간 리뷰 더 보러 가기</a>
                </Buttons>
            </Inners>
        </Reviews>
    );
};

export default Review;