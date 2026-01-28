<div align="center">

# alt-v

_measuring company innovation_

<p align="center">
  <a href="https://docs.python.org/3/">
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue">
  </a>
  <a href="https://www.postgresql.org/docs/">
    <img src="https://img.shields.io/badge/PostgreSQL-TimeSeries-blue" alt="Database">
  </a>
</p>

</div>

---

## Overview

**alt-v** is a data platform for **measuring and comparing innovation across technology companies**.

Innovation is hard to observe directly. alt-v approaches it as a **multi-signal problem**, combining inputs (R&D, talent), outputs (patents, products), and real-world execution signals (open-source activity, shipping velocity).

The system ingests public and semi-public data, normalizes it into a **time-aware data model**, and exposes company-level innovation metrics through an API and dashboard.

---

## Innovation Signals (Initial Scope)

alt-v treats innovation as a composite of independent but complementary signals:

- **R&D Investment**
  - R&D expense and intensity (R&D / revenue)
  - Source: SEC EDGAR filings

- **Patents & IP**
  - Patent counts, citations, and trends
  - Source: USPTO / Google Patents (planned)

- **Open-Source Activity**
  - Repository activity, contributors, stars, velocity
  - Source: GitHub API (planned)

- **Talent Signals**
  - Engineering and AI/ML hiring trends
  - Source: job postings / public profiles (planned)

Each signal is stored as a **time series**, enabling longitudinal analysis rather than static rankings.

---

## Architecture

**Containerization**
- Docker
- Docker Compose

**Backend**
- Python
- FastAPI

**Database Connection**
- psycopg2


**Database**
- PostgreSQL

**Frontend**
- Next.js
- Tailwind CSS
- shadcn/ui

**External APIs**
- SEC EDGAR API
- Additional public data sources (planned)

---

## Data Model Philosophy

alt-v is built around **temporal correctness**.

For each metric, the system tracks:
- `value` — the measured value
- `reference_date` — the period the value represents
- `publication_date` — when the data became publicly available
- `source` — where the data came from

This allows:
- Point-in-time analysis
- Backtesting innovation signals
- Avoiding lookahead bias

---

## Roadmap

### Phase 1: The Data Pipeline (Backend & Data Engineering)
**Focus: ingestion, normalization, and integrity**

- [ ] Integrate with SEC EDGAR API (R&D extraction from 10-Ks)
- [ ] Design and implement temporal PostgreSQL schema
- [ ] Company entity resolution (CIK ↔ ticker ↔ name)
- [ ] Basic ETL framework with idempotent jobs
- [ ] FastAPI endpoints for raw metrics

### Phase 2: Core Innovation Signals
- [ ] Patent ingestion and aggregation
- [ ] GitHub open-source metrics
- [ ] Signal normalization and scaling
- [ ] Composite innovation score (experimental)

### Phase 3: Dashboard & Analysis
- [ ] Company profile pages
- [ ] Time-series visualizations
- [ ] Peer comparisons
- [ ] Innovation momentum tracking

---

## Quick Start

```bash
git clone https://github.com/your-username/alt-v.git
cd alt-v

docker-compose up --build

