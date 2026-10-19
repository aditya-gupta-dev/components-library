'use client';

import { GrainGradient, GrainGradientProps } from './grain-gradient';

export function GrainGradientExample(props: GrainGradientProps) {
  return <GrainGradient style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
