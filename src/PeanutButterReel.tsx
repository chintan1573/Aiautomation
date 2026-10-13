import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/playfair-display/600.css';
import {FPS, SHOTS, SHOT_FRAMES, TOTAL_FRAMES, TRANSITION_FRAMES} from './shots';

const ink = '#23170f';
const cream = '#fff9f0';
const orange = '#f3ad69';

const clamp = {extrapolateLeft: 'clamp' as const, extrapolateRight: 'clamp' as const};

type ShotSceneProps = {
  index: number;
};

const ShotScene: React.FC<ShotSceneProps> = ({index}) => {
  const shot = SHOTS[index];
  const frame = useCurrentFrame();
  const shotFrames = SHOT_FRAMES[index];
  const progress = Math.min(1, Math.max(0, frame / shotFrames));
  const scale = interpolate(progress, [0, 1], [1.035, 1.105], clamp);
  const panY = interpolate(progress, [0, 1], [0.8, -0.8], clamp);
  const intro = interpolate(frame, [0, 14], [0, 1], clamp);
  const titleLift = interpolate(frame, [0, 18], [28, 0], clamp);

  return (
    <AbsoluteFill style={{backgroundColor: ink, overflow: 'hidden'}}>
      <Img
        src={staticFile(shot.image)}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: shot.objectPosition,
          transform: `translateY(${panY}%) scale(${scale})`,
          transformOrigin: 'center center',
          filter: 'saturate(0.94) contrast(1.02)',
        }}
      />

      <AbsoluteFill
        style={{
          background:
            'linear-gradient(180deg, rgba(27,19,14,0.74) 0%, rgba(27,19,14,0.34) 18%, rgba(27,19,14,0.02) 43%, rgba(27,19,14,0.05) 58%, rgba(25,17,12,0.72) 78%, rgba(25,17,12,0.94) 100%)',
        }}
      />
      <AbsoluteFill
        style={{
          opacity: 0.12,
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 4px)',
          mixBlendMode: 'soft-light',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 70,
          left: 68,
          right: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: cream,
          opacity: intro,
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
          <span
            style={{
              display: 'inline-flex',
              width: 22,
              height: 22,
              borderRadius: 22,
              background: orange,
              boxShadow: '0 0 24px rgba(243,173,105,0.55)',
            }}
          />
          <span
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: 23,
              letterSpacing: 3.3,
              textTransform: 'uppercase',
            }}
          >
            BITE-SIZED / BIG ENERGY
          </span>
        </div>
        <span
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 500,
            fontSize: 22,
            letterSpacing: 1.8,
            color: 'rgba(255,249,240,0.82)',
          }}
        >
          {shot.number} <span style={{color: orange}}>/</span> 05
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 124,
          left: 68,
          right: 68,
          display: 'flex',
          gap: 10,
          opacity: intro,
        }}
      >
        {SHOTS.map((_, i) => {
          const segmentProgress = i < index ? 1 : i === index ? progress : 0;
          return (
            <div
              key={i}
              style={{
                height: 5,
                flex: 1,
                borderRadius: 8,
                overflow: 'hidden',
                background: 'rgba(255,249,240,0.32)',
              }}
            >
              <div
                style={{
                  width: `${segmentProgress * 100}%`,
                  height: '100%',
                  borderRadius: 8,
                  background: orange,
                }}
              />
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: 'absolute',
          top: 174,
          left: 68,
          right: 68,
          opacity: intro,
          transform: `translateY(${titleLift}px)`,
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '11px 16px 10px',
            borderRadius: 50,
            background: 'rgba(255,249,240,0.9)',
            color: ink,
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 600,
            fontSize: 18,
            letterSpacing: 2.4,
            textTransform: 'uppercase',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          }}
        >
          <span style={{color: '#a6532c'}}>NO-BAKE</span>
          <span style={{width: 4, height: 4, borderRadius: 4, background: '#a6532c'}} />
          <span>PROTEIN-PACKED</span>
        </div>

        <div
          style={{
            marginTop: 26,
            color: cream,
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 103,
            fontWeight: 600,
            lineHeight: 0.94,
            letterSpacing: -3.5,
            textShadow: '0 8px 35px rgba(0,0,0,0.26)',
            textTransform: 'uppercase',
          }}
        >
          <div>{shot.headline[0]}</div>
          <div style={{color: orange, fontStyle: 'italic'}}>{shot.headline[1]}</div>
        </div>

        <div
          style={{
            marginTop: 21,
            color: 'rgba(255,249,240,0.88)',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 600,
            fontSize: 20,
            letterSpacing: 3.2,
            textTransform: 'uppercase',
          }}
        >
          {shot.number} <span style={{color: orange}}> / </span> {shot.section}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 54,
          right: 54,
          bottom: 70,
          minHeight: 296,
          boxSizing: 'border-box',
          padding: '32px 38px 36px',
          borderRadius: 34,
          border: '1px solid rgba(255,249,240,0.24)',
          background: 'rgba(35,23,15,0.81)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(18px)',
          opacity: intro,
          transform: `translateY(${interpolate(frame, [0, 18], [34, 0], clamp)}px)`,
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 17}}>
          <span
            style={{
              width: 30,
              height: 3,
              borderRadius: 3,
              background: orange,
            }}
          />
          <span
            style={{
              color: orange,
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: 17,
              letterSpacing: 3.3,
              textTransform: 'uppercase',
            }}
          >
            VOICEOVER
          </span>
        </div>
        <div
          style={{
            color: cream,
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 500,
            fontSize: 35,
            lineHeight: 1.27,
            letterSpacing: -0.45,
            textWrap: 'pretty',
          }}
        >
          {shot.caption}
        </div>
      </div>

    </AbsoluteFill>
  );
};

export const PeanutButterReel: React.FC = () => {
  const timeline: React.ReactNode[] = [];

  SHOTS.forEach((shot, index) => {
    const sequenceDuration =
      SHOT_FRAMES[index] + (index < SHOTS.length - 1 ? TRANSITION_FRAMES : 0);
    timeline.push(
      <TransitionSeries.Sequence key={`shot-${shot.number}`} durationInFrames={sequenceDuration}>
        <ShotScene index={index} />
      </TransitionSeries.Sequence>,
    );
    if (index < SHOTS.length - 1) {
      timeline.push(
        <TransitionSeries.Transition
          key={`transition-${shot.number}`}
          timing={linearTiming({durationInFrames: TRANSITION_FRAMES})}
          presentation={fade()}
        />,
      );
    }
  });

  return (
    <AbsoluteFill style={{backgroundColor: ink}}>
      <TransitionSeries>{timeline}</TransitionSeries>
      <Audio
        src={staticFile('audio/voiceover.mp3')}
        volume={(audioFrame) =>
          interpolate(
            audioFrame,
            [0, Math.round(FPS * 0.22), TOTAL_FRAMES - Math.round(FPS * 0.28), TOTAL_FRAMES],
            [0, 1, 1, 0],
            clamp,
          )
        }
      />
    </AbsoluteFill>
  );
};
