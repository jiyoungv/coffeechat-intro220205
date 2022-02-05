import { useMediaQuery } from 'react-responsive'
import { breakPoint } from '../styles/Variable';

export const IsDesktop = () => useMediaQuery({ minWidth: breakPoint.tablet + 1 });
export const IsTablet = () => useMediaQuery({ maxWidth: breakPoint.tablet, minWidth: breakPoint.mobile + 1 });
export const IsMobile = () => useMediaQuery({ maxWidth: breakPoint.mobile });