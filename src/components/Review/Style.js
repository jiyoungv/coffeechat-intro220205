import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;

export const Reviews = styled.section`
    padding: 160px 0;
    overflow-x: hidden;

    .review-tit {
        margin-bottom: 60px;

        h2 {
            font-size: 24px;
            font-weight: 700;
        }
    }

    .review-btn {
        position: absolute;
        top: 20px;
        right: 0;
    }    

    ${mediaTablet} {
        padding: 80px 0;
  
        .review-tit {
            margin-bottom: 40px;

            h2 {
                font-size: 20px;
            }
        }

        .review-btn {
            position: static;
            margin-top: 40px;
            text-align: center;
        }
    }

    ${mediaMobile} {
        padding: 56px 0;
  
        .review-tit {
            margin-bottom: 24px;

            h2 {
                font-size: 16px;
            }
        }

        .review-btn {
            position: static;
            margin-top: 24px;
            text-align: center;

            a {
                border-color: #2B51F1;
                color: #2B51F1;
            }
        }       
    }
`;