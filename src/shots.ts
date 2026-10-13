export const FPS = 30;
export const VIDEO_WIDTH = 1080;
export const VIDEO_HEIGHT = 1920;

// The narration is 33.776 seconds. These per-shot lengths follow the five voiceover beats.
export const SHOT_FRAMES = [185, 223, 223, 185, 198] as const;
export const TRANSITION_FRAMES = 12;
export const TOTAL_FRAMES = SHOT_FRAMES.reduce((sum, frames) => sum + frames, 0);

export type Shot = {
  number: string;
  section: string;
  headline: [string, string];
  caption: string;
  image: string;
  objectPosition: string;
};

export const SHOTS: Shot[] = [
  {
    number: '01',
    section: 'THE HOOK',
    headline: ['CHEESECAKE,', 'UPGRADED.'],
    caption:
      'Want cheesecake with a serious protein upgrade? These peanut butter cheesecake bites are ridiculously easy.',
    image: 'images/shot-01-hook.jpg',
    objectPosition: '50% 52%',
  },
  {
    number: '02',
    section: 'THE ASSEMBLY',
    headline: ['BUILD A', 'BISCUIT BASE'],
    caption:
      'Make a quick biscuit base, then mix Greek yogurt, protein powder, cream cheese, and peanut butter until smooth.',
    image: 'images/shot-02-assembly.jpg',
    objectPosition: '50% 50%',
  },
  {
    number: '03',
    section: 'THE SWIRL',
    headline: ['MIX. FILL.', 'SWIRL.'],
    caption:
      'Fill the cups, add a little peanut butter on top, then give it a quick swirl. That’s it.',
    image: 'images/shot-03-setting.jpg',
    objectPosition: '50% 50%',
  },
  {
    number: '04',
    section: 'THE PLATING',
    headline: ['CHILL. THEN', 'FINISH.'],
    caption:
      'After chilling until firm, pop them out and finish with peanut butter and crushed peanuts.',
    image: 'images/shot-04-plating.jpg',
    objectPosition: '50% 52%',
  },
  {
    number: '05',
    section: 'THE BITE',
    headline: ['THE FIRST', 'BITE.'],
    caption:
      'Creamy, peanut-buttery, and packed with protein. Honestly, this might be my new favorite cheesecake bite.',
    image: 'images/shot-05-bite.jpg',
    objectPosition: '50% 49%',
  },
];
