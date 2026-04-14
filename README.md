# Authflow

AI-powered prior authorization and appeals automation for healthcare providers. 

Won the 3rd prize at the chicago startup weekend, April 10–12 2026.

**Live:** https://authflow-web.vercel.app/

---

## What it does

Authflow helps clinics and hospitals cut through the prior authorization (PA) process. It reads clinical notes, matches payer policies, fills out PA forms, and drafts appeal letters — all automatically.

---

## Repo structure

```
authflow/
├── backend/    Python / FastAPI — AI engines, OCR, RAG, PDF generation
├── frontend/   Next.js — dashboard, PA queue, appeals, payer management
└── site/       React / Vite — public landing page
```

---

## backend

FastAPI service that powers the AI features.

| Folder / File | What it does |
|---|---|
| `app/main.py` | App entry point, route registration |
| `app/models.py` | Request / response data models |
| `app/auth.py` | Auth helpers |
| `app/ocr_engine.py` | Extracts text from uploaded clinical docs |
| `app/rag_engine.py` | Retrieval-augmented generation over payer policies |
| `app/cpt_engine.py` | CPT / HCPC code lookup and validation |
| `app/form_generator.py` | Fills PA forms for each payer |
| `app/pdf_filler.py` | Writes filled forms to PDF |
| `app/pdf_generator.py` | Generates appeal letter PDFs |
| `app/appeal_generator.py` | Drafts appeal letters using LLM |
| `app/payer_config.py` | Per-payer rules and field mappings |
| `app/routes/` | API routes: `/pa`, `/appeal`, `/payers`, `/extract-note` |
| `data/payer_policies/` | Source PDFs for Aetna, BCBS, Cigna, Humana, UHC |
| `cpt codes/` | HCPC 2026 code files used for validation |
| `scripts/` | One-time ingestion scripts for policies and CPT codes |

**Stack:** Python, FastAPI, LangChain, Supabase, Railway

---

## frontend

Next.js app — the main product interface.

| Folder | What it does |
|---|---|
| `app/(auth)/` | Sign in, sign up, auth callback |
| `app/(dashboard)/` | All dashboard pages |
| `app/api/` | API route handlers (generate, appeal, extract, export) |
| `components/dashboard/` | PA table, queue, forms, appeal generator, sidebar |
| `components/marketing/` | Marketing page sections |
| `components/ui/` | Shared UI components |
| `hooks/` | React hooks (PA data, user, intersection) |
| `lib/` | Supabase client/server, Gemini, types, payer policies |

**Stack:** Next.js 15, TypeScript, Tailwind, Supabase

---

## site

Public landing page.

| Folder | What it does |
|---|---|
| `src/components/` | All landing page sections (hero, features, pricing, etc.) |
| `src/components/ui/` | shadcn/ui component library |
| `src/hooks/` | Utility hooks |
| `src/lib/` | Supabase, analytics, constants, utils |
| `src/pages/` | Page-level components |

**Stack:** React, Vite, TypeScript, Tailwind, shadcn/ui
