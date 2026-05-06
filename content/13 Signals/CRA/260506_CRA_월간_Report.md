---
cra_label: Warning
cra_score: 71
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

# 🔴 종합 위험 알림 (CRA) 월간 리포트 — 2026-05-06

## 현재 시그널

- **CRA 점수: 71 / 100 (Warning)**
- **권고 현금 비중: 45%**
- 행동 가이드: beta 1+ 종목 / secular growth 일부 익절. TLT/Gold/USD hedging. (1969 / 2007 / Jun-2023 zone)

## Region 분해

| Region | Weight | Risk score | Status |
|---|---:|---:|:---|
| US | 40% | 0.676 | 🟡 Elevated |
| KR | 40% | 0.795 | 🟠 High |
| CROSS | 20% | 0.629 | 🟡 Elevated |
## Bucket 분해

| Region.Bucket | Weight | Risk score | Tier |
|---|---:|---:|:---|
| US.Macro | 25% | 0.613 | 🟡 Elevated |
| US.Credit | 25% | 0.210 | 🟢 Low |
| US.Valuation | 25% | 0.984 | 🔴 Extreme |
| US.Sentiment | 25% | 0.899 | 🔴 Extreme |
| KR.Valuation | 25% | 1.000 | 🔴 Extreme |
| KR.Speculation | 25% | 0.714 | 🟠 High |
| KR.Flow | 25% | 0.713 | 🟠 High |
| KR.FX_Macro | 25% | 0.752 | 🟠 High |
| CROSS.Liquidity | 50% | 0.756 | 🟠 High |
| CROSS.Volatility | 50% | 0.502 | 🟡 Elevated |
## Top contributors (14 indicators)

| Code | 한국어 | Risk | 효과 weight | Contribution | 현재값 | Threshold tier |
|---|---|---:|---:|---:|---:|:---|
| KOSPI_PBR | KOSPI 시장 PBR (cap-weighted) | 1.000 | 0.1000 | 10.00 | 2.12x | 🔴 severe |
| MARGIN_ADJ_CAPE | 美 Margin-adjusted CAPE (Hussman) | 0.984 | 0.1000 | 9.84 | 61.29x | 🔴 severe |
| KR_MARGIN_BAL_PCT | KOSPI 30일 평균 회전율 (거래대금/시총) | 0.714 | 0.1000 | 7.14 | 0.59% | 🟡 mild |
| KR_FOREIGN_12M_PCT | KOSPI 외국인 12M 누적 순매수 / 시총 (%) | 0.713 | 0.1000 | 7.13 | -0.73% | 🟡 mild |
| T10Y2Y | 美 10Y-2Y 국채금리 스프레드 | 0.613 | 0.1000 | 6.13 | 0.50%p | 🟢 normal |
| USDKRW | 원/달러 환율 | 0.977 | 0.0500 | 4.89 | 1462.80KRW | 🟠 moderate |
| MARGIN_DEBT_YOY | 美 NYSE 신용잔고 YoY 증가율 | 0.913 | 0.0500 | 4.57 | 38.69% | 🟠 moderate |
| CBOE_SKEW | 美 CBOE SKEW Index (꼬리위험 헤지수요) | 0.884 | 0.0500 | 4.42 | 138.74 | 🟡 mild |
| NFCI_LEVERAGE | Chicago Fed NFCI Nonfin Leverage Subindex | 0.837 | 0.0500 | 4.18 | -0.41σ | 🟢 normal |
| REAL_FED_FUNDS | 美 실질 정책금리 (Fed Funds - Core PCE YoY) | 0.676 | 0.0500 | 3.38 | 0.44% | 🟢 normal |
| VIX | VIX (S&P 500 옵션 변동성) | 0.537 | 0.0500 | 2.69 | 18.29 | 🟢 normal |
| KR_BBB_AAA_SPREAD | 韓 회사채 신용 스프레드 (AA- − 국고채 3y) | 0.526 | 0.0500 | 2.63 | 0.65%p | 🟢 normal |
| MOVE | MOVE Index (US Treasury 변동성) | 0.466 | 0.0500 | 2.33 | 76.78 | 🟢 normal |
| HY_OAS | 美 신용 스프레드 (Baa - 10Y Treasury) | 0.210 | 0.1000 | 2.10 | 1.69%p | 🟢 normal |

_효과 weight = region × bucket × within-bucket weight. Contribution = risk × weight × 100. NaN-aware bucket aggregation 적용 시 sum ≠ score 가능._
## 역사적 regime 비교

| Regime | 기간 | Peak | 현재 비교 |
|---|---|---:|---|
| 2007 GFC pre-peak | 2007-07-01 ~ 2007-12-31 | **78.5** (2007-08-18) | — |
| 2008 GFC trough | 2008-09-01 ~ 2009-03-31 | **76.3** (2008-11-11) | — |
| 2020 COVID | 2020-02-01 ~ 2020-04-30 | **84.9** (2020-03-31) | — |
| 2021-22 tightening | 2021-12-01 ~ 2022-12-31 | **73.1** (2022-03-11) | — |
| 2026 현재 | 2026-04-01 ~ 2026-05-06 | **78.8** (2026-04-01) | — |

_과거 regime 의 CRA peak 와 현재 비교. 2007 pre-peak ~78, 2008 trough ~76, 2020 COVID 84.9 가 reference._
## CRA 전략 backtest (1990-2026, monthly rebalance)

| Market | period | B&H DD | CRA DD | DD reduction | Sharpe (B&H → CRA) |
|---|---|---:|---:|---:|:---|
| KOSPI | 36.4y | -75.4% | -57.9% | **+17.49pp** | 0.284 → 0.335
| S&P 500 | 36.4y | -56.8% | -41.3% | **+15.53pp** | 0.575 → 0.639

_CRA cash allocation 전략은 CAGR 1-2pp 손해 보지만 risk-adjusted return (Sharpe) 우월._
## Spec audit (Bailey-LdP discipline)

- **Spec version**: 1.0.6
- **Spec hash**: `3f68224c3b313804546c3eaff166d957...`
- **Cumulative trials** (modification_log.md 기준): 6
- **Backtest gates** (last validation): G1 DSR p<1e-6 ✓ / G3 KOSPI +17.49pp / SP500 +15.53pp ✓ / G5 14/14 events ✓ / G6 진짜 FP runs 0.55/5y ✓

## 참고

- **데이터 소스**: FRED, Shiller (multpl + NIPA), FINRA, Yahoo (^SKEW/^MOVE), pykrx (KOSPI), ECOS (USD/KRW + 회사채)
- **Normalization**: max(rolling 10Y z-score, expanding percentile rank)
- **Look-ahead bias 회피**: publication_lag 적용 (e.g., NIPA +60d, Margin Debt +25d)
- **NaN-aware 가중평균**: 일부 indicator 결측 시 가중치 자동 재분배
- 전체 spec: `src/cra/config.py` v1.0.6
- Modification 이력: `docs/cra/modification_log.md`
- Regime 자세히: src/cra/backtest/events.py (17 events 카탈로그)

_본 리포트는 자동 생성. 이상 또는 spec 변경 필요시 dlonestar/code/investment-brain/src/cra._