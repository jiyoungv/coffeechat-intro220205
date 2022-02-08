import React from 'react';
import { Inners } from '../../styles/Common';
import { Shorts } from './Style';
import short_mark from '../../assets/images/short_mark.png';
import { IsDesktop, IsTablet, IsMobile } from '../../utils/mediaQuery';

const Short = () => {
    return (
        <Shorts>
            <Inners>
                <article className='short-content'>
                    <div className='short-img'>
                        <figure>
                            <img src={short_mark} alt='' />
                        </figure>
                    </div>
                    <div className='short-txt'>
                        {IsDesktop() && <h2>익명성을 보장받으면서도 특정 회사나 직무에 대한 퀄리티 높은 정보를 얻을 수 있어요</h2>}
                        {IsTablet() && <h2>익명성을 보장받으면서도 <br/>특정 회사나 직무에 대한 퀄리티 높은 정보를 얻을 수 있어요</h2>}
                        {IsMobile() && <h2>익명성을 보장받으면서도 <br/>특정 회사나 직무에 대한 <br/>퀄리티 높은 정보를 얻을 수 있어요</h2>}
                    </div>
                </article>
            </Inners>
        </Shorts>
    );
};

export default Short;