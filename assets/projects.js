export const PROJECT_DATA = [
  {
    slug: 'main-banner',
    label: 'Project · Main Banner',
    title: '메인 배너',
    description: '브랜드 톤앤매너에 맞춰 PC와 모바일을 별도 설계하고, CTA 가독성과 감성적인 비주얼을 함께 강조했습니다.',
    notes: ['주요 USP를 상단 1스크린 내에서 노출', 'PC/모바일 해상도별 버튼 대비 확보', '슬로건과 보조 카피를 분리해 단계적 주목 유도'],
    slides: [
      {
        title: 'PC 버전',
        desc: '대형 비주얼과 CTA 영역을 강조한 와이드 배너.',
        
        image:
          'https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1800&h=840&q=80',
        orientation: 'wide',
        colors: ['#EBD9C8', '#C98E63'],
        height: 640
      },
      {
        title: '모바일 버전',
        desc: '세로형 인터페이스에서 CTA 가독성을 높인 디자인.',
        colors: ['#F3E6DC', '#B57A4E'],
        height: 920
      }
    ]
  },
  {
    slug: 'detail-page',
    label: 'Project · Detail Page',
    title: '상세페이지',
    description: '상품 USP와 스토리를 강조하는 롱폼 레이아웃으로, 구매 전환을 고려한 정보 배치를 설계했습니다.',
    notes: ['섹션별 명확한 헤드라인과 USP 배치', '실사용 컷과 후기형 모듈을 교차 배치', '고려 요소: 신뢰도, 비교, 혜택 강조'],
    slides: [
      {
        title: '스토리텔링 구간',
        desc: '브랜드 메시지와 감성 이미지를 활용한 인입 섹션.',
        image:
          'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1100&h=2200&q=80',
        orientation: 'tall',

        colors: ['#F2E6DE', '#C18659'],
        height: 1180
      },
      {
        title: 'USP & 혜택 구간',
        desc: '핵심 USP를 3단 모듈로 정리하고 혜택을 강조.',
        colors: ['#EFE2D7', '#B87443'],
        height: 1280
      }
    ]
  },
  {
    slug: 'landing-page',
    label: 'Project · Landing Page',
    title: '렌딩페이지',
    description: '서비스 가치 제안과 CTA에 집중한 전환형 페이지로, 퍼널 진입에 맞춰 마이크로 카피를 구성했습니다.',
    notes: ['상단 즉시 CTA + 보조 CTA 배치', 'FAQ/보증/신뢰 모듈을 하단에 배치해 이탈 방지', '모바일 우선의 컴포넌트 리듬 설계'],
    slides: [
      {
        title: '히어로 & 가치 제안',
        desc: '단일 CTA와 핵심 메시지를 강조한 첫 화면.',
        colors: ['#F4E9E1', '#B87B4C'],
        height: 1080
      },
      {
        title: '전환 보조 섹션',
        desc: '세부 기능, 후기, FAQ를 연결한 전환 구간.',
        colors: ['#EFE3D8', '#A86A3F'],
        height: 1260
      }
    ]
  },
  {
    slug: 'card-news',
    label: 'Project · Card News',
    title: '카드뉴스',
    description: 'SNS 채널용 카드 시리즈로, 브랜드 컬러와 리듬을 살려 핵심 메시지를 빠르게 전달합니다.',
    notes: ['3~8장으로 구성된 템플릿', '문장 길이 대비 여백 확보', '플랫폼 가이드에 맞춘 안전영역 반영'],
    slides: [
      {
        title: '콘셉트 카드',
        desc: '시선 확보용 비주얼과 키메시지 카드.',
        colors: ['#F5EAE1', '#A56B42'],
        height: 760
      },
      {
        title: '정보 카드',
        desc: '데이터/인사이트를 간결하게 정리한 카드.',
        colors: ['#F0E2D6', '#C58A5E'],
        height: 820
      },
      {
        title: '콜투액션 카드',
        desc: '마무리 CTA와 해시태그를 배치한 카드.',
        colors: ['#F3E5DA', '#B07145'],
        height: 760
      }
    ]
  }
];
