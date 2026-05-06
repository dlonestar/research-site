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

## False Positive 시나리오 5가지

---

**① 밸류에이션 기준선 자체가 이동했을 가능성**

KOSPI_PBR이 경고 신호의 최대 기여자이지만, 한국 시장의 구조적 재평가(코리아 디스카운트 해소 정책, 주주환원 압력 증가)가 진행 중이라면 과거 대비 '높은 PBR'은 위험이 아니라 정상화일 수 있다. 2024-Q1 false positive(score 68, 12m +12%)도 AI 밸류에이션 패러다임 전환 국면에서 발생했다. 기준선이 움직이는 시장에서 정적 임계값은 체계적으로 false positive를 만들어낸다. 물론 이 논리는 언제나 강세장 말기에도 등장한다는 점을 잊어서는 안 된다.

---

**② 금리 곡선 역전이 '이미 소화된 악재'일 가능성**

T10Y2Y(0.61)가 기여하고 있지만, 이 신호는 경기 침체를 선행하는 것이지 주가 하락을 즉각 유발하는 것이 아니다. 2017-08 false positive(score 73, 12m +18%) 국면에서도 금리 환경 불안이 점수를 끌어올렸으나 시장은 저변동성 랠리를 이어갔다. 현재 금리 역전이 이미 수개월째 지속되었다면 시장 참여자들이 이를 충분히 반영한 상태일 수 있고, 정작 되돌림 국면에서 주가가 상승하는 역설이 생길 수 있다. 신호의 '신선도'는 신호의 '방향'만큼 중요하다.

---

**③ 외국인 순매도가 '포지션 조정'에 불과할 가능성**

KR_FOREIGN_12M_PCT(0.71)의 경고는 외국인 자금 유출이 구조적 이탈인지, 연간 리밸런싱 혹은 헤지 비용 조정인지 구분하지 못한다. 가장 가까운 유사 시점인 1998-05는 IMF 위기 직후로 자금 이탈이 패닉성이었지만, 현재 외국인 매도가 EM 전반의 기계적 리밸런싱이라면 성격이 근본적으로 다르다. 1995-06 false positive(score 67, 12m +25%)도 외국인 수급 불안이 가중된 시점이었으나 골디락스 사이클 진입으로 귀결되었다. 수급 신호는 동기(motivation)를 모른다는 근본적 한계를 갖는다.

---

**④ 마진 지표가 '레버리지 축소 완료' 직전을 포착했을 가능성**

KR_MARGIN_BAL_PCT(0.71)와 NFCI_LEVERAGE는 레버리지가 위험 수준임을 암시하지만, 역설적으로 이 지표들이 고점에서 이미 하락 중이라면 '디레버리징 완료 → 재진입' 사이클의 초입일 수 있다. 유사 analog 대비 NFCI_LEVERAGE가 +0.17 악화되어 있다는 점은 우려스럽지만, 해당 수치가 추세적 상승 중인지 정점 후 하강 중인지를 스냅샷 점수는 말해주지 않는다. 마진 콜이 이미 발생하고 강제 청산이 진행된 뒤라면 오히려 수급 공백이 해소된 상태일 수 있다. 위험의 외양과 위험의 실재는 종종 시차를 갖는다.

---

**⑤ CAPE 조정치가 이익 추정치의 보수성을 반영하지 못할 가능성**

MARGIN_ADJ_CAPE(0.98)는 현재 이익 마진이 평균으로 회귀할 것이라는 가정 위에 서 있다. 그러나 AI·반도체 사이클, 방산·에너지 구조 변화로 한국 대형주의 마진 구조 자체가 바뀌었다면, 과거 평균으로의 회귀 가정은 과도하게 보수적일 수 있다. 2024-Q1 AI rally false positive가 정확히 이 메커니즘으로 설명된다 — 모델은 비정상적 마진이라 읽었지만 시장은 새로운 정상(new normal)으로 받아들였다. 물론 '이번엔 다르다'는 논리는 역사상 가장 비싼 문장이기도 하다. 그 긴장감을 유지한 채 가능성으로만 열어두어야 한다.

---

## 종합: 지금 판단

CRA score 71은 무시하기 어렵다. 그러나 위의 다섯 시나리오는 이 경고가 단순히 틀릴 수 있는 그럴듯한 경로들이며, 역사적 false positive 세 사례(1995, 2017, 2024)는 그 가능성이 공상이 아님을 보여준다. 나는 지금 이 시장을 '명백한 위기'라고도, '안전한 매수 기회'라고도 부를 준비가 되어 있지 않다. 다만 유사 analog인 1998-05의 24개월 최대 낙폭 -19.34%는 잊지 말아야 할 숫자이고, KOSPI_PBR의 +0.50 aggravation은 현재가 그 analog보다 더 비싼 출발점임을 뜻한다. 확신이 없다면 포지션 크기로 말해야 한다 — 전면 회피도, 전면 진입도 아닌, 비대칭 하방 보호를 유지하면서 시나리오 전개를 지켜보는 것이 지금 이 불확실성에 대한 가장 정직한 대응이다.

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

> # CRA 보고서 Closing Aphorism **밸류에이션의 함정에서 벗어나는 것은 가격을 외면하는 것이 아니라, 가격이 말하지 않는 것을 듣는 것이다. 지금 우리가 직면한 것은 위험 자체가 아니라, 위험이 이미 가격에 담겨 있는지 아닌지를 판단하는 문제다.**

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