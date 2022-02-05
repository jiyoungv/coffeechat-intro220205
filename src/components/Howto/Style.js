import styled from 'styled-components';
import { mediaQuery } from '../../styles/Variable';

const { mediaTablet, mediaMobile } = mediaQuery;

export const Howtos = styled.section`
    padding: 240px 0;

    .howto-tit {
        h2 {
            font-size: 32px;
            font-weight: 700;
        }
    }

    ${mediaTablet} {
    }

    ${mediaMobile} {       
    }
`;