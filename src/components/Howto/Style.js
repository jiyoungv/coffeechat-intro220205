import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;

export const Howtos = styled.section`
    padding: 238px 0;

    .howto-tit {
        margin-bottom: 40px;

        h2 {
            font-size: 32px;
            font-weight: 700;
        }
    }

    .howto-content {
    }

    .howto-ball {
        position: absolute;
        top: -88px;
        right: 103.5px;
        width: 258px;
        height: 258px;
        border-radius: 50%;
        background: linear-gradient(222.01deg, #2B50F1 -28.75%, #7571FF 33.19%);
    }

    .howto-list {
    }

    .howto-swiper {
        max-height: 318px;
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
        padding: 80px 0;

        .howto-tit {
            h2 {
                font-size: 24px;
            }
        }

        .howto-ball {
            width: 200px;
            height: 200px;
        }

        .howto-list-item {
            max-width: 620px;
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
        padding: 56px 0;

        .howto-tit {
            margin-bottom: 24px;

            h2 {
                font-size: 16px;
            }
        }

        .howto-ball {
            width: 130px;
            height: 130px;
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