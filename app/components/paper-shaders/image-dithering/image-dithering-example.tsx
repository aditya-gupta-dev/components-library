'use client';

import { ImageDithering, ImageDitheringProps } from './image-dithering';

export function ImageDitheringExample(props: ImageDitheringProps) {
  return <ImageDithering style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
