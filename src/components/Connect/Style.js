import styled from 'styled-components';
import { mediaQuery, color } from '../../styles/Variable';
import connect_bg from '../../assets/images/connect_bg.png';
import connect_google from '../../assets/images/connect_google.png';
import connect_apple from '../../assets/images/connect_apple.png';

const { mediaDesktop, mediaTablet, mediaMobile } = mediaQuery;
const { brand500 } = color;

export const Connects = styled.section`
    padding: 160px 0;
    background: url(${connect_bg}) center/cover no-repeat;

    .connect-txt {
        margin-bottom: 80px;
        text-align: center;

        h2 {
            color: #fff;
            font-size: 24px;
            font-weight: 700;
        }
    }

    .connect-btn-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .connect-btn {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        min-width: 177px;
        margin: 0 16px;
        padding: 15px 0;
        border: 1px solid #fff;
        border-radius: 8px;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        
        &::before {
            content: '';
            display: block;
            width: 13px;
            height: 16px;
            margin-right: 8px;
            background: url(${connect_google}) center/100% auto no-repeat;
        }

        &.type-apple {
            &::before {
                background-image: url(${connect_apple});
            }            
        }
    }

    ${mediaDesktop} {
        .connect-btn {
            transition: all 0.3s;

            &:hover {
                border-color: ${brand500};
                background: ${brand500};
            }
        }
    }

    ${mediaTablet} {
        padding: 80px 0;

        .connect-txt {
            margin-bottom: 40px;

            h2 {
                font-size: 20px;
            }
        }

        .connect-btn {
        }
    }

    ${mediaMobile} {
        padding: 56px 0;

        .connect-txt {
            margin-bottom: 32px;

            h2 {
                font-size: 14px;
            }
        }

        .connect-btn {
            min-width: 131.5px;
            margin: 0 4px;
            padding: 12px 0;
            border-radius: 4px;
            font-size: 14px;

            &::before {
                width: 16px;
                height: 19px;
            }
        }        
    }
`;