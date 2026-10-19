'use client';

import { HalftoneCmyk, HalftoneCmykProps } from './halftone-cmyk';

export function HalftoneCmykExample(props: HalftoneCmykProps) {
  return <HalftoneCmyk style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
