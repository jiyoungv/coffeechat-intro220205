import { useState, useCallback, useEffect } from 'react';

/**
 * @param {string} initialValue 'X': 가로 스크롤 위치, 'Y': 세로 스크롤 위치 반환
 * @returns 윈도우 스크롤 위치
 */
const useScroll = (initialValue = 'Y') => {
    const [value, setValue] = useState(window.pageYOffset);

    const scrollHandler = useCallback(() => {
        if (initialValue === 'X') {
            setValue(window.pageXOffset);
            return;
        }

        setValue(window.pageYOffset);
    }, [initialValue]);

    useEffect(() => { // 스크롤 상태 체크
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [value, scrollHandler]);

    return [value];
};

export default useScroll;