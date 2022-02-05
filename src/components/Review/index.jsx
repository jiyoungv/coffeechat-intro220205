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
                <ul className='review-list'>
                    {reviewData.map((review, i) => {
                        return (
                            <li 
                                key={review.id} 
                                className={review.type ? `review-list-item type${review.type}` : 'review-list-item'}
                            >
                                <div className='review-list-chip'>
                                    <i>{review.company}</i>
                                </div>
                                <div className='review-list-txt'>
                                    <h3>{parse(review.title)}</h3>
                                    <p>{review.text}</p>
                                    <h6>From. {review.nickname} 님</h6>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <Buttons className='review-btn'>
                    <a href='/' title='커피챗 실시간 리뷰 더 보러 가기'>커피챗 실시간 리뷰 더 보러 가기</a>
                </Buttons>
            </Inners>
        </Reviews>
    );
};

export default Review;