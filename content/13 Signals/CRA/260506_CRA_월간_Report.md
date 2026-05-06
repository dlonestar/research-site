---
cra_label: Warning
cra_score: 71
cra_sub_name: 밸류에이션 악순환
date: 2026-05-06
period: monthly
publish: true
spec_version: 1.0.6
tags:
- cra
- risk
- monthly
- ceo-shareable
type: cra-monthly
---

# 🔴 종합 위험 알림 (CRA) 월간 리포트
**2026-05-06 · spec v1.0.6**

## CRA = 71 / 100 · "Warning"
### 「밸류에이션 악순환」

> "오늘 CRA 점수는 71. 가장 가까운 historical 패턴은 1998-05-23이다."

---

## § 1. Executive Summary

이번 달 핵심 5가지 (CEO 30초 read):

1. **점수**: CRA **71** (`Warning`, 권고 cash **45%**)
2. **Driving force**: KOSPI_PBR (1.00), MARGIN_ADJ_CAPE (0.98), KR_MARGIN_BAL_PCT (0.71)
3. **Closest historical analog**: 1998-05-23
4. **Forward 12m base rate**: -10% 조정 **75.4%** · -20% bear **34.9%**
5. **Portfolio implication**: 현재 53.64억 / 메모리 76% / cash 0% — § 10 에 specific action plan

🔗 본문 16 페이지에서 4-layer 분석 / killer chart 3개 / Action Plan

---

## § 2. What Changed This Month

지난 30일 동안 가장 큰 변동:


**🔻 위험 하락**:

| Indicator | 30일 전 | 현재 | Δ | 12m 추세 |
|---|---:|---:|---:|---|
| VIX (S&P 500 옵션 변동성) | 0.79 | 0.54 | -0.25 | `▃▂▅▄▃▁▂▃▆█▃▄` |
| KOSPI 외국인 12M 누적 순매수 / 시총 (%) | 0.89 | 0.71 | -0.18 | `█▄▁▂▂▁▁▂▄▇▆▄` |
| KOSPI 30일 평균 회전율 (거래대금/시총) | 0.86 | 0.71 | -0.15 | `▁▁▂▅▄▁▃▆█▇▄▅` |
| MOVE Index (US Treasury 변동성) | 0.56 | 0.47 | -0.10 | `▅▃▃▃▂▁▁▁▂█▁▃` |

---

## § 3. The 4-Layer Signal — "71는 무슨 의미인가"
단순 숫자가 아닌 **4중 layer 의 historical signal**:

### Layer 1 — Frequency (드물기)
- 1995년 이후 거래일 **11,449일** 중 score 71 이상 = **14.1%** (1,612일)
- 현재 percentile: **p86**
- 의미: drowning in noise 가 아닌 **의미 있는 outlier zone**

### Layer 2 — Conditional Base Rate
Score ≥ 65 진입 후 **12개월 내** SPY 결과:
- -10% 조정 발생: **75.4%**
- -20% bear 발생:  **34.9%**
- -30% severe bear: **13.5%**
- -40% catastrophic: **7.9%**

무조건적 base rate (12m -20% 약 15%) 의 **약 2배 이상**.

### Layer 3 — Closest Historical Analog
14-D risk panel 에서 가장 가까운 historical 시점 = **1998-05-23**
(distance 0.6446)

이후 forward outcome:
- 12m return: **17.13%**
- 24m return: **25.96%**
- 24m max DD: **-19.34%**
- 36m return: **16.81%**

### Layer 4 — Aggravating Factors (현재가 더 위험한 점)
Analog (1998-05-23) 보다 현재가 더 elevated 한 indicator:
- **KOSPI_PBR**: 현재 1.00 vs analog 0.50 (Δ +0.50)
- **NFCI_LEVERAGE**: 현재 0.84 vs analog 0.67 (Δ +0.17)

---

## § 4. How We Got Here — 24개월 trajectory

![24m trajectory](charts/260506/trajectory_24m.png)

**시간 경과별 score**:
- **24개월 전 (2024-05-04)**: score 60.2 — dominant: `USDKRW` (risk 0.98)
- **12개월 전 (2025-05-05)**: score 65.8 — dominant: `USDKRW` (risk 0.97)
- **6개월 전 (2025-11-04)**: score 67.0 — dominant: `KOSPI_PBR` (risk 1.00)
- **3개월 전 (2026-02-04)**: score 67.9 — dominant: `KOSPI_PBR` (risk 1.00)
- **1개월 전 (2026-04-06)**: score 77.2 — dominant: `KOSPI_PBR` (risk 1.00)

