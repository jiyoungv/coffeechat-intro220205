import styled from 'styled-components';
import { mediaQuery, color } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;
const { bg } = color;

export const Shorts = styled.section`
    padding: 90px 0;
    background: ${bg};

    .short-content {
        display: flex;
        align-items: center;
    }

    .short-img {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 120px;
        height: 120px;
        margin-right: 40px;
        border-radius: 24px;
        box-shadow: -22px 44px 88px rgba(221, 221, 221, 0.25);
        background: #fff;

        figure {
            max-width: 63px;
        }
    }

    .short-txt {
        h2 {
            font-size: 32px;
            font-weight: 700;
        }
    }

    ${mediaTablet} {
        padding: 70px 0;

        .short-content {
            display: block;
        }

        .short-img {
            display: flex;
            width: 80px;
            height: 80px;
            margin: 0 auto 30px;
            border-radius: 17.53px;
            box-shadow: -16.0716px 32.1433px 64.2866px rgba(221, 221, 221, 0.25);

            figure {
                max-width: 46px;
            }
        }

        .short-txt {
            text-align: center;

            h2 {
                font-size: 24px;
            }
        }
    }

    ${mediaMobile} {
        padding: 56px 0;

        .short-content {
            display: block;
        }

        .short-img {
            display: flex;
            width: 50px;
            height: 50px;
            margin: 0 auto 24px;
            border-radius: 11.31px;
            box-shadow: -10.3718px 20.7436px 41.4871px rgba(221, 221, 221, 0.25);

            figure {
                max-width: 30px;
            }
        }

        .short-txt {
            text-align: center;

            h2 {
                font-size: 16px;
            }
        }        
    }
`;