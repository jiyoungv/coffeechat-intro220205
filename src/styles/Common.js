import styled from 'styled-components';
import { mediaQuery, color } from './Variable';
import { clearFix } from './Mixin';

const { mediaDesktop, mediaTablet, mediaMobile } = mediaQuery;
const { midnight700, brand400 } = color;

export const Inners = styled.div`
    position: relative;
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;

    ${clearFix}

    ${mediaTablet} {
        margin: 0 48px;
    }

    ${mediaMobile} {
        margin: 0 24px;
    }
`;

export const Buttons = styled.div`
    a, button {
        min-width: 200px;
        display: inline-block;
        padding: 14px 23px;
        border: 1px solid ${midnight700};
        border-radius: 8px;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: -0.02em;
        text-align: center;
        
        ${props => props.typeColor && `border-color: ${props.typeColor}; color: ${props.typeColor}`};
    }

    ${mediaDesktop} {
        a, button {
            transition: all 0.3s;
            
            &:hover {
                border-color: ${brand400};
                background: ${brand400};
                color: #fff;
            }
        }
    } 

    ${mediaTablet} {
    }

    ${mediaMobile} {
        a, button {
            min-width: 0;
            padding: 12.5px 15px;
            font-size: 13px;
        }
    }
`;