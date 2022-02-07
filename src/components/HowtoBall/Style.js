import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;

export const HowtoBalls = styled.article`
    position: absolute;
    top: -88px;
    right: 103.5px;

    .howto-effect {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 4;
        width: calc(258px);
        height: calc(258px);
        border-radius: 50%;
    }

    .howto-ball {
        position: relative;
        z-index: 1;
        width: 258px;
        height: 258px;
        border-radius: 50%;
        background: linear-gradient(222.01deg, #2B50F1 -28.75%, #7571FF 33.19%);
        transition: all 0.3s ease-in-out;
    }

    ${mediaTablet} {
        .howto-ball {
            display: none;
        }
    }

    ${mediaMobile} {
        .howto-ball {
            display: none;
        }  
    }
`;