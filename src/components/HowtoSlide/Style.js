import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';
import howto_tablet_bg1 from '../../assets/images/howto_tablet_bg1.png';
import howto_tablet_bg2 from '../../assets/images/howto_tablet_bg2.png';
import howto_tablet_bg3 from '../../assets/images/howto_tablet_bg3.png';
import howto_tablet_bg4 from '../../assets/images/howto_tablet_bg4.png';
import howto_tablet_bg5 from '../../assets/images/howto_tablet_bg5.png';
import howto_mobile_bg1 from '../../assets/images/howto_mobile_bg1.png';
import howto_mobile_bg2 from '../../assets/images/howto_mobile_bg2.png';
import howto_mobile_bg3 from '../../assets/images/howto_mobile_bg3.png';
import howto_mobile_bg4 from '../../assets/images/howto_mobile_bg4.png';
import howto_mobile_bg5 from '../../assets/images/howto_mobile_bg5.png';

const { mediaTablet, mediaMobile } = mediaQuery;

export const HowtoSlides = styled.article`
    .howto-swiper {
        .swiper-scrollbar {
            background: rgba(43, 81, 241, 0.2);
        }

        .swiper-scrollbar-drag {
            border-radius: 0;
            background: #2B51F1;
        }        
    }

    .howto-swiper-desktop {
        max-height: 318px;

        .swiper-scrollbar {
            top: 60px;
            right: 0;
            width: 4px;
            height: 200px;
        }        

        .howto-swiper-slide {
            opacity: 0 !important;
    
            &.swiper-slide-visible {
                opacity: 1 !important;
                transition-delay: 0.4s;
            }
        }
    }

    .howto-swiper-mobile {
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
        overflow: visible;
        margin: 0;

        .swiper-scrollbar {
            left: 0;
            bottom: 0;
            width: 150px;
            height: 2px;
        }
    }

    .howto-list-item {
        position: relative;
        max-width: 1036px;
        padding: 54px;

        &:before {
            content: '';
            display: none;
            z-index: 1;
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: linear-gradient(222.01deg, #2B50F1 -28.75%, #7571FF 33.19%);
        }        
    }

    .howto-list-bg {
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: center/100% auto no-repeat;
    }    
    
    .howto-list-txt {
        z-index: 3;

        i {
            display: block;
            margin-bottom: 20px;
            color: #2B51F1;
            font-size: 40px;
            font-weight: 700;
        }

        h3 {
            margin-bottom: 8px;
            color: #2B51F1;
            font-size: 24px;
            font-weight: 700;
        }

        p {
            font-size: 24px;
        }
    }

    ${mediaTablet} {
        .howto-swiper-desktop {
            position: absolute;
            top: 0;
            left: 0;
            visibility: hidden;
            opacity: 0;
        }

        .howto-swiper-mobile {
            display: block;
            opacity: 1;
            visibility: visible;
            position: static;
            width: 620px;
            height: calc(320px + 42px);
        }
        
        .howto-list-item {
            max-width: 620px;
            height: 320px;

            &.type1:before {
                display: block;
                top: -39px;
                right: 49.5px;
            }

            &.type2:before {
                display: block;
                bottom: 22px;
                right: -98px;
            }            
        }
        
        .howto-list-bg {
            &.type1 {
                background-image: url(${howto_tablet_bg1});
            }
    
            &.type2 {
                background-image: url(${howto_tablet_bg2});
            }
            
            &.type3 {
                background-image: url(${howto_tablet_bg3});
            }
            
            &.type4 {
                background-image: url(${howto_tablet_bg4});
            }
            
            &.type5 {
                background-image: url(${howto_tablet_bg5});
            }
        }

        .howto-list-txt {
            h3 {
                font-size: 18px;
            }

            p {
                font-size: 18px;
            }
        }
    }

    ${mediaMobile} {
        .howto-swiper-desktop {
            position: absolute;
            top: 0;
            left: 0;
            visibility: hidden;
            opacity: 0;
        }

        .howto-swiper-mobile {
            display: block;
            opacity: 1;
            visibility: visible;
            position: static;
            width: 250px;
            height: calc(320px + 24px);
        }

        .howto-list-item {
            max-width: 250px;
            height: 320px;
            padding: 22px;

            &:before {
                width: 130px;
                height: 130px;
            }

            &.type1:before {
                display: block;
                bottom: 18px;
                right: -40px;
            }

            &.type2:before {
                display: block;
                bottom: 44px;
                right: -75px;
            }

            &.type4:before {
                display: block;
                top: 30px;
                right: -34px;
            }            
        }

        .howto-list-bg {
            &.type1 {
                background-image: url(${howto_mobile_bg1});
            }
    
            &.type2 {
                background-image: url(${howto_mobile_bg2});
            }
            
            &.type3 {
                background-image: url(${howto_mobile_bg3});
            }
            
            &.type4 {
                background-image: url(${howto_mobile_bg4});
            }
            
            &.type5 {
                background-image: url(${howto_mobile_bg5});
            }
        }

        .howto-list-txt {
            i {
                font-size: 24px;
            }
            
            h3 {
                font-size: 14px;
            }

            p {
                font-size: 14px;
            }
        }        
    }
`;