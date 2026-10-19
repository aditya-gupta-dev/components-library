'use client';

import { MeshGradient, MeshGradientProps } from './mesh-gradient';

export function MeshGradientExample(props: MeshGradientProps) {
  return <MeshGradient style={{ position: 'fixed', width: '100%', height: '100%' }} {...props} />;
}
