import shortid from 'shortid';

const reviewData = [
    { 
        id: shortid.generate(),
        company: 'amazon',
        title: `
            아마존 코리아 <br className='none-tablet' />
            amazon 신규사업개발팀, <br/>
            비더원 파트너와의 커피챗 후기
        `,
        text: '비더원님 오늘 커피챗 정말 감사합니다. 짧은 시간안에도 정확한 업무 설명해주시고 제가 궁금했던 점들을 해소해주셔서 정말 알찼던 시간이었네요. 비슷한 사례를 공유해주신 덕분에 더 뚜렷하게 방향성을 잡을 수 있었습니다. 감사합니다 🙏',
        nickname: 'D*******',
        type: 1,
    },
    { 
        id: shortid.generate(),
        company: 'LG전자',
        title: `
            LG전자 프로덕트 디자이너, <br/>
            초월수단 파트너와의 커피챗 후기
        `,
        text: '잘 준비하고 있는게 맞는건지 불안한 상태로 준비하다보니 확신이 없었는데 짧은 시간동안 너무 알차게 대답해주셔서 감사합니다. 오늘 해주신 말씀덕분에 좀 더 자신감있게 제 경험을 살려 열심히 준비하자는 다짐을 하게되었어요! 정말 너무 감사드립니다..!',
        nickname: 'h*******',
        type: 2,
    },
    { 
        id: shortid.generate(),
        company: 'Google',
        title: `
            구글 코리아 <br/>
            Google Account Strategist, <br className='none-desktop none-tablet' />
            Porgy 파트너와의 커피챗 후기
        `,
        text: '질문에 대한 내용도 미리 준비해주시고, 상세하게 잘 이해가 가게끔 얘기해주셔서 너무 감사합니다. 직무에 대한 이해가 훨씬 더 클리어하게 이해된 시간이였습니다.',
        nickname: 'T*****',
        type: 3,
    },
    { 
        id: shortid.generate(),
        company: 'NAVER',
        title: `
            네이버 서비스기획, <br/>
            비늘 파트너와의 커피챗 후기
        `,
        text: '구체적인 예시까지 함께 말씀해주시면서 최대한 상세하게 설명해주시려는 모습에 너무 감동받았습니다...♡ 일반적인 역량 부분도 실제 현업에서 어떻게 발휘될 수 있는지 알려주셔서 스스로를 다시금 되돌아볼 수 있는 기회가 되었습니다! 늦은 시간에도 불구하고 소중한 시간을 내주셔서 감사했습니다ㅎ.ㅎ 따뜻한 커피챗이었어요♡',
        nickname: '당***',
        type: 4,
    },    
];

export default reviewData;