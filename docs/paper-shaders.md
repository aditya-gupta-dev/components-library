# Paper Shaders component reference

Seven components downloaded from [paper-design/shaders](https://github.com/paper-design/shaders), matching the categories on [Paper Shaders](https://shaders.paper.design/).

Snapshot: version **0.0.81**, commit `43cd68db79fa0b1759f72ffc941b3238e2a3954c`. The [manifest](../app/components/paper-shaders/manifest.json) records upstream source links, checksums, dependencies, and local adaptations.

## Using these downloads

Each component lives under `app/components/paper-shaders/<slug>/` with its React implementation, upstream presets, and a registry example. The GLSL implementations and browser runtime live in [`_shared/core/`](../app/components/paper-shaders/_shared/core/); React mounting, image loading, and comparison utilities live in [`_shared/react/`](../app/components/paper-shaders/_shared/react/).

These are source downloads for reuse. Local imports resolve to the included runtime, so no Paper npm package is required. React 18 or 19 is the only external runtime dependency; this project already has React. Copy the entire `paper-shaders` directory when reusing these components so the shared imports remain available. Components are not mounted on the app homepage.

React entry points include `'use client'` for Next.js. Import the named component from its own file. Each file also exports its props type, `defaultPreset`, and named presets. Import presets from their individual modules to avoid duplicate names.

```tsx
import {
  MeshGradient,
  beachPreset,
} from '@/app/components/paper-shaders/mesh-gradient/mesh-gradient';

export default function Background() {
  return (
    <MeshGradient
      {...beachPreset.params}
      speed={0.2}
      style={{ width: '100%', height: 400 }}
    />
  );
}
```

All components need a nonzero rendered width and height and a browser supporting WebGL2. Supply dimensions through `style`, `className`, or the `width` and `height` props. Common controls include `speed` (`0` freezes animation), `frame`, `fit` (`contain`, `cover`, or `none`), `scale`, `rotation`, `originX`, `originY`, `offsetX`, `offsetY`, `worldWidth`, and `worldHeight`. Rendering controls include `minPixelRatio`, `maxPixelCount`, and `webGlContextAttributes`.

Image inputs accept URL strings or `HTMLImageElement` objects; use URL strings across a Next.js server/client boundary. Examples below assume you supply `/photo.jpg` and `/logo.svg` in your consuming app's `public/` directory. Remote images need suitable CORS headers. Heatmap and Liquid Metal process image inputs in the browser and also expose `suspendWhenProcessingImage`; wrap them in React `Suspense` if enabling that option.

The downloaded `*-example.tsx` files preserve the official registry examples' fixed, full-screen layout. Use the component directly for an inline card or section.

## Component index

| Category | Component | Implementation | Registry example |
| --- | --- | --- | --- |
| Image filters | Image Dithering | [image-dithering.tsx](../app/components/paper-shaders/image-dithering/image-dithering.tsx) | [example](../app/components/paper-shaders/image-dithering/image-dithering-example.tsx) |
| Image filters | Halftone Dots | [halftone-dots.tsx](../app/components/paper-shaders/halftone-dots/halftone-dots.tsx) | [example](../app/components/paper-shaders/halftone-dots/halftone-dots-example.tsx) |
| Image filters | Halftone CMYK | [halftone-cmyk.tsx](../app/components/paper-shaders/halftone-cmyk/halftone-cmyk.tsx) | [example](../app/components/paper-shaders/halftone-cmyk/halftone-cmyk-example.tsx) |
| Logo animations | Heatmap | [heatmap.tsx](../app/components/paper-shaders/heatmap/heatmap.tsx) | [example](../app/components/paper-shaders/heatmap/heatmap-example.tsx) |
| Logo animations | Liquid Metal | [liquid-metal.tsx](../app/components/paper-shaders/liquid-metal/liquid-metal.tsx) | [example](../app/components/paper-shaders/liquid-metal/liquid-metal-example.tsx) |
| Effects | Grain Gradient | [grain-gradient.tsx](../app/components/paper-shaders/grain-gradient/grain-gradient.tsx) | [example](../app/components/paper-shaders/grain-gradient/grain-gradient-example.tsx) |
| Effects | Mesh Gradient | [mesh-gradient.tsx](../app/components/paper-shaders/mesh-gradient/mesh-gradient.tsx) | [example](../app/components/paper-shaders/mesh-gradient/mesh-gradient-example.tsx) |

## Image filters

### Image Dithering (`image-dithering`)

[Interactive documentation](https://shaders.paper.design/image-dithering). Export: `ImageDithering`; type: `ImageDitheringProps`.

Converts an image into a limited-palette dithered pattern. Supply `image`. Controls: `type` (`random`, `2x2`, `4x4`, `8x8`), `size`, `colorSteps`, `originalColors`, `inverted`, `colorFront`, `colorBack`, and `colorHighlight`. Prefer `size`; `pxSize` is deprecated upstream. The `imageDitheringPresets` array contains all bundled presets.

```tsx
import { ImageDithering } from '@/app/components/paper-shaders/image-dithering/image-dithering';

<ImageDithering
  image="/photo.jpg"
  type="8x8"
  size={2}
  originalColors
  style={{ width: 480, height: 320 }}
/>
```

### Halftone Dots (`halftone-dots`)

[Interactive documentation](https://shaders.paper.design/halftone-dots). Export: `HalftoneDots`; type: `HalftoneDotsProps`.

Recreates images with a dot screen. Controls: `image`, `type` (`classic`, `gooey`, `holes`, `soft`), `grid` (`square`, `hex`), `size`, `radius`, `contrast`, `originalColors`, `inverted`, `colorFront`, `colorBack`, `grainMixer`, `grainOverlay`, and `grainSize`. Presets: `halftoneDotsPresets`.

```tsx
import { HalftoneDots } from '@/app/components/paper-shaders/halftone-dots/halftone-dots';

<HalftoneDots
  image="/photo.jpg"
  type="classic"
  grid="hex"
  size={8}
  style={{ width: 480, height: 320 }}
/>
```

### Halftone CMYK (`halftone-cmyk`)

[Interactive documentation](https://shaders.paper.design/halftone-cmyk). Export: `HalftoneCmyk`; type: `HalftoneCmykProps`.

Simulates cyan, magenta, yellow, and black print screens. Controls: `image`, `type` (`dots`, `ink`, `sharp`), `size`, `contrast`, `softness`, `gridNoise`, `grainSize`, `grainMixer`, `grainOverlay`, `colorBack`, and `colorC/M/Y/K`. Per-channel ink coverage uses `floodC/M/Y/K` and `gainC/M/Y/K`. Presets: `halftoneCmykPresets`.

```tsx
import { HalftoneCmyk } from '@/app/components/paper-shaders/halftone-cmyk/halftone-cmyk';

<HalftoneCmyk
  image="/photo.jpg"
  type="ink"
  size={8}
  style={{ width: 480, height: 320 }}
/>
```

## Logo animations

### Heatmap (`heatmap`)

[Interactive documentation](https://shaders.paper.design/heatmap). Export: `Heatmap`; type: `HeatmapProps`.

Animates a glowing color gradient through an input image. Supply `image`. Controls: `colors`, `colorBack`, `contour`, `angle`, `noise`, `innerGlow`, and `outerGlow`. Presets: `heatmapPresets`.

```tsx
import { Heatmap } from '@/app/components/paper-shaders/heatmap/heatmap';

<Heatmap
  image="/logo.svg"
  speed={0.5}
  colors={['#11206a', '#6bd7ff', '#ffe679', '#ff4c00']}
  style={{ width: 400, height: 400 }}
/>
```

### Liquid Metal (`liquid-metal`)

[Interactive documentation](https://shaders.paper.design/liquid-metal). Export: `LiquidMetal`; type: `LiquidMetalProps`.

Adds flowing metallic bands to a logo or built-in shape. Set `shape="none"` to use an input image; built-in shapes are `circle`, `daisy`, `diamond`, and `metaballs`. Controls: `colorBack`, `colorTint`, `repetition`, `shiftRed`, `shiftBlue`, `contour`, `softness`, `distortion`, and `angle`. Presets: `liquidMetalPresets`.

```tsx
import { LiquidMetal } from '@/app/components/paper-shaders/liquid-metal/liquid-metal';

<LiquidMetal
  image="/logo.svg"
  shape="none"
  speed={0.5}
  style={{ width: 400, height: 400 }}
/>
```

## Effects

### Grain Gradient (`grain-gradient`)

[Interactive documentation](https://shaders.paper.design/grain-gradient). Export: `GrainGradient`; type: `GrainGradientProps`.

Creates animated gradients with a grain texture. Controls: `colors`, `colorBack`, `softness`, `intensity`, `noise`, and `shape` (`wave`, `dots`, `truchet`, `corners`, `ripple`, `blob`, `sphere`). Presets: `grainGradientPresets`.

```tsx
import { GrainGradient } from '@/app/components/paper-shaders/grain-gradient/grain-gradient';

<GrainGradient
  colors={['#7300ff', '#eba8ff', '#00bfff']}
  shape="wave"
  speed={0.25}
  style={{ width: '100%', height: 400 }}
/>
```

### Mesh Gradient (`mesh-gradient`)

[Interactive documentation](https://shaders.paper.design/mesh-gradient). Export: `MeshGradient`; type: `MeshGradientProps`.

Blends moving color spots with organic distortion. Controls: `colors`, `distortion`, `swirl`, `grainMixer`, and `grainOverlay`. Presets: `meshGradientPresets`. This is the animated Mesh Gradient, distinct from upstream's Static Mesh Gradient.

```tsx
import { MeshGradient } from '@/app/components/paper-shaders/mesh-gradient/mesh-gradient';

<MeshGradient
  colors={['#5100ff', '#00ff80', '#ffcc00', '#ea00ff']}
  distortion={1}
  swirl={0.8}
  speed={0.2}
  style={{ width: '100%', height: 400 }}
/>
```

## Source and license

The shaders, processing algorithms, runtime, presets, and examples come from the pinned official repository. Local adaptations are limited to import paths, client directives, a generated core export barrel, and the CMYK example props type. GLSL and rendering behavior are preserved.

Paper Shaders uses Apache-2.0. The upstream [LICENSE](../app/components/paper-shaders/LICENSE) and [NOTICE](../app/components/paper-shaders/NOTICE) are included; preserve both when redistributing this source.
