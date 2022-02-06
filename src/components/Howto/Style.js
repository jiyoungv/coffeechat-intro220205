import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;

export const Howtos = styled.section`
    padding: 238px 0;
    overflow: hidden;

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
        position: relative;
    }

    ${mediaTablet} {
        padding: 80px 0;

        .howto-tit {
            h2 {
                font-size: 24px;
            }
        }

        .howto-ball {
            top: auto;
            right: auto;
            bottom: 100px;
            left: 540px;
            width: 200px;
            height: 200px;
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
            top: auto;
            right: auto;
            left: 165px;
            bottom: 54px;
            width: 130px;
            height: 130px;
        }  
    }
`;