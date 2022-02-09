import styled from 'styled-components';
import { mediaQuery, color } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;
const { midnight600 } = color;

export const Intros = styled.section`
    padding: 160px 0;

    .intro-txt {
        margin-bottom: 56px;

        h2 {
            margin-bottom: 16px;
            font-size: 24px;
            font-weight: 700;
        }

        p {
            margin-bottom: 16px;
            color: ${midnight600};
            font-size: 16px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    .intro-list {
        display: flex;
        justify-content: space-between;
        align-items: center;        
    }

    .intro-list-item {
        opacity: 0;
        transform: translateY(30px);
        flex-shrink: 0;
        width: 258px;
        height: 153px;
        padding: 30px 34px;
        padding-right: 10px;
        border: 2px solid #f9fafd;
        border-radius: 8px;
        background: radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%);
        box-shadow: -22px 44px 88px rgba(221, 221, 221, 0.25);
        backdrop-filter: blur(55px);
        transition-property: opacity, transform;
        transition-duration: 0.5s;

        &.on {
            opacity: 1;
            transform: translateY(0);
        }

        h3 {
            margin-bottom: 8px;
            color: #2B51F1;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        p {
            font-size: 16px;
            letter-spacing: -0.02em;
        }
    }

    ${mediaTablet} {
        padding: 80px 0;

        .intro-txt {
            margin-bottom: 50px;

            h2 {
                margin-bottom: 24px;
                font-size: 20px;
            }

            p {
                margin-bottom: 18px;
                font-size: 14px;               
            }
        }

        .intro-list {
            display: block;
        }

        .intro-list-item {
            display: flex;
            align-items: center;
            width: auto;
            height: auto;
            margin-bottom: 10px;
            padding: 38px;

            &:last-child {
                margin-bottom: 0;
            }

            h3 {
                margin-bottom: 0;
                margin-right: 16px;
                font-size: 16px;
            }

            p {
                font-size: 16px;
            }
        }
    }

    ${mediaMobile} {
        padding: 56px 0;

        .intro-txt {
            margin-bottom: 24px;

            h2 {
                margin-bottom: 8px;
                font-size: 16px;              
            }

            p {
                margin-bottom: 8px;
                font-size: 13px;
            }
        }

        .intro-list {
            display: block;
        }        

        .intro-list-item {
            width: auto;
            height: auto;
            padding: 22px;
            margin-bottom: 8px;

            &:last-child {
                margin-bottom: 0;
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