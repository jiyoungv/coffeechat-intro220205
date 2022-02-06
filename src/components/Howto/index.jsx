import React from 'react';
import { Inners } from '../../styles/Common';
import { Howtos } from './Style';
import { IsDesktop } from '../../utils/mediaQuery';
import HowtoSlide from '../HowtoSlide';

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
                        <HowtoSlide isDesktop={IsDesktop()} />
                    </div>
                </article>
            </Inners>
        </Howtos>
    );
};

export default Howto;