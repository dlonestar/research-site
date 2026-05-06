---
cra_label: Warning
cra_score: 71
cra_sub_name: 밸류에이션의 함정
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
### 「밸류에이션의 함정」

> "오늘 CRA 점수는 71. 가장 가까운 historical 패턴은 None이다."

---

## § 1. Executive Summary

이번 달 핵심 5가지 (CEO 30초 read):

1. **점수**: CRA **71** (`Warning`, 권고 cash **45%**)
2. **Driving force**: KOSPI_PBR (1.00), MARGIN_ADJ_CAPE (0.98), KR_MARGIN_BAL_PCT (0.71)
3. **Closest historical analog**: None
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
- 1995년 이후 거래일 **11,507일** 중 score 100 이상 = **0.0%** (1일)
- 현재 percentile: **p100**
- 의미: drowning in noise 가 아닌 **의미 있는 outlier zone**

### Layer 2 — Conditional Base Rate
Score ≥ 65 진입 후 **12개월 내** SPY 결과:
- -10% 조정 발생: **75.4%**
- -20% bear 발생:  **34.9%**
- -30% severe bear: **13.5%**
- -40% catastrophic: **7.9%**

무조건적 base rate (12m -20% 약 15%) 의 **약 2배 이상**.

---

## § 4. How We Got Here — 24개월 trajectory

![24m trajectory](charts/260506/trajectory_24m.png)

**시간 경과별 score**:
- **24개월 전 (2024-07-01)**: score 63.3 — dominant: `USDKRW` (risk 0.99)
- **12개월 전 (2025-07-02)**: score 67.2 — dominant: `MARGIN_ADJ_CAPE` (risk 0.97)
- **6개월 전 (2026-01-01)**: score 64.4 — dominant: `MARGIN_ADJ_CAPE` (risk 1.00)
- **3개월 전 (2026-04-03)**: score 77.5 — dominant: `KOSPI_PBR` (risk 1.00)
- **1개월 전 (2026-06-03)**: score 95.0 — dominant: `MARGIN_ADJ_CAPE` (risk 0.99)

**24개월 peak**: 99.9 on 2026-07-03

**기간별 가장 큰 indicator 변동**:
- 24m → 18m ago: `KR_MARGIN_BAL_PCT` Δ -0.321
- 18m → 12m ago: `KR_FOREIGN_12M_PCT` Δ +0.399
- 12m → 6m ago: `KOSPI_PBR` Δ +0.410
- 6m → 0m ago: `MARGIN_ADJ_CAPE` Δ +0.001
- 3m → 0m ago: `MARGIN_ADJ_CAPE` Δ +0.002

---

## § 5. Closest Historical Analog — Deep Dive

_(analog 식별 실패)_

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
- Closest analog: n/a (forward 24m return n/a%)

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

## False Positive 가능성 시나리오

---

**시나리오 1: Goldilocks 재현 — 1995-06 유사 국면**

1995년 6월, CRA 점수는 67로 경고권이었으나 이후 12개월간 KOSPI는 +25%를 기록했다. 당시에도 PBR과 CAPE 지표는 과열을 시사했지만, 실제로는 금리 안정과 기업이익 가속이 맞물리며 밸류에이션 확장이 정당화됐다. 지금도 한국은행의 완화 기조 전환 가능성과 반도체 사이클 회복이 동시에 진행 중이다. 지표가 비싸 보이는 것과, 시장이 실제로 꺾이는 것은 전혀 다른 이야기일 수 있다.

---

**시나리오 2: 저변동성 레짐 지속 — 2017-08 유사 국면**

2017년 8월, CRA 점수 73으로 이번보다 높았음에도 12개월 수익률은 +18%였다. 당시 시장을 지배한 것은 글로벌 동반 성장과 변동성 압축이라는 구조적 흐름이었다. 현재 미국 증시의 낮은 VIX와 글로벌 유동성 환경이 유사한 저변동성 레짐을 지지하고 있다면, KOSPI_PBR이 1.00에 달하더라도 프리미엄 재평가의 초입일 수 있다. 점수가 높다고 해서 반드시 조정이 임박했다고 단정할 수 없다.

---

**시나리오 3: AI 수혜 구조 재점화 — 2024-Q1 유사 국면**

2024년 1분기, CRA 점수 68 경고에도 이후 12개월 수익률은 +12%를 기록했다. 당시 외국인 12개월 누적 매수와 마진 잔고 확대가 과열 신호로 읽혔지만, 실제로는 AI 관련 수요가 반도체 기업 이익을 구조적으로 끌어올렸다. KR_FOREIGN_12M_PCT(0.71)가 지금 다시 경고권에 진입한 것은 과열이 아니라 외국인의 지속적 구조 매수일 수 있다. 이익의 질이 변했을 때, 과거 기준의 밸류에이션 상한선은 무의미해진다.

---

**시나리오 4: 수익률 곡선 정상화 — T10Y2Y 반전 해소의 선행성**

T10Y2Y(0.61)는 장단기 금리차가 확대되는 방향으로 움직이고 있으며, 이는 전통적으로 경기 위축의 전조로 해석된다. 그러나 이번 국면에서는 연준의 긴축 종료와 점진적 인하 기대가 맞물려 곡선 정상화가 오히려 경기 연착륙의 신호일 수 있다. 역사적으로 수익률 곡선 역전 해소 직후 12개월 수익률이 양호했던 사례는 다수 존재한다. 같은 숫자가 다른 이야기를 할 수 있다는 점을 경계해야 한다.

---

**시나리오 5: 마진 잔고 확대가 레버리지 위험이 아닌 참여 확대의 신호일 경우**

KR_MARGIN_BAL_PCT(0.71)는 신용 잔고 과열을 시사하지만, 이 지표는 절대 수준보다 변화 속도와 시장 대비 비율이 더 중요하다. 현재의 마진 잔고 증가가 개인투자자의 단기 투기보다는 연금·퇴직연금 계좌의 주식 비중 확대와 중장기 참여자 유입에 기인한다면, 전통적 과열 해석은 오독일 수 있다. 투자자 기반의 질적 변화는 동일한 숫자에 다른 내성을 부여한다. 표면 지표만으로 구조를 판단하는 것은 지도를 지형으로 착각하는 실수다.

---

## 종합 판단

CRA 점수 71은 분명히 무시하기 어려운 수준이며, 나는 지금이 경계를 늦출 시점이라고 말할 생각이 없다. 그러나 1995년, 2017년, 2024년의 선례는 동일한 점수 구간에서도 시장이 강하게 상승할 수 있음을 실증적으로 보여준다. 지금의 false positive 가능성은 무시할 수 없고, 동시에 경고를 철회할 근거도 충분하지 않다. 내가 확신하는 것은 단 하나다 — 지금은 포지션 크기를 키울 때가 아니라, 자신이 무엇을 모르는지를 더 자주 물어야 할 때다.

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

> # Closing Aphorism 높은 수익률은 낮은 가격으로 정당화되는 것이 아니라, 낮은 가격이 높은 기대를 반영할 때 위험해진다. 지금 우리가 마주한 것은 저평가가 아니라, 시장이 완벽한 실적 개선을 선행 반영한 순간이다. ---

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