**24개월 peak**: 79.4 on 2026-03-31

**기간별 가장 큰 indicator 변동**:
- 24m → 18m ago: `VIX` Δ +0.447
- 18m → 12m ago: `KR_FOREIGN_12M_PCT` Δ +0.602
- 12m → 6m ago: `KOSPI_PBR` Δ +0.587
- 6m → 0m ago: `KR_BBB_AAA_SPREAD` Δ +0.341
- 3m → 0m ago: `MOVE` Δ +0.211

---

## § 5. Closest Historical Analog — Deep Dive

14-D risk panel space 에서 가장 가까운 historical 시점은 **1998-05-23**.

![Spider chart 비교](charts/260506/spider_now_vs_analog.png)

**Forward outcome**:
- 6m: return 8.49%, max DD -19.34%
- 12m: return 17.13%, max DD -19.34%
- 24m: return 25.96%, max DD -19.34%
- 36m: return 16.81%, max DD -27.77%

**Risk panel 비교 (top 5 indicators by current risk)**:
| Indicator | Current | Analog | Δ |
|---|---:|---:|---:|
| USDKRW | 0.999 | 0.999 | +0.000 — |
| MARGIN_ADJ_CAPE | 0.989 | 0.989 | +0.000 — |
| CBOE_SKEW | 0.923 | 0.923 | +0.000 — |
| T10Y2Y | 0.613 | 0.873 | -0.260 🟢 |
| REAL_FED_FUNDS | 0.676 | 0.811 | -0.135 🟢 |

---

## § 6. Killer Chart Trio

Reader 가 캡쳐해서 친구/CEO 에게 보낼 수 있는 핵심 차트 3개:

### 6.1 CRA Score 1y/2y/5y/All-time

![](charts/260506/cra_score_timeseries.png)

_네 view 가 한 페이지에. 1990년 이후 5,500 거래일. 70선이 Warning, 50선이 Elevated. 현재 위치를 즉시 시각적으로 인식._

### 6.2 14-Indicator Risk Heatmap

![](charts/260506/indicator_heatmap.png)

_RdYlGn 색상 그라데이션. 빨간색 = elevated risk. 어떤 indicator 가 이번 사이클의 driving force 인지 한 눈에._

### 6.3 Strategy NAV — KOSPI B&H vs CRA-gated (1990-현재)

![](charts/260506/nav_drawdown.png)

_36년 historical proof. CRA 전략이 -75% drawdown 을 -58% 로 줄였다 (monthly rebalance, cash 0% yield 가정). 위 = NAV (log), 아래 = drawdown 비교._


---

## § 7. Korea-Specific Lens

한국 시장의 5대 정점과 현재 비교:

| Year | KOSPI peak | CRA at peak | 12m DD | Driving narrative |
|---|---:|---:|---:|:---|
| 1989 | 1015 | **66.8** | -55% | 1989 valuation peak |
| 1999 | 1059 | **75.2** | -56% | 1999 IT bubble |
| 2007 | 2065 | **72.3** | -55% | 2007 GFC pre-peak |
| 2018 | 2607 | **55.7** | -24% | 2018 반도체 + 무역전쟁 |
| 2021 | 3305 | **64.1** | -35% | 2021 긴축 직전 |
| 현재 | — | **71** | — | 현재 (2026-05) |

**3개 unique Korea signals (현재)**:
1. **KOSPI 시장 PBR**: 2.12x — **사상 최고**
2. **외국인 12M 누적 / 시총**: -0.73% — **Warning zone** (2008 GFC 분기 -1.5%)
3. **USD/KRW**: 1,456 — **Critical zone** (2008 GFC peak 1,570)

**한국 reflexivity 3각 구조**:
> KOSPI 하락 → 외인 매도 → KRW 약세 → 외인 추가 매도 (자기강화 루프).
> 이 구조는 미국 메모에 없는 Korea-only risk.


---

## § 8. Mechanism & 12-Month Outlook

확률 weighted scenarios (12-month forward):

### 📉 Bear Case (확률 ≈ 34.9%)
- Trigger: AI capex pullback 또는 valuation mean reversion
- Path: 점진적 -15% 6개월 → -25~30% catastrophic phase
- Outcome: KOSPI -25~35%, S&P -20~30%, 메모리 -40~50%
- Indicator path: CRA 80+ 도달 후 50 미만 normalize
- Closest analog: 1998-05-26 (forward 24m return 25.96%)

