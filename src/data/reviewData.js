import shortid from 'shortid';

const reviewData = [
    { 
        id: shortid.generate(),
        company: 'amazon',
        title: `
            아마존 코리아 신규사업개발팀, <br/>
            비더원 파트너와의 커피챗 후기
        `,
        text: `
            비더원님 오늘 커피챗 정말 감사합니다. <br className='none-tablet none-mobile' />
            짧은 시간안에도 정확한 업무 설명해주시고 <br className='none-tablet none-mobile' />
            제가 궁금했던 점들을 해소해주셔서 <br className='none-tablet none-mobile' />
            정말 알찼던 시간이었네요. <br className='none-tablet none-mobile' />
            비슷한 사례를 공유해주신 덕분에 <br className='none-tablet none-mobile' />
            더 뚜렷하게 방향성을 잡을 수 있었습니다. <br className='none-tablet none-mobile' />
            감사합니다 🙏
        `,
        nickname: 'D*******',
    },
    { 
        id: shortid.generate(),
        company: 'LG전자',
        title: `
            LG전자 프로덕트 디자이너, <br/>
            초월수단 파트너와의 커피챗 후기
        `,
        text: `
            잘 준비하고 있는게 맞는건지 불안한 상태로 <br className='none-tablet none-mobile' />
            준비하다보니 확신이 없었는데 짧은 시간동안 <br className='none-tablet none-mobile' />
            너무 알차게 대답해주셔서 감사합니다. <br className='none-tablet none-mobile' />
            오늘 해주신 말씀덕분에 좀 더 자신감있게 <br className='none-tablet none-mobile' />
            제 경험을 살려 열심히 준비하자는 다짐을 <br className='none-tablet none-mobile' />
            하게 되었어요! 정말 너무 감사드립니다..!
        `,
        nickname: 'h*******',
        type: 2,
    },
    { 
        id: shortid.generate(),
        company: 'NAVER',
        title: `
            네이버 서비스기획, <br/>
            비늘 파트너와의 커피챗 후기
        `,
        text: `
            구체적인 예시까지 함께 말씀해주시면서 최대한 <br className='none-tablet none-mobile' />
            상세하게 설명해주시려는 모습에 <br className='none-tablet none-mobile' />
            너무 감동받았습니다...♡ 일반적인 역량 부분도 <br className='none-tablet none-mobile' />
            실제 현업에서 어떻게 발휘될 수 있는지 <br className='none-tablet none-mobile' />
            알려주셔서 스스로를 다시금 되돌아볼 수 있는 기회가 되었습니다! 늦은 시간에도 불구하고 <br className='none-tablet none-mobile'/>
            소중한 시간을 내주셔서 감사했습니다ㅎ.ㅎ <br className='none-tablet none-mobile'/>
            따뜻한 커피챗이었어요♡
        `,
        nickname: '당***',
        type: 3,
    },
    { 
        id: shortid.generate(),
        company: 'Google',
        title: `
            구글 코리아 Account Strategist, <br/>
            Porgy 파트너와의 커피챗 후기
        `,
        text: `
            질문에 대한 내용도 미리 준비해주시고, <br className='none-tablet none-mobile' />
            상세하게 잘 이해가 가게끔 얘기해주셔서 <br className='none-tablet none-mobile' />
            너무 감사합니다. <br className='none-mobile' />
            직무에 대한 이해가 훨씬 더 클리어하게 <br className='none-tablet none-mobile' />
            이해된 시간이였습니다.
        `,
        nickname: 'T*****',
        type: 4,
    },
    { 
        id: shortid.generate(),
        company: 'Apple',
        title: `
            애플 코리아 컨텐츠 기획, <br/>
            뚱이딸 파트너와의 커피챗 후기
        `,
        text: `
            너무 따뜻하고 유용한 시간이었습니다. 마지막에 시간 부족했는데도 마지막까지 열정적으로 말씀해 주시는 모습 정말 감동이고 도움이 많이 되었습니다. 원래는 제 직무는 아니지만 제가 속한 업계의 타 직무 사람들에 대해 궁금해서 신청한 건데, 결국 제 직무를 잘 수행하는 데 있어서도 엄청나게 도움이 될 것 같습니다. 기회가 된다면 꼭! 다시 한번 이야기 나눠보고 싶어요. 정말 정말 감사합니다♡♡♡♡
        `,
        nickname: '새*******',
    },
];

export default reviewData;