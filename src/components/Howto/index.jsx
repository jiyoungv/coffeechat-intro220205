import React from 'react';
import { Inners } from '../../styles/Common';
import { Howtos } from './Style';
import { IsDesktop } from '../../utils/mediaQuery';
import HowtoBall from '../HowtoBall';
import HowtoSlide from '../HowtoSlide';

const Howto = () => {
    return (
        <Howtos>
            <Inners>
                <div className='howto-tit'>
                    <h2>커피챗 이용방법.</h2>
                </div>
                <article className='howto-content'>
                    {IsDesktop() && <HowtoBall />}
                    <div className='howto-list'>
                        <div className='howto-list-wall'></div>
                        <HowtoSlide isDesktop={IsDesktop()} />
                    </div>
                </article>
            </Inners>
        </Howtos>
    );
};

export default Howto;