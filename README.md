# Peanut Butter Protein Cheesecake Bites — Remotion Reel

A 9:16, 1080 × 1920, ~34-second recipe reel built with [Remotion](https://www.remotion.dev/). It has five editorial shots, gentle push-in motion, warm food-photo grading, animated chapter progress, cross-dissolves, and the supplied voiceover as timed captions and audio.

## Preview and render

```bash
npm install
npm run dev
```

Open the `PeanutButterReel` composition in Remotion Studio. To render the MP4:

```bash
npm run render
```

The export is written to `deliverables/peanut-butter-protein-cheesecake.mp4`. Run `npm run typecheck` for a TypeScript check.

## Project contents

- `src/PeanutButterReel.tsx` — animated composition and transitions
- `src/shots.ts` — shot order, timing, labels, captions, and image paths
- `public/images/` — generated vertical stills used as motion-photo keyframes
- `public/audio/voiceover.mp3` — selected English voiceover
- `docs/storyboard.md` — the original Omni Flash prompts and narration

The current reel uses photorealistic still keyframes with slow camera pushes, not generated moving footage. Replace the corresponding images under `public/images/` with your Omni Flash stills, or adapt each scene to use video clips, while keeping the audio and timing in `src/shots.ts`.
