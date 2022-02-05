import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';
import { aColor } from '../../styles/Mixin';
import eb_close from '../../assets/images/eb_close.png';

const { mediaTablet, mediaMobile } = mediaQuery;

export const EventBanners = styled.section`
    z-index: 10;
    position: fixed;
    top: 552px;
    right: 20px;
    width: 589px;
    height: 212px;      
    padding: 32px;    
    border-radius: 8px;
    background: #000;

    .eb-content {
    }

    .eb-txt {
        h3 {
            color: #fff;
            font-size: 18px;
        }
    }

    .eb-img {
        position: absolute;
        top: 0;
        right: 0;
        max-width: 177px;
    }

    .eb-btn-wrap {
    }

    .eb-btn {
        display: inline-block;
        margin-top: 24px;
        padding: 7px 15px;
        border: 1px solid #fff;
        border-radius: 4px;
        font-size: 13px;
        letter-spacing: -0.02em;
        
        ${aColor} {
            color: #fff;
        }
    }

    .eb-btn2 {
        diplay: none;
    }

    .eb-close {
        display: inline-block;
        position: absolute;
        top: 19px;
        right: 19px;
        width: 27px;
        height: 27px;
        background: url(${eb_close}) center/100% auto no-repeat;
    }


    ${mediaTablet} {
        top: auto;
        bottom: 20px;
    }

    ${mediaMobile} {
        position: static;
        width: auto;
        max-width: 272px;
        height: auto;
        margin: 40px auto 0;
        padding: 24px;

        .eb-txt {
            margin-bottom: 16px;
            text-align: center;

            h3 {
                font-size: 14px;
            }
        }

        .eb-img {
            position: static;
            max-width: 175px;
            margin: 0 auto;
        }

        .eb-btn-wrap {
            text-align: center;
        }

        .eb-btn2 {
            diplay: inline-block;
            margin-top: 16px;
            color: #fff;
            font-size: 11px;
            text-decoration-line: underline;
        }

        .eb-close {
            display: none;
        }
    }
`;