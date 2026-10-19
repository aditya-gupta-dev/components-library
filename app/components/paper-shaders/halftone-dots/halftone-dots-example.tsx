'use client';

import { HalftoneDots, HalftoneDotsProps } from './halftone-dots';

export function HalftoneDotsExample(props: HalftoneDotsProps) {
  return <HalftoneDots style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
