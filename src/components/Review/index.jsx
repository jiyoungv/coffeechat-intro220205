import React from 'react';
import { Inners } from '../../styles/Common';
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
                    <li className='review-list-item'>
                        <div className='review-list-company'></div>
                        <h3>제목</h3>
                        <p>텍스트</p>
                        <h6>From. D******* 님</h6>
                    </li>
                </ul>
            </Inners>
        </Reviews>
    );
};

export default Review;