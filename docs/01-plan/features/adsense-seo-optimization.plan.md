# Plan: 애드센스 승인을 위한 SEO 최적화 및 사이트 구조 개편

**Feature**: adsense-seo-optimization  
**Created**: 2026-04-05  
**Status**: Plan  
**Project**: SNS Garden (sns-garden.com)

---

## Executive Summary

| 관점 | 내용 |
|---|---|
| **Problem** | Google AdSense 계정이 있으나 승인 거절됨. Search Console에서 페이지 인덱싱 안 됨. 정확한 거절 사유 미확인이나 기술적/콘텐츠 복합 문제로 추정. |
| **Solution** | 기술적 SEO 전면 수정(ads.txt, canonical, sitemap, 구조화 데이터) + AI 콘텐츠 마커 제거 + AdSense 재심사 제출 절차 수행. |
| **Function UX Effect** | 광고가 자동으로 사이트에 노출되어 운영 수익 발생. Google 검색 결과에 모든 페이지가 노출되어 유기적 트래픽 증가. |
| **Core Value** | 사용자 데이터를 팔지 않는 원칙을 지키면서 AdSense 광고만으로 지속 가능한 운영 구조 확보. |

---

## Context Anchor

| 항목 | 내용 |
|---|---|
| **WHY** | 서버/DB 없는 클라이언트 사이드 도구로 사용자 데이터를 수집하지 않는 대신 AdSense 광고로 운영비를 충당하는 것이 유일한 수익 모델. AdSense 미승인 = 운영 지속 불가. |
| **WHO** | SNS Garden 운영자 (단독, 익명). Threads/Instagram 맞팔 분석 도구 + 블로그 콘텐츠 운영. |
| **RISK** | 거절 사유 미확인으로 재심사 실패 가능. AI 보조 작성 콘텐츠 품질 기준 충족 여부 불확실. |
| **SUCCESS** | AdSense 승인 완료 + Search Console에서 모든 19개 URL 인덱싱 확인 |
| **SCOPE** | Next.js 정적 사이트 기술 SEO 수정 + 기존 13개 포스트 품질 점검 + 재제출 절차. 신규 포스트 대량 작성은 선택 범위. |

---

## 1. 배경 및 현황

### 1.1 사이트 현황

- **URL**: https://sns-garden.com
- **프레임워크**: Next.js 16.2.1 (App Router, Static Export)
- **배포**: Vercel
- **주요 기능**: Threads/Instagram 팔로워·팔로잉 비교 도구 (100% 클라이언트 사이드)
- **콘텐츠**: 6개 주요 페이지 + 13개 블로그 포스트 (이중 언어: 한국어/영어)
- **수익 모델**: Google AdSense (미승인 상태) + Stripe 후원

### 1.2 문제 진단

이번 세션에서 발견된 기술적 문제들 (이미 수정 완료된 항목 포함):

| 문제 | 심각도 | 상태 |
|---|---|---|
| `ads.txt` 없음 | 🔴 Critical | ✅ 수정 완료 |
| Sitemap URL trailing slash 불일치 | 🔴 Critical | ✅ 수정 완료 |
| 모든 페이지가 홈 canonical 상속 (`'use client'` 문제) | 🔴 Critical | ✅ 수정 완료 |
| AI 생성 마커 JS 번들에 14회 노출 (`indexedBy:'claude/gemini/qwen'`) | 🔴 Critical | ✅ 수정 완료 |
| 동일 주제 중복 포스트 (first-comment 2개) | 🟡 Important | ✅ 수정 완료 |
| 블로그 포스트 OG article 태그 없음 | 🟡 Important | ✅ 수정 완료 |
| JSON-LD 구조화 데이터 없음 | 🟡 Important | ✅ 수정 완료 |
| 쓸모없는 hreflang (동일 URL 2개) | 🟡 Important | ✅ 수정 완료 |
| Custom 404 페이지 없음 | 🟢 Normal | ✅ 수정 완료 |
| og:locale 없음 | 🟢 Normal | ✅ 수정 완료 |

### 1.3 잔여 과제

