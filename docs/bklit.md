# Bklit UI chart reference

Downloaded from the public [Bklit registry](https://ui.bklit.com/r/registry.json) using the shadcn CLI: **17 charts**, **16 published chart examples**, and **Shimmering Text**, including all required registry source dependencies.

## Using these downloads

Each chart has an independent bundle under `app/components/bklit/<slug>/`, preserving registry install targets such as `components/charts/`, `components/`, and `lib/`. Helpers are repeated inside each bundle so you can copy one chart folder without borrowing files from another. Source imports have been rewritten to relative paths within each bundle, including registry files whose original relative imports referenced their pre-install source layout.

These are source downloads for reuse, following the existing BeUI and Kokonut UI collection structure. Npm dependencies are **recorded, not installed**. Before using a chart, install the dependencies listed below, retain the bundled helper files, and supply the consuming app's shadcn/Tailwind theme. Components are not mounted on the homepage. The [manifest](../app/components/bklit/manifest.json) records all source URLs, original and installed paths, dependencies, included registry items, and checksums.

The `@bklit` namespace is configured in [`components.json`](../components.json). Upstream install commands are provided for reference; running them installs into the consuming app's configured directories. To use these archived bundles, copy a bundle and install its listed npm dependencies instead.

Charts use React client components, Motion, and Visx as specified by their registry entries. Pass serializable data across a Next.js server/client boundary; create callback props and browser-driven live updates inside a client component. Use the included examples to see each chart's data shape, series composition, axes, and tooltip setup.

### Additional components

Shimmering Text is included both in the charts that require it and in a [standalone bundle](../app/components/bklit/shimmering-text/). It renders animated loading labels. Its npm dependencies are `motion`, `clsx`, and `tailwind-merge`. Other bundled helpers include chart context, animation, responsive sizing, series rendering, grid, axes, tooltips, legends, and utilities as required by each chart. No unrelated stat-card blocks are included.

### Quick start

After installing the dependency list for Line Chart, import its published example:

```tsx
import LineChartExample from '@/app/components/bklit/line-chart/examples/line-chart';

export default function Page() {
  return <LineChartExample />;
}
```

Registry `app/page.tsx` files are stored as `examples/<slug>.tsx` so they remain reusable examples without creating routes under the Next.js App Router. Profit/Loss Line has no separate registry example; use its implementation and [official documentation](https://bklit.com/docs/components/profit-loss-line) with the bundled Line Chart.

## Chart index

| Chart | Bundle | Use for |
| --- | --- | --- |
| Area Chart (`area-chart`) | [area-chart](../app/components/bklit/area-chart/) | A composable area chart with gradient fills and animations |
| Composed Chart (`composed-chart`) | [composed-chart](../app/components/bklit/composed-chart/) | Time-series chart composing Line, Area, and SeriesBar on one shared scale (Recharts ComposedChart-style) |
| Bar Chart (`bar-chart`) | [bar-chart](../app/components/bklit/bar-chart/) | A composable bar chart with horizontal/vertical orientations and animations |
| Line Chart (`line-chart`) | [line-chart](../app/components/bklit/line-chart/) | A composable line chart with multiple series support |
| Profit/Loss Line (`profit-loss-line`) | [profit-loss-line](../app/components/bklit/profit-loss-line/) | Sign-colored line segments for profit and loss on LineChart |
| Scatter Chart (`scatter-chart`) | [scatter-chart](../app/components/bklit/scatter-chart/) | A composable time-series scatter chart with offset rings, hover dimming, and animated enter |
| Live Line Chart (`live-line-chart`) | [live-line-chart](../app/components/bklit/live-line-chart/) | Real-time streaming line chart with smooth scrolling, crosshair, and animated axes |
| Candlestick Chart (`candlestick-chart`) | [candlestick-chart](../app/components/bklit/candlestick-chart/) | A composable OHLC candlestick chart with gradients, patterns, tooltips, and hover interactions |
| Pie Chart (`pie-chart`) | [pie-chart](../app/components/bklit/pie-chart/) | A composable pie chart with animations and customizable slices |
| Radar Chart (`radar-chart`) | [radar-chart](../app/components/bklit/radar-chart/) | A composable radar/spider chart with multiple data series |
| Ring Chart (`ring-chart`) | [ring-chart](../app/components/bklit/ring-chart/) | A composable donut/ring chart with progress indicators |
| Gauge (`gauge-chart`) | [gauge-chart](../app/components/bklit/gauge-chart/) | Notch-based radial or linear gauge with optional center label, patterns, and optional gradients |
| Heatmap Chart (`heatmap-chart`) | [heatmap-chart](../app/components/bklit/heatmap-chart/) | A contribution heatmap with animated cells and configurable level colors |
| Choropleth Map (`choropleth-chart`) | [choropleth-chart](../app/components/bklit/choropleth-chart/) | A geographic map chart with zoom, pan, and data visualization |
| Funnel Chart (`funnel-chart`) | [funnel-chart](../app/components/bklit/funnel-chart/) | An animated funnel chart with multi-layer halo rings, hover interactions, and staggered entrance animations |
| Sankey Diagram (`sankey-chart`) | [sankey-chart](../app/components/bklit/sankey-chart/) | A flow diagram for visualizing data transfers between nodes |
| Sunburst Chart (`sunburst-chart`) | [sunburst-chart](../app/components/bklit/sunburst-chart/) | A composable hierarchical sunburst chart with drill-down zoom and animated segments |

## Component details

### Area Chart (`area-chart`)

A composable area chart with gradient fills and animations.

[Documentation](https://bklit.com/docs/components/area-chart) · [Registry source](https://ui.bklit.com/r/area-chart.json)

Entry: [area-chart.tsx](../app/components/bklit/area-chart/components/charts/area-chart.tsx).

Entry exports: `AreaChartProps`, `AreaChart`.

Props are documented inline in `AreaChartProps`.

Published example: [examples/area-chart.tsx](../app/components/bklit/area-chart/examples/area-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@number-flow/react`, `@visx/curve@4.0.0`, `@visx/event@4.0.0`, `@visx/gradient@4.0.0`, `@visx/grid@4.0.0`, `@visx/responsive@4.0.0`, `@visx/scale@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `d3-array`, `d3-shape`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/area-chart`, `@bklit/chart-animation`, `@bklit/chart-context`, `@bklit/chart-parent-size`, `@bklit/chart-series`, `@bklit/chart-tooltip`, `@bklit/chart-utils`, `@bklit/grid`, `@bklit/shimmering-text`, `@bklit/utils`, `@bklit/x-axis`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/area-chart
```

### Composed Chart (`composed-chart`)

Time-series chart composing Line, Area, and SeriesBar on one shared scale (Recharts ComposedChart-style).

[Documentation](https://bklit.com/docs/components/composed-chart) · [Registry source](https://ui.bklit.com/r/composed-chart.json)

Entry: [composed-chart.tsx](../app/components/bklit/composed-chart/components/charts/composed-chart.tsx).

Entry exports: `ComposedChartProps`, `ComposedChart`.

Props are documented inline in `ComposedChartProps`.

Published example: [examples/composed-chart.tsx](../app/components/bklit/composed-chart/examples/composed-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@number-flow/react`, `@visx/curve@4.0.0`, `@visx/event@4.0.0`, `@visx/gradient@4.0.0`, `@visx/grid@4.0.0`, `@visx/responsive@4.0.0`, `@visx/scale@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `d3-array`, `d3-shape`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/area-chart`, `@bklit/chart-animation`, `@bklit/chart-context`, `@bklit/chart-parent-size`, `@bklit/chart-series`, `@bklit/chart-tooltip`, `@bklit/chart-utils`, `@bklit/composed-chart`, `@bklit/grid`, `@bklit/line-chart`, `@bklit/shimmering-text`, `@bklit/utils`, `@bklit/x-axis`, `@bklit/y-axis`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/composed-chart
```

### Bar Chart (`bar-chart`)

A composable bar chart with horizontal/vertical orientations and animations.

[Documentation](https://bklit.com/docs/components/bar-chart) · [Registry source](https://ui.bklit.com/r/bar-chart.json)

Entry: [bar-chart.tsx](../app/components/bklit/bar-chart/components/charts/bar-chart.tsx).

Entry exports: `BarOrientation`, `BarChartProps`, `BarChart`.

Props are documented inline in `BarChartProps`.

Published example: [examples/bar-chart.tsx](../app/components/bklit/bar-chart/examples/bar-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@number-flow/react`, `@visx/event@4.0.0`, `@visx/gradient@4.0.0`, `@visx/grid@4.0.0`, `@visx/responsive@4.0.0`, `@visx/scale@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `d3-array`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/bar-chart`, `@bklit/chart-animation`, `@bklit/chart-context`, `@bklit/chart-parent-size`, `@bklit/chart-tooltip`, `@bklit/chart-utils`, `@bklit/grid`, `@bklit/patterns`, `@bklit/utils`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/bar-chart
```

### Line Chart (`line-chart`)

A composable line chart with multiple series support.

[Documentation](https://bklit.com/docs/components/line-chart) · [Registry source](https://ui.bklit.com/r/line-chart.json)

Entry: [line-chart.tsx](../app/components/bklit/line-chart/components/charts/line-chart.tsx).

Entry exports: `LineChartProps`, `LineChart`.

Props are documented inline in `LineChartProps`.

Published example: [examples/line-chart.tsx](../app/components/bklit/line-chart/examples/line-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@number-flow/react`, `@visx/curve@4.0.0`, `@visx/event@4.0.0`, `@visx/grid@4.0.0`, `@visx/responsive@4.0.0`, `@visx/scale@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `d3-array`, `d3-shape`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/chart-animation`, `@bklit/chart-context`, `@bklit/chart-parent-size`, `@bklit/chart-series`, `@bklit/chart-tooltip`, `@bklit/chart-utils`, `@bklit/grid`, `@bklit/line-chart`, `@bklit/shimmering-text`, `@bklit/utils`, `@bklit/x-axis`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/line-chart
```

### Profit/Loss Line (`profit-loss-line`)

Sign-colored line segments for profit and loss on LineChart.

[Documentation](https://bklit.com/docs/components/profit-loss-line) · [Registry source](https://ui.bklit.com/r/profit-loss-line.json)

Entry: [profit-loss-line.tsx](../app/components/bklit/profit-loss-line/components/charts/profit-loss-line.tsx).

Entry exports: `PROFIT_LOSS_POSITIVE_COLOR`, `PROFIT_LOSS_NEGATIVE_COLOR`, `profitLossColor`, `PROFIT_LOSS_TOOLTIP_LABEL_FALLBACK`, `resolveProfitLossTooltipLabel`, `ProfitLossLineProps`, `ProfitLossLine`.

Props are documented inline in `ProfitLossLineProps`.

Npm dependencies (including bundled helpers): `@base-ui/react`, `@number-flow/react`, `@visx/curve@4.0.0`, `@visx/event@4.0.0`, `@visx/grid@4.0.0`, `@visx/responsive@4.0.0`, `@visx/scale@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `d3-array`, `d3-shape`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/chart-animation`, `@bklit/chart-context`, `@bklit/chart-parent-size`, `@bklit/chart-series`, `@bklit/chart-tooltip`, `@bklit/chart-utils`, `@bklit/grid`, `@bklit/legend`, `@bklit/line-chart`, `@bklit/profit-loss-line`, `@bklit/shimmering-text`, `@bklit/utils`, `@bklit/x-axis`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/profit-loss-line
```

### Scatter Chart (`scatter-chart`)

A composable time-series scatter chart with offset rings, hover dimming, and animated enter.

[Documentation](https://bklit.com/docs/components/scatter-chart) · [Registry source](https://ui.bklit.com/r/scatter-chart.json)

Entry: [scatter-chart.tsx](../app/components/bklit/scatter-chart/components/charts/scatter-chart.tsx).

Entry exports: `ScatterChartProps`, `ScatterChart`.

Props are documented inline in `ScatterChartProps`.

Published example: [examples/scatter-chart.tsx](../app/components/bklit/scatter-chart/examples/scatter-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@number-flow/react`, `@visx/event@4.0.0`, `@visx/grid@4.0.0`, `@visx/responsive@4.0.0`, `@visx/scale@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `d3-array`, `d3-scale`, `d3-shape`, `motion`, `react-use-measure`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/chart-animation`, `@bklit/chart-context`, `@bklit/chart-series`, `@bklit/chart-tooltip`, `@bklit/chart-utils`, `@bklit/grid`, `@bklit/scatter-chart`, `@bklit/utils`, `@bklit/x-axis`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/scatter-chart
```

### Live Line Chart (`live-line-chart`)

Real-time streaming line chart with smooth scrolling, crosshair, and animated axes.

[Documentation](https://bklit.com/docs/components/live-line-chart) · [Registry source](https://ui.bklit.com/r/live-line-chart.json)

Entry: [live-line-chart.tsx](../app/components/bklit/live-line-chart/components/charts/live-line-chart.tsx).

Entry exports: `LiveLinePoint`, `LiveLineChartProps`, `LiveLineChart`.

Props are documented inline in `LiveLineChartProps`.

Published example: [examples/live-line-chart.tsx](../app/components/bklit/live-line-chart/examples/live-line-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@number-flow/react`, `@visx/curve@4.0.0`, `@visx/event@4.0.0`, `@visx/responsive@4.0.0`, `@visx/scale@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `d3-array`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/chart-context`, `@bklit/chart-parent-size`, `@bklit/chart-tooltip`, `@bklit/chart-utils`, `@bklit/live-line-chart`, `@bklit/utils`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/live-line-chart
```

### Candlestick Chart (`candlestick-chart`)

A composable OHLC candlestick chart with gradients, patterns, tooltips, and hover interactions.

[Documentation](https://bklit.com/docs/components/candlestick-chart) · [Registry source](https://ui.bklit.com/r/candlestick-chart.json)

Entry: [candlestick-chart.tsx](../app/components/bklit/candlestick-chart/components/charts/candlestick-chart.tsx).

Entry exports: `OHLCDataPoint`, `CandlestickChartProps`, `CandlestickChart`.

Props are documented inline in `CandlestickChartProps`.

Published example: [examples/candlestick-chart.tsx](../app/components/bklit/candlestick-chart/examples/candlestick-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@number-flow/react`, `@visx/event@4.0.0`, `@visx/grid@4.0.0`, `@visx/responsive@4.0.0`, `@visx/scale@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `d3-array`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/candlestick-chart`, `@bklit/chart-animation`, `@bklit/chart-context`, `@bklit/chart-parent-size`, `@bklit/chart-tooltip`, `@bklit/chart-utils`, `@bklit/grid`, `@bklit/utils`, `@bklit/x-axis`, `@bklit/y-axis`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/candlestick-chart
```

### Pie Chart (`pie-chart`)

A composable pie chart with animations and customizable slices.

[Documentation](https://bklit.com/docs/components/pie-chart) · [Registry source](https://ui.bklit.com/r/pie-chart.json)

Entry: [pie-chart.tsx](../app/components/bklit/pie-chart/components/charts/pie-chart.tsx).

Entry exports: `DEFAULT_HOVER_OFFSET`, `PieChartProps`, `PieChart`.

Props are documented inline in `PieChartProps`.

Published example: [examples/pie-chart.tsx](../app/components/bklit/pie-chart/examples/pie-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@number-flow/react`, `@visx/group@4.0.0`, `@visx/responsive@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `d3-shape`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/chart-animation`, `@bklit/chart-parent-size`, `@bklit/pie-chart`, `@bklit/utils`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/pie-chart
```

### Radar Chart (`radar-chart`)

A composable radar/spider chart with multiple data series.

[Documentation](https://bklit.com/docs/components/radar-chart) · [Registry source](https://ui.bklit.com/r/radar-chart.json)

Entry: [radar-chart.tsx](../app/components/bklit/radar-chart/components/charts/radar-chart.tsx).

Entry exports: `RadarChartProps`, `RadarChart`.

Props are documented inline in `RadarChartProps`.

Published example: [examples/radar-chart.tsx](../app/components/bklit/radar-chart/examples/radar-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@visx/group@4.0.0`, `@visx/responsive@4.0.0`, `@visx/scale@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `d3-shape`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/chart-animation`, `@bklit/chart-parent-size`, `@bklit/radar-chart`, `@bklit/utils`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/radar-chart
```

### Ring Chart (`ring-chart`)

A composable donut/ring chart with progress indicators.

[Documentation](https://bklit.com/docs/components/ring-chart) · [Registry source](https://ui.bklit.com/r/ring-chart.json)

Entry: [ring-chart.tsx](../app/components/bklit/ring-chart/components/charts/ring-chart.tsx).

Entry exports: `RingChartProps`, `RingChart`.

Props are documented inline in `RingChartProps`.

Published example: [examples/ring-chart.tsx](../app/components/bklit/ring-chart/examples/ring-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@number-flow/react`, `@visx/group@4.0.0`, `@visx/responsive@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/chart-animation`, `@bklit/chart-parent-size`, `@bklit/ring-chart`, `@bklit/utils`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/ring-chart
```

### Gauge (`gauge-chart`)

Notch-based radial or linear gauge with optional center label, patterns, and optional gradients.

[Documentation](https://bklit.com/docs/components/gauge-chart) · [Registry source](https://ui.bklit.com/r/gauge-chart.json)

Entry: [gauge.tsx](../app/components/bklit/gauge-chart/components/charts/gauge.tsx).

Entry exports: `GaugeOrientation`, `GaugeProps`, `Gauge`.

Props are documented inline in `GaugeProps`.

Published example: [examples/gauge-chart.tsx](../app/components/bklit/gauge-chart/examples/gauge-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@number-flow/react`, `@visx/responsive@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `d3-shape`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/chart-parent-size`, `@bklit/gauge-chart`, `@bklit/utils`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/gauge-chart
```

### Heatmap Chart (`heatmap-chart`)

A contribution heatmap with animated cells and configurable level colors.

[Documentation](https://bklit.com/docs/components/heatmap-chart) · [Registry source](https://ui.bklit.com/r/heatmap-chart.json)

Entry: [heatmap-chart.tsx](../app/components/bklit/heatmap-chart/components/charts/heatmap/heatmap-chart.tsx).

Entry exports: `HeatmapLayout`, `HeatmapChartProps`, `HeatmapChart`.

Props are documented inline in `HeatmapChartProps`.

Published example: [examples/heatmap-chart.tsx](../app/components/bklit/heatmap-chart/examples/heatmap-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@number-flow/react`, `@visx/event@4.0.0`, `@visx/group@4.0.0`, `@visx/heatmap@4.0.0`, `@visx/responsive@4.0.0`, `@visx/scale@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `d3-array`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/background`, `@bklit/chart-animation`, `@bklit/chart-context`, `@bklit/chart-tooltip`, `@bklit/chart-utils`, `@bklit/heatmap-chart`, `@bklit/patterns`, `@bklit/shimmering-text`, `@bklit/utils`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/heatmap-chart
```

### Choropleth Map (`choropleth-chart`)

A geographic map chart with zoom, pan, and data visualization.

[Documentation](https://bklit.com/docs/components/choropleth-chart) · [Registry source](https://ui.bklit.com/r/choropleth-chart.json)

Entry: [choropleth-chart.tsx](../app/components/bklit/choropleth-chart/components/charts/choropleth/choropleth-chart.tsx).

Entry exports: `ChoroplethChartProps`, `ChoroplethChart`.

Props are documented inline in `ChoroplethChartProps`.

Published example: [examples/choropleth-chart.tsx](../app/components/bklit/choropleth-chart/examples/choropleth-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@number-flow/react`, `@types/geojson`, `@visx/event@4.0.0`, `@visx/geo@4.0.0`, `@visx/responsive@4.0.0`, `@visx/scale@4.0.0`, `@visx/zoom@4.0.0`, `clsx`, `d3-array`, `d3-geo`, `motion`, `tailwind-merge`, `topojson-client`.

Required registry sources included in this bundle: `@bklit/chart-animation`, `@bklit/chart-context`, `@bklit/chart-parent-size`, `@bklit/chart-tooltip`, `@bklit/chart-utils`, `@bklit/choropleth-chart`, `@bklit/utils`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/choropleth-chart
```

### Funnel Chart (`funnel-chart`)

An animated funnel chart with multi-layer halo rings, hover interactions, and staggered entrance animations.

[Documentation](https://bklit.com/docs/components/funnel-chart) · [Registry source](https://ui.bklit.com/r/funnel-chart.json)

Entry: [funnel-chart.tsx](../app/components/bklit/funnel-chart/components/charts/funnel-chart.tsx).

Entry exports: `FunnelGradientStop`, `FunnelStage`, `FunnelChartProps`, `FunnelChart`.

Props are documented inline in `FunnelChartProps`.

Published example: [examples/funnel-chart.tsx](../app/components/bklit/funnel-chart/examples/funnel-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@visx/shape@4.0.0`, `clsx`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/chart-animation`, `@bklit/chart-utils`, `@bklit/funnel-chart`, `@bklit/utils`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/funnel-chart
```

### Sankey Diagram (`sankey-chart`)

A flow diagram for visualizing data transfers between nodes.

[Documentation](https://bklit.com/docs/components/sankey-chart) · [Registry source](https://ui.bklit.com/r/sankey-chart.json)

Entry: [sankey-chart.tsx](../app/components/bklit/sankey-chart/components/charts/sankey/sankey-chart.tsx).

Entry exports: `SankeyData`, `SankeyChartProps`, `SankeyChart`.

Props are documented inline in `SankeyChartProps`.

Published example: [examples/sankey-chart.tsx](../app/components/bklit/sankey-chart/examples/sankey-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `@number-flow/react`, `@visx/event@4.0.0`, `@visx/gradient@4.0.0`, `@visx/responsive@4.0.0`, `@visx/sankey@4.0.0`, `@visx/scale@4.0.0`, `@visx/shape@4.0.0`, `clsx`, `d3-array`, `d3-sankey`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/chart-animation`, `@bklit/chart-context`, `@bklit/chart-parent-size`, `@bklit/chart-tooltip`, `@bklit/chart-utils`, `@bklit/sankey-chart`, `@bklit/utils`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/sankey-chart
```

### Sunburst Chart (`sunburst-chart`)

A composable hierarchical sunburst chart with drill-down zoom and animated segments.

[Documentation](https://bklit.com/docs/components/sunburst-chart) · [Registry source](https://ui.bklit.com/r/sunburst-chart.json)

Entry: [sunburst-chart.tsx](../app/components/bklit/sunburst-chart/components/charts/sunburst-chart.tsx).

Entry exports: `SunburstChartProps`, `SunburstChart`.

Props are documented inline in `SunburstChartProps`.

Published example: [examples/sunburst-chart.tsx](../app/components/bklit/sunburst-chart/examples/sunburst-chart.tsx). Its local chart index exposes the pieces used in the example.

Npm dependencies (including bundled helpers): `clsx`, `motion`, `tailwind-merge`.

Required registry sources included in this bundle: `@bklit/chart-animation`, `@bklit/sunburst-chart`, `@bklit/utils`.

Upstream install:

```bash
bunx --bun shadcn@latest add @bklit/sunburst-chart
```

## Source and license

Registry contents were retrieved using `bunx --bun shadcn@latest view`. Component rendering and styles are preserved; local source import paths were adapted for isolated bundles. The chart components are MIT licensed; preserve the included [LICENSE](../app/components/bklit/LICENSE) when redistributing.