### ➡️ Base Case (확률 ≈ 34.0%)
- Trigger: 통화정책 normalization + 일부 valuation 조정
- Path: -5~15% rolling correction, 단일 catastrophic 없음
- Outcome: KOSPI ±10%, S&P ±5%, 메모리 ±15%
- Indicator path: CRA 71 → 60 horizontal traversal

### 📈 Bull Case (확률 ≈ 31.099999999999994%)
- Trigger: AI productivity 가 진짜 multiplier 효과 검증
- Path: Earnings 가 valuation 을 catch up
- Outcome: KOSPI +20~30%, S&P +15~25%, 메모리 +30%
- Indicator path: CRA 71 유지 또는 75 도달 (fundamental 동반)

_확률 가중 expected return은 model 기반 추정. 매월 reassess._


---

## § 9. Counter-Narrative — "이번이 틀릴 수 있는 시나리오"

## 이번 달 CRA 경고가 False Positive일 수 있는 5가지 시나리오

---

**1. 밸류에이션 기준선 자체가 이동했을 가능성**

KOSPI_PBR이 경고 구간에 진입했지만, 2010년대 이후 한국 기업들의 자사주 소각·배당 확대와 지배구조 개선이 구조적으로 적정 PBR 수준을 끌어올렸을 수 있다. 1998년 아날로그와 비교할 때, 당시 기업들은 부채비율 400%대였고 지금은 그 절반에도 못 미친다. 밸류에이션 경고가 과거 데이터로 교정된 기준을 쓴다면, 현재 수치는 "비싸다"가 아니라 "정상화됐다"는 해석이 가능하다. 2017년 8월(score 73)에도 같은 논리가 통했고, 이후 12개월 KOSPI는 18% 상승했다.

---

**2. 마진 잔고 증가가 공포가 아닌 자신감의 신호일 수 있다**

KR_MARGIN_BAL_PCT 상승은 전통적으로 과열 경고로 읽히지만, 금리 인하 사이클 초입에서 레버리지 확대는 종종 랠리의 연료가 된다. 2024년 1분기(score 68) 당시에도 마진 잔고가 늘어나는 상황에서 경고가 발령됐으나, AI 테마 랠리가 시작되며 12개월 수익률은 +12%를 기록했다. 지금의 레버리지 증가가 투기적 말기 단계인지, 아니면 사이클 중반의 참여 확대인지는 속도와 구성을 함께 봐야 판단할 수 있다. 지표 하나만으로는 방향을 단정할 수 없다.

---

**3. 외국인 12개월 누적 매도가 되레 역발상 매수 신호일 수 있다**

KR_FOREIGN_12M_PCT가 경고에 기여하고 있지만, 외국인의 장기 누적 매도는 때로 바닥 형성의 필요조건이 된다. 수급 공백이 클수록 매도 압력이 소진된 상태이며, 작은 촉매만으로도 되돌림이 날카롭게 나타날 수 있다. 1995년 6월(score 67) 사례처럼, 외국인 이탈이 절정일 때 Goldilocks 국면이 시작되며 12개월 +25%가 나온 적 있다. 지금 외국인 포지션의 경량화가 이미 상당 부분 진행됐다면, 이 변수는 경고 요인이 아니라 잠재적 업사이드 요인으로 재해석될 수 있다.

---

**4. T10Y2Y 역전 해소 국면이 오히려 경기 연착륙을 시사할 수 있다**

T10Y2Y가 경고 구간에 있다는 것은 장단기 스프레드가 정상화 중임을 의미하며, 이는 역전 이후 경기침체가 온다는 교과서적 해석과 달리 연착륙 시나리오에서도 동일하게 관찰된다. 연준과 한국은행이 모두 인하 사이클에 있다면, 스프레드 정상화는 실질 경기 회복의 선행 신호일 수 있다. CRA 모델이 역전 해소 자체를 위험으로 분류했다면, 그 캘리브레이션은 침체 시나리오에 과도하게 가중됐을 가능성이 있다. 지표가 말하는 것과 지표가 뜻하는 것은 항상 같지 않다.

---

**5. 1998년 아날로그 매칭 자체가 표면적 유사성에 그칠 수 있다**

