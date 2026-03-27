// ─────────────────────────────────────────────────────────────────────────────
// 📁 src/data/posts.js
//
// SNS Garden Content Database
// ─────────────────────────────────────────────────────────────────────────────

export const posts = [
  {
    slug: 'threads-unfollow-guide',
    ko: {
      title: 'Threads 언팔로우 관리: 정원 가꾸기의 첫 단계',
      description: '단순히 숫자만 줄이는 것이 아닙니다. 내 피드의 품질을 높이고 진짜 소통을 시작하기 위한 팔로잉 목록 정리 완벽 가이드입니다.',
      category: '가이드',
      content: `## 보이지 않는 알고리즘의 눈

Threads에서 여러분이 누구를 팔로우하는지는 단순한 목록 이상의 의미를 갖습니다. 알고리즘은 여러분이 팔로우하는 계정들의 활동 패턴, 게시 빈도, 그리고 그 계정들과의 상호작용 기록을 분석하여 피드를 구성합니다. 맞팔하지도 않고 활동도 없는 유령 계정들이 팔로잉 목록을 채우고 있다면, 여러분의 디지털 정원은 잡초로 가득 찬 묵은 밭과 다를 바 없습니다.

특히 주목해야 할 점은 알고리즘이 '비활성 관계'를 감지한다는 것입니다. 내가 팔로우하고 있지만 한 번도 댓글을 달거나 좋아요를 주고받은 적 없는 계정이 많을수록, 알고리즘은 내 계정을 덜 '살아있는' 네트워크로 판단하여 새 게시물의 배포 범위를 줄입니다.

## 왜 지금 정리가 필요한가?

많은 사람들이 팔로워 숫자에 집착하지만, 실제로는 팔로잉 목록의 정리가 계정 성장의 핵심 레버입니다.

첫째, 피드 품질이 즉각 개선됩니다. 정리 후에는 내가 정말 원하는 정보들이 더 많은 비중으로 노출됩니다. 당연한 말 같지만, 실제로 해보면 피드가 '다른 앱'처럼 느껴질 정도의 변화가 있습니다.

둘째, 상호작용 지수가 높아집니다. 실제로 활동 중이고 나를 맞팔하는 사람들이 많아질수록, 내 게시물에 반응할 잠재적 독자의 밀도가 높아집니다. 단 50명의 진성 팔로워가 500명의 유령 팔로워보다 계정 성장에 훨씬 강력한 영향을 줍니다.

셋째, 계정 신뢰도의 문제입니다. 팔로워가 200명인데 팔로잉이 3,000명인 계정은 스팸 계정으로 오해받기 쉽습니다. 건강한 비율은 플랫폼마다 다르지만, Threads에서는 팔로잉이 팔로워보다 지나치게 많을 경우 신규 방문자의 팔로우 전환율이 눈에 띄게 떨어집니다.

## 전문가의 언팔로우 단계별 전략

### 1. 현황 파악과 데이터 수집

먼저 정확한 숫자를 파악하세요. Threads Garden 같은 분석 도구로 비맞팔 계정 전체를 한눈에 파악하는 것이 첫 단계입니다. 이때 목록을 그냥 보는 것이 아니라, 각 계정의 최근 활동 여부, 팔로워 수, 계정 유형(개인/브랜드)을 함께 확인하면 다음 단계가 훨씬 정교해집니다.

### 2. 선별적 제거의 기준 세우기

무조건 비맞팔이라고 삭제하는 것은 전략적으로 틀렸습니다. 다음 기준으로 우선순위를 정하세요.

- 6개월 이상 게시물이 없는 계정: 확실한 삭제 대상입니다. 이런 계정들은 알고리즘에 아무런 긍정적 기여를 하지 못합니다.
- 콘텐츠가 내 관심사와 전혀 무관해진 계정: 피드 노이즈의 주범입니다. 예전에 맞팔 유도로 팔로우한 계정들이 여기에 해당하는 경우가 많습니다.
- 팔로워 10만 이상의 대형 계정: 이들이 맞팔을 안 하는 건 당연합니다. 실제로 정보를 얻고 있다면 유지하고, 단순히 숫자 채우기용이었다면 정리하세요.

반대로 절대 삭제하지 말아야 할 계정도 있습니다. 아직 비맞팔이지만 나와 비슷한 결을 가진 소규모 계정, 그리고 내가 먼저 진심 어린 댓글을 남긴 적 있는 계정들은 가능성이 있는 관계입니다.

### 3. 안전한 속도 유지하기

Threads는 단시간에 대량의 언팔로우를 진행할 경우 봇으로 오해하여 계정을 일시 제한할 수 있습니다. 경험상 안전한 속도는 하루 30~50명 이내입니다. 이것을 습관처럼 매주 30분씩 하는 것이 한 번에 몰아서 하는 것보다 훨씬 효과적이고 안전합니다.

### 4. 정리 후 회복 기간의 비밀

언팔로우를 진행한 직후에는 알고리즘이 재조정하는 시간이 필요합니다. 보통 2~3일 정도 기다리면 피드가 눈에 띄게 달라집니다. 이 기간 동안 조급하게 다시 팔로우를 늘리려 하지 마세요. 잠시 기다리면 알고리즘이 새롭게 재구성된 팔로잉 목록을 바탕으로 더 정밀한 피드를 만들어 드릴 것입니다.

## 결론: 깨끗해진 정원에서 다시 시작하세요

정리가 끝나면 피드가 이전보다 훨씬 선명해진 것을 느낄 수 있을 것입니다. 이제 그 빈자리에 당신의 인사이트에 진심으로 공감해줄 파트너들을 채워보세요. 한 달에 한 번, 이 과정을 반복하면 여러분의 Threads는 점점 더 여러분다운 공간이 될 것입니다.`,
    },
    en: {
      title: 'Threads Unfollow Guide: The First Step to a Healthy Feed',
      description: 'It\'s not just about the numbers. It\'s about reclaiming your digital environment, boosting engagement, and building a garden of real connections.',
      category: 'Guide',
      content: `## The Silent Gaze of the Algorithm

On Threads, your Following list is more than just a list of names. It\'s the primary behavioral data source the algorithm uses to understand what kind of content you want and—crucially—how "alive" your social network is. If your list is cluttered with inactive or non-reciprocal accounts, your digital garden is effectively overrun by weeds. And the algorithm knows it.

What most people don\'t realize is that the algorithm doesn\'t just look at who you follow; it tracks the quality of those relationships. An account you follow but have never liked, commented on, or engaged with in any way is what I call a "dead link." Too many of these, and the system quietly deprioritizes your posts in return.

## Why Cleanup is Essential Right Now

Most creators obsess over growing their follower count, but cleaning the Following list is often the highest-ROI action you can take in a single afternoon.

First, it immediately improves your feed quality. After a good prune, your feed starts to feel like a different app—curated, focused, and actually useful. This isn't just a quality-of-life improvement; it changes how you interact with the platform, which the algorithm rewards.

Second, it boosts your engagement rate. A smaller, more active group of mutual connections means the people in your feed are far more likely to see and respond to your posts. Fifty highly engaged followers will do more for your account health than five hundred ghosts.

Third, it's a trust signal to visitors. A lopsided ratio—following 3,000 but followed by 200—is often the first thing a new visitor notices, and it frequently costs you the follow. Perception matters more than most people admit.

## The Expert Unfollow Strategy

### Step 1: Audit Your List

Don\'t do this by memory. Use a tool like SNS Garden to surface all non-mutual follows in a single, sorted list. When reviewing, note the account\'s last post date, follower count, and content type. This gives you a proper triage system for the next step.

### Step 2: Apply Selective Criteria

Not every non-follower deserves to be cut. Use a tiered approach:

- Inactive accounts (no posts in 6+ months): Remove without hesitation. These accounts contribute absolutely nothing to your network.
- Off-topic accounts: If their content no longer aligns with your interests, they are algorithmic noise. Cut them.
- Large brands and celebrity accounts: Keep them only if you actively consume their content. If they were a vanity follow, let them go.

On the flip side, don\'t cut small active accounts who simply haven\'t followed back yet—especially if you\'ve left genuine comments on their posts. These are relationships in progress.

### Step 3: Maintain a Safe Pace

Threads monitors rapid behavioral changes. Unfollowing hundreds of accounts in a single session will flag your account as potentially automated. A safe daily limit is 30-50 accounts. Making this a weekly 30-minute habit produces far better results than occasional mass purges.

### Step 4: The Recovery Window

After a cleanup, the algorithm needs 2-3 days to recalibrate with your new network map. Don\'t rush to fill the gap immediately. Let the system adjust. When it does, the improved feed quality you\'ll experience is the clearest confirmation that the cleanup worked.

## Plant Something New

Once the weeds are gone, the garden has room to breathe. Use that space intentionally. Follow people you genuinely want to talk to—not to inflate a number, but to build a network that actually serves you. Repeat this process monthly, and over time, your Threads presence will start to feel like an actual community rather than a crowded, noisy lobby.`,
    },
    date: '2025.06.15',
    readTime: 8,
    platform: 'threads',
  },
  {
    slug: 'threads-algorithm-2025',
    ko: {
      title: '2025 Threads 알고리즘: 노출의 법칙을 완전히 이해하다',
      description: '메타의 최신 업데이트를 바탕으로 내 글을 더 멀리 퍼뜨리는 핵심 로직과 실전 전술을 심층 분석합니다.',
      category: '알고리즘',
      content: `## 알고리즘 뒤에 숨겨진 철학

Threads의 알고리즘은 인스타그램보다 더 '대화 중심'으로 설계되어 있습니다. 단순히 예쁜 사진이나 트렌디한 해시태그를 올린다고 해서 노출이 보장되지 않습니다. 2025년 현재, Threads 알고리즘이 가장 중요하게 보는 두 가지 지표는 체류 시간(Dwell Time)과 대화의 깊이(Conversation Depth)입니다.

체류 시간이란 사용자가 내 게시물 위에 얼마나 오래 머무르는가입니다. 스크롤을 멈추고 텍스트를 읽는 행위 자체가 신호가 됩니다. 대화의 깊이는 댓글이 달렸을 때 그 댓글에 또 댓글이 달리고, 그 스레드가 얼마나 길게 이어지는가를 측정합니다. 긴 댓글 체인이 형성될수록 알고리즘은 해당 게시물을 더 많은 사람에게 배포합니다.

## 배포의 3단계 로직과 숨겨진 규칙

### 1단계: 초기 씨드 오디언스 테스트 (Seed Audience)

게시물을 올리면 먼저 여러분의 팔로워 중 아주 소수에게만 글이 노출됩니다. 이 초기 그룹의 크기는 보통 팔로워의 1~5% 수준입니다. 팔로워가 1,000명이라면 10~50명 정도가 먼저 봅니다.

여기서 중요한 사실은 이 씨드 오디언스가 무작위가 아니라는 점입니다. 알고리즘은 여러분과 최근에 상호작용한 사람들, 즉 댓글을 달거나 리포스트한 적 있는 계정들로 씨드 오디언스를 구성합니다. 이 단계에서 리포스트나 댓글이 전혀 발생하지 않으면, 게시물의 알고리즘적 수명은 거기서 끝납니다.

### 2단계: 상호작용 점수화와 가중치 (Scoring Phase)

초기 반응이 있다면 알고리즘은 각 상호작용에 점수를 부여합니다. 경험과 관찰을 통해 추정되는 가중치는 대략 이렇습니다.

- 단순 좋아요: 1점
- 링크 없는 텍스트 댓글: 5~8점
- 작성자가 답글을 달았을 때: 추가 3~5점
- 리포스트: 10~15점
- 퀴오트 리포스트(의견 추가): 15~20점

여기서 주목할 점은 작성자의 답글입니다. 내 게시물에 댓글이 달렸을 때 빠르게 답글을 달면, 그 대화 스레드 전체의 점수가 올라가고 알고리즘은 이 게시물이 '활발히 살아있음'을 인식합니다. 첫 댓글이 달린 후 60분 이내에 답글을 다는 것이 가장 효과적입니다.

### 3단계: 탐색 탭 및 글로벌 배포 (Global Distribution)

신뢰 점수가 일정 임계값을 넘으면, 나를 팔로우하지 않는 사람들의 추천 피드에 게시물이 나타나기 시작합니다. 이것이 이른바 '떡상'의 시작점입니다. 이 단계에 진입한 게시물은 별도의 행동 없이도 자체적으로 확산되는 '자생력'을 갖게 됩니다.

## 2025년형 노출 극대화 5가지 전술

### 1. 첫 문장으로 스크롤을 멈춰라
Threads 피드에서 보이는 것은 글의 첫 두 줄뿐입니다. 이 두 줄 안에 "더 보기"를 누를 이유를 만들어야 합니다. 질문, 놀라운 통계, 혹은 반직관적 주장이 가장 효과적입니다.

### 2. 이미지를 버리고 텍스트에 집중하라
Threads에서는 텍스트 기반 게시물의 체류 시간이 이미지 게시물보다 평균 40% 이상 높습니다. 이미지는 보조 수단으로만 활용하세요.

### 3. 답글 속도가 게시 시간보다 중요하다
몇 시에 올리느냐는 생각보다 덜 중요합니다. 댓글이 달렸을 때 얼마나 빨리 대화를 이어가느냐가 노출 지속 시간을 결정합니다.

### 4. 연재 포맷을 활용하라
"내일 이어서 씁니다"처럼 다음 게시물을 예고하는 연재 구조는 팔로워들이 알림을 켜게 만들고, 이는 알고리즘에 강력한 충성 신호를 보냅니다.

### 5. 타 계정의 게시물에 가치 있는 댓글을 남겨라
내 게시물을 올리는 것 외에, 내 타겟 오디언스가 모여있는 다른 계정의 게시물에 깊이 있는 댓글을 남기면 해당 계정의 팔로워들에게 내 존재를 알릴 수 있습니다. 이것은 사실상 무료 광고입니다.

## 결론

알고리즘은 결국 사람들의 진짜 반응을 수학으로 측정하는 도구입니다. 도구의 논리를 이해하되, 사람들이 진심으로 반응할 수 있는 콘텐츠를 만드는 것이 장기적으로 알고리즘을 이기는 유일한 방법입니다.`,
    },
    en: {
      title: '2025 Threads Algorithm: A Complete Guide to Cracking the Reach Code',
      description: 'Deep dive into Meta\'s latest behavioral signals and how to systematically maximize your content distribution.',
      category: 'Algorithm',
      content: `## The Philosophy Behind the Algorithm

The Threads algorithm is far more conversation-driven than Instagram has ever been. Aesthetic images and trending hashtags won't get you far here. In 2025, the two metrics that matter most are Dwell Time—how long users actually pause and read your post—and Conversation Depth—how many layers of replies a single comment thread generates.

Dwell Time is measured precisely. The algorithm tracks whether users scrolled past or paused, and for how long. Conversation Depth is measured by chain length: a single post that generates a 15-reply thread signals to the system that something meaningful is happening here and pushes the post wider.

## The 3-Stage Distribution Logic

### Stage 1: Seed Audience Testing

Every post starts with a "seed"—a small, algorithmically selected group that sees it first. This group is typically 1-5% of your followers. For a 1,000-follower account, that's roughly 10-50 people.

Critically, this group is not random. The algorithm prioritizes accounts with whom you've had recent mutual interactions—people who've commented on your posts or whose posts you've engaged with recently. If your seed group generates no reposts or comments, the post's algorithmic lifetime ends there.

### Stage 2: Engagement Scoring

If initial reactions exist, the system begins scoring. Based on observed patterns, the approximate weights are:

- Simple Like: 1 point
- Text comment (without links): 5–8 points
- Author reply to a comment: Additional 3–5 points
- Repost: 10–15 points
- Quote Repost with opinion added: 15–20 points

The key insight here is the author reply multiplier. When you respond to a comment within 60 minutes of its arrival, the entire conversation thread gets a scoring boost, and the algorithm flags the post as "actively alive." This is one of the highest-leverage actions you can take after posting.

### Stage 3: Global Distribution

Once a post\'s score crosses a threshold, it begins appearing in the For You feeds of users who don\'t follow you. This is where organic virality begins. Posts that reach this stage develop a self-sustaining momentum—each new engagement introduces the post to another fresh audience.

## 5 Proven Tactics for 2025

### 1. Engineer Your First Two Lines
The Threads feed shows only the first two lines before a "See More" cutoff. Make those two lines impossible to ignore. Use a counterintuitive claim, a surprising statistic, or a direct question that demands an answer.

### 2. Text Over Images
Text-based posts on Threads generate approximately 40% more dwell time than image posts on average. Images are a secondary tool here—use them as illustration, not as the main event.

### 3. Response Speed > Posting Time
The time of day you post matters far less than how quickly you respond to your first comment. Your first reply initiates a conversation thread and triggers a scoring spike within the first hour.

### 4. Use a Serial Format
Hinting at a follow-up post ("I\'ll share Part 2 tomorrow") conditions followers to turn on notifications. A high notification-open rate is one of the strongest loyalty signals the algorithm can detect.

### 5. Leave Substantive Comments on Other Posts
Your own posting is only half the equation. Leaving deeply thoughtful comments on posts within your niche introduces you to new audiences for free. If your comment is good enough to provoke a reply, that reply appears in the original poster\'s followers\' feeds—carrying your name with it.

## Bottom Line

The algorithm is ultimately a mathematical model of human attention. Understanding the logic is necessary, but the only strategy that survives long-term is making content that real people genuinely want to engage with. The tools and tactics help you be seen. What you say is what makes people stay.`,
    },
    date: '2025.07.02',
    readTime: 10,
    platform: 'threads',
  },
  {
    slug: 'grow-threads-followers',
    ko: {
      title: '진짜 팔로워를 만드는 5가지 불변의 법칙',
      description: '인위적인 맞팔 유도 없이도 내 콘텐츠에 반응하는 열성 팬을 확보하는 실전 전략. 초보부터 중급자까지 적용 가능한 체계적인 성장 가이드입니다.',
      category: '성장 전략',
      content: `## 숫자의 함정에서 벗어나기

팔로워 1만 명보다 팔로워 100명의 진심 어린 반응이 더 가치 있습니다. 이건 위로성 말이 아니라 데이터에 기반한 사실입니다. 인스타그램 마케팅 조사에 따르면, 팔로워 1천 명 미만의 마이크로 인플루언서는 팔로워 10만 명 이상의 대형 인플루언서보다 평균 참여율이 7~8배 높습니다. 시장은 이미 이 사실을 알고 있고, 기업들은 점점 더 높은 단가를 주고 마이크로 인플루언서와 협업하고 있습니다.

수익화나 진짜 영향력을 원한다면, 당신의 목소리에 귀를 기울이는 '팬'을 만들어야 합니다. 그리고 팬은 알고리즘 해킹으로 만들어지지 않습니다.

## 5가지 성장 원칙

### 1. 뾰족한 페르소나: 나를 선명하게 정의하라

모든 사람을 만족시키려는 계정은 결국 아무도 만족시키지 못합니다. 가장 빠르게 성장하는 Threads 계정들의 공통점은 하나입니다. 주제가 명확하다는 것.

"마케팅 정보를 올립니다"는 너무 넓습니다. "콘텐츠 제작자를 위한 알고리즘 분석기"는 뾰족합니다. "요리 정보를 올립니다"는 넓습니다. "워킹맘을 위한 15분 안에 만드는 반찬"은 뾰족합니다.

뾰족한 페르소나는 처음 프로필을 방문한 사람이 0.5초 안에 "이 계정은 나를 위한 것"이라고 느끼게 합니다. 팔로우 버튼은 그 직후에 눌립니다.

### 2. 8:2 법칙: 가치와 인간미의 균형

정보만 올리는 계정은 교과서처럼 유용하지만 팔로우를 유지할 감정적 이유가 없습니다. 반대로 일상만 올리는 계정은 친한 친구 아니고는 팔로우할 이유가 없습니다.

가장 지속 가능한 비율은 80%의 가치 게시물과 20%의 인간적인 게시물입니다. 80%에는 실용적인 팁, 분석, 관찰, 트렌드 해석이 들어갑니다. 20%에는 실패담, 가벼운 일상, 의견 공유, 자기 성찰이 들어갑니다. 이 20%가 팔로워를 팬으로 바꾸는 결정적인 요소입니다.

### 3. '남의 집' 활동: 내 계정 밖에서의 존재감

내 프로필만 열심히 업데이트해서는 성장에 한계가 있습니다. 팔로워를 늘리는 가장 빠른 방법 중 하나는 내 타겟 독자들이 자주 모이는 다른 계정의 게시물에 깊이 있는 댓글을 남기는 것입니다.

단순 칭찬이나 이모지 댓글은 아무도 기억하지 않습니다. "이 말씀이 맞는데, 한 가지 추가하면..." 또는 "저는 다른 경험이 있었어요. 오히려..." 처럼 대화를 확장하는 댓글이 프로필 클릭을 유도합니다. 이렇게 유입된 방문자의 팔로우 전환율은 광고 유입보다 훨씬 높습니다.

### 4. 리포스트를 부르는 포맷 전략

"이건 저장해두어야겠다"고 느끼게 하는 게시물에는 공통된 구조가 있습니다. 구체적인 숫자와 리스트, 명확한 결론, 그리고 즉시 적용 가능한 단계. 예를 들어 "Threads 팔로워를 300% 늘린 3가지 방법"은 호기심을 자극하고, 구체적이고, 리포스트하고 싶은 포맷입니다.

리포스트는 단순히 더 많은 사람에게 내 글이 노출되는 것 이상의 의미가 있습니다. 리포스트한 사람의 신뢰도를 내가 빌리는 효과가 있습니다. 그의 팔로워들은 "내가 신뢰하는 사람이 좋다고 한 계정"으로 나를 인식하게 됩니다.

### 5. 첫 100명 서바이벌 가이드

첫 100명의 팔로워를 모으는 것이 가장 어렵습니다. 이 시기에는 다음 두 가지를 집중하세요.

첫째, 지금 당장 게시물을 올리세요. 완벽하지 않아도 됩니다. 계정이 비어있으면 아무도 팔로우하지 않습니다. 최소 9개의 게시물이 있어야 방문자가 "이 계정이 어떤 계정인지" 파악할 수 있습니다.

둘째, 지인 네트워크를 활용하세요. 처음부터 완전한 낯선 사람을 대상으로 하지 마세요. 내 콘텐츠에 진심으로 관심을 가질 지인 20~30명에게 먼저 알리는 것이, 천 명의 낯선 사람에게 알리는 것보다 초기 신호 축적에 훨씬 효과적입니다.

## 꾸준함은 모든 전략을 이깁니다

단기적인 성과에 일희일비하지 마세요. 팔로워 성장은 선형이 아니라 지수함수형입니다. 처음 3개월은 느릿느릿 오르다가, 기반이 쌓이면 어느 순간 가파르게 오릅니다. 이 과정에서 포기하지 않는 것이 가장 중요한 전략입니다.`,
    },
    en: {
      title: '5 Irrefutable Laws for Real Growth on Threads',
      description: 'A systematic guide to building a loyal, engaged fanbase without shortcuts. From your first 100 followers to sustainable long-term growth.',
      category: 'Growth',
      content: `## Escaping the Number Trap

A hundred genuine followers are worth more than ten thousand ghost followers. This isn\'t a consolation prize—it\'s a documented market reality. Studies on influencer marketing consistently show that micro-influencers (under 10,000 followers) achieve 7-8x higher engagement rates than macro-influencers. Brands have noticed. They\'re actively paying premium rates to access these tightly-knit, high-trust audiences.

If you want real monetization or genuine influence, you need "Fans"—people who actually listen to you. And fans don\'t get manufactured by algorithm hacks.

## 5 Laws of Real Growth

### Law 1: Build a Sharp Persona—Define Yourself Precisely

The fastest-growing Threads accounts share one trait: they are unmistakably specific about who they are and who they serve.

"I post marketing tips" is too broad. "Algorithm breakdowns for solo content creators" is specific. "I post food content" is too broad. "15-minute weeknight dinners for working parents" is specific. The difference is measurable in follower conversion rates.

A sharp persona means that within 0.5 seconds of visiting your profile, a stranger knows exactly whether your content is for them. The follow button gets pressed—or doesn\'t—in the next second.

### Law 2: The 80/20 Rule of Value and Humanity

An account that posts only information is useful but forgettable. An account that posts only personal life updates only retains close friends. The sustainable balance is 80% value posts and 20% human connection posts.

Your 80%: practical tips, analysis, trend interpretations, how-to guides. Your 20%: failure stories, light personal updates, opinions, questions. That 20% is what converts a follower into a fan. It\'s the glimpse behind the curtain that makes people feel like they know you.

### Law 3: Work the "Other People\'s Rooms"

Updating only your own profile creates a ceiling on your growth. One of the fastest organic growth tactics is leaving high-quality comments on posts in your niche.

Not emoji replies. Not "great post!" The kind of comment that extends the conversation: "This is true, and I\'d add one nuance..." or "I had the opposite experience, actually..." Comments that make people think invite profile clicks. The follow rate of visitors who arrive this way is far higher than almost any other source.

### Law 4: Create Formats Designed to Be Shared

Posts that get reposted share a common structure: specific numbers, clear conclusions, immediately actionable steps. "3 ways I grew my Threads followers by 300%" contains a specific outcome, a specific number, and implies a list. It\'s a repost magnet.

Beyond reach, a repost carries the social proof of the person sharing it. You\'re effectively borrowing their credibility. Their followers see you as someone their trusted contact personally endorsed—a far warmer introduction than any ad could provide.

### Law 5: The First 100 Followers Survival Guide

The first hundred followers is the hardest phase. Two priorities dominate this period.

First, publish immediately. Imperfection is acceptable; emptiness is not. A profile with fewer than 9 posts gives visitors nothing to evaluate. You don\'t earn a follow without showing what you\'re about.

Second, start with your existing network. Don\'t begin by trying to reach strangers. Identify 20-30 people in your life who would genuinely find your content useful and tell them directly. These early followers produce the initial social signals that the algorithm uses to determine whether your account is worth distributing.

## Consistency Beats Every Strategy

Growth on Threads follows an exponential curve, not a linear one. The first three months feel flat and slow. Then, as your body of work accumulates and your network compounds, growth accelerates noticeably. The single most decisive factor in whether you ever reach that inflection point is whether you keep showing up before you can see the results.`,
    },
    date: '2025.07.20',
    readTime: 9,
    platform: 'threads',
  },

  {
    slug: 'instagram-reels-hooks',
    ko: {
      title: '3초의 마법: 릴스 조회수를 폭발시키는 후킹 공식',
      description: '인스타그램 릴스에서 시청자의 엄지손가락을 멈추게 하는 강력한 시각적/텍스트 후킹 멘트들을 분석합니다.',
      category: 'Reels',
      content: `
## 릴스 성공의 90%는 도입부에서 결정됩니다

사용자들이 인스타그램을 탐색할 때, 하나의 릴스에 흥미를 느끼고 멈추기까지 걸리는 시간은 단 **2.5초**입니다. 이 시간 안에 시청자를 낚아채지 못하면 아무리 훌륭한 편집도 소용이 없습니다.

## 시청자를 멈추게 하는 5가지 후킹 공식

### 1. 충격적인 결과 먼저 보여주기
과정을 생략하고 최종 결과물을 첫 장면에 넣으세요. "한 달 만에 매출 10배 만든 비결"이라는 텍스트와 함께 매출 그래프를 0.5초 보여주는 식입니다.

### 2. 시청자가 겪는 문제 지적하기
"아직도 해시태그 30개 다세요? 그거 계정 망치는 길입니다."처럼 타겟 시청자의 불안 요소나 실수를 건드리면 멈출 수밖에 없습니다.

### 3. '모두가 모르는' 정보 강조
"디자이너들만 몰래 쓰는 무료 폰트 사이트 3곳" 같은 제목은 저장 버튼을 누르고 끝까지 보게 하는 강력한 힘이 있습니다.

### 4. 시각적 패턴 방해 (Pattern Interrupt)
예상치 못한 독특한 의상, 강렬한 색감, 혹은 갑자기 가까워지는 줌 효과 등을 사용하여 뇌가 익숙한 흐름에서 벗어나게 만드세요.

### 5. 질문으로 시작하기
"여러분, 인스타 조회수가 왜 안 나오는지 아세요?"처럼 직접적인 질문은 뇌가 무의식 중에 답을 하려 하게 만들며 이탈을 막습니다.

## 후킹 이후의 핵심 전략
강력하게 낚았다면, 그 기대를 저버리지 않는 정보를 10초 이내에 전달하세요. 보상은 빠를수록 좋고, 설명은 짧을수록 완시율이 올라갑니다.
      `,
    },
    en: {
      title: 'The 3-Second Rule: Hooks That Explode Reels Views',
      description: 'Analyzing the visual and textual hooks that force people to stop scrolling and watch your content.',
      category: 'Reels',
      content: `
## 90% of Reels Success is the Opener

Users decide within **2.5 seconds** whether to keep watching a Reel or scroll past. If you don\'t hook them in that window, your high-end editing is wasted.

## 5 Hook Formulas for High Retention

### 1. Show the Outcome First
Start with the finished product or the big success. A "How I 10x my sales" text overlaying a revenue graph for half a second is a classic attention-grabber.

### 2. Point Out a Common Mistake
"Are you still using 30 hashtags? That\'s killing your reach." Tapping into your audience\'s insecurity or curiosity about mistakes forces them to stop.

### 3. Exclusivity and Secrets
"3 free font sites only designers use." This title drives "Saves" and keeps viewers until the end because they don\'t want to miss the list.

### 4. Visual Pattern Interrupt
Use unexpected outfits, intense colors, or a sudden "zoom-in" effect. Disrupt the brain\'s expectation of a "normal" video to trigger focus.

### 5. Start with a Direct Question
"Do you know why your reach is flat?" Direct questions engage the brain unconsciously, making the viewer stay to find the answer.

## Deliver After the Hook
Once you\'ve hooked them, deliver on your promise within the next 10 seconds. The faster the reward, the higher the completion rate.
      `,
    },
    date: '2025.08.10',
    readTime: 6,
    platform: 'instagram',
  },
  {
    slug: 'sns-garden-privacy-policy',
    ko: {
      title: 'SNS Garden: 우리가 개인정보를 수집하지 않는 이유',
      description: '보안과 프라이버시는 우리의 자부심입니다. 왜 SNS Garden은 로컬 브라우저 처리를 고집하는지 설명합니다.',
      category: '정책',
      content: `
## 데이터의 주권은 여러분에게 있습니다

오늘날 수많은 분석 도구들은 "무료"라는 명목하에 사용자의 팔로워 목록, 메타데이터, 심지어 행동 패턴까지 서버로 수집합니다. 하지만 SNS Garden은 설립 초기부터 **"데이터 제로 수집"**이라는 명확한 원칙을 세웠습니다.

## 우리가 선택한 기술적 경로: 클라이언트 사이드 프로세싱

### 서버가 없는 연산
SNS Garden에 여러분이 데이터를 붙여넣는 순간, 모든 계산은 여러분의 웹 브라우저 메모리 안에서만 일어납니다. 우리의 서버는 단순히 웹사이트 파일(HTML/JS)을 보내는 역할만 할 뿐, 여러분이 무엇을 붙여넣었는지 알 길이 없습니다.

### 페이지를 닫는 순간 사라지는 데이터
여러분이 분석을 마치고 탭을 닫거나 새로고침을 하면, 복사했던 모든 데이터는 즉시 메모리에서 소거됩니다. 어떠한 로그도 남기지 않으므로, 해킹이나 데이터 유출의 위험으로부터 물리적으로 안전합니다.

## 지속 가능한 서비스 모델
우리는 여러분의 개인정보를 팔아 수익을 내지 않습니다. 대신, 여러분의 정원을 가꾸는 데 도움이 되는 유익한 정보 옆에 구글 애드센스 광고를 소량 배치하여 서비스를 유지합니다. 

## 보안을 위한 마지막 한 마디
비밀번호를 요구하는 도구가 있다면 항상 경계하세요. 저희는 절대 비밀번호를 묻지 않습니다. 오직 '복사-붙여넣기' 된 텍스트만으로 당신의 정원을 깨끗하게 만들어 드립니다.
      `,
    },
    en: {
      title: 'SNS Garden: Why Privacy is Our Prime Directive',
      description: 'Trust is hard to build but easy to lose. Learn why we prioritize local processing over data collection.',
      category: 'Policy',
      content: `
## You Own Your Data

In an era where "free" tools often mean your follower lists and behavioral patterns are being harvested, SNS Garden stands firm on a **"Zero Data Collection"** policy.

## Our Choice: Client-Side Processing

### Calculation Without a Server
The moment you paste your data into SNS Garden, all computations occur exclusively within your web browser\'s RAM. Our servers only deliver the visual elements and logic; they never "see" or "receive" the text you input.

### Total Erasure on Refresh
Once you close the tab or refresh the page, all sensitive data is permanently purged from your device\'s memory. By leaving no digital footprint, we eliminate the physical possibility of data breaches or leaks.

### Our Sustainability Model
We do not monetize your identity. Instead, we sustain this tool by displaying non-intrusive ads (Google AdSense) alongside our expert tips. This allows us to keep the service free for everyone, forever.

## Final Security Word
Always be wary of tools that ask for your SNS password. We will never ask for credentials. We only use the text you provide to help you prune your digital garden.
      `,
    },
    date: '2025.09.05',
    readTime: 5,
    platform: 'general',
  },
  {
    slug: 'threads-algorithm-math',
    ko: {
      title: 'Threads 알고리즘 심화: 리포스트의 진짜 가치',
      description: '단순한 클릭 그 이상의 의미. 알고리즘이 리포스트를 어떻게 가중치로 환산하는지 분석합니다.',
      category: '심화 분석',
      content: `
## 보이지 않는 점수판

Threads 알고리즘은 각 게시물에 실시간으로 점수를 매깁니다. 그리고 2025년 기준, 가장 강력한 가산점을 주는 행동은 단연 **리포스트(Repost)**입니다.

## 리포스트가 특별한 3가지 이유

### 1. 신뢰의 전이 (Transfer of Trust)
리포스트는 "이 글은 내 이름을 걸고 추천할 만하다"는 선언입니다. 알고리즘은 이를 단순한 '좋아요'보다 10배 이상의 가치가 있는 신호로 해석하며, 리포스트한 사람의 팔로워들에게도 우선적으로 내용을 노출합니다.

### 2. 가든의 확장성 (Scalability)
게시물이 리포스트되는 순간, 여러분의 정원은 리포스트한 사람의 정원과 연결됩니다. 이는 여러분이 직접 팔로워를 늘릴 수 없는 한계를 극복하게 해주는 유일한 '오가닉 부스터'입니다.

### 3. 완독 시간(Dwell Time)의 증폭
리포스트된 게시물은 보통 텍스트가 함께 추가되는 경우가 많습니다(Quote Post). 이는 사용자가 그 덩어리 위에서 더 오랜 시간을 머물게 만들고, 결국 시스템은 이 글을 '흥미로운 주제'로 분류하여 더 멀리 배포합니다.

## 리포스트를 유도하는 팁
- 한 페이지로 끝나는 리스트형 정리글을 활용하세요.
- 누구나 동감하지만 글로 표현하기 어려웠던 감정을 대신 언어화하세요.
- "나중에 다시 봐야지" 싶은 정보성 팁을 제공하세요. 

결국 리포스트를 받는다는 것은 타인의 디지털 정원에 여러분의 꽃씨를 뿌리는 일과 같습니다.
      `,
    },
    en: {
      title: 'Advanced Threads Algorithm: The True Value of Reposts',
      description: 'Beyond the click—how the system calculates authority and why reposts are the ultimate reach booster.',
      category: 'Deep Dive',
      content: `
## The Invisible Scoreboard

The Threads algorithm scores every post in real-time. As of 2025, the single most powerful social signal is the **Repost**.

## 3 Reasons Why Reposts are Special

### 1. Transfer of Trust
A repost is a proclamation: "This is so good I\'m willing to vouch for it to my followers." The algorithm treats this as 10x more valuable than a Like, prioritizing the post for the followers of the reposter.

### 2. Garden Scalability
The moment your post is reposted, your digital garden connects to theirs. This is the only organic "booster" that allows you to break through the limits of your own follower count without spending a dime on ads.

### 3. Dwell Time Amplification
Reposts often involve an added comment (Quote Post). This creates a larger block of content, forcing users to spend more total time on the post. High "Dwell Time" signals to the system that your content is high-quality, triggering further distribution.

## How to Get Reposted
- Use "Cheat Sheets" or "Top Lists": Things people want to save for later.
- Express the Unexpressed: Write down the relatable feelings that others have but can\'t put into words.
- Be Provocative yet Useful: Give a controversial tip that actually works.

Getting a repost is like planting your seeds in someone else\'s garden.
      `,
    },
    date: '2025.09.28',
    readTime: 7,
    platform: 'threads',
  },
  {
    slug: 'instagram-grid-layout',
    ko: {
      title: '첫눈에 반하는 인스타그램 그리드 설계법',
      description: '팔로우 버튼을 누르기 전, 방문자가 마지막으로 보는 것은 전체 피드의 분위기입니다.',
      category: '디자인',
      content: `
## 그리드는 당신의 브랜드 쇼룸입니다

인스타그램 게시물을 하나씩 볼 때는 콘텐츠의 내용이 중요하지만, 프로필을 방문했을 때 가장 먼저 눈에 들어오는 것은 9개 혹은 12개의 게시물이 만드는 '전체적인 무드'입니다. 여기서 실패하면 팔로우 전환율은 급격히 떨어집니다.

## 성공적인 그리드 레이아웃의 유형

### 1. 체커보드(Checkerboard) 패턴
사진 한 장, 텍스트 카드 한 장을 교대로 배치하는 방식입니다. 정돈된 느낌을 주며 정보성 계정에서 가장 선호하는 방식입니다.

### 2. 세로 줄 맞춤(Vertical Rows)
가로 3열 중 한 열을 특정 테마나 색상으로 고정하는 방식입니다. 스크롤을 내릴 때 시선이 한곳으로 고정되어 브랜드 메시지를 일관되게 전달하기 좋습니다.

### 3. 컬러 테마 통일
모든 사진의 톤앤매너(필터, 색감)를 하나로 통일하는 것입니다. 감성적인 라이프스타일이나 패션 브랜드에 필수적인 전략입니다.

## 주의할 점: 각개전투의 함정
그리드 전체의 조화에 너무 신경 쓴 나머지, 개별 게시물이 단독으로 피드에 떴을 때 무엇인지 알 수 없게 만들어서는 안 됩니다. 그리드는 '전체'이면서 '부분'으로도 완벽해야 합니다.

## 요약 추천
여러분이 정보성 계정이라면 '체커보드'를, 감성 계정이라면 '컬러 테마'를 선택하세요. 그리고 9칸을 채울 때마다 미리보기 앱으로 조화를 확인하는 습관을 들이세요.
      `,
    },
    en: {
      title: 'Designing an Instagram Grid That Converts',
      description: 'The overall mood of your profile is what decides whether a visitor hits the follow button.',
      category: 'Design',
      content: `
## The Grid is Your Brand Showroom

Individual posts matter in the feed, but when someone visits your profile, they see the collective weight of 9 to 12 posts. If the "vibe" is cluttered, conversion fails instantly.

## Proven Grid Layout Patterns

### 1. The Checkerboard Pattern
Alternate between a photo and a text-based card. This gives a very organized, clean look—perfect for educational or tip-based niche accounts.

### 2. Vertical Rows
Keeping one of the three columns consistent in theme or color. This creates a powerful visual anchor as users scroll, making it easy to convey a consistent brand message.

### 3. Color Theme Unity
Using a single filter or a specific color palette for every single post. This is the gold standard for lifestyle and fashion brands aiming for a "Premium" feel.

## The Trap: Design vs. Usability
Don\'t get so obsessed with the big picture that the individual posts become unreadable or confusing when they show up solo in a user\'s feed. Each tile must stand alone.

## Recommendation
If you are an educator, go with Checkerboard. If you are an artist or lifestyle brand, focus on Color Unity. Always use a grid preview tool before you hit "Post."
      `,
    },
    date: '2025.10.12',
    readTime: 5,
    platform: 'instagram',
  },
  {
    slug: 'monetize-threads-garden-guide',
    ko: {
      title: 'Threads 수익화 입문: 팔로워를 가치로 바꾸는 기술',
      description: '숫자는 허상일 수 있습니다. 어떻게 진성 팔로워를 통해 지속 가능한 수익 구조를 만들지 알아봅니다.',
      category: '비즈니스',
      content: `
## 수익화의 전제 조건: 신뢰 점수

Threads에서 물건을 팔거나 제휴 마케팅을 하려 한다면 먼저 '신뢰'라는 자산을 쌓아야 합니다. 사람들은 당신이 무엇을 파는지보다, 당신이 평소에 어떤 전문성을 공유했는지에 더 반응합니다.

## 구체적인 수익화 루트 3가지

### 1. 뉴스레터 및 개인 플랫폼 유도
Threads의 텍스트 기반 독자들은 글 읽기를 좋아합니다. 짧은 인사이트로 호기심을 자극하고, 상세한 내용은 뉴스레터(Substack 등)나 유료 멤버십으로 연결하는 '핑퐁 전략'이 가장 효과적입니다.

### 2. 마이크로 공동구매 및 협업
팔로워가 500명뿐이라도 그들이 당신의 추천에 10% 이상 반응한다면, 유령 팔로워 5만 명보다 기업들에게 매력적인 '마이크로 인플루언서'가 될 수 있습니다. 신뢰를 기반으로 한 진정성 있는 리뷰가 핵심입니다.

### 3. 디지털 지식 컨텐츠 판매
당신이 Threads에서 보여준 전문성을 하나의 PDF 전자책이나 강의로 묶어보세요. Threads는 당신의 전문성을 증명하는 거대한 포트폴리오가 되어줄 것입니다.

## 반드시 지켜야 할 8:2 법칙
수익성 게시물은 전체의 20%를 넘지 않아야 합니다. 나머지 80%는 무조건적인 가치를 제공하여 독자들이 당신을 '광고판'이 아닌 '전문가'로 인식하게 만드세요.
      `,
    },
    en: {
      title: 'Intro to Threads Monetization: Converting Following into Value',
      description: 'Numbers are a vanity metric. Learn how to build a sustainable revenue model through high-trust connections.',
      category: 'Business',
      content: `
## The Prerequisite: Trust Equity

Before you sell anything on Threads, you must build trust. People don\'t buy what you sell; they buy why you shared it. Your previous daily expert tips are what make the sale later.

## 3 Proven Monetization Routes

### 1. Newsletter and Personal Platform Funnels
Threads users love reading. Use short, high-impact insights to spark curiosity, then guide them to your newsletter (like Substack) for the deep dive. This "Ping-Pong" strategy is the most stable model.

### 2. Micro-Collaborations
An account with 500 engaged followers is more valuable to brands than 50k ghost followers. If your conversion rate is high, you can command premium rates for affiliate marketing based on sheer trust.

### 3. Selling Digital Knowledge
Package your expertise into a PDF or a workshop. Use Threads as your living portfolio—every high-value post you\'ve ever made serves as a testimonial for your knowledge.

## The 80/20 Rule
Keep promotional posts under 20%. Spend 80% of your energy giving away value for free. Ensure your followers see you as an expert, not a billboard.
      `,
    },
    date: '2025.11.02',
    readTime: 7,
    platform: 'threads',
  },
  {
    slug: 'instagram-vs-threads-brand-battle',
    ko: {
      title: '인스타 vs 쓰레드: 당신의 브랜드에 맞는 전장은 어디인가?',
      description: '비주얼과 텍스트의 대결. 각 플랫폼의 성격과 성공 방정식을 비교 분석하여 최적의 채널을 제안합니다.',
      category: '전략',
      content: `
## 동경의 공간 vs 공감의 공간

인스타그램은 사용자들이 '내가 되고 싶은 모습'을 동경하며 보는 공간입니다. 반면 쓰레드는 '내가 겪는 고민'을 함께 나누며 공감하는 공간입니다. 이 차이를 이해하지 못하면 두 채널 모두에서 길을 잃게 됩니다.

## 플랫폼별 승리 공식

### 인스타그램: 비주얼 브랜딩의 갤러리
- 이미지의 퀄리티가 곧 브랜드의 신뢰도입니다.
- 릴스를 통해 '멋진 순간'이나 '완성된 결과'를 보여주세요.
- 여기서는 '와!' 소리가 나오게 만드는 것이 목적입니다.

### 쓰레드: 솔직함과 유머의 보이스
- 예쁜 사진보다 '날 것 그대로의 생각'이 중요합니다.
- 긴 글과 댓글을 통해 '사람 냄새'를 풍기세요.
- 여기서는 '맞아, 나도 그래'라는 반응을 이끌어내는 것이 목적입니다.

## 결론: 하이브리드 전략
가장 똑똑한 브랜드는 인스타그램에서 제작 과정(Behind the scenes)을 사진으로 보여주고, 쓰레드에서 그 과정 중에 느꼈던 고뇌와 철학을 글로 설명합니다. 이 두 가지가 결합될 때 단단한 팬덤이 형성됩니다.
      `,
    },
    en: {
      title: 'Instagram vs Threads: Picking the Right Battlefield',
      description: 'A comparative analysis of visual vs. text platforms to help you decide where to focus your resources.',
      category: 'Strategy',
      content: `
## Aspiration vs. Relatability

Instagram is where users go to admire who they want to become. Threads is where they go to talk about who they actually are. Missing this nuance means failing on both channels.

## Success Formulas by Platform

### Instagram: The Visual Gallery
- Image quality = Brand trust.
- Use Reels to show "The Wow Factor" or a polished final result.
- The goal here is to inspire awe.

### Threads: The Authentic Voice
- Raw thoughts are better than polished PR.
- Use long-form text and active replies to show your humanity.
- The goal here is to inspire a "Me too" reaction.

## Conclusion: The Hybrid Play
The smartest brands show the "Behind the scenes" on Instagram but write about the "Struggles and Philosophy" on Threads. When you combine the visual and the vocal, you build an unbreakable fandom.
      `,
    },
    date: '2025.12.18',
    readTime: 6,
    platform: 'general',
  },
  {
    slug: 'digital-hygiene-following-list',
    ko: {
      title: '당신의 팔로워 목록이 곧 당신의 디지털 환경이다',
      description: '정기적인 팔로잉 목록 청소가 단순한 수치 정리를 넘어 어떻게 당신의 집중력을 향상시키는지 분석합니다.',
      category: '마음가짐',
      content: `
## 알고리즘은 거울입니다

당신의 피드에 노출되는 정보는 당신이 팔로우한 사람들의 집합체입니다. '어쩌다' 팔로우한 유령 계정들이 당신의 피드를 오염시키고 있지는 않나요? 정보를 얻기 위해 들어왔다가 의미 없는 게시물에 시간을 빼앗기고 있다면 그것은 '디지털 환경'이 무너진 결과입니다.

## 왜 정기적인 '청소'가 필요한가?

### 1. 집중력 보호 (Noise Cancellation)
불필요한 정보를 차단하는 것은 현대인의 가장 중요한 기술입니다. 활동도 없고 나를 맞팔하지도 않는 계정들은 당신의 디지털 에너지를 갉아먹는 '노이즈'에 불과합니다.

### 2. 알고리즘 정밀도 향상
여러분이 소통하고 싶은 사람들로만 목록을 채우면, 알고리즘은 더 빠르고 정확하게 여러분이 좋아할 법한 양질의 정보를 찾아옵니다. 정원을 잘 가꾸면 나비가 모여들 듯, 목록을 잘 가꾸면 좋은 인사이트가 모여듭니다.

### 3. 계정 지수의 최적화
나를 보지 않는 사람들을 팔로우하고 있는 것은 계정의 '활성 점수'를 떨어뜨립니다. 건강한 팔로우/팔로잉 비율을 유지하는 계정일수록 알고리즘은 더 '살아있는 계정'으로 인식하여 게시물을 밀어줍니다.

## 가든 관리 일기
SNS Garden을 통해 한 달에 한 번씩만 목록을 정리해 보세요. 그 짧은 시간이 당신의 나머지 29일 동안의 SNS 경험을 바꿀 것입니다.
      `,
    },
    en: {
      title: 'Your Following List is Your Digital Environment',
      description: 'Why regular maintenance of your social connections is a vital form of digital self-care and focus protection.',
      category: 'Mindset',
      content: `
## The Algorithm is a Mirror

Your feed is the sum of who you follow. Are "ghost accounts" polluting your digital space? If you enter a platform for information but find yourself drained by irrelevant noise, your digital hygiene has failed.

## Why Regular "Pruning" is Vital

### 1. Protecting Your Focus
Blocking irrelevant information is the most important skill in the digital age. Inactive accounts that don't reciprocal your follow are just "noise" draining your cognitive energy.

### 2. Sharpening the Selection
When you fill your list with people you actually want to talk to, the algorithm learns faster. It delivers higher-quality insights directly to your feed, saving you time and mental battery.

### 3. Optimizing Account Metrics
Holding onto accounts that don't watch you back is a anchor on your "Engagement Score." Accounts with a healthy, active ratio are flagged by the system as "alive," resulting in better distribution for your own posts.

## The Maintenance Habit
Use SNS Garden once a month to prune your connections. That small window of time will change your entire SNS experience for the remaining 29 days.
      `,
    },
    date: '2026.01.12',
    readTime: 5,
    platform: 'general',
  },
  {
    slug: 'instagram-analytics-check',
    ko: {
      title: '데이터로 읽는 인스타그램: 인사이트 제대로 보는 법',
      description: '단순한 좋아요 숫자에 속지 마세요. 계정 성장을 위해 진짜로 체크해야 할 3가지 핵심 지표.',
      category: '분석',
      content: `
## 숫자의 이면을 읽는 눈

인스타그램 인사이트 탭을 열면 수많은 숫자가 쏟아집니다. 많은 초보자가 '좋아요' 숫자에 기뻐하거나 슬퍼하지만, 비즈니스 성장을 위해서는 그보다 훨씬 깊은 곳을 봐야 합니다.

## 진짜 중요한 3가지 지표

### 1. 저장(Save) 수: 콘텐츠의 가치 지표
저장은 시청자가 "나중에 다시 보겠다"는 의사표시입니다. 이는 정보성 콘텐츠의 성공 여부를 가르는 척도이며, 알고리즘이 '최고 품질의 글'로 분류하는 가장 강력한 기준입니다.

### 2. 도달 중 '비팔로워' 비중
내 게시물을 본 사람 중에 나를 팔로우하지 않는 사람이 많을수록, 콘텐츠가 탐색 탭이나 릴스 탭을 통해 외부로 잘 퍼져나가고 있다는 뜻입니다. 이 수치가 낮다면 계정이 정체되어 있음을 의미합니다.

### 3. 프로필 방문 및 팔로우 전환율
도달은 높은데 팔로워가 늘지 않는다면? 그것은 프로필의 매력이 부족하거나 소개글이 부실하다는 증거입니다. 도달 수 대비 프로필 방문 클릭 수를 반드시 계산해보세요.

## 어떻게 개선할 것인가?
주간 단위로 이 지표들을 엑셀에 기록하며 추세를 살피세요. 숫자는 거짓말을 하지 않습니다. 여러분의 정원이 잘 자라고 있는지, 아니면 영양분이 부족한지 데이터가 말해줄 것입니다.
      `,
    },
    en: {
      title: 'Reading Instagram Data: How to Audit Your Insights',
      description: 'Don\'t be fooled by vanity metrics. Learn the 3 core KPIs that actually drive business growth on Instagram.',
      category: 'Analytics',
      content: `
## Reading Between the Numbers

Instagram Insights provides a flood of data. While beginners focus on Likes, pros look much deeper to find the "Truth" about their account health.

## The 3 Metrics That Truly Matter

### 1. Saves: The Value Indicator
A "Save" means the viewer found your content so useful they want to return to it. This is the ultimate signal to the algorithm that your content is high-quality and deserves a wider push.

### 2. Non-Follower Reach %
How many people who saw your post don\'t follow you? A high percentage means your content is successfully breaking out into the Explore and Reels tabs. If this is low, your growth has stagnated.

### 3. Profile Visit/Follow Conversion Rate
If your reach is high but followers aren\'t growing, your profile is the bottleneck. Calculate the percentage of reach that results in a profile click. This tells you if your bio and grid are "closing the deal."

## Use Data as Your Compass
Record these metrics weekly. Data doesn\'t lie—it tells you exactly if your digital garden is flourishing or if it needs a new nutrient strategy.
      `,
    },
    date: '2026.02.05',
    readTime: 6,
    platform: 'instagram',
  },
  {
    slug: 'instagram-stories-engagement',
    ko: {
      title: '스토리 참여를 끌어내는 6가지 인터랙티브 전략',
      description: '게시물은 박물관이고 스토리는 광장입니다. 팬들과의 거리를 좁히는 스토리 활용법.',
      category: 'Stories',
      content: `
## 스토리는 관계의 용광로입니다

피드 게시물이 나의 전문성을 증명하는 '박물관'이라면, 스토리는 팔로워와 실시간으로 수다를 떠는 '광장'입니다. 여기서 얼마나 긴밀하게 소통하느냐가 팔로워의 충성도를 결정합니다.

## 참여를 부르는 스티커 전략

- **질문 받기 스티커**: 단순히 질문을 받는 게 아니라, 답변 영상을 통해 당신의 목소리와 표정을 보여주세요. 신뢰도가 급상승합니다.
- **이것 vs 저것 (Polls)**: 점심 메뉴 같은 가벼운 주제부터 전문적인 선택지까지, 클릭 한 번으로 참여하게 만드세요.
- **슬라이더 스티커**: 공감의 정도를 시각적으로 표현하게 하면 완시율이 올라갑니다.

## 전문가의 스토리 구성 팁
스토리는 기승전결이 있어야 합니다. 
1. 호기심을 유발하는 첫 장
2. 고민을 나누는 본문
3. 해결책이나 의견을 묻는 마지막 장

## 마지막 핵심: 답장의 가치
스토리에 달린 DM이나 반응에 정성스럽게 답장하세요. 인스타그램은 여러분이 누구와 친한지(DM 소통량)를 보고, 그 사람의 피드 상단에 여러분의 게시물을 더 자주 띄웁니다.
      `,
    },
    en: {
      title: '6 Interactive Strategies for Instagram Stories',
      description: 'Posts are museums, but Stories are public squares. Closing the gap between you and your followers.',
      category: 'Stories',
      content: `
## Stories are the Engine of Connection

If your Feed is a "Museum" showing your best work, Stories are the "Town Square" where you talk to people in real-time. This is where follower loyalty is forged.

## Strategic Sticker Usage

- **Question Sticker**: Don't just type answers; post video replies. Showing your face and voice builds massive trust.
- **This vs. That (Polls)**: Lower the barrier to engagement. Whether it\'s a professional choice or just a coffee preference, get them clicking.
- **The Slider**: Let users visually express the scale of their agreement. This increases "Dwell Time" on your story frames.

## The Pro-Story Narrative
A good story sequence has a beginning, middle, and end:
1. The Hook (Curiosity)
2. The Meat (The Problem/Story)
3. The Closer (The Question/CTA)

## The Golden Rule: DM Engagement
Reply to Story DMs. Instagram prioritizes your content for users with whom you have active direct message threads. Communication is the fuel of the algorithm.
      `,
    },
    date: '2026.03.10',
    readTime: 5,
    platform: 'instagram',
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return posts.map((p) => p.slug);
}
