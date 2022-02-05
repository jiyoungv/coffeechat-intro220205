import React from 'react';
import { Inners } from '../../styles/Common';
import { Connects } from './Style';

const Connect = () => {
    return (
        <Connects>
            <Inners>
                <article className='connect-content'>
                    <div className='connect-txt'>
                        <h2>
                            우리는<br/>
                            대화를 나누며 더 나은 선택과<br/>
                            더 나은 삶으로 나아갈 수 있음을 믿습니다.<br/>
                            당신의 재능과 열정이<br/>
                            왜곡되고 막히는 일이 없도록,<br/>
                            커피챗은 사람과 사람을 연결합니다.<br/>
                            삶을 바꾸는 대화의 힘을<br/>
                            커피챗으로 경험하세요.                            
                        </h2>
                    </div>
                    <div className='connect-btn-group'>
                        <a href='/' title='Google Play' className='connect-btn'>Google Play</a>
                        <a href='/' title='App Store' className='connect-btn type-apple'>App Store</a>
                    </div>
                </article>
            </Inners>
        </Connects>
    );
};

export default Connect;