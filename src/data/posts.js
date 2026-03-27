// ─────────────────────────────────────────────────────────────────────────────
// 📁 src/data/posts.js
//
// 새 글 추가 방법:
// 1. 아래 배열에 객체 하나 추가
// 2. slug: URL 경로 (영문, 하이픈, 예: 'my-new-tip')
// 3. content: **굵게**, ## 소제목, ### 소소제목, - 리스트 사용
// ─────────────────────────────────────────────────────────────────────────────

export const posts = [
  {
    slug: 'threads-unfollow-guide',
    ko: {
      title: 'Threads 언팔로우 관리 완벽 가이드',
      description: '팔로잉 목록을 정리하고 계정 품질을 높이는 방법을 알아봅니다.',
      category: '가이드',
      content: `
## Threads에서 팔로잉 관리가 중요한 이유

Threads 알고리즘은 여러분이 **팔로우하는 계정의 콘텐츠**를 기반으로 피드를 구성합니다. 맞팔하지 않는 계정이 많을수록 피드의 품질이 낮아지고, 내 게시물의 노출에도 영향을 줄 수 있습니다.

## 팔로잉 정리가 필요한 신호

- 팔로잉 수가 팔로워 수보다 훨씬 많을 때
- 피드에서 관심 없는 콘텐츠가 너무 많이 보일 때
- 팔로워 증가가 정체될 때

## 단계별 언팔로우 방법

### 1단계: 목록 파악
Threads 앱에서 **프로필 → 팔로잉** 목록을 확인합니다. 맞팔 여부는 각 계정 프로필에서 확인할 수 있지만 수동으로는 매우 번거롭습니다.

### 2단계: 데이터 추출
팔로워 목록과 팔로잉 목록을 각각 복사합니다.

### 3단계: Threads Garden 활용
**Threads Garden**에 붙여넣으면 자동으로 맞팔하지 않는 계정을 분류해드립니다.

### 4단계: 선택적 언팔로우
모든 비맞팔 계정을 무조건 언팔하는 것은 좋지 않습니다. 아래 기준으로 선별하세요:

- ✅ 콘텐츠가 내 관심사와 전혀 무관한 계정
- ✅ 마지막 게시물이 6개월 이상 된 비활성 계정
- ❌ 인플루언서나 브랜드 계정 (맞팔이 어려운 구조)
- ❌ 관심 있는 정보를 공유하는 계정

## 주의사항

Threads는 하루 언팔로우 횟수에 제한이 있을 수 있습니다. 한 번에 너무 많이 언팔하면 계정 활동 제한을 받을 수 있으니, 하루 20~30명씩 나눠서 진행하는 것을 권장합니다.
      `,
    },
    en: {
      title: 'Complete Guide to Managing Your Threads Follows',
      description: 'Learn how to clean up your following list and improve your account quality.',
      category: 'Guide',
      content: `
## Why Following Management Matters

The Threads algorithm curates your feed based on accounts you follow. Having many non-mutual follows can reduce feed quality and impact your post reach.

## Signs You Need a Clean-Up

- Your following count far exceeds your followers
- Too much irrelevant content is flooding your feed
- Your follower growth has stalled

## Step-by-Step Process

### Step 1: Get Your Data
Copy your Followers list and Following list from Threads.

### Step 2: Use Threads Garden
Paste both into the tool to instantly see who doesn't follow back.

### Step 3: Selective Unfollowing

- ✅ Accounts with zero relevance to your interests
- ✅ Inactive accounts (last post 6+ months ago)
- ❌ Influencers / brands (one-way follows are normal)
- ❌ Accounts sharing content you value

## Note

Threads may limit daily unfollows. Aim for 20-30 per day to avoid restrictions.
      `,
    },
    date: '2025-03-20',
    readTime: 5,
    platform: 'threads',
  },
  {
    slug: 'threads-algorithm-2025',
    ko: {
      title: '2025 Threads 알고리즘 완전 분석',
      description: 'Threads 피드 알고리즘의 작동 원리와 노출을 늘리는 전략을 알아봅니다.',
      category: '알고리즘',
      content: `
## Threads 알고리즘이란?

Meta가 공개한 정보에 따르면, Threads의 피드 알고리즘은 크게 두 가지 영역으로 나뉩니다.

1. **팔로잉 피드**: 내가 팔로우하는 사람들의 게시물
2. **추천 피드**: 알고리즘이 관심사 기반으로 추천하는 게시물

## 알고리즘에 영향을 주는 주요 요소

### 참여도 (Engagement)
좋아요, 댓글, 리포스트, 공유 수. 특히 **댓글**이 가장 강한 시그널입니다.

### 완독률 (Read Time)
짧은 글이라도 끝까지 읽게 만드는 구조가 중요합니다. 너무 긴 게시물은 오히려 불리합니다.

### 계정 신뢰도
- 팔로워 대비 팔로잉 비율
- 계정 활동 주기 (꾸준함)
- 이전 게시물들의 평균 참여율

## 노출을 높이는 실전 전략

**1. 첫 댓글은 직접 달기** — 게시 직후 본인이 첫 댓글을 달면 초기 참여 신호를 만들 수 있습니다.

**2. 질문형 마무리** — 마지막 문장을 질문으로 끝내면 댓글 유도 효과가 있습니다.

**3. 최적 게시 시간** — 평일 오전 8~10시, 저녁 8~10시대가 참여율이 높습니다.
      `,
    },
    en: {
      title: 'Threads Algorithm 2025: Full Breakdown',
      description: 'How the Threads feed algorithm works and strategies to increase your reach.',
      category: 'Algorithm',
      content: `
## How Threads Algorithm Works

The Threads feed is divided into two sections:

1. **Following Feed**: Posts from accounts you follow
2. **Recommendation Feed**: Content based on your interests

## Key Ranking Factors

### Engagement
Likes, comments, reposts, shares. **Comments** are the strongest signal of all.

### Read Time
Posts that keep readers engaged to the end are rewarded.

### Account Authority
- Following-to-follower ratio
- Posting consistency
- Average engagement rate of past posts

## Practical Strategies

**1. Self-reply immediately after posting** — Kick off early engagement.

**2. End with a question** — Encourages replies.

**3. Post at peak times** — Weekday mornings and evenings tend to perform best.
      `,
    },
    date: '2025-03-15',
    readTime: 7,
    platform: 'threads',
  },
  {
    slug: 'grow-threads-followers',
    ko: {
      title: 'Threads 팔로워 실질적으로 늘리는 방법',
      description: '인위적인 수치 부풀리기 없이 실제 팔로워를 확보하는 방법을 공유합니다.',
      category: '성장 전략',
      content: `
## 팔로워 수보다 중요한 것

팔로워 숫자보다 중요한 것은 **실제로 반응하는 사람의 수**입니다. 팔로워 1,000명이 있어도 참여율이 0.1%라면 100명의 열성 팔로워보다 가치가 낮습니다.

## 진짜 팔로워를 만드는 5가지 원칙

### 1. 일관된 주제 선택
육아, 재테크, 개발, 요리 — 뭐든 좋습니다. 명확한 정체성이 팔로우 결정을 쉽게 만듭니다.

### 2. 매일 올리기보다 꾸준히 올리기
하루 5개보다 매주 3~4개를 꾸준히 올리는 것이 낫습니다.

### 3. 다른 계정에 먼저 반응하기
팔로워를 원한다면 먼저 팔로워가 되어주세요.

### 4. 리포스트 유도 콘텐츠 만들기
"저장하고 싶은 정보", "공유하고 싶은 팁", "공감 가는 이야기"

### 5. 프로필 최적화
- 명확한 프로필 사진
- 한 줄 소개: "나는 ○○하는 사람" 형식
- 링크는 가장 중요한 것 하나만
      `,
    },
    en: {
      title: 'How to Actually Grow Your Threads Followers',
      description: 'Building real followers without inflating numbers artificially.',
      category: 'Growth',
      content: `
## Engagement Rate > Follower Count

1,000 followers with 0.1% engagement is worth less than 100 highly engaged fans.

## 5 Principles for Real Growth

### 1. Pick One Topic
Pick a niche and stick to it. Clarity drives follows.

### 2. Consistency Over Volume
3-4 times per week beats 5 times a day then silence.

### 3. Engage First
Leave genuine comments in your niche — their audience finds you.

### 4. Create Share-Worthy Content
Useful info, tips worth sharing, relatable stories.

### 5. Optimize Your Profile
Clear photo, a "I help/share/make ___" bio, one link.
      `,
    },
    date: '2025-03-10',
    readTime: 6,
    platform: 'threads',
  },
  {
    slug: 'threads-first-impression',
    ko: {
      title: '첫 인상이 전부다: Threads 프로필 최적화',
      description: '방문자를 팔로워로 전환하는 프로필 세팅 방법을 알아봅니다.',
      category: '프로필',
      content: `
## 프로필이 중요한 이유

Threads에서 누군가의 게시물이 마음에 들어 프로필을 방문했을 때, 팔로우 여부를 결정하는 데 걸리는 시간은 평균 **3초** 미만입니다. 그 3초 안에 "이 사람, 팔로우할 만하다"는 인상을 줘야 합니다.

## 프로필 사진

- 얼굴이 명확히 보이는 사진 권장 (브랜드라면 로고도 괜찮음)
- 배경이 복잡하지 않아야 함
- 정사각형 구도

## 이름 설정

- 검색에 노출되는 핵심 키워드 포함
- 예: "김민준 | 마케터"처럼 직업/정체성을 이름 옆에

## 소개글 (Bio)

소개글은 세 가지를 담아야 합니다:

- **나는 누구인가**: "○○ 분야 ~~년차"
- **무엇을 공유하는가**: "매일 마케팅 인사이트 공유"
- **왜 팔로우해야 하는가**: "실전 경험 기반 팁"

## 링크

외부 링크가 허용된 경우, 가장 중요한 자료 하나만 연결하세요. 블로그, 뉴스레터, 포트폴리오 중 핵심 하나만.
      `,
    },
    en: {
      title: 'First Impressions Count: Optimizing Your Threads Profile',
      description: 'How to turn profile visitors into followers in under 3 seconds.',
      category: 'Profile',
      content: `
## Why Your Profile Matters

When someone finds your post and visits your profile, they decide whether to follow in under **3 seconds**. Make it count.

## Profile Photo

- Clear face shot (or brand logo)
- Clean background
- Square composition

## Display Name

Include a keyword: "Jane Kim | Designer" signals expertise instantly.

## Bio

Cover three things:

- **Who**: Your role or niche
- **What**: What you share
- **Why**: Why they should follow

## Link

One link only — your most important resource.
      `,
    },
    date: '2025-03-05',
    readTime: 4,
    platform: 'threads',
  },
  {
    slug: 'threads-content-strategy',
    ko: {
      title: 'Threads 콘텐츠 전략: 무엇을 올려야 할까',
      description: '참여율과 팔로워 증가를 동시에 잡는 콘텐츠 전략을 정리했습니다.',
      category: '콘텐츠',
      content: `
## Threads에서 잘 되는 콘텐츠의 공통점

수많은 계정을 분석해보면, 빠르게 성장하는 계정들의 콘텐츠에는 공통 패턴이 있습니다.

## 잘 되는 콘텐츠 유형

### 1. 경험 기반 이야기
"저는 ○○을 해봤는데..."로 시작하는 1인칭 경험담은 진정성이 느껴져 반응이 좋습니다.

### 2. 반전이 있는 의견
"모두가 A라고 하지만, 실은 B입니다" 형식의 게시물은 댓글을 유발합니다.

### 3. 리스트형 정보
"○○을 위한 5가지 방법" 형식은 저장과 공유가 많이 됩니다.

### 4. 질문형 게시물
단순히 질문을 던지는 것만으로도 높은 참여율을 기록할 수 있습니다.

## 피해야 할 콘텐츠

- 홍보성이 너무 강한 게시물
- 주제 없이 일상만 나열하는 형식
- 너무 긴 글 (Threads는 짧고 읽기 쉬운 글이 유리)
      `,
    },
    en: {
      title: 'Threads Content Strategy: What Actually Works',
      description: 'A breakdown of content types that drive engagement and growth.',
      category: 'Content',
      content: `
## What High-Growth Threads Accounts Have in Common

Analyzing top-growing accounts reveals clear content patterns.

## Content Types That Perform

### 1. Experience-Based Stories
First-person "I tried X and here's what happened" posts feel authentic.

### 2. Contrarian Takes
"Everyone says A, but actually it's B" format triggers debate and comments.

### 3. List Posts
"5 ways to do X" gets saved and shared consistently.

### 4. Simple Questions
Sometimes just asking a good question is enough for high engagement.

## What to Avoid

- Posts that feel too promotional
- Aimless daily life posts without a clear angle
- Walls of text (Threads rewards brevity)
      `,
    },
    date: '2025-02-28',
    readTime: 5,
    platform: 'threads',
  },
  {
    slug: 'threads-engagement-tips',
    ko: {
      title: '댓글 받는 게시물 만드는 7가지 공식',
      description: '댓글 수를 늘리는 검증된 방법을 정리했습니다.',
      category: '참여율',
      content: `
## 왜 댓글이 중요한가

Threads 알고리즘에서 댓글은 좋아요보다 훨씬 강한 신호입니다. 댓글이 많은 게시물은 팔로워가 아닌 사람에게도 노출될 가능성이 높아집니다.

## 댓글을 유발하는 7가지 공식

### 1. 마지막 줄에 질문
"여러분은 어떻게 생각하시나요?" 한 문장이 댓글 수를 2배로 만들 수 있습니다.

### 2. 두 가지 선택지 제시
"A가 맞을까요, B가 맞을까요?" 양자택일 질문은 참여 장벽을 낮춥니다.

### 3. 의도적으로 논쟁적인 주장
틀리지 않으면서도 반응을 유발하는 주제를 선택하세요.

### 4. 경험 공유 요청
"비슷한 경험이 있으시면 댓글로 알려주세요" 형식.

### 5. 빈칸 채우기
"나에게 Threads란 ___이다" 형식의 게시물은 완성하고 싶은 충동을 유발합니다.

### 6. 게시 직후 첫 댓글 직접 달기
본인이 먼저 댓글을 달면 다른 사람도 참여하기 쉬워집니다.

### 7. 댓글에 빠르게 응답하기
초반 댓글에 빠르게 답하면 알고리즘이 활성 게시물로 인식합니다.
      `,
    },
    en: {
      title: '7 Formulas for Getting More Comments on Threads',
      description: 'Tested methods to boost your comment count and reach.',
      category: 'Engagement',
      content: `
## Why Comments Matter Most

Comments signal higher intent than likes. Posts with more comments get shown to non-followers.

## 7 Comment-Generating Formulas

### 1. End with a question
One sentence at the end can double your comment count.

### 2. Binary choice
"A or B?" removes the friction of thinking of something to say.

### 3. Slightly controversial take
Not wrong, just enough to stir debate.

### 4. Ask for experiences
"Has this happened to you?" invites sharing.

### 5. Fill in the blank
"For me, Threads is ___" triggers completion instinct.

### 6. First comment yourself
Kickstart the discussion — others join easier when it's already going.

### 7. Reply quickly
Early replies signal to the algorithm: this post is alive.
      `,
    },
    date: '2025-02-20',
    readTime: 4,
    platform: 'threads',
  },
  {
    slug: 'threads-vs-instagram',
    ko: {
      title: 'Threads vs Instagram: 뭐가 다른가',
      description: '두 플랫폼의 알고리즘, 콘텐츠 형식, 성장 방식 차이를 비교합니다.',
      category: '비교',
      content: `
## 같은 Meta, 다른 플랫폼

Threads와 Instagram은 같은 Meta 생태계에 속하지만, 콘텐츠 소비 방식과 알고리즘이 상당히 다릅니다.

## 핵심 차이점

### 콘텐츠 형식
- **Instagram**: 이미지, 영상, 릴스 중심
- **Threads**: 텍스트 중심 (이미지도 가능하지만 보조적)

### 알고리즘
- **Instagram**: 비주얼 퀄리티, 릴스 완시율이 중요
- **Threads**: 텍스트 참여도, 댓글 수가 핵심

### 팔로워 전이
Instagram 팔로워를 Threads로 옮기는 것은 생각보다 어렵습니다. 비주얼 콘텐츠를 즐기던 팔로워가 텍스트 기반 Threads에 반응하지 않을 수 있습니다.

## 어떻게 활용할 것인가

- Instagram: 비주얼 브랜딩, 포트폴리오
- Threads: 생각, 인사이트, 커뮤니티

두 플랫폼을 서로 다른 목적으로 운영하면 시너지 효과를 낼 수 있습니다.
      `,
    },
    en: {
      title: 'Threads vs Instagram: Key Differences Explained',
      description: 'How the two Meta platforms differ in algorithm, content, and growth.',
      category: 'Comparison',
      content: `
## Same Company, Different Platforms

Threads and Instagram share the Meta ecosystem but operate very differently.

## Key Differences

### Content Format
- **Instagram**: Images, videos, Reels
- **Threads**: Text-first (images are secondary)

### Algorithm
- **Instagram**: Visual quality, Reels completion rate
- **Threads**: Text engagement, comment count

### Audience Transfer
Don't assume your Instagram followers will engage on Threads. Visual-first audiences may not adapt to text format.

## How to Use Both

- Instagram: Visual branding, portfolio
- Threads: Thoughts, insights, community

Running both with distinct purposes creates compounding reach.
      `,
    },
    date: '2025-02-15',
    readTime: 5,
    platform: 'threads',
  },
  {
    slug: 'threads-best-posting-times',
    ko: {
      title: '한국 기준 Threads 최적 게시 시간 분석',
      description: '시간대별 참여율 데이터를 바탕으로 최적의 게시 타이밍을 알아봅니다.',
      category: '운영 전략',
      content: `
## 게시 시간이 중요한 이유

같은 콘텐츠라도 시간대에 따라 초기 참여율이 크게 달라집니다. 초기 참여율은 Threads 알고리즘이 게시물을 더 많이 노출할지 결정하는 핵심 지표입니다.

## 시간대별 분석 (한국 기준)

### 최고 성수기 ⭐⭐⭐
- **오전 7:30 ~ 9:00**: 출근 전 스마트폰 체크 시간
- **저녁 9:00 ~ 11:00**: 퇴근 후 여가 시간

### 중간 성수기 ⭐⭐
- **점심 12:00 ~ 13:30**: 점심시간 스크롤
- **오후 6:00 ~ 7:30**: 퇴근 이동 중

### 비추 시간대 ⭐
- 새벽 2시 ~ 7시
- 평일 오전 10시 ~ 11시 (업무 집중 시간)

## 요일별 패턴

- **월요일**: 주초 피로도 높아 참여율 낮음
- **화~목**: 가장 안정적인 참여율
- **금요일**: 저녁 이후 급상승
- **주말**: 낮 시간대 분산, 저녁 9시 피크

## 나만의 최적 시간 찾기

가장 좋은 방법은 3주간 다양한 시간대에 게시하고 참여율을 직접 비교하는 것입니다.
      `,
    },
    en: {
      title: 'Best Times to Post on Threads (Data-Backed)',
      description: 'Optimal posting windows to maximize your initial engagement.',
      category: 'Strategy',
      content: `
## Why Timing Matters

Same content, different times = wildly different results. Early engagement is the key signal for algorithmic distribution.

## Best Times to Post

### Peak Hours ⭐⭐⭐
- **7:30–9:00 AM**: Pre-commute phone check
- **9:00–11:00 PM**: Evening wind-down

### Good Hours ⭐⭐
- **12:00–1:30 PM**: Lunch scroll
- **6:00–7:30 PM**: Evening commute

### Avoid ⭐
- 2:00–7:00 AM
- Mid-morning on weekdays (focus hours)

## Find Your Own Sweet Spot

Post at different times for 3 weeks and compare engagement rates directly. Your audience may differ from averages.
      `,
    },
    date: '2025-02-10',
    readTime: 5,
    platform: 'threads',
  },
  {
    slug: 'threads-bio-optimization',
    ko: {
      title: '팔로워를 부르는 Threads 소개글 작성법',
      description: '소개글 한 줄이 팔로워 전환율을 결정합니다. 실전 예시와 함께 알아봅니다.',
      category: '프로필',
      content: `
## 소개글의 역할

프로필 방문자의 80%는 소개글을 읽고 팔로우 여부를 결정합니다. 단 2~3줄이 전부입니다.

## 피해야 할 소개글 패턴

- "안녕하세요, 반갑습니다" — 너무 일반적
- 이모지만 가득한 소개글 — 정보가 없음
- "팔로우하면 맞팔해요" — 품질보다 수에 집착하는 인상

## 좋은 소개글의 3요소

### 1. 정체성 선언
"마케터 5년차", "두 아이의 아빠", "스타트업 창업자"처럼 명확한 자기 정의

### 2. 콘텐츠 약속
"매주 마케팅 인사이트 공유", "육아 현실 기록", "기술 트렌드 분석"

### 3. 차별점
왜 수십만 계정 중 나를 팔로우해야 하는가?

## 실전 예시

**나쁜 예**: "안녕하세요! 일상과 생각을 공유합니다 😊"

**좋은 예**: "브랜드 마케터 | 매일 실전 마케팅 팁 | 3년간 10개 브랜드 런칭 경험"
      `,
    },
    en: {
      title: 'Writing a Threads Bio That Actually Gets Followers',
      description: 'Two lines can make or break your follow rate. Here\'s how to write them right.',
      category: 'Profile',
      content: `
## The Bio's Job

80% of profile visitors decide within 2-3 lines whether to follow you.

## Bios to Avoid

- "Hi, nice to meet you!" — Generic
- All emojis, no information
- "Follow for follow" — signals low-quality focus

## 3 Elements of a Good Bio

### 1. Identity Declaration
"5-year marketer," "founder," "dad of 2" — clear self-definition.

### 2. Content Promise
"Weekly marketing tips," "tech trend analysis" — tell them what they'll get.

### 3. Differentiator
Why follow you vs. anyone else in your niche?

## Example

**Bad**: "Hi! I share my daily life and thoughts 😊"

**Good**: "Brand marketer | Daily marketing tips | Launched 10 brands in 3 years"
      `,
    },
    date: '2025-02-05',
    readTime: 4,
    platform: 'threads',
  },
  {
    slug: 'threads-keyword-vs-hashtag',
    ko: {
      title: 'Threads에서 해시태그보다 키워드가 중요한 이유',
      description: 'Threads 검색 알고리즘의 특성과 키워드 전략을 알아봅니다.',
      category: '알고리즘',
      content: `
## Threads는 Instagram이 아니다

많은 사람들이 Instagram 방식 그대로 해시태그를 잔뜩 달지만, Threads에서는 이 전략이 통하지 않습니다.

## Threads의 검색 알고리즘

Threads는 해시태그보다 **본문 텍스트 자체를 인덱싱**합니다. 즉, 게시물 내용에 자연스럽게 포함된 키워드가 검색 노출에 훨씬 더 중요합니다.

## 올바른 키워드 전략

### 하지 말아야 할 것
- 게시물 끝에 해시태그 10개 이상 달기
- 관련성 없는 해시태그 사용
- 해시태그만 의존하는 노출 전략

### 해야 할 것
- 게시물 첫 문장에 핵심 키워드 포함
- 제목처럼 쓰이는 첫 줄에 검색될 법한 단어 배치
- 댓글에서도 핵심 주제어를 자연스럽게 반복

## 실전 예시

**비효율적 방식**: "오늘 카페에서 작업했어요! #카페스타그램 #작업중 #노마드라이프 #커피"

**효율적 방식**: "재택근무 5년차가 카페 작업을 선호하는 이유 3가지. 집중력, 루틴, 그리고..."
      `,
    },
    en: {
      title: 'Why Keywords Beat Hashtags on Threads',
      description: 'How Threads indexes content and the keyword strategy that actually works.',
      category: 'Algorithm',
      content: `
## Threads ≠ Instagram

Many people apply Instagram hashtag habits to Threads — this is a mistake.

## How Threads Indexes Content

Threads prioritizes **body text keywords** over hashtags. What you write in your post is more important than any tags you append.

## The Right Keyword Strategy

### Don't:
- Stack 10+ hashtags at the end
- Use irrelevant trending tags
- Rely on hashtags for distribution

### Do:
- Include your core keyword in the first sentence
- Write your opener like a headline including searchable terms
- Naturally repeat key topics in follow-up comments

## Example

**Inefficient**: "Working from a cafe today! #cafe #remotework #nomadlife"

**Efficient**: "3 reasons a 5-year remote worker still prefers cafe work: focus, routine, and..."
      `,
    },
    date: '2025-01-30',
    readTime: 4,
    platform: 'threads',
  },
  {
    slug: 'instagram-reels-hooks',
    ko: {
      title: '떡상하는 릴스 도입부 5가지 공식',
      description: '시청자의 시선을 3초 안에 사로잡는 강력한 후킹 멘트들을 소개합니다.',
      category: 'Reels',
      content: `
## 릴스의 핵심은 '3초'
인스타그램 릴스 알고리즘에서 가장 중요한 지표는 **완시율(Watch Time)**입니다. 그리고 그 완시율을 결정하는 것은 첫 3초의 '후크(Hook)'입니다.

## 반응이 확실한 후킹 공식 5가지

### 1. 결과부터 보여주기
- "한 달 만에 팔로워 1,000명 늘린 비결 (결과 화면 캡처)"
- 먼저 호기심을 자극하고 과정을 설명하세요.

### 2. 실수/실패 공유
- "인스타 초보들이 흔히 하는 실수 3가지"
- "제가 릴스 100개 올리고 깨달은 것들"

### 3. 반전 포인트
- "아직도 해시태그 30개 다세요? 그거 아닙니다."
- 통념을 뒤집는 문장으로 멈추게 만드세요.

### 4. 도구/사이트 추천
- "디자이너만 아는 무료 폰트 사이트 TOP 3"
- 유용한 정보는 '저장' 버튼을 누르게 만듭니다.

### 5. 질문으로 시작
- "릴스 조회수가 왜 안 나오는지 궁금하시죠?"

## 요약
후킹 멘트 후에는 반드시 그에 걸맞은 가치 있는 내용을 빠르게 전달해야 이탈을 막을 수 있습니다.
      `,
    },
    en: {
      title: '5 Hooks to Make Your Reels Go Viral',
      description: 'Powerful hooks to grab your viewer’s attention in under 3 seconds.',
      category: 'Reels',
      content: `
## The 3-Second Rule
Retention is the #1 metric for the Reels algorithm. The first 3 seconds determine everything.

## 5 Viral Hook Formulas

### 1. Show Results First
- "How I gained 1,000 followers in a month (screenshot)"
- Spark curiosity with results, then explain the process.

### 2. Share Mistakes
- "3 big mistakes Instagram beginners make"
- "What I learned after posting 100 Reels"

### 3. The Pattern Interrupt
- "Stop using 30 hashtags. Here's why."
- Flip common knowledge on its head.

### 4. Curated Recommendations
- "3 free font sites only designers know about"
- Useful resources drive 'Saves'.

### 5. Start with a Question
- "Wondering why your Reels reach is flat?"

## Final Tip
After the hook, deliver high value immediately to prevent drops in retention.
      `,
    },
    date: '2025-03-25',
    readTime: 5,
    platform: 'instagram',
  },
  {
    slug: 'instagram-profile-vibe',
    ko: {
      title: '방문자를 팔로워로 만드는 프로필 무드',
      description: '전문성과 감성을 동시에 잡는 인스타그램 프로필 최적화 전략.',
      category: '프로필',
      content: `
## 인스타그램 프로필의 3초 법칙
프로필 방문자가 팔로우 버튼을 누르기까지 고민하는 시간은 단 3초입니다. 전체적인 배경(그리드)의 분위기가 결정을 좌우합니다.

## 전문적인 프로필 세팅 팁

### 1. 하이라이트 커버 통일
- 무채색이나 브랜드 컬러로 하이라이트 아이콘을 통일하세요. 훨씬 깔끔해 보입니다.

### 2. 폰트와 여백
- 소개글(Bio)에 너무 많은 텍스트를 넣기보다는 **줄바꿈**과 **이모지**를 적절히 섞어 가독성을 높이세요.

### 3. 고정 게시물(Pin) 활용
- 가장 반응이 좋았거나 나를 잘 설명하는 게시물 3개를 상단에 고정하세요.

### 4. 프로필 사진 선정
- 얼굴이 잘 보이는 고화질 사진이나, 브랜드의 로고를 사용하세요. 가급적 한 번 정하면 오래 유지하는 것이 좋습니다.
      `,
    },
    en: {
      title: 'Creating a Profile Mood that Converts Visitors',
      description: 'Strategies to balance professionalism and aesthetics on your profile.',
      category: 'Profile',
      content: `
## The 3-Second Profile Rule
Visitors decide whether to follow based on the overall "vibe" of your grid.

## Professional Setup Tips

### 1. Unified Highlight Covers
- Use a consistent color palette or icons for highlights. It instantly looks cleaner.

### 2. Whitespace in Bio
- Don't crowd your bio with text. Use line breaks and emojis to make it readable.

### 3. Use Pinned Posts
- Pin your 3 best-performing or most representative posts to the top of your grid.

### 4. High-Quality Profile Picture
- Use a clear headshot or a sharp logo. Consistency in your profile pic helps with brand recall.
      `,
    },
    date: '2025-03-22',
    readTime: 4,
    platform: 'instagram',
  },
  {
    slug: 'instagram-story-engagement',
    ko: {
      title: '스토리 스티커로 소통 지수 200% 높이기',
      description: '인스타그램 스토리 스티커를 활용한 알고리즘 점수 획득법.',
      category: '소통',
      content: `
## 스토리는 '친밀도'의 지표
인스타그램 알고리즘은 사용자와의 상호작용(DM, 답장, 스티커 클릭)이 잦을수록 내 게시물을 상단에 노출합니다.

## 효과적인 스티커 활용법

### 1. 설문(Polls) 스티커
- "A vs B" - 가장 클릭하기 쉬운 형태입니다. 답변 장벽을 낮추세요.

### 2. 질문(Questions) 스티커
- "무엇이든 물어보세요"보다는 구체적인 주제를 주세요. 예: "오늘 점심 메뉴 추천해주세요"

### 3. 슬라이더 스티커
- 감정적인 공감을 유도할 때 좋습니다. 게시물의 반응을 스토리에서 한 번 더 확인하세요.

### 4. 퀴즈 스티커
- 유익한 정보를 퀴즈로 내면 정답을 맞히고 싶은 심리를 자극해 참여율이 올라갑니다.
      `,
    },
    en: {
      title: 'Boosting Engagement with Story Stickers',
      description: 'How to use Instagram Story stickers to game the algorithm.',
      category: 'Engagement',
      content: `
## Stories Measure "Closeness"
The more users interact with your stories (DMs, replies, sticker taps), the more the algorithm prioritizes your feed posts.

## Effective Sticker Strategies

### 1. Polls (A vs B)
- The easiest interaction for users. Keep options simple to maximize taps.

### 2. Question Stickers
- Be specific. Instead of "Ask me anything," try "Recommend a lunch spot in Seoul."

### 3. Slider Stickers
- Great for emotional resonance. Use it to gauge how much people like a specific idea.

### 4. Quiz Stickers
- People love being right. Use quizzes to share "Did you know?" facts related to your niche.
      `,
    },
    date: '2025-03-18',
    readTime: 5,
    platform: 'instagram',
  },
  {
    slug: 'instagram-hashtag-strategy',
    ko: {
      title: '2025년형 인스타그램 해시태그 vs 검색 키워드',
      description: '이제는 해시태그 나열보다 본문 키워드가 더 중요한 시대입니다.',
      category: '알고리즘',
      content: `
## 해시태그의 시대는 끝났는가?
아닙니다. 하지만 역할이 바뀌었습니다. 이제 인스타그램은 게시물 본문(Caption)의 **텍스트**를 검색 결과에 매칭합니다.

## 검색 최적화(SEO) 전략

### 1. 캡션 상단에 키워드 배치
- 게시물 첫 두 줄에 해당 주제어(예: 성수동 카페, 커스텀 키보드)를 반드시 포함하세요.

### 2. 해시태그는 3~5개가 적당
- 너무 많은 해시태그는 스팸으로 분류될 위험이 있습니다. 핵심 키워드 3~5개면 충분합니다.

### 3. 이미지 내 텍스트 활용
- 인스타그램의 AI는 이미지 안의 글자도 읽습니다. 중요한 키워드는 이미지나 영상 자막에 꼭 넣으세요.

### 4. 대체 텍스트(Alt Text) 설정
- 게시물 업로드 전 상세 설정에서 '대체 텍스트'를 입력하면 검색 노출에 큰 도움이 됩니다.
      `,
    },
    en: {
      title: '2025 Instagram Hashtags vs Keywords',
      description: 'Why body keywords are now more important than hashtag stacking.',
      category: 'Algorithm',
      content: `
## Is the Hashtag Era Over?
Not entirely, but the strategy has shift. Instagram now indexes the **text** in your captions for search results.

## Search Optimization (SEO) Strategy

### 1. Keywords in Top 2 Lines
- Include your primary keywords (e.g., "Seoul Cafe," "Mechanical Keyboards") in the first two lines of your caption.

### 2. Use 3–5 Hashtags Only
- Stacking 30 hashtags can now be flagged as spam. 3–5 highly relevant tags are optimal.

### 3. Text Overlay on Visuals
- Instagram's AI reads text within images and videos. Put your key search terms in your subtitles.

### 4. Optimize Alt Text
- Fill in the Alt Text in Advanced Settings before posting to boost your search rank.
      `,
    },
    date: '2025-03-14',
    readTime: 6,
    platform: 'instagram',
  },
  {
    slug: 'instagram-grid-layout',
    ko: {
      title: '나만의 스타일을 보여주는 그리드 레이아웃',
      description: '일관성 있는 피드 구성으로 전문성을 어필하는 방법.',
      category: '디자인',
      content: `
## 그리드는 포트폴리오다
잠재적 팔로워는 내 피드의 최근 9개 게시물을 보고 나를 팔로우할지 결정합니다.

## 그리드 패턴 종류

### 1. 체커보드(Checkerboard)
- 글 게시물과 사진 게시물을 번갈아가며 배치하여 체스판 같은 느낌을 줍니다.

### 2. 줄 맞추기(Vertical Lines)
- 세로로 한 줄은 텍스트 중심, 두 줄은 사진 중심으로 배치하여 정돈된 느낌을 줍니다.

### 3. 컬러 테마 통일
- 모든 사진의 보정 톤이나 배경색을 한두 가지로 제한하여 무드를 맞춥니다.

### 4. 가로 줄 테마
- 가로 3개 게시물을 하나의 시리즈로 구성하여 스토리텔링을 합니다.
      `,
    },
    en: {
      title: 'Grid Layouts That Show Your Unique Style',
      description: 'How to build a consistent feed that signals professionalism.',
      category: 'Design',
      content: `
## Your Grid is Your Portfolio
Potential followers decide your value based on the last 9 posts they see on your grid.

## Popular Grid Patterns

### 1. Checkerboard
- Alternate between quotes/text and photos for a clean, rhythmic look.

### 2. Vertical Lines
- Keep one vertical column for quotes and the rest for photos to maintain order.

### 3. Consistent Color Palette
- Limit your edit presets or background colors to 1-2 tones for a cohesive mood.

### 4. Row Themes
- Treat every horizontal row of 3 as a single story or series.
      `,
    },
    date: '2025-03-12',
    readTime: 5,
    platform: 'instagram',
  },
  {
    slug: 'instagram-carousel-value',
    ko: {
      title: '슬라이드를 넘기게 만드는 카드뉴스 공식',
      description: '이미지 한 장보다 열 장의 슬라이드가 알고리즘에 유리한 이유.',
      category: '콘텐츠',
      content: `
## 왜 단일 포스트보다 슬라이드인가?
사용자가 슬라이드를 넘기는 행위 자체가 '상호작용'으로 간주되어 알고리즘 점수를 높여줍니다.

## 가치 있는 카드뉴스 구성

### 1. 첫 페이지는 '문제 제기'
- 사용자의 고민이나 궁금증을 한마디로 요약하세요.

### 2. 중간 과정은 '해결책'
- 2~8페이지까지는 구체적인 정보나 팁을 단계별로 설명하세요.

### 3. 마지막은 'CTA (행동 유도)'
- "나중에 보려면 저장하세요", "도움이 됐다면 친구에게 공유하세요"라고 명확히 요청하세요.

### 4. 가독성 최우선
- 이미지 한 장에 너무 많은 글자를 넣지 마세요. 폰트 크기는 시원시원하게!
      `,
    },
    en: {
      title: 'Carousel Formulas That Demand a Swipe',
      description: 'Why multi-image posts are often better for the algorithm than single photos.',
      category: 'Content',
      content: `
## Why Carousels Win
Swiping is considered an "interaction," which signals high interest to the algorithm.

## High-Value Carousel Structure

### 1. Slide 1: The Problem
- Summarize a pain point or a specific curiosity in one bold sentence.

### 2. Slides 2–8: The Solution
- Break down your tips or information step-by-step. Keep it concise.

### 3. Final Slide: Call to Action (CTA)
- Explicitly ask: "Save this for later" or "Share this with a friend who needs it."

### 4. Prioritize Readability
- Don't crowd slides with text. Use large fonts and high-contrast colors.
      `,
    },
    date: '2025-03-09',
    readTime: 6,
    platform: 'instagram',
  },
  {
    slug: 'instagram-community-management',
    ko: {
      title: '댓글과 DM을 수익으로 연결하는 대화법',
      description: '팬덤을 만들고 성과를 내는 커뮤니티 관리 가이드.',
      category: '커뮤니티',
      content: `
## 숫자가 아닌 '사람'에게 집중하세요
1만 명의 허수 팔로워보다 100명의 진성 팬이 비즈니스에는 더 큰 도움이 됩니다.

## 관계를 쌓는 대화 기술

### 1. 댓글은 질문으로 답하기
- "감사합니다!"로 끝내지 말고, "혹시 어떤 부분이 가장 좋으셨나요?"라고 다시 물어 대화를 이어가세요.

### 2. DM 요청 적극 활용
- "관심 있으신 분은 댓글 말고 DM 주세요"라고 유도하여 더 깊은 대화를 나누고 관계를 맺으세요.

### 3. 소통 게시물 올리기
- "오늘 하루 어떠셨나요?" 같은 일상적인 소통글을 주기적으로 올려 인간미를 보여주세요.

### 4. 정성스러운 답변의 힘
- 복사 붙여넣기 식의 댓글보다는 상대방의 닉네임을 언급하며 답글을 달아보세요.
      `,
    },
    en: {
      title: 'Turning Comments and DMs into Results',
      description: 'A community management guide for building real fandom.',
      category: 'Community',
      content: `
## Focus on People, Not Numbers
100 true fans are more valuable to any business than 10,000 ghost followers.

## Conversation Techniques

### 1. Reply with a Question
- Don't just say "Thanks!" Ask, "Which part did you find most helpful?" to keep the conversation alive.

### 2. Leverage DMs
- Encourage people to "DM me for more details" to start deeper, more personalized conversations.

### 3. Humanize Your Brand
- Post casual lifestyle content occasionally to show the person behind the screen.

### 4. The Power of Personalization
- Instead of copy-pasting, use the person's name or handle in your reply.
      `,
    },
    date: '2025-03-07',
    readTime: 5,
    platform: 'instagram',
  },
  {
    slug: 'instagram-analytics-check',
    ko: {
      title: '성장을 위해 매주 체크해야 할 3가지 지표',
      description: '인사이트 데이터 속에서 진짜 성장 엔진을 찾는 법.',
      category: '데이터',
      content: `
## 데이터에 답이 있습니다
무작정 열심히 올리는 것보다, 어떤 콘텐츠가 반응이 좋았는지 분석하는 것이 훨씬 빠릅니다.

## 꼭 봐야 할 3가지 지표

### 1. 저장(Saves) 수
- 저장은 곧 '가치'입니다. 정보성 콘텐츠가 잘 작동하고 있는지 판단하는 가장 좋은 기준입니다.

### 2. 공유(Shares) 수
- 내 계정을 모르는 사람에게 전달된 횟수입니다. 도달 범위(Reach)를 넓히는 핵심 엔진입니다.

### 3. 팔로워 전환율
- [도달 대비 팔로워 증가 수]를 체크하세요. 도달은 높은데 팔로워가 안 늘면 프로필 세팅의 문제입니다.
      `,
    },
    en: {
      title: '3 Metrics to Check Every Week for Growth',
      description: 'How to find your growth engine within Instagram Insights.',
      category: 'Data',
      content: `
## The Answers are in the Data
Analyzing what worked is much faster than guessing what might work next.

## Top 3 Metrics to Watch

### 1. Saves
- A save equals "Value." It's the best indicator if your educational content is working.

### 2. Shares
- This is how your content reaches people who don't follow you yet. It's your reach engine.

### 3. Follower Conversion Rate
- [New followers / Total Reach]. If reach is high but followers aren't growing, your profile needs a fix.
      `,
    },
    date: '2025-03-04',
    readTime: 4,
    platform: 'instagram',
  },
];

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug) ?? null;
}

export function getAllSlugs() {
  return posts.map(p => p.slug);
}