기술적 수정은 완료됐으나, 다음이 남아있다:

1. **재배포** — 수정 사항을 Vercel에 반영
2. **AdSense 재심사 요청** — 대시보드에서 검토 요청 버튼
3. **Search Console 사이트맵 재제출**
4. **Auto Ads 활성화** (대시보드 설정)
5. **콘텐츠 품질 보강** (선택적, AdSense 기준 충족 여부 확인 후)

---

## 2. 요구사항

### 2.1 필수 요구사항 (Must Have)

| ID | 요구사항 | 근거 |
|---|---|---|
| REQ-01 | `ads.txt` 파일이 루트에 존재해야 함 | AdSense 발행자 인증 필수 |
| REQ-02 | 모든 페이지에 고유한 canonical URL이 있어야 함 | 중복 콘텐츠 방지 |
| REQ-03 | sitemap.xml의 모든 URL이 실제 접근 가능한 URL과 일치해야 함 | Search Console 인덱싱 |
| REQ-04 | 블로그 포스트에 BlogPosting JSON-LD가 있어야 함 | 구조화 데이터 |
| REQ-05 | AI 생성 표식이 JS 번들이나 HTML에 없어야 함 | AdSense 콘텐츠 정책 |
| REQ-06 | Privacy Policy 페이지에 AdSense 쿠키 사용 고지가 있어야 함 | AdSense 정책 |
| REQ-07 | About 페이지에 사이트 목적과 연락처가 명시되어야 함 | 신뢰성 신호 |

### 2.2 권장 요구사항 (Should Have)

| ID | 요구사항 | 근거 |
|---|---|---|
| REQ-08 | 각 블로그 포스트는 최소 800자 이상의 고유 본문을 가져야 함 | AdSense 콘텐츠 충분성 기준 |
| REQ-09 | 홈페이지에 사이트 용도를 설명하는 정적 텍스트 콘텐츠가 있어야 함 | 크롤러 가시성 |
| REQ-10 | 모든 페이지의 meta description이 50-160자 범위여야 함 | SEO 모범 사례 |
| REQ-11 | Organization JSON-LD가 사이트 전체에 적용되어야 함 | 브랜드 신뢰도 |

### 2.3 선택 요구사항 (Nice to Have)

| ID | 요구사항 | 근거 |
|---|---|---|
| REQ-12 | 콘텐츠 포스트 수를 20개 이상으로 확장 | 콘텐츠 충분성 강화 |
| REQ-13 | 포스트에 저자 정보 섹션 추가 | E-E-A-T 신호 |
| REQ-14 | Google Search Console에서 Core Web Vitals 점수 확인 | 페이지 경험 신호 |

---

## 3. 성공 기준

| 기준 | 측정 방법 | 목표 |
|---|---|---|
| SC-01 | AdSense 승인 상태 | ✅ 승인 완료 |
| SC-02 | Search Console 인덱싱 URL 수 | 19개 URL 전체 (6 페이지 + 13 포스트) |
| SC-03 | `ads.txt` 접근 가능 | `https://sns-garden.com/ads.txt` 200 OK |
| SC-04 | 각 페이지 canonical 고유성 | Google Rich Results Test 통과 |
| SC-05 | JSON-LD 유효성 | Schema.org 검증기 통과 |
| SC-06 | sitemap.xml 오류 없음 | Search Console 사이트맵 상태 "성공" |

---

## 4. 기술 범위

### 4.1 완료된 기술 변경 (이번 세션)

```
public/ads.txt                              ← 생성
src/app/sitemap.js                          ← trailing slash 추가
src/app/layout.js                           ← canonical, og:locale, Organization JSON-LD, hreflang 제거
src/app/guide/page.js + GuideClient.js      ← 서버 컴포넌트 분리 + canonical
src/app/tips/page.js + TipsClient.js        ← 서버 컴포넌트 분리 + canonical
src/app/about/page.js + AboutClient.js      ← 서버 컴포넌트 분리 + canonical
src/app/privacy/page.js + PrivacyClient.js  ← 서버 컴포넌트 분리 + canonical
src/app/tips/[slug]/page.js                 ← BlogPosting + BreadcrumbList JSON-LD, OG article
src/app/page.js + HomeClient.js             ← WebApplication JSON-LD
src/app/not-found.js                        ← Custom 404 생성
src/data/posts.js                           ← AI 마커 제거, 중복 포스트 삭제 (13개 유지)
```

