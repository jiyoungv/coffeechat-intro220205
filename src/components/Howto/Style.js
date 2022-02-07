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

    .howto-list {
        position: relative;
        z-index: 3;
    }

    .howto-list-wall {
        position: absolute;
        top: 0;
        left: 0;
        width: 1036px;
        height: 318px;
        border: 2px solid #f9fafd;
        border-radius: 16px;
        background: radial-gradient(229.59% 96.04% at 50% 3.96%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%, rgba(255, 255, 255, 0.308) 100%);
        backdrop-filter: blur(44px);
    }

    ${mediaTablet} {
        padding: 80px 0;

        .howto-tit {
            h2 {
                font-size: 24px;
            }
        }

        .howto-list-wall {
            display: none;
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

        .howto-list-wall {
            display: none;
        }        
    }
`;