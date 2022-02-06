import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';
import hero_bg from '../../assets/images/hero_bg.png';
import hero_bg_tablet from '../../assets/images/hero_bg_tablet.png';
import hero_bg_mobile from '../../assets/images/hero_bg_mobile.png';

const { mediaTablet, mediaMobile } = mediaQuery;

export const Heros = styled.section`
    padding-top: 80px;
    height: 800px;
    background: url(${hero_bg}) center/cover no-repeat;

    .hero-txt {
        margin-top: 76px;

        h1 {
            color: #fff;
            font-size: 40px;
            font-weight: 700;

            &.type2 {
                text-align: right;
            }
        }

        h3 {
            color: #fff;
            font-size: 24px;
        }
    }

    ${mediaTablet} {
        height: 1074px;
        padding-top: 72px;
        background-image: url(${hero_bg_tablet});

        .hero-txt {
            margin-top: 100px;

            h1 {
                margin-bottom: 40px;
            }
        }
    }

    ${mediaMobile} {
        height: auto;
        padding: 48px 0 40px;
        background: url(${hero_bg_mobile}) top 20% right/cover no-repeat;
        
        .hero-txt {
            margin-top: 32px;

            h1 {
                margin-bottom: 40px;
                font-size: 20px;
            }

            h3 {
                font-size: 12px;
            }
        }
    }
`;