### 4.2 남은 작업 (수동 + 선택)

```
[수동 - 필수]
1. git push → Vercel 배포
2. AdSense 대시보드 → 사이트 검토 요청
3. Search Console → 사이트맵 재제출
4. AdSense Auto Ads 대시보드에서 ON

[수동 - 선택]
5. Search Console → 주요 URL 개별 색인 생성 요청
6. 포스트 콘텐츠 직접 편집 (AI 보조 → 개인 경험 추가)
7. 신규 포스트 3-5개 추가 (직접 작성 권장)
```

---

## 5. 리스크 분석

| 리스크 | 가능성 | 영향 | 대응 |
|---|---|---|---|
| AI 콘텐츠로 재심사 거절 | 중 | 높음 | 포스트 직접 편집 후 재제출 |
| 거절 사유가 콘텐츠 부족이었을 경우 | 중 | 중간 | 포스트 3-5개 추가 |
| 도메인 신뢰도/나이 문제 | 낮 | 높음 | 트래픽 데이터 축적 후 재시도 |
| 사이트 트래픽 부족 | 중 | 중간 | Search Console 인덱싱 후 자연적으로 해결 |
| 재제출 후 재검토 기간 (최대 30일) | 확실 | 낮음 | 재제출 후 대기 |

---

## 6. AdSense 재제출 체크리스트

재제출 전 이 체크리스트를 모두 확인해야 한다:

### 6.1 기술 체크 (모두 완료됨)
- [x] `https://sns-garden.com/ads.txt` 접근 가능
- [x] AdSense 스크립트가 모든 페이지 `<head>`에 존재
- [x] `google-adsense-account` 메타 태그 존재
- [x] Privacy Policy 페이지에서 AdSense 고지 포함
- [x] 모든 페이지 canonical URL 고유
- [x] Sitemap URL과 실제 URL 일치

### 6.2 콘텐츠 체크
- [x] 13개 독립 블로그 포스트 존재
- [x] About 페이지에 사이트 목적과 연락처 존재
- [x] 저작권 침해 콘텐츠 없음
- [x] 성인/폭력/혐오 콘텐츠 없음
- [ ] 포스트 본문에 개인 경험/인사이트가 충분히 포함됨 *(선택적 개선 권장)*

### 6.3 재제출 절차
1. Vercel 배포 완료 확인 (`https://sns-garden.com/ads.txt` 200 OK)
2. AdSense 대시보드 → 사이트 → "검토 요청" 클릭
3. Search Console → 사이트맵 → `https://sns-garden.com/sitemap.xml` 제출
4. 검토 기간: 3-30일 (일반적으로 1-2주)

---

## 7. 향후 콘텐츠 전략 (승인 후)

AdSense 승인 이후 광고 수익을 극대화하기 위한 방향:

1. **포스트 주기적 발행**: 월 2-4개 유지 (직접 작성 권장)
2. **Auto Ads 사용**: 별도 슬롯 코드 없이 Google이 자동 배치
3. **고트래픽 페이지 집중**: Tips 목록 + 개별 포스트가 주요 광고 노출 페이지
4. **한국어 집중**: 기본 언어(한국어)로 SEO 집중, 영어는 보조

---

## 8. 의존성

| 항목 | 유형 | 비고 |
|---|---|---|
| Vercel 배포 | 외부 | Git push 후 자동 |
| Google AdSense 심사 | 외부 | 3-30일 소요 |
| Google Search Console 크롤링 | 외부 | 사이트맵 제출 후 수일 |
| 도메인 나이/트래픽 | 외부 | 통제 불가 |

---

*Plan 완료일: 2026-04-05*  
*다음 단계: `/pdca design adsense-seo-optimization` 또는 직접 배포 + 재제출 진행*
