# CarbonTrade

CarbonTrade is now configured as a root-level **Next.js** app so Vercel can detect and deploy it without custom root-directory settings.

## Stack

- Frontend: Next.js App Router (`app/`)
- Backend APIs: Next.js route handlers (`app/api/`)
- Infra/deployment: Vercel (`vercel.json`)

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## API check

- `GET /api/health`

## Workspace notes

- `backend/` is retained for planning/reference artifacts only.
- Runtime backend logic should be implemented inside Next.js API routes under `app/api/`.
