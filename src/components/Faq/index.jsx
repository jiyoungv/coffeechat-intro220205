import React from 'react';
import { Inners, Buttons } from '../../styles/Common';
import { Faqs } from './Style';

const Faq = () => {
    return (
        <Faqs>
            <Inners>
                <article className='faq-content'>
                    <div className='faq-txt'>
                        <h2>커피챗이 더 궁금하다면?</h2>
                    </div>
                    <Buttons className='faq-btn'>
                        <a href='/' title='자주묻는 질문'>자주묻는 질문</a>
                    </Buttons>                    
                </article>
            </Inners>
        </Faqs>
    );
};

export default Faq;