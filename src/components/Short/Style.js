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
        width: 60px;
        height: 60px;
        margin-right: 40px;
        border-radius: 12px;
        box-shadow: -11.0426px 22.0852px 44.1704px rgba(221, 221, 221, 0.25);
        background: #fff;

        figure {
            max-width: 31.6px;
        }
    }

    .short-txt {
        h2 {
            font-size: 24px;
            font-weight: 700;
        }
    }

    ${mediaTablet} {
        padding: 45px 0;

        .short-content {
            display: block;
        }

        .short-img {
            display: flex;
            margin: 0 auto 24px;
        }

        .short-txt {
            text-align: center;

            h2 {
                font-size: 20px;
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
                font-size: 18px;
            }
        }        
    }
`;