import React from 'react';
import { Inners } from '../../styles/Common';
import { Heros } from './Style';
import EventBanner from '../EventBanner';
import { IsMobile } from '../../utils/mediaQuery';

const Hero = () => {
    return (
        <Heros>
            <Inners>
                <div className='hero-txt'>
                    <h1>
                        네트워크에만 의존했던 <br className='none-desktop'/>
                        지난 날을 뛰어 넘어 <br/> 
                        누구나 원하는 정보와 경험에 <br/>
                        다가갈 수 있도록 <br/>
                    </h1>
                    <h1 className='type2'>
                        지금, 당신의 커리어를 위해<br/>
                        새로운 대화를 시작해보세요                        
                    </h1>
                    <h3>
                        국내 최초 1:1 익명 기반<br/>
                        커리어 대화 연결 플랫폼 커피챗
                    </h3>
                </div>
                <EventBanner isMobile={IsMobile()} />
            </Inners>
        </Heros>
    );
};

export default Hero;