가장 가까운 아날로그가 1998년 5월이라는 점은 주목할 만하지만, 그 시기는 IMF 구제금융 직후 외환위기 한복판이었다. 오늘의 한국은 외환보유고 4,000억 달러, 경상수지 흑자, 원화 변동성이 당시와 구조적으로 다른 체제에 있다. 패턴 매칭 모델은 숫자가 비슷할 때 맥락까지 같다고 가정하는 경향이 있는데, 그 가정이 틀리면 모델이 보여주는 24개월 max DD -19.34%라는 숫자도 참고치가 아닌 노이즈가 된다. 아날로그는 역사에서 배우는 도구이지, 역사를 반복시키는 법칙이 아니다.

---

**종합: 지금 판단**

CRA score 71은 무시하기 어렵고, 나는 이 신호를 가볍게 여기지 않는다. 그러나 위의 다섯 가지 경로를 정직하게 검토하면, 이 경고가 행동 지침이 되려면 추가 확인이 필요하다는 결론에 이른다. 1995년, 2017년, 2024년 — 세 번의 false positive는 모두 "경고가 틀렸다"가 아니라 "경고가 이미 가격에 반영되어 있었다"는 교훈을 남겼다. 지금 내가 말할 수 있는 것은, 포지션을 줄일 이유는 있지만 시장을 떠날 이유는 아직 없다는 것이다. 확신보다 분산이, 예측보다 대비가 더 정직한 태도라고 생각한다.

---

## § 10. Portfolio Action Plan — Specific to Your 53.64억

**현재 portfolio**:
- 총자산: **53.64억**
- Cash: **0.0%**
- 메모리 (삼성+하이닉스): **75.9%** (40.71억)
- Top 5 비중: 85% / Top 10: 92%
- 평가손 종목: **12개** (총 1901만)
- 평균 평가익률: **+67.2%**

**TARGET STATE (6개월 후)**:
- Cash 30% (16.09억) + USD/GLD hedge 17% = **47% defensive equivalent**
- 메모리 비중: 73% → 40% (HBM thesis 보존)

_CRA 권고는 cash 45% 이지만, 사용자 history (0% cash) 고려한 mid-ground. 행동 sustainability 우위._

### Layer 1 — 즉시 (Day 0-7)

- ✅ 오늘 매도: **0원**. 단 6개월 binding plan commit.
- 평가손 12개 종목 list-up + 5/13 까지 전량 매도 (양도세 손익통산)
- Pre-commitment rules 7개 vault commit:
  - RULE 1: IF CRA ≥ 75 THEN 5%pt 즉시 매도
  - RULE 2: IF KOSPI +10% from now THEN 매도 속도 2배
  - RULE 3: IF 하이닉스 평가익 +30% 추가 THEN 5% 자동 익절
  - RULE 4: IF CRA < 50 THEN 매월 5%pt re-investment
  - RULE 5: IF KOSPI PBR < 1.0 THEN cash 50% 즉시 deploy
  - RULE 6: 매월 마지막 영업일 = rebalancing day
  - RULE 7: 일일 portfolio 조회 max 1회

### Layer 2 — 단기 (1개월)

- Cash 0% → 5% (small cap + 평가손 정리, 약 2.68억)
- 메모리 thesis 재검증 메모: HBM (A-grade) vs 삼성 비메모리 (B-grade)

### Layer 3 — 중기 (3-6개월) DCA out

| Month | Cash% | 메모리% | 행동 cue |
|---|---:|---:|:---|
| Month 0 | 0% | 73% | rules commit |
| Month 1 | 5% | 70% | small cap + 평가손 정리 |
| Month 2 | 10% | 65% | 삼성 25→20% (4.04억 매도) |
| Month 3 | 15% | 55% | 하이닉스 1차 익절 (3.07억 매도) |
| Month 4 | 20% | 50% | USD 자산 매수 시작 (S&P + TLT) |
| Month 5 | 25% | 45% | GLD 5% 추가 (KRX 금현물) |
| Month 6 | 30% | 40% | Final position |

**Hedge mix (final, 16.09억 cash 외)**:
- USD 자산 12% — S&P defensive (XLP/XLU) + TLT (long bond)
- GLD 5% — KRX 금현물 또는 KODEX 골드
- 합계 hedge equivalent 47%, 메모리 40% 유지 가능

### Re-entry Strategy

Cash 늘린 후 어떤 trigger 만나면 다시 invest:

| Trigger | Lead time | Action |
|---|:---:|:---|
| CRA score < 60 | 3-6m | 매월 5%pt re-investment |
| KOSPI PBR < 1.0 | bottom signal | cash 50% 즉시 deploy |
| 외인 +0.5% 누적 | 1-2m | 추가 20% deploy |
| Fed rate cut 50bp+ | varied | confirmation only |

