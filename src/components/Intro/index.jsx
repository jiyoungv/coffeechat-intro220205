import React, { useEffect, useRef, useState } from 'react';
import { Inners } from '../../styles/Common';
import { Intros } from './Style';
import useScroll from '../../hooks/useScroll';
import { IsDesktop } from '../../utils/mediaQuery';

const Intro = () => {
    const isDesktop = IsDesktop();
    const [scrollY] = useScroll();
    const scrollDesktopRef = useRef(null); // 스크롤 기준 요소 (Desktop)
    const scrollMobileRef = useRef(null); // 스크롤 기준 요소 (Tablet, Mobile)
    const [pointY, setPointY] = useState(0); // 스크롤 시작 지점
    const [on, setOn] = useState(false); // 스크롤 애니메이션 상태

    useEffect(() => {
        if (scrollY <= 0) return;

        let el = scrollMobileRef.current;

        if (isDesktop) {
            el = scrollDesktopRef.current;
        }
        
        const elPosY = scrollY + el.getBoundingClientRect().top;
        const elHeight = el.offsetHeight;
        const clientH = document.documentElement.clientHeight;
        const result = Math.floor(elPosY + elHeight - clientH);

        setPointY(result);
    }, [scrollY, pointY, isDesktop]);

    useEffect(() => {
        if (scrollY > 0 && pointY > 0 && scrollY > pointY) {
            setOn(true);
        }
    }, [scrollY, pointY]);

    return (
        <Intros>
            <Inners>
                <div className='intro-txt'>
                    <h2>커피챗이란?</h2>
                    <p>
                        커피챗(Coffee Chat)은 서구권에서는 이미 일상이 된 정보형 미팅으로 <br className='none-mobile' />
                        궁금한 업계 · 회사 · 직무 · 학교의 사람과 실제 만남을 통해 커피 한 잔 마시며 <br className='none-desktop none-mobile' />
                        부담 없이 정보를 묻고 답하는 문화입니다.
                    </p>
                    <p>
                        커피챗 서비스는 이직, 면접, 직무, 커리어 전환, 취업, 유학 등 먼저 경험한 사람에게 <br className='none-tablet none-mobile' />
                        궁금함을 풀어놓고 <br className='none-desktop none-mobile' />
                        정보와 기회를 탐색하는 20분 대화입니다.
                    </p>
                </div>
                <ul className='intro-list' ref={scrollDesktopRef}>
                    <li className={`intro-list-item ${on ? 'on' : ''}`}>
                        <h3>원하는 사람과 연결되고.</h3>
                        <p>
                            궁금한 커리어의 사람을 <br className='none-tablet' />
                            직접 선택하여
                        </p>
                    </li>
                    <li className={`intro-list-item trans-delay1 ${on ? 'on' : ''}`} ref={scrollMobileRef}>
                        <h3>1:1로.</h3>
                        <p>
                            누구에게도 방해받지 않고 <br className='none-tablet'/>
                            보다 솔직하게
                        </p>
                    </li>
                    <li className={`intro-list-item trans-delay2 ${on ? 'on' : ''}`}>
                        <h3>목소리로.</h3>
                        <p>
                            익명을 보장받으며 <br className='none-tablet'/>
                            음성 대화로 자유롭게
                        </p>
                    </li>
                    <li className={`intro-list-item trans-delay3 ${on ? 'on' : ''}`}>
                        <h3>20분 대화.</h3>
                        <p>
                            어디서도 구하기 힘든 정보를 <br className='none-tablet'/>
                            얻을 수 있는 20분
                        </p>
                    </li>
                </ul>
            </Inners>
        </Intros>
    );
};

export default Intro;