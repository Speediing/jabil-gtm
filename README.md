# Jabil x SpaceXAI

Passworded GTM leave-behind for Jabil.

## What it is

Three sample sales workflows on one page. Each workflow moves through
scene-in-time frames, ends on the finished artifact, and includes an
interactive agent chat with the agent computer beside it.

The site keeps the approved template stack:

- Next.js 15.5
- Geist
- vgpu and WGSL
- `src/` application structure

## Brand source

The Jabil lockup loads the official SVG used by
[Jabil Investor Relations](https://investors.jabil.com/), which links back to
[jabil.com](https://www.jabil.com/). The exact official asset is
`https://s27.q4cdn.com/276975351/files/design/jabil-logo-fy21.svg`.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default password is
`land2expand`. Override it with `SITE_PASSWORD`.

## Krista clips

Download into `private/media/krista-clips/` from the GitHub release (served only through the passworded `/api/media/...` route):

```bash
gh release download krista-gtm-clips-720p-2026-08-26 \
  --repo Speediing/grok-bot-quotes \
  --dir private/media/krista-clips
```

## Deploy

Deploy under the `jasonwiker` Vercel team with `SITE_PASSWORD=land2expand`.
The production alias is `jabil-grokbot.vercel.app`.
