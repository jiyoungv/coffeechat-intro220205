import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HowtoBalls } from './Style';

const HowtoBall = ({ slide }) => {
    const [shift, setShift] = useState(0); // 슬라이드 변경시 이동거리

    useEffect(() => {
        setShift(slide * 42);
    }, [slide])

    const wrapStyle = useMemo(() => ({
        WebkitTransform: `translateY(${shift}px)`,
        transform: `translateY(${shift}px)`,
    }), [shift]);

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

        const ballPosTop = 78;
        const diff = (rangeRef.current.offsetHeight / 2 - ballRef.current.offsetHeight / 2) + (ballPosTop / 2);
        const diff2 = (rangeRef.current.offsetHeight / 2 - ballRef.current.offsetHeight / 2) - 50;

        if (slide >= 0 && slide < 2 && distCoord.y < 0) { // slide 0 ~ 1
            setTransCoord({ 
                x: moveCoord.x - startCoord.x, 
                y: -((startCoord.y - moveCoord.y) - diff),
            });
        } else if (slide > 1 && slide < 4) { // slide 2 ~ 3
            setTransCoord({ x: 0, y: 0 });
        } else if (slide > 3 && distCoord.y > 0) { // slide 4
            setTransCoord({ 
                x: moveCoord.x - startCoord.x, 
                y: ((startCoord.y - moveCoord.y) - diff2),
            });
        } else {
            setTransCoord({ 
                x: moveCoord.x - startCoord.x, 
                y: moveCoord.y - startCoord.y,
            });
        }
    }, [slide, startCoord, moveCoord, distCoord]);

    const onMouseOut = useCallback((e) => {
        setTransCoord({ x: 0, y: 0 });
    }, []);

    const ballStyle = useMemo(() => ({
        WebkitTransform: `translate3d(${transCoord.x}px, ${transCoord.y}px, 0)`,
        transform: `translate3d(${transCoord.x}px, ${transCoord.y}px, 0)`,
    }), [transCoord]);

    return (
        <HowtoBalls style={wrapStyle}>
            <div className='howto-ball' ref={ballRef} style={ballStyle}></div>
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

HowtoBall.propTypes = {
    slide: PropTypes.number,
};

export default HowtoBall;