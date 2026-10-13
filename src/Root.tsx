import React from 'react';
import {Composition} from 'remotion';
import {PeanutButterReel} from './PeanutButterReel';
import {FPS, TOTAL_FRAMES, VIDEO_HEIGHT, VIDEO_WIDTH} from './shots';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="PeanutButterReel"
      component={PeanutButterReel}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={VIDEO_WIDTH}
      height={VIDEO_HEIGHT}
    />
  );
};
