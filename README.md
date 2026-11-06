# Jachtwerf Bendie: demo (JUNEStudio)

A standalone concept site by JUNEStudio. See `DEMO_NOTES.md` for the concept, sources, image licences, tests and open items.

```bash
npm install
npm run dev      # http://localhost:3100
npm run build    # static export to out/
npm run start    # serve out/ on :3100
```

Deployed on Vercel as a Next.js project (static export to `out/`).

- Content and facts: `content/site.ts`
- Images: `public/media` (built by `python3 -I scripts/process_media.py <source dir>`; open-licence originals and `assets-src/credits.json` in `assets-src/`)
