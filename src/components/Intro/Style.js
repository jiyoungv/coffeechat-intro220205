import styled from 'styled-components';
import { mediaQuery, color } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;
const { midnight700 } = color;

export const Intros = styled.section`
    padding: 160px 0;

    .intro-txt {
        margin-bottom: 56px;

        h2 {
            margin-bottom: 16px;
            font-size: 32px;
            font-weight: 700;
        }

        p {
            margin-bottom: 16px;
            color: ${midnight700};
            font-size: 24px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    intro-list {
    }

    @keyframes intro-ani {
        0% {
            opacity: 0;
            transform: translateY(50px);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .intro-list-item {
        display: flex;
        align-items: center;
        opacity: 0;
        transform: translateY(50px);        
        margin-bottom: 10px;
        padding: 40px;
        border-radius: 8px;
        background: radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%);
        box-shadow: -22px 44px 88px rgba(221, 221, 221, 0.25);
        backdrop-filter: blur(55px);
        transition-property: all;
        transition-duration: 0.5s;

        &:last-child {
            margin-bottom: 0;
        }

        &.on {
            opacity: 1;
            transform: translateY(0);
        }

        h3 {
            margin-right: 16px;
            color: #2B51F1;
            font-size: 24px;
            font-weight: 700;
        }

        p {
            color: ${midnight700};
            font-size: 24px;
        }
    }

    ${mediaTablet} {
        padding: 80px 0;

        .intro-txt {
            margin-bottom: 50px;

            h2 {
                margin-bottom: 24px;
                font-size: 24px;
            }

            p {
                margin-bottom: 18px;
                font-size: 18px;               
            }
        }

        .intro-list-item {
            h3 {
                font-size: 20px;
            }

            p {
                font-size: 20px;
            }
        }
    }

    ${mediaMobile} {
        padding: 56px 0;

        .intro-txt {
            margin-bottom: 24px;

            h2 {
                margin-bottom: 16px;
                font-size: 16px;              
            }

            p {
                margin-bottom: 8px;
                font-size: 12px;
            }
        }

        .intro-list-item {
            display: block;
            padding: 24px;
            margin-bottom: 8px;

            h3 {
                font-size: 12px;
            }

            p {
                font-size: 12px;
            }
        }        
    }
`;