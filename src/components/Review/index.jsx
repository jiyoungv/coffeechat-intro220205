import React from 'react';
import { Inners, Buttons } from '../../styles/Common';
import { Reviews } from './Style';
import ReviewList from '../ReviewList';

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
                <ReviewList />
                <Buttons className='review-btn'>
                    <a href='https://www.coffeechat.kr/reviewAll' target='_blank' rel='noreferrer' title='커피챗 실시간 리뷰 더 보러 가기'>커피챗 실시간 리뷰 더 보러 가기</a>
                </Buttons>
            </Inners>
        </Reviews>
    );
};

export default Review;