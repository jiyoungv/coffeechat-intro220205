import React from 'react';
import { Inners } from '../../styles/Common';
import { Headers } from './Style';
import img_cc_logotype from '../../assets/images/img_cc_logotype.svg';
import img_cc_logotype_brand from '../../assets/images/img_cc_logotype_brand.svg';
import useScroll from '../../hooks/useScroll';

const Header = () => {
    const [scrollY] = useScroll();

    return (
        <Headers className={scrollY > 0 ? 'on' : ''}>
            <Inners>
                <div className='header-logo'>
                    <img src={scrollY > 0 ? img_cc_logotype_brand : img_cc_logotype} alt='커피챗 로고' />
                </div>
            </Inners>
        </Headers>
    );
};

export default Header;