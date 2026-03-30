export const translations = {
  ko: {
    nav: {
      guide: 'Guide',
      tips: 'Threads Tips',
      about: 'About',
      privacy: '개인정보처리방침',
    },
    hero: {
      badge: 'SNS 정원 가꾸기',
      title: 'Organizing your',
      titleHighlight: 'SNS Garden',
      desc: '맞팔하지 않는 계정을 찾아 내 정원을 깔끔하게 정리하세요.',
    },
    platform: {
      toggle: '플랫폼 전환',
      threads: 'Threads Garden',
      instagram: 'Insta Garden',
    },
    guide: {
      threads: [
        { title: '팔로워 복사', desc: 'Threads 앱에서 내 팔로워 목록을 복사하세요' },
        { title: '팔로잉 복사', desc: '내 팔로잉 목록도 동일하게 복사하세요' },
        { title: '가든 정리', desc: '버튼을 누르면 비맞팔 계정을 찾아드려요' },
      ],
      instagram: [
        { title: '팔로워 복사', desc: '인스타그램 앱에서 내 팔로워 목록을 복사하세요' },
        { title: '팔로잉 복사', desc: '내 팔로잉 목록도 동일하게 복사하세요' },
        { title: '가든 정리', desc: '버튼을 누르면 비맞팔 계정을 찾아드려요' },
      ],
    },
    input: {
      followersTitle: '팔로워 (Followers)',
      followersPlaceholder: '아이디\n이름/소개\n아이디\n이름/소개\n...',
      followingTitle: '팔로잉 (Following)',
      followingPlaceholder: '아이디\n이름/소개\n아이디\n이름/소개\n...',
      countUnit: '명',
    },
    btn: {
      analyze: '🌱 가든 정리하기',
      analyzing: '🧹 가든 청소 중...',
      export: 'CSV 내보내기',
      visit: '방문 →',
    },
    results: {
      title: '정리 대상',
      empty: '완벽한 정원입니다! 모든 팔로잉이 나를 맞팔하고 있어요. 🌸',
      warning: (n) => `내 정원에서 발견한 잡초 <strong>${n}개</strong>. 아래 링크로 직접 방문해 정리하세요.`,
    },
    table: {
      id: '아이디',
      desc: '이름/소개',
      profile: '프로필 바로가기',
    },
    error: {
      empty: '팔로워와 팔로잉 목록을 모두 입력해 주세요.',
    },
    secureNote: '모든 데이터는 브라우저에서만 안전하게 처리되며 어디에도 저장되지 않습니다.',
    seedNote: '씨앗 한 알이 이 정원을 살립니다 🌿',
    parseNote: '텍스트 복사 방식 특성상 카운트에 약간의 오차가 생길 수 있습니다.',
    tipsTeaser: {
      title: '🌿 Threads Tips',
      sub: '팔로워 관리, 알고리즘, 성장 전략 가이드',
      cta: '전체 보기 →',
    },
    footer: '©',
  },
  en: {
    nav: {
      guide: 'Guide',
      tips: 'Threads Tips',
      about: 'About',
      privacy: 'Privacy Policy',
    },
    hero: {
      badge: 'SNS Garden Care',
      title: 'Organizing my',
      titleHighlight: 'SNS Garden',
      desc: 'Find and remove accounts that don\'t follow you back. Keep your garden clean.',
    },
    platform: {
      toggle: 'Switch Platform',
      threads: 'Threads Garden',
      instagram: 'Insta Garden',
    },
    guide: {
      threads: [
        { title: 'Copy Followers', desc: 'Copy your follower list from the Threads app' },
        { title: 'Copy Following', desc: 'Copy your following list from the Threads app' },
        { title: 'Weed the Garden', desc: 'Click the button to find non-mutual follows' },
      ],
      instagram: [
        { title: 'Copy Followers', desc: 'Copy your follower list from the Instagram app' },
        { title: 'Copy Following', desc: 'Copy your following list from the Instagram app' },
        { title: 'Weed the Garden', desc: 'Click the button to find non-mutual follows' },
      ],
    },
    input: {
      followersTitle: 'Followers',
      followersPlaceholder: 'username\nname/bio\nusername\nname/bio\n...',
      followingTitle: 'Following',
      followingPlaceholder: 'username\nname/bio\nusername\nname/bio\n...',
      countUnit: ' users',
    },
    btn: {
      analyze: '🌱 Tend the Garden',
      analyzing: '🧹 Cleaning garden...',
      export: 'Export CSV',
      visit: 'Visit →',
    },
    results: {
      title: 'Weeds Found',
      empty: 'Perfect garden! Everyone you follow also follows you back. 🌸',
      warning: (n) => `Found <strong>${n} weed(s)</strong> in your garden. Visit each profile below to unfollow.`,
    },
    table: {
      id: 'Username',
      desc: 'Name/Bio',
      profile: 'Profile Link',
    },
    error: {
      empty: 'Please paste both Followers and Following lists.',
    },
    secureNote: 'All data is processed safely in your browser and never stored anywhere.',
    seedNote: 'A single seed keeps this garden alive 🌿',
    parseNote: 'Due to the text-copy method, the count may have slight inaccuracies.',
    tipsTeaser: {
      title: '🌿 Threads Tips',
      sub: 'Guides on follower management, algorithm & growth',
      cta: 'View All →',
    },
    footer: '©',
  },
};
