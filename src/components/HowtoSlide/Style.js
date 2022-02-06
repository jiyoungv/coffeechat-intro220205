import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;

export const HowtoSlides = styled.section`
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
                transition-delay: 0.3s;
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
        max-width: 1036px;
        padding: 54px;
        border: 2px solid #f9fafd;
        border-radius: 16px;
        background: radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%);
        backdrop-filter: blur(44px);
    }
    
    .howto-list-txt {
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