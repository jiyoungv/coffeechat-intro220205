import React, { useState, useRef, useCallback, useMemo } from 'react';
import { HowtoBalls } from './Style';

const Howto = () => {
    const rangeRef = useRef(null);
    const ballRef = useRef(null);

    const [startCoord, setStartCoord] = useState({ x: 0, y: 0 }); // 마우스 시작 좌표
    const [moveCoord, setMoveCoord] = useState({ x: 0, y: 0 }); // 마우스 현재 좌표
    const [distCoord, setDistCoord] = useState({ x: 0, y: 0 }); // 마우스 이동 거리 좌표
    const [transCoord, setTransCoord] = useState({ x: 0, y: 0 }); // 공이 이동할 좌표

    const onMouseEnter = useCallback((e) => {
        setStartCoord({ 
            x: e.clientX, 
            y: e.clientY 
        });
    }, []);

    const onMouseMove = useCallback((e) => {
        setMoveCoord({ 
            x: e.clientX, 
            y: e.clientY 
        });
        setDistCoord({ 
            x: moveCoord.x - startCoord.x, 
            y: moveCoord.y - startCoord.y 
        });

        const ballPosTop = 88;
        const diff = (rangeRef.current.offsetHeight / 2 - ballRef.current.offsetHeight / 2) + ballPosTop;

        if (distCoord.y < 0) {
            setTransCoord({ 
                x: moveCoord.x - startCoord.x, 
                y: -((startCoord.y - moveCoord.y) - diff),
            });
        } else {
            setTransCoord({ 
                x: moveCoord.x - startCoord.x, 
                y: moveCoord.y - startCoord.y,
            });
        }
    }, [startCoord, moveCoord, distCoord]);

    const onMouseOut = useCallback((e) => {
        setTransCoord({ x: 0, y: 0 });
    }, []);

    const style = useMemo(() => ({
        WebkitTransform: `translate3d(${transCoord.x}px, ${transCoord.y}px, 0)`,
        transform: `translate3d(${transCoord.x}px, ${transCoord.y}px, 0)`,
    }), [transCoord]);

    return (
        <HowtoBalls>
            <div className='howto-ball' ref={ballRef} style={style}></div>
            <div 
                className='howto-range' 
                ref={rangeRef} 
                onMouseEnter={onMouseEnter}
                onMouseMove={onMouseMove}
                onMouseOut={onMouseOut}
            ></div>
        </HowtoBalls>
    );
};

export default Howto;