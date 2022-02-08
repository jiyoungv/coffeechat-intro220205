import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;

export const Benefits = styled.section`
    padding: 63px 0;
    background: linear-gradient(260.47deg, #F140BC 9.8%, #2B50F1 135.18%);

    .benefit-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .benefit-txt {
        h2 {
            color: #fff;
            font-size: 24px;
        }
    }

    ${mediaTablet} {
        padding: 53.5px 0;
        background: linear-gradient(260.47deg, #F140BC 9.8%, #2B50F1 104.93%);

        .benefit-content {
            display: block;
        }

        .benefit-txt {
            margin-bottom: 24px;
            text-align: center;

            h2 {
                font-size: 20px;
                line-height: 1.8;
                font-weight: 700;
            }
        }

        .benefit-btn {
            text-align: center;
        }
    }

    ${mediaMobile} {
        padding: 56px 0;
        background: linear-gradient(260.47deg, #F140BC 9.8%, #2B50F1 132.19%), #FAF8FF;

        .benefit-content {
            display: block;
        }

        .benefit-txt {
            margin-bottom: 24px;
            text-align: center;

            h2 {
                font-size: 18px;
                font-weight: 700;
            }
        }

        .benefit-btn {
            text-align: center;
        }        
    }
`;