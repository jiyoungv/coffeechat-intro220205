import styled from 'styled-components';
import { mediaQuery, color } from './Variable';
import { clearFix, aColor } from './Mixin';

const { mediaDesktop, mediaTablet, mediaMobile } = mediaQuery;
const { midnight700, brand500 } = color;

export const Inners = styled.div`
    position: relative;
    max-width: 1080px;
    height: 100%;
    margin: 0 auto;

    ${clearFix}

    ${mediaTablet} {
        max-width: calc(740px + 48px * 2);
        padding: 0 48px;
    }

    ${mediaMobile} {
        margin: 0 24px;
    }
`;

export const Buttons = styled.div`
    a, button {
        display: inline-block;
        padding: 7px 15px;
        border: 1px solid ${midnight700};
        border-radius: 4px;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: -0.02em;
        text-align: center;
        
        ${props => props.typeColor && `
            border-color: ${props.typeColor};
        `};

        ${aColor} {
            ${props => props.typeColor && `
                color: ${props.typeColor};
            `};            
        }
    }

    ${mediaDesktop} {
        a, button {
            transition: all 0.3s;
            
            &:hover {
                border-color: ${brand500};
                background: ${brand500};
                color: #fff;
            }
        }
    } 

    ${mediaTablet} {
        a, button {
            padding: 12.5px 15px;
        }
    }

    ${mediaMobile} {
        a, button {
            padding: 10px 15px;
            border-radius: 4px;
            font-size: 16px;
        }
    }
`;