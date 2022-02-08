import React from 'react';
import { Inners, Buttons } from '../../styles/Common';
import { Benefits } from './Style';
import { IsDesktop, IsTablet, IsMobile } from '../../utils/mediaQuery';

const Benefit = () => {
    return (
        <Benefits>
            <Inners>
                <article className='benefit-content'>
                    <div className='benefit-txt'>
                        {IsDesktop() && 
                            <h2>
                                전 세계 25개국 이상 <br/>
                                다양한 커리어의 파트너와 자유로운 1:1 커피챗 <br/>
                                신규 가입하면 <strong>누구나 첫 커피챗 무료</strong>
                            </h2>
                        }
                        {IsTablet() && 
                            <h2>
                                전 세계 25개국 이상 다양한 커리어의 파트너와 자유로운 1:1 커피챗 <br/>
                                신규 가입하면 누구나 첫 커피챗 무료
                            </h2>
                        }
                        {IsMobile() && 
                            <h2>
                                전 세계 25개국 이상 다양한 커리어의 <br/> 
                                파트너와 자유로운 1:1 커피챗 <br/>
                                신규 가입하면 누구나 첫 커피챗 무료
                            </h2>
                        }
                    </div>
                    <Buttons typeColor={'#fff'} className='benefit-btn'>
                        <a href='https://www.coffeechat.kr/event' target='_blank' rel='noreferrer' title='지금 바로 혜택 받기'>지금 바로 혜택 받기</a>
                    </Buttons>
                </article>
            </Inners>
        </Benefits>
    );
};

export default Benefit;