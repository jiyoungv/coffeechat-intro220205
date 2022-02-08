import shortid from 'shortid';

const howtoData = [
    { 
        id: shortid.generate(),
        title: '파트너 탐색',
        text: `
            카테고리 또는 검색창을 통해 <br/>
            내가 궁금한 회사 · 직무 · 업계 · 학교의 파트너를 찾아보세요.        
        `,
    },
    { 
        id: shortid.generate(),
        title: '일정 선택',
        text: `
            1:1 커피챗을 하고 싶은 파트너를 <br className='none-desktop none-tablet' />
            찾았다면 <br className='none-mobile' />
            내가 원하는 시간을 <br className='none-desktop none-tablet' />
            최대 3개 제안해 보세요. 
        `,
    },
    { 
        id: shortid.generate(),
        title: '사전 질문 작성',
        text: `
            내가 그동안 궁금했던 것이나 <br className='none-desktop none-tablet' /> 
            고민을 <br className='none-desktop none-mobile' /> 
            구체적으로 적어서 <br className='none-desktop none-tablet' /> 
            파트너에게 전달해 보세요.<br/>
            파트너는 나의 신상정보를 <br className='none-desktop none-tablet' /> 
            알 수 없으니 안심하세요.
        `,
    },
    { 
        id: shortid.generate(),
        title: '커피챗 확정',
        text: `
            커피챗 결제 후 최대 24시간 내에 파트너가 수락합니다. <br/>
            카카오톡 알림톡을 통해 유의사항과 함께 확정 알림을 보내드려요.    
        `,
    },
    { 
        id: shortid.generate(),
        title: '커피챗 진행',
        text: `
            커피챗 앱에서 예약시간 30분 <br className='none-desktop none-tablet' />
            전부터 입장할 수 있어요. <br/>
            밀도 높은 20분 대화, <br className='none-desktop none-tablet' />
            1:1 커피챗을 경험해 보세요.    
        `,
    },
];

export default howtoData;