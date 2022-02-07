import React, { useState, useRef, useCallback } from 'react';
import { HowtoBalls } from './Style';

const Howto = () => {
    const rangeRef = useRef(null);
    const ballRef = useRef(null);
    const [enterCoord, setEnterCoord] = useState({ x: 0, y: 0 });
    const [moveCoord, setMoveCoord] = useState({ x: 0, y: 0 });
    const [saveCoord, setSaveCoord] = useState({ x: 0, y: 0 });
    const [distCoord, setDistCoord] = useState({ x: 0, y: 0 });

    const onMouseEnter = useCallback((e) => {
        setEnterCoord({ 
            x: e.clientX, 
            y: e.clientY 
        });
    }, []);

    const onMouseMove = useCallback((e) => {
        setMoveCoord({ 
            x: e.clientX, 
            y: e.clientY 
        });

        setSaveCoord({ 
            x: moveCoord.x - enterCoord.x, 
            y: moveCoord.y - enterCoord.y 
        });

        const ballPosTop = 88;
        const diff = (rangeRef.current.offsetHeight / 2 - ballRef.current.offsetHeight / 2) + ballPosTop;

        if (saveCoord.y < 0) {
            setDistCoord({ 
                x: moveCoord.x - enterCoord.x, 
                y: -((enterCoord.y - moveCoord.y) - diff),
            });            
        } else {
            setDistCoord({ 
                x: moveCoord.x - enterCoord.x, 
                y: moveCoord.y - enterCoord.y,
            });
        }

        ballRef.current.style.transform = `translate(${distCoord.x}px, ${distCoord.y}px)`;

        // console.log(distCoord.x, distCoord.y)
    }, [enterCoord, moveCoord, saveCoord, distCoord]);

    const onMouseOut = useCallback((e) => {
        ballRef.current.style.transform = 'translate(0, 0)';
    }, []);

    return (
        <HowtoBalls>
            <div className='howto-ball' ref={ballRef}></div>
            <div className='howto-range' ref={rangeRef} onMouseMove={onMouseMove} onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}></div>
        </HowtoBalls>
    );
};

export default Howto;