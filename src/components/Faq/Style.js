import styled from 'styled-components';
import { mediaQuery, color } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;
const { bg } = color;

export const Faqs = styled.section`
    padding: 122px 0;
    background: ${bg};

    .faq-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .faq-txt {
        h2 {
            font-size: 32px;
            font-weight: 700;
        }
    }

    ${mediaTablet} {
        padding: 87px 0;

        .faq-content {
            display: block;
        }

        .faq-txt {
            margin-bottom: 32px;
            text-align: center;

            h2 {
                font-size: 24px;
            }
        }

        .faq-btn {
            text-align: center;
        }
    }

    ${mediaMobile} {
        padding: 56px 0;
        
        .faq-content {
            display: block;
        }

        .faq-txt {
            margin-bottom: 16px;
            text-align: center;

            h2 {
                font-size: 16px;
            }
        }

        .faq-btn {
            text-align: center;
        }
    }
`;