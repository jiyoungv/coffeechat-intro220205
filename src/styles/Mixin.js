import { css } from 'styled-components';
import { fontFamily } from './Variable';

const { gilroyB, notoSans, system } = fontFamily;

export const clearFix = css`
    &::after {
        content: '';
        display: block;
        clear: both;
    }
`;

export const hidden = css`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 1px;
    height: 1px;
`;

export const fontBold = css`
    font-family: ${gilroyB}, ${notoSans}, ${system};
    font-weight: 700;
`;