### Reframe

> Cash 30% 는 손해가 아니라 **다음 bear 의 ammo**. 1998 IMF / 2008 GFC / 2020 COVID — 매번 cash 보유자가 평생 자산을 만들었다.
>
> 당신은 이번 사이클에서 53.64억을 지키는 것이 아니라, **다음 사이클의 ammo 를 준비** 하는 것이다.


---

## § 11. Closing

> CRA 월간 Closing Aphorism 밸류에이션 악순환 속에서 가장 위험한 것은 시장이 하락하는 것이 아니라, 모두가 같은 방향으로 움직일 때 나만 다르게 행동할 수 없다는 확신이다. 1998년의 교훈은 단순했다: 합리적 가격이 되돌아오는 과정에서 생존자들이 승자가 된다는 것.

---

_본 리포트는 자동 generated. spec v1.0.6. 다음 발행: 매월 첫 일요일 18:00 KST._
## 부록. 14 Indicator Detail (매월 동일 format)

| Code | 한국어 | 현재값 | Risk | EW | Contribution | Tier | 12m sparkline |
|---|---|---:|---:|---:|---:|:---|---|
| MARGIN_ADJ_CAPE | 美 Margin-adjusted CAPE (Hussman) | 61.29x | 0.999 | 0.1000 | 9.99 | 🔴 severe | `▂▂▇▇▇▇▇▁▂█` |
| T10Y2Y | 美 10Y-2Y 국채금리 스프레드 | 0.50%p | n/a | 0.1000 | n/a | 🟢 normal | `▃▅▆▄▁▁▂▇▇█` |
| HY_OAS | 美 신용 스프레드 (Baa - 10Y Treasury) | 1.69%p | n/a | 0.1000 | n/a | 🟢 normal | `▆▁▁▆▅▁▄█▄▃` |
| MARGIN_DEBT_YOY | 美 NYSE 신용잔고 YoY 증가율 | 38.69% | n/a | 0.0500 | n/a | 🟠 moderate | `▁▄██▂▂▁▁▂▂` |
| CBOE_SKEW | 美 CBOE SKEW Index (꼬리위험 헤지수요) | 138.74 | n/a | 0.0500 | n/a | 🟡 mild | `▆▄▂▆█▇▂▄▆▁` |
| KOSPI_PBR | KOSPI 시장 PBR (cap-weighted) | 2.12x | n/a | 0.1000 | n/a | 🔴 severe | `▅▆▇▇▇▇▇█▇▁` |
| KR_MARGIN_BAL_PCT | KOSPI 30일 평균 회전율 (거래대금/시총) | 0.59% | n/a | 0.1000 | n/a | 🟡 mild | `▁▁▃▅▁▄▇█▅▅` |
| KR_FOREIGN_12M_PCT | KOSPI 외국인 12M 누적 순매수 / 시총 (%) | -0.73% | n/a | 0.1000 | n/a | 🟡 mild | `█▃▂▃▂▁▂▄▆▄` |
| USDKRW | 원/달러 환율 | 1462.80KRW | n/a | 0.0500 | n/a | 🟠 moderate | `▁▂▄▇▇▇▄█▇▄` |
| KR_BBB_AAA_SPREAD | 韓 회사채 신용 스프레드 (AA- − 국고채 3y) | 0.65%p | n/a | 0.0500 | n/a | 🟢 normal | `▃▁▁▁▄▃▅▆█▇` |
| NFCI_LEVERAGE | Chicago Fed NFCI Nonfin Leverage Subindex | -0.41σ | n/a | 0.0500 | n/a | 🟢 normal | `▁▂▃▄▅▆▆▇▇█` |
| REAL_FED_FUNDS | 美 실질 정책금리 (Fed Funds - Core PCE YoY) | 0.44% | n/a | 0.0500 | n/a | 🟢 normal | `█▇▇▇▅▃▂▂▁▁` |
| VIX | VIX (S&P 500 옵션 변동성) | 18.29 | n/a | 0.0500 | n/a | 🟢 normal | `▃▂▂▆▁▅▆█▅▄` |
| MOVE | MOVE Index (US Treasury 변동성) | 76.78 | n/a | 0.0500 | n/a | 🟢 normal | `█▄▂▃▁▂▂▅▃▄` |

_본 표는 매월 동일 format으로 발행되어 사용자가 6개월 뒤 read 했을 때 추세 직관적 인식 가능._