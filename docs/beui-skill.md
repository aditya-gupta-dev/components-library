# BeUI component reference

Downloaded using the BeUI MCP. Contains all 107 components in its React/Next.js catalog (motion, charts, agents, and blocks).

## Using these downloads

Each component has its own folder under `app/components/beui/<slug>/`. All files returned by the MCP are preserved, including shared utilities, related components, and previews. Separate folders preserve differences between the dependency snapshots returned for different components.

These are upstream source downloads, not installed app features. Before using a component, install its listed dependencies and map its original `@/components/*` and `@/lib/*` imports to the copied files (or relocate them into the consuming app). Preserve any relative imports. Components also expect the upstream Tailwind theme tokens. The manifest records every downloaded file, dependency list, source URL, and upstream install command.

React Native components are a separate MCP catalog and are not included in this Next.js collection.

## Component index

Paths below are relative to the repository root. The component folder contains its full source bundle; the entry files identify the component implementation.

### motion

| Component | Downloaded path | Use for |
| --- | --- | --- |
| Animated Alert (`alert`) | [`app/components/beui/alert/`](../app/components/beui/alert/) | Composable feedback with smooth transitions |
| Animated Collapsible (`collapsible`) | [`app/components/beui/collapsible/`](../app/components/beui/collapsible/) | Expandable content with a smooth reveal |
| Aspect Ratio (`aspect-ratio`) | [`app/components/beui/aspect-ratio/`](../app/components/beui/aspect-ratio/) | Responsive media with smooth aspect ratio transitions |
| Arc Picker (`arc-picker`) | [`app/components/beui/arc-picker/`](../app/components/beui/arc-picker/) | Radial text picker with top, bottom, left or right curves, smooth wheel movement and live selection on each scroll step |
| Sortable List (`sortable-stack`) | [`app/components/beui/sortable-stack/`](../app/components/beui/sortable-stack/) | Composable sortable list with group, item, drag handle, content and undo parts, plus a shared state hook |
| Image Viewer (`image-viewer`) | [`app/components/beui/image-viewer/`](../app/components/beui/image-viewer/) | A composable React image viewer for galleries and attachment previews, with animated lightbox variants, custom… |
| Date Range Picker (`date-range-picker`) | [`app/components/beui/date-range-picker/`](../app/components/beui/date-range-picker/) | Composable date range picker with root, trigger, popover content, calendar, header, grid, summary, footer, clear and… |
| Card (`card`) | [`app/components/beui/card/`](../app/components/beui/card/) | Composable card with header, title, description, action, content and footer parts |
| Color Picker (`color-picker`) | [`app/components/beui/color-picker/`](../app/components/beui/color-picker/) | Composable color picker whose trigger chip morphs into the saturation and brightness area |
| Animated Color Selector (`color-selector`) | [`app/components/beui/color-selector/`](../app/components/beui/color-selector/) | Composable color swatches with a spring-gliding selection ring, press feedback, native radio keyboard navigation,… |
| Animated Breadcrumb (`breadcrumb`) | [`app/components/beui/breadcrumb/`](../app/components/beui/breadcrumb/) | Composable breadcrumb navigation with soft path transitions, a hoverable overflow dropdown for long trails, custom… |
| Tilt Card (`tilt-card`) | [`app/components/beui/tilt-card/`](../app/components/beui/tilt-card/) | 3D perspective tilt on hover with cursor-tracked glare |
| Button (`button`) | [`app/components/beui/button/`](../app/components/beui/button/) | Spring-pressed Button plus StatefulButton, MagneticButton, and MetallicButton variants |
| Animated CTA Buttons (`expanding-arrow-button`) | [`app/components/beui/expanding-arrow-button/`](../app/components/beui/expanding-arrow-button/) | Expressive call-to-action buttons with expanding, hold, and slide interactions |
| Expandable Control (`expandable-control`) | [`app/components/beui/expandable-control/`](../app/components/beui/expandable-control/) | Click-to-expand button and chip controls that reveal a label or trailing action through spring layout continuity |
| Adaptive Stepper (`adaptive-stepper`) | [`app/components/beui/adaptive-stepper/`](../app/components/beui/adaptive-stepper/) | Composable numeric stepper whose fixed footprint adapts at its minimum and maximum while the value rolls between steps |
| Marquee (`marquee`) | [`app/components/beui/marquee/`](../app/components/beui/marquee/) | Infinite horizontal or vertical scroll with pause-on-hover |
| Tabs (`tabs`) | [`app/components/beui/tabs/`](../app/components/beui/tabs/) | Pill, segment or underline tabs with a spring layoutId indicator and optional icons |
| Switch (`switch`) | [`app/components/beui/switch/`](../app/components/beui/switch/) | Toggle with a spring-driven thumb and press feedback |
| Input (`input`) | [`app/components/beui/input/`](../app/components/beui/input/) | Text input with label, left/right icons, optional stable error row, error shake and success check draw |
| Select (`select`) | [`app/components/beui/select/`](../app/components/beui/select/) | Composable select primitives whose panel unfolds out of the trigger on one spring and pulls away into its own pill,… |
| Combobox (`combobox`) | [`app/components/beui/combobox/`](../app/components/beui/combobox/) | Searchable combobox with a morphing portal, grouped filtering, keyboard navigation, and controlled or uncontrolled state |
| Multi Select (`multi-select`) | [`app/components/beui/multi-select/`](../app/components/beui/multi-select/) | Composable multi-select primitives with searchable options, removable animated tokens, and a morphing… |
| Checkbox (`checkbox`) | [`app/components/beui/checkbox/`](../app/components/beui/checkbox/) | Form choice control with a draw-on checkmark, spring press feedback and indeterminate state support |
| Radio Group (`radio`) | [`app/components/beui/radio/`](../app/components/beui/radio/) | Single-select choice control with a gliding layoutId indicator dot and spring press feedback |
| Bottom Sheet (`bottom-sheet`) | [`app/components/beui/bottom-sheet/`](../app/components/beui/bottom-sheet/) | Vaul-inspired draggable bottom sheet with snap points, inertia and glass surface |
| Pull to Refresh (`pull-to-refresh`) | [`app/components/beui/pull-to-refresh/`](../app/components/beui/pull-to-refresh/) | Native-feeling pull-to-refresh container with drag resistance, threshold feedback and async refresh handling |
| Shared Layout Background (`shared-layout-bg`) | [`app/components/beui/shared-layout-bg/`](../app/components/beui/shared-layout-bg/) | A pill that glides between hovered items via motion's shared layout, with blur enter/exit |
| Bounce Sidebar (`bounce-sidebar`) | [`app/components/beui/bounce-sidebar/`](../app/components/beui/bounce-sidebar/) | A vertical sidebar whose active dot jumps between destinations on a curved, spring-loaded path |
| Animated Sidebar (`animated-sidebar`) | [`app/components/beui/animated-sidebar/`](../app/components/beui/animated-sidebar/) | A composable application sidebar with morphing nested navigation that folds into an animated icon rail on desktop… |
| File Tree (`file-tree`) | [`app/components/beui/file-tree/`](../app/components/beui/file-tree/) | Composable file and folder primitives with springing branches, a gliding selection, and complete keyboard navigation |
| Preview Rail (`preview-rail`) | [`app/components/beui/preview-rail/`](../app/components/beui/preview-rail/) | Codex app-inspired navigation rail with compact ticks that form a hover pyramid and reveal a floating destination… |
| Dock (`dock`) | [`app/components/beui/dock/`](../app/components/beui/dock/) | macOS-style dock with grouped actions and a gliding active pill |
| Tooltip (`tooltip`) | [`app/components/beui/tooltip/`](../app/components/beui/tooltip/) | Composable hover, focus and tap tooltip with a subtle scale and fade, collision-aware side and alignment, an… |
| Animated Context Menu (`context-menu`) | [`app/components/beui/context-menu/`](../app/components/beui/context-menu/) | Composable context-menu primitives with a pointer-origin clip morph, a gliding active row, checkbox and radio… |
| Popover (`popover`) | [`app/components/beui/popover/`](../app/components/beui/popover/) | Gooey popover whose panel oozes out of the trigger through an SVG goo filter with a liquid neck that stretches and… |
| Morphing Modal (`morphing-modal`) | [`app/components/beui/morphing-modal/`](../app/components/beui/morphing-modal/) | Family-app-style modal |
| Center Morph Modal (`center-morph-modal`) | [`app/components/beui/center-morph-modal/`](../app/components/beui/center-morph-modal/) | A composable modal whose full-size surface unfolds from its exact center toward every edge, then folds back the same… |
| Text Animation (`text-animation`) | [`app/components/beui/text-animation/`](../app/components/beui/text-animation/) | Animated text primitives for spring reveals, chromatic sweeps, shimmer loading states, letter-cascade swaps and… |
| Number Animation (`number`) | [`app/components/beui/number/`](../app/components/beui/number/) | Animated number primitives for count-up values, rolling tickers, and fixed-slot digit swaps |
| Animated Badge (`animated-badge`) | [`app/components/beui/animated-badge/`](../app/components/beui/animated-badge/) | Status badge with animated state icons, pulse feedback and compact size variants |
| Action Swap (`action-swap`) | [`app/components/beui/action-swap/`](../app/components/beui/action-swap/) | CTA button and slot primitives for swapping text and icons with blur motion |
| Animated Toast Stack (`animated-toast-stack`) | [`app/components/beui/animated-toast-stack/`](../app/components/beui/animated-toast-stack/) | Stacked toasts with status morphs, swipe dismissal, actions and layout-aware motion |
| Theme Toggle (`theme-toggle`) | [`app/components/beui/theme-toggle/`](../app/components/beui/theme-toggle/) | Theme toggle button that repaints the whole page through the View Transition API — a rectangle or circle clip-path… |
| Bouncy Accordion (`bouncy-accordion`) | [`app/components/beui/bouncy-accordion/`](../app/components/beui/bouncy-accordion/) | Single-open accordion with weighted spring layout, icon rows and reduced-motion-safe content reveals |
| Drawer (`drawer`) | [`app/components/beui/drawer/`](../app/components/beui/drawer/) | Side panel that slides in from the left or right with a spring, backdrop blur, body scroll lock and esc-to-close |
| Scroll Animation (`scroll-animation`) | [`app/components/beui/scroll-animation/`](../app/components/beui/scroll-animation/) | Scroll-driven motion: a Lenis smooth-scroll provider and a reading-progress indicator that reads from it |
| Range Slider (`range-slider`) | [`app/components/beui/range-slider/`](../app/components/beui/range-slider/) | Slider with tick dots and a vertical-bar thumb that bounces as it lands on each step |
| Wheel Picker (`wheel-picker`) | [`app/components/beui/wheel-picker/`](../app/components/beui/wheel-picker/) | iOS-style picker wheel: a 3D drum on native momentum scroll that snaps to the nearest notch, with wheel, drag and… |
| Table (`table`) | [`app/components/beui/table/`](../app/components/beui/table/) | Virtualized data table that stays smooth at 10k+ rows, with sortable headers, row selection, column resize and… |
| Shader Background (`shader-background`) | [`app/components/beui/shader-background/`](../app/components/beui/shader-background/) | Canvas shader backgrounds (mesh gradient, grain, warp, waves, voronoi, dot orbit and more) with a single typed… |
| Cylinder Carousel (`cylinder-carousel`) | [`app/components/beui/cylinder-carousel/`](../app/components/beui/cylinder-carousel/) | A carousel whose items line the inside of a cylinder, receding into the center and growing toward the edges |
| Loader (`loader`) | [`app/components/beui/loader/`](../app/components/beui/loader/) | Loading indicator with seventeen variants: spinner, dots, bars, dot-matrix, dither, morph, comet, scramble,… |

### charts

| Component | Downloaded path | Use for |
| --- | --- | --- |
| Treemap (`treemap`) | [`app/components/beui/treemap/`](../app/components/beui/treemap/) | Proportional tiles that morph with your data, with value and share tooltips |
| Candlestick Chart (`candlestick-chart`) | [`app/components/beui/candlestick-chart/`](../app/components/beui/candlestick-chart/) | Live OHLC candles with volume, a last-price line, and a crosshair readout |
| Donut Chart (`donut-chart`) | [`app/components/beui/donut-chart/`](../app/components/beui/donut-chart/) | Rounded share segments with a linked center readout and legend |
| Volume Profile (`volume-profile`) | [`app/components/beui/volume-profile/`](../app/components/beui/volume-profile/) | Animated volume by price, with point of control and value area highlights |
| Status Bar (`status-bar`) | [`app/components/beui/status-bar/`](../app/components/beui/status-bar/) | Animated status history with rounded bars and period tooltips |
| Composition Chart (`composition-chart`) | [`app/components/beui/composition-chart/`](../app/components/beui/composition-chart/) | Stacked bar and area shares with period tooltips and a compact interactive legend |
| Funnel Chart (`funnel-chart`) | [`app/components/beui/funnel-chart/`](../app/components/beui/funnel-chart/) | Vertical and horizontal funnels with curved stages and animated number tooltips |
| Liquidity Heatmap (`liquidity-heatmap`) | [`app/components/beui/liquidity-heatmap/`](../app/components/beui/liquidity-heatmap/) | Animated liquidity bands across price and time, with a price trace and depth tooltips |
| Bump Chart (`bump-chart`) | [`app/components/beui/bump-chart/`](../app/components/beui/bump-chart/) | Animated rankings with curved paths, interactive rank dots, and tooltips |
| Order Book (`order-book`) | [`app/components/beui/order-book/`](../app/components/beui/order-book/) | Animated order book with bid and ask depth, spread, and volume balance |
| Heat Calendar (`heat-calendar`) | [`app/components/beui/heat-calendar/`](../app/components/beui/heat-calendar/) | Composable activity calendar with Grid, Legend, and Tooltip parts, controlled range selection, and UTC calendar dates |
| Returns Calendar (`returns-calendar`) | [`app/components/beui/returns-calendar/`](../app/components/beui/returns-calendar/) | Composable monthly returns calendar with Grid and Tooltip parts, controlled month or year selections, and compounded… |
| Price Target Fan (`price-target-fan`) | [`app/components/beui/price-target-fan/`](../app/components/beui/price-target-fan/) | Composable price target chart with Header, Plot, SVG, Axes, History, Targets, Now, Cursor, and Tooltip parts |

### agents

| Component | Downloaded path | Use for |
| --- | --- | --- |
| Voice Orb (`voice-orb`) | [`app/components/beui/voice-orb/`](../app/components/beui/voice-orb/) | Breathing liquid voice visualization with flowing highlights, custom pigments and a soft, voice-reactive silhouette |
| Message Bubble (`message-bubble`) | [`app/components/beui/message-bubble/`](../app/components/beui/message-bubble/) | A focused conversational surface with visual tones, independent alignment, grouped messages, expandable content, and… |
| Message (`message`) | [`app/components/beui/message/`](../app/components/beui/message/) | Composable conversation primitives for message rows, grouped bubbles, avatars, metadata, live markers, and a… |
| Message Scroller (`message-scroller`) | [`app/components/beui/message-scroller/`](../app/components/beui/message-scroller/) | A reader-aware conversation viewport that follows streamed output at the live edge and releases control when the… |
| Prompt Input (`prompt-input`) | [`app/components/beui/prompt-input/`](../app/components/beui/prompt-input/) | An auto-growing agent composer with prompt actions, model selection, keyboard submission, and animated send and stop… |
| Todo List (`todo-list`) | [`app/components/beui/todo-list/`](../app/components/beui/todo-list/) | A collapsible agent task plan with morphing status marks, a completion count, compact metadata, and smooth list updates |
| Code Block (`code-block`) | [`app/components/beui/code-block/`](../app/components/beui/code-block/) | A syntax-highlighted code surface with stable streaming updates, line numbers, focused lines, smooth following, and… |
| Approval Card (`approval-card`) | [`app/components/beui/approval-card/`](../app/components/beui/approval-card/) | A human-in-the-loop decision surface for approvals, single or multiple-choice questions, custom responses, and… |
| File Diff (`file-diff`) | [`app/components/beui/file-diff/`](../app/components/beui/file-diff/) | A syntax-highlighted file change disclosure with progressive rows, line numbers, live change counts, smooth… |
| Tool Result (`tool-result`) | [`app/components/beui/tool-result/`](../app/components/beui/tool-result/) | A lightweight execution disclosure for syntax-highlighted terminal output and request responses that collapses into… |
| Streaming Response (`streaming-response`) | [`app/components/beui/streaming-response/`](../app/components/beui/streaming-response/) | A stable response surface with completion actions, rendered content, and an expandable source summary |
| Image Generation (`image-generation`) | [`app/components/beui/image-generation/`](../app/components/beui/image-generation/) | A stable generated-image surface that moves from queued work through progressive refinement to a completed result… |
| Tool Approval (`tool-approval`) | [`app/components/beui/tool-approval/`](../app/components/beui/tool-approval/) | A human-in-the-loop permission card for reviewing tool details, allowing once, remembering access, or denying execution |
| Citations (`citations`) | [`app/components/beui/citations/`](../app/components/beui/citations/) | Inline citation markers paired with a collapsible, progressively rendered reference collection for grounded agent… |
| Agent Activity (`agent-activity`) | [`app/components/beui/agent-activity/`](../app/components/beui/agent-activity/) | One adaptive activity stream for reasoning, searches, tool calls, structured execution traces, or a chronological mix |
| Agent Loading States (`loading-states`) | [`app/components/beui/loading-states/`](../app/components/beui/loading-states/) | Three thoughtful loading states for AI interfaces: shimmering status text, live agent progress, and cycling… |
| AI Sidebar (`ai-sidebar`) | [`app/components/beui/ai-sidebar/`](../app/components/beui/ai-sidebar/) | A collapsible AI workspace sidebar for folders, projects, files, and bookmarks with keyboard navigation, optimistic… |
| Chat App (`chat-app`) | [`app/components/beui/chat-app/`](../app/components/beui/chat-app/) | A complete agent conversation workspace composing navigation, messages, streaming, planning, approvals, tools, code,… |

### blocks

| Component | Downloaded path | Use for |
| --- | --- | --- |
| Infinite Masonry (`infinite-masonry`) | [`app/components/beui/infinite-masonry/`](../app/components/beui/infinite-masonry/) | Responsive virtualized masonry that measures variable-height cards and loads more data as the user nears the end |
| Notification Stack (`notification-stack`) | [`app/components/beui/notification-stack/`](../app/components/beui/notification-stack/) | Compact notification cards that spring from a stacked summary into a readable list on hover, focus or tap |
| Project Folder (`project-folder`) | [`app/components/beui/project-folder/`](../app/components/beui/project-folder/) | An interactive project folder that opens its file fan on hover or focus, expands into a focus-managed overlay, then… |
| Card Folder (`card-folder`) | [`app/components/beui/card-folder/`](../app/components/beui/card-folder/) | A landscape card tucked into a stitched purse pocket that lifts forward as the purse compresses into its bottom… |
| Fixtures (`knockout-bracket`) | [`app/components/beui/knockout-bracket/`](../app/components/beui/knockout-bracket/) | Animated tournament fixtures in two styles: a knockout bracket that pages through rounds, and a wheel that wraps the… |
| Availability Scheduler (`availability-scheduler`) | [`app/components/beui/availability-scheduler/`](../app/components/beui/availability-scheduler/) | Weekly availability editor where each day springs between available and unavailable, time ranges add and remove with… |
| Multi-chain Swap (`swap`) | [`app/components/beui/swap/`](../app/components/beui/swap/) | Cross-chain swap widget with chain + token selectors, morphing views, animated flip and quote |
| Dynamic Island (`dynamic-island`) | [`app/components/beui/dynamic-island/`](../app/components/beui/dynamic-island/) | iOS-style island pill that morphs between live activity views with bouncy shell resize and blur crossfades |
| Command Palette (`command-palette`) | [`app/components/beui/command-palette/`](../app/components/beui/command-palette/) | ⌘K palette with fuzzy filter, spring-animated active row and glass surface |
| Morphing Search (`morphing-search`) | [`app/components/beui/morphing-search/`](../app/components/beui/morphing-search/) | Search field or compact icon that morphs into a glass results surface, whether opened by click or keyboard shortcut |
| Expandable Action Bar (`expandable-action-bar`) | [`app/components/beui/expandable-action-bar/`](../app/components/beui/expandable-action-bar/) | Compact icon actions that expand into labeled controls on hover or focus with shared layout motion |
| Overflow Actions (`overflow-actions`) | [`app/components/beui/overflow-actions/`](../app/components/beui/overflow-actions/) | Connected pill rail for primary actions that springs open to reveal extra controls |
| Expandable Tabs (`expandable-tabs`) | [`app/components/beui/expandable-tabs/`](../app/components/beui/expandable-tabs/) | Icon tab bar where the active tab expands to a labelled pill, with a panel above that morphs height and slides… |
| Morphing Tabs (`morphing-tabs`) | [`app/components/beui/morphing-tabs/`](../app/components/beui/morphing-tabs/) | Reorderable tabs whose selected item grows into a white content surface, with the active shape gliding as tabs move… |
| Swipeable List (`swipeable-list`) | [`app/components/beui/swipeable-list/`](../app/components/beui/swipeable-list/) | Mobile-style list rows that swipe left or right to reveal contextual action buttons |
| File Upload (`file-upload`) | [`app/components/beui/file-upload/`](../app/components/beui/file-upload/) | Two file upload patterns: an attachment workspace for mixed files, links, audio and media, plus a progress queue… |
| Prediction Market (`prediction-market`) | [`app/components/beui/prediction-market/`](../app/components/beui/prediction-market/) | Animated market listing cards with outcome CTAs, probabilities and bookmarks, plus a trade ticket with buy/sell… |
| Wallet Card (`wallet-card`) | [`app/components/beui/wallet-card/`](../app/components/beui/wallet-card/) | Wallet overview card with an account switcher and search that morph open from their triggers, a cascading balance… |
| OTP Input (`otp-input`) | [`app/components/beui/otp-input/`](../app/components/beui/otp-input/) | One-time-code input with a gliding focus ring, digits that roll in per slot, error shake and a success check draw |
| Sign Up Form (`signup-form`) | [`app/components/beui/signup-form/`](../app/components/beui/signup-form/) | Composed sign-up form that flags a field only once it is left, then clears the moment it is fixed, with a… |
| Bloom Menu (`bloom-menu`) | [`app/components/beui/bloom-menu/`](../app/components/beui/bloom-menu/) | A button that morphs open into a menu and blooms iris-out from the center, the grid revealing in every direction… |
| Feedback Widget (`feedback-widget`) | [`app/components/beui/feedback-widget/`](../app/components/beui/feedback-widget/) | Corner trigger that morphs open into a feedback popup with message entry and animated sending, success and retry states |
| 404 / Not Found (`not-found`) | [`app/components/beui/not-found/`](../app/components/beui/not-found/) | Animated 404 pages in five styles: glitch scramble, magnetic digits, cursor spotlight, a fanning card stack and a… |

## Component files and dependencies

### Animated Alert (`alert`)

Source: https://beui.dev/components/motion/alert

Entry files:

- [`app/components/beui/alert/components/motion/alert.tsx`](../app/components/beui/alert/components/motion/alert.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Animated Collapsible (`collapsible`)

Source: https://beui.dev/components/motion/collapsible

Entry files:

- [`app/components/beui/collapsible/components/motion/collapsible.tsx`](../app/components/beui/collapsible/components/motion/collapsible.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Aspect Ratio (`aspect-ratio`)

Source: https://beui.dev/components/motion/aspect-ratio

Entry files:

- [`app/components/beui/aspect-ratio/components/motion/aspect-ratio.tsx`](../app/components/beui/aspect-ratio/components/motion/aspect-ratio.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Arc Picker (`arc-picker`)

Source: https://beui.dev/components/motion/arc-picker

Entry files:

- [`app/components/beui/arc-picker/components/motion/arc-picker.tsx`](../app/components/beui/arc-picker/components/motion/arc-picker.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Sortable List (`sortable-stack`)

Source: https://beui.dev/components/motion/sortable-stack

Entry files:

- [`app/components/beui/sortable-stack/components/motion/sortable-list.tsx`](../app/components/beui/sortable-stack/components/motion/sortable-list.tsx)
- [`app/components/beui/sortable-stack/components/motion/sortable-stack.tsx`](../app/components/beui/sortable-stack/components/motion/sortable-stack.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Image Viewer (`image-viewer`)

Source: https://beui.dev/components/motion/image-viewer

Entry files:

- [`app/components/beui/image-viewer/components/motion/morphing-lightbox.tsx`](../app/components/beui/image-viewer/components/motion/morphing-lightbox.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Date Range Picker (`date-range-picker`)

Source: https://beui.dev/components/motion/date-range-picker

Entry files:

- [`app/components/beui/date-range-picker/components/motion/date-range-picker.tsx`](../app/components/beui/date-range-picker/components/motion/date-range-picker.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Card (`card`)

Source: https://beui.dev/components/motion/card

Entry files:

- [`app/components/beui/card/components/motion/card.tsx`](../app/components/beui/card/components/motion/card.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Color Picker (`color-picker`)

Source: https://beui.dev/components/motion/color-picker

Entry files:

- [`app/components/beui/color-picker/components/motion/color-picker.tsx`](../app/components/beui/color-picker/components/motion/color-picker.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Animated Color Selector (`color-selector`)

Source: https://beui.dev/components/motion/color-selector

Entry files:

- [`app/components/beui/color-selector/components/motion/color-selector.tsx`](../app/components/beui/color-selector/components/motion/color-selector.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Animated Breadcrumb (`breadcrumb`)

Source: https://beui.dev/components/motion/breadcrumb

Entry files:

- [`app/components/beui/breadcrumb/components/motion/breadcrumb.tsx`](../app/components/beui/breadcrumb/components/motion/breadcrumb.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Tilt Card (`tilt-card`)

Source: https://beui.dev/components/motion/tilt-card

Entry files:

- [`app/components/beui/tilt-card/components/motion/tilt-card.tsx`](../app/components/beui/tilt-card/components/motion/tilt-card.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Button (`button`)

Source: https://beui.dev/components/motion/button

Entry files:

- [`app/components/beui/button/components/motion/button/index.tsx`](../app/components/beui/button/components/motion/button/index.tsx)
- [`app/components/beui/button/components/motion/button/base.tsx`](../app/components/beui/button/components/motion/button/base.tsx)
- [`app/components/beui/button/components/motion/button/stateful.tsx`](../app/components/beui/button/components/motion/button/stateful.tsx)
- [`app/components/beui/button/components/motion/button/magnetic.tsx`](../app/components/beui/button/components/motion/button/magnetic.tsx)
- [`app/components/beui/button/components/motion/button/metallic.tsx`](../app/components/beui/button/components/motion/button/metallic.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Animated CTA Buttons (`expanding-arrow-button`)

Source: https://beui.dev/components/motion/expanding-arrow-button

Entry files:

- [`app/components/beui/expanding-arrow-button/components/motion/expanding-arrow-button.tsx`](../app/components/beui/expanding-arrow-button/components/motion/expanding-arrow-button.tsx)
- [`app/components/beui/expanding-arrow-button/components/motion/hold-action-button.tsx`](../app/components/beui/expanding-arrow-button/components/motion/hold-action-button.tsx)
- [`app/components/beui/expanding-arrow-button/components/motion/slide-action-button.tsx`](../app/components/beui/expanding-arrow-button/components/motion/slide-action-button.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Expandable Control (`expandable-control`)

Source: https://beui.dev/components/motion/expandable-control

Entry files:

- [`app/components/beui/expandable-control/components/motion/expandable-control.tsx`](../app/components/beui/expandable-control/components/motion/expandable-control.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Adaptive Stepper (`adaptive-stepper`)

Source: https://beui.dev/components/motion/adaptive-stepper

Entry files:

- [`app/components/beui/adaptive-stepper/components/motion/adaptive-stepper.tsx`](../app/components/beui/adaptive-stepper/components/motion/adaptive-stepper.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Marquee (`marquee`)

Source: https://beui.dev/components/motion/marquee

Entry files:

- [`app/components/beui/marquee/components/motion/marquee.tsx`](../app/components/beui/marquee/components/motion/marquee.tsx)

Dependencies: `clsx`, `react`, `tailwind-merge`.

### Tabs (`tabs`)

Source: https://beui.dev/components/motion/tabs

Entry files:

- [`app/components/beui/tabs/components/motion/tabs.tsx`](../app/components/beui/tabs/components/motion/tabs.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Switch (`switch`)

Source: https://beui.dev/components/motion/switch

Entry files:

- [`app/components/beui/switch/components/motion/switch.tsx`](../app/components/beui/switch/components/motion/switch.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Input (`input`)

Source: https://beui.dev/components/motion/input

Entry files:

- [`app/components/beui/input/components/motion/input.tsx`](../app/components/beui/input/components/motion/input.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Select (`select`)

Source: https://beui.dev/components/motion/select

Entry files:

- [`app/components/beui/select/components/motion/select.tsx`](../app/components/beui/select/components/motion/select.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Combobox (`combobox`)

Source: https://beui.dev/components/motion/combobox

Entry files:

- [`app/components/beui/combobox/components/motion/combobox.tsx`](../app/components/beui/combobox/components/motion/combobox.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Multi Select (`multi-select`)

Source: https://beui.dev/components/motion/multi-select

Entry files:

- [`app/components/beui/multi-select/components/motion/multi-select/index.tsx`](../app/components/beui/multi-select/components/motion/multi-select/index.tsx)
- [`app/components/beui/multi-select/components/motion/multi-select/context.tsx`](../app/components/beui/multi-select/components/motion/multi-select/context.tsx)
- [`app/components/beui/multi-select/components/motion/multi-select/trigger.tsx`](../app/components/beui/multi-select/components/motion/multi-select/trigger.tsx)
- [`app/components/beui/multi-select/components/motion/multi-select/content.tsx`](../app/components/beui/multi-select/components/motion/multi-select/content.tsx)
- [`app/components/beui/multi-select/components/motion/multi-select/list.tsx`](../app/components/beui/multi-select/components/motion/multi-select/list.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Checkbox (`checkbox`)

Source: https://beui.dev/components/motion/checkbox

Entry files:

- [`app/components/beui/checkbox/components/motion/checkbox.tsx`](../app/components/beui/checkbox/components/motion/checkbox.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Radio Group (`radio`)

Source: https://beui.dev/components/motion/radio

Entry files:

- [`app/components/beui/radio/components/motion/radio.tsx`](../app/components/beui/radio/components/motion/radio.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Bottom Sheet (`bottom-sheet`)

Source: https://beui.dev/components/motion/bottom-sheet

Entry files:

- [`app/components/beui/bottom-sheet/components/motion/bottom-sheet.tsx`](../app/components/beui/bottom-sheet/components/motion/bottom-sheet.tsx)

Dependencies: `clsx`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Pull to Refresh (`pull-to-refresh`)

Source: https://beui.dev/components/motion/pull-to-refresh

Entry files:

- [`app/components/beui/pull-to-refresh/components/motion/pull-to-refresh.tsx`](../app/components/beui/pull-to-refresh/components/motion/pull-to-refresh.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Shared Layout Background (`shared-layout-bg`)

Source: https://beui.dev/components/motion/shared-layout-bg

Entry files:

- [`app/components/beui/shared-layout-bg/components/motion/shared-layout-bg.tsx`](../app/components/beui/shared-layout-bg/components/motion/shared-layout-bg.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Bounce Sidebar (`bounce-sidebar`)

Source: https://beui.dev/components/motion/bounce-sidebar

Entry files:

- [`app/components/beui/bounce-sidebar/components/motion/bounce-sidebar.tsx`](../app/components/beui/bounce-sidebar/components/motion/bounce-sidebar.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Animated Sidebar (`animated-sidebar`)

Source: https://beui.dev/components/motion/animated-sidebar

Entry files:

- [`app/components/beui/animated-sidebar/components/motion/animated-sidebar.tsx`](../app/components/beui/animated-sidebar/components/motion/animated-sidebar.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### File Tree (`file-tree`)

Source: https://beui.dev/components/motion/file-tree

Entry files:

- [`app/components/beui/file-tree/components/motion/file-tree.tsx`](../app/components/beui/file-tree/components/motion/file-tree.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Preview Rail (`preview-rail`)

Source: https://beui.dev/components/motion/preview-rail

Entry files:

- [`app/components/beui/preview-rail/components/motion/preview-rail.tsx`](../app/components/beui/preview-rail/components/motion/preview-rail.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Dock (`dock`)

Source: https://beui.dev/components/motion/dock

Entry files:

- [`app/components/beui/dock/components/motion/dock.tsx`](../app/components/beui/dock/components/motion/dock.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Tooltip (`tooltip`)

Source: https://beui.dev/components/motion/tooltip

Entry files:

- [`app/components/beui/tooltip/components/motion/tooltip.tsx`](../app/components/beui/tooltip/components/motion/tooltip.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Animated Context Menu (`context-menu`)

Source: https://beui.dev/components/motion/context-menu

Entry files:

- [`app/components/beui/context-menu/components/motion/context-menu.tsx`](../app/components/beui/context-menu/components/motion/context-menu.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Popover (`popover`)

Source: https://beui.dev/components/motion/popover

Entry files:

- [`app/components/beui/popover/components/motion/popover.tsx`](../app/components/beui/popover/components/motion/popover.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Morphing Modal (`morphing-modal`)

Source: https://beui.dev/components/motion/morphing-modal

Entry files:

- [`app/components/beui/morphing-modal/components/motion/morphing-modal.tsx`](../app/components/beui/morphing-modal/components/motion/morphing-modal.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Center Morph Modal (`center-morph-modal`)

Source: https://beui.dev/components/motion/center-morph-modal

Entry files:

- [`app/components/beui/center-morph-modal/components/motion/center-morph-modal.tsx`](../app/components/beui/center-morph-modal/components/motion/center-morph-modal.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Text Animation (`text-animation`)

Source: https://beui.dev/components/motion/text-animation

Entry files:

- [`app/components/beui/text-animation/components/motion/text-reveal.tsx`](../app/components/beui/text-animation/components/motion/text-reveal.tsx)
- [`app/components/beui/text-animation/components/motion/chromatic-text-reveal.tsx`](../app/components/beui/text-animation/components/motion/chromatic-text-reveal.tsx)
- [`app/components/beui/text-animation/components/motion/text-shimmer.tsx`](../app/components/beui/text-animation/components/motion/text-shimmer.tsx)
- [`app/components/beui/text-animation/components/motion/text-cascade.tsx`](../app/components/beui/text-animation/components/motion/text-cascade.tsx)
- [`app/components/beui/text-animation/components/motion/text-scramble.tsx`](../app/components/beui/text-animation/components/motion/text-scramble.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Number Animation (`number`)

Source: https://beui.dev/components/motion/number

Entry files:

- [`app/components/beui/number/components/motion/animated-number.tsx`](../app/components/beui/number/components/motion/animated-number.tsx)
- [`app/components/beui/number/components/motion/number-ticker.tsx`](../app/components/beui/number/components/motion/number-ticker.tsx)
- [`app/components/beui/number/components/motion/digit-swap.tsx`](../app/components/beui/number/components/motion/digit-swap.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Animated Badge (`animated-badge`)

Source: https://beui.dev/components/motion/animated-badge

Entry files:

- [`app/components/beui/animated-badge/components/motion/animated-badge.tsx`](../app/components/beui/animated-badge/components/motion/animated-badge.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Action Swap (`action-swap`)

Source: https://beui.dev/components/motion/action-swap

Entry files:

- [`app/components/beui/action-swap/components/motion/action-swap.tsx`](../app/components/beui/action-swap/components/motion/action-swap.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Animated Toast Stack (`animated-toast-stack`)

Source: https://beui.dev/components/motion/animated-toast-stack

Entry files:

- [`app/components/beui/animated-toast-stack/components/motion/animated-toast-stack.tsx`](../app/components/beui/animated-toast-stack/components/motion/animated-toast-stack.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Theme Toggle (`theme-toggle`)

Source: https://beui.dev/components/motion/theme-toggle

Entry files:

- [`app/components/beui/theme-toggle/components/motion/theme-toggle.tsx`](../app/components/beui/theme-toggle/components/motion/theme-toggle.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `next-themes`, `react`, `tailwind-merge`.

### Bouncy Accordion (`bouncy-accordion`)

Source: https://beui.dev/components/motion/bouncy-accordion

Entry files:

- [`app/components/beui/bouncy-accordion/components/motion/bouncy-accordion.tsx`](../app/components/beui/bouncy-accordion/components/motion/bouncy-accordion.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Drawer (`drawer`)

Source: https://beui.dev/components/motion/drawer

Entry files:

- [`app/components/beui/drawer/components/motion/drawer.tsx`](../app/components/beui/drawer/components/motion/drawer.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Scroll Animation (`scroll-animation`)

Source: https://beui.dev/components/motion/scroll-animation

Entry files:

- [`app/components/beui/scroll-animation/components/motion/smooth-scroll.tsx`](../app/components/beui/scroll-animation/components/motion/smooth-scroll.tsx)
- [`app/components/beui/scroll-animation/components/motion/scroll-progress.tsx`](../app/components/beui/scroll-animation/components/motion/scroll-progress.tsx)
- [`app/components/beui/scroll-animation/components/motion/parallax.tsx`](../app/components/beui/scroll-animation/components/motion/parallax.tsx)
- [`app/components/beui/scroll-animation/components/motion/scroll-to.tsx`](../app/components/beui/scroll-animation/components/motion/scroll-to.tsx)
- [`app/components/beui/scroll-animation/components/motion/scroll-reveal.tsx`](../app/components/beui/scroll-animation/components/motion/scroll-reveal.tsx)

Dependencies: `clsx`, `lenis`, `motion`, `react`, `tailwind-merge`.

### Range Slider (`range-slider`)

Source: https://beui.dev/components/motion/range-slider

Entry files:

- [`app/components/beui/range-slider/components/motion/range-slider.tsx`](../app/components/beui/range-slider/components/motion/range-slider.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Wheel Picker (`wheel-picker`)

Source: https://beui.dev/components/motion/wheel-picker

Entry files:

- [`app/components/beui/wheel-picker/components/motion/wheel-picker.tsx`](../app/components/beui/wheel-picker/components/motion/wheel-picker.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Table (`table`)

Source: https://beui.dev/components/motion/table

Entry files:

- [`app/components/beui/table/components/motion/table/index.tsx`](../app/components/beui/table/components/motion/table/index.tsx)

Dependencies: `@tanstack/react-virtual`, `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Shader Background (`shader-background`)

Source: https://beui.dev/components/motion/shader-background

Entry files:

- [`app/components/beui/shader-background/components/motion/shader-background.tsx`](../app/components/beui/shader-background/components/motion/shader-background.tsx)

Dependencies: `@paper-design/shaders-react`, `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Cylinder Carousel (`cylinder-carousel`)

Source: https://beui.dev/components/motion/cylinder-carousel

Entry files:

- [`app/components/beui/cylinder-carousel/components/motion/cylinder-carousel.tsx`](../app/components/beui/cylinder-carousel/components/motion/cylinder-carousel.tsx)

Dependencies: `@paper-design/shaders-react`, `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Loader (`loader`)

Source: https://beui.dev/components/motion/loader

Entry files:

- [`app/components/beui/loader/components/motion/loader.tsx`](../app/components/beui/loader/components/motion/loader.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Treemap (`treemap`)

Source: https://beui.dev/charts/treemap

Entry files:

- [`app/components/beui/treemap/components/charts/treemap.tsx`](../app/components/beui/treemap/components/charts/treemap.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Candlestick Chart (`candlestick-chart`)

Source: https://beui.dev/charts/candlestick-chart

Entry files:

- [`app/components/beui/candlestick-chart/components/charts/candlestick-chart.tsx`](../app/components/beui/candlestick-chart/components/charts/candlestick-chart.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Donut Chart (`donut-chart`)

Source: https://beui.dev/charts/donut-chart

Entry files:

- [`app/components/beui/donut-chart/components/charts/donut-chart.tsx`](../app/components/beui/donut-chart/components/charts/donut-chart.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Volume Profile (`volume-profile`)

Source: https://beui.dev/charts/volume-profile

Entry files:

- [`app/components/beui/volume-profile/components/charts/volume-profile.tsx`](../app/components/beui/volume-profile/components/charts/volume-profile.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Status Bar (`status-bar`)

Source: https://beui.dev/charts/status-bar

Entry files:

- [`app/components/beui/status-bar/components/charts/status-bar.tsx`](../app/components/beui/status-bar/components/charts/status-bar.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Composition Chart (`composition-chart`)

Source: https://beui.dev/charts/composition-chart

Entry files:

- [`app/components/beui/composition-chart/components/charts/composition-chart.tsx`](../app/components/beui/composition-chart/components/charts/composition-chart.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Funnel Chart (`funnel-chart`)

Source: https://beui.dev/charts/funnel-chart

Entry files:

- [`app/components/beui/funnel-chart/components/charts/funnel-chart.tsx`](../app/components/beui/funnel-chart/components/charts/funnel-chart.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Liquidity Heatmap (`liquidity-heatmap`)

Source: https://beui.dev/charts/liquidity-heatmap

Entry files:

- [`app/components/beui/liquidity-heatmap/components/charts/liquidity-heatmap.tsx`](../app/components/beui/liquidity-heatmap/components/charts/liquidity-heatmap.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Bump Chart (`bump-chart`)

Source: https://beui.dev/charts/bump-chart

Entry files:

- [`app/components/beui/bump-chart/components/charts/bump-chart.tsx`](../app/components/beui/bump-chart/components/charts/bump-chart.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Order Book (`order-book`)

Source: https://beui.dev/charts/order-book

Entry files:

- [`app/components/beui/order-book/components/charts/order-book.tsx`](../app/components/beui/order-book/components/charts/order-book.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Heat Calendar (`heat-calendar`)

Source: https://beui.dev/charts/heat-calendar

Entry files:

- [`app/components/beui/heat-calendar/components/charts/heat-calendar.tsx`](../app/components/beui/heat-calendar/components/charts/heat-calendar.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Returns Calendar (`returns-calendar`)

Source: https://beui.dev/charts/returns-calendar

Entry files:

- [`app/components/beui/returns-calendar/components/charts/returns-calendar.tsx`](../app/components/beui/returns-calendar/components/charts/returns-calendar.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Price Target Fan (`price-target-fan`)

Source: https://beui.dev/charts/price-target-fan

Entry files:

- [`app/components/beui/price-target-fan/components/charts/price-target-fan.tsx`](../app/components/beui/price-target-fan/components/charts/price-target-fan.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Voice Orb (`voice-orb`)

Source: https://beui.dev/components/agents/voice-orb

Entry files:

- [`app/components/beui/voice-orb/components/agents/voice-orb.tsx`](../app/components/beui/voice-orb/components/agents/voice-orb.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Message Bubble (`message-bubble`)

Source: https://beui.dev/components/agents/message-bubble

Entry files:

- [`app/components/beui/message-bubble/components/agents/message-bubble.tsx`](../app/components/beui/message-bubble/components/agents/message-bubble.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Message (`message`)

Source: https://beui.dev/components/agents/message

Entry files:

- [`app/components/beui/message/components/agents/message.tsx`](../app/components/beui/message/components/agents/message.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Message Scroller (`message-scroller`)

Source: https://beui.dev/components/agents/message-scroller

Entry files:

- [`app/components/beui/message-scroller/components/agents/message-scroller.tsx`](../app/components/beui/message-scroller/components/agents/message-scroller.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Prompt Input (`prompt-input`)

Source: https://beui.dev/components/agents/prompt-input

Entry files:

- [`app/components/beui/prompt-input/components/agents/prompt-input.tsx`](../app/components/beui/prompt-input/components/agents/prompt-input.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Todo List (`todo-list`)

Source: https://beui.dev/components/agents/todo-list

Entry files:

- [`app/components/beui/todo-list/components/agents/todo-list.tsx`](../app/components/beui/todo-list/components/agents/todo-list.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Code Block (`code-block`)

Source: https://beui.dev/components/agents/code-block

Entry files:

- [`app/components/beui/code-block/components/agents/code-block.tsx`](../app/components/beui/code-block/components/agents/code-block.tsx)

Dependencies: `ai`, `clsx`, `lucide-react`, `motion`, `react`, `shiki`, `tailwind-merge`.

### Approval Card (`approval-card`)

Source: https://beui.dev/components/agents/approval-card

Entry files:

- [`app/components/beui/approval-card/components/agents/approval-card/index.tsx`](../app/components/beui/approval-card/components/agents/approval-card/index.tsx)
- [`app/components/beui/approval-card/components/agents/approval-card/types.ts`](../app/components/beui/approval-card/components/agents/approval-card/types.ts)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### File Diff (`file-diff`)

Source: https://beui.dev/components/agents/file-diff

Entry files:

- [`app/components/beui/file-diff/components/agents/file-diff.tsx`](../app/components/beui/file-diff/components/agents/file-diff.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `shiki`, `tailwind-merge`.

### Tool Result (`tool-result`)

Source: https://beui.dev/components/agents/tool-result

Entry files:

- [`app/components/beui/tool-result/components/agents/tool-result.tsx`](../app/components/beui/tool-result/components/agents/tool-result.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `shiki`, `tailwind-merge`.

### Streaming Response (`streaming-response`)

Source: https://beui.dev/components/agents/streaming-response

Entry files:

- [`app/components/beui/streaming-response/components/agents/streaming-response.tsx`](../app/components/beui/streaming-response/components/agents/streaming-response.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Image Generation (`image-generation`)

Source: https://beui.dev/components/agents/image-generation

Entry files:

- [`app/components/beui/image-generation/components/agents/image-generation.tsx`](../app/components/beui/image-generation/components/agents/image-generation.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Tool Approval (`tool-approval`)

Source: https://beui.dev/components/agents/tool-approval

Entry files:

- [`app/components/beui/tool-approval/components/agents/tool-approval.tsx`](../app/components/beui/tool-approval/components/agents/tool-approval.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `shiki`, `tailwind-merge`.

### Citations (`citations`)

Source: https://beui.dev/components/agents/citations

Entry files:

- [`app/components/beui/citations/components/agents/citations.tsx`](../app/components/beui/citations/components/agents/citations.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Agent Activity (`agent-activity`)

Source: https://beui.dev/components/agents/agent-activity

Entry files:

- [`app/components/beui/agent-activity/components/agents/agent-activity/index.tsx`](../app/components/beui/agent-activity/components/agents/agent-activity/index.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Agent Loading States (`loading-states`)

Source: https://beui.dev/components/agents/loading-states

Entry files:

- [`app/components/beui/loading-states/components/agents/loading-states/index.ts`](../app/components/beui/loading-states/components/agents/loading-states/index.ts)
- [`app/components/beui/loading-states/components/agents/loading-states/thinking-shimmer.tsx`](../app/components/beui/loading-states/components/agents/loading-states/thinking-shimmer.tsx)
- [`app/components/beui/loading-states/components/agents/loading-states/agent-progress.tsx`](../app/components/beui/loading-states/components/agents/loading-states/agent-progress.tsx)
- [`app/components/beui/loading-states/components/agents/loading-states/reasoning-text.tsx`](../app/components/beui/loading-states/components/agents/loading-states/reasoning-text.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### AI Sidebar (`ai-sidebar`)

Source: https://beui.dev/components/agents/ai-sidebar

Entry files:

- [`app/components/beui/ai-sidebar/components/agents/ai-sidebar.tsx`](../app/components/beui/ai-sidebar/components/agents/ai-sidebar.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Chat App (`chat-app`)

Source: https://beui.dev/components/agents/chat-app

Entry files:

- [`app/components/beui/chat-app/components/agents/chat-app.tsx`](../app/components/beui/chat-app/components/agents/chat-app.tsx)
- [`app/components/beui/chat-app/components/agents/agent-activity/index.tsx`](../app/components/beui/chat-app/components/agents/agent-activity/index.tsx)
- [`app/components/beui/chat-app/components/agents/ai-sidebar.tsx`](../app/components/beui/chat-app/components/agents/ai-sidebar.tsx)
- [`app/components/beui/chat-app/components/agents/approval-card/index.tsx`](../app/components/beui/chat-app/components/agents/approval-card/index.tsx)
- [`app/components/beui/chat-app/components/agents/code-block.tsx`](../app/components/beui/chat-app/components/agents/code-block.tsx)
- [`app/components/beui/chat-app/components/agents/file-diff.tsx`](../app/components/beui/chat-app/components/agents/file-diff.tsx)
- [`app/components/beui/chat-app/components/agents/image-generation.tsx`](../app/components/beui/chat-app/components/agents/image-generation.tsx)
- [`app/components/beui/chat-app/components/agents/loading-states/thinking-shimmer.tsx`](../app/components/beui/chat-app/components/agents/loading-states/thinking-shimmer.tsx)
- [`app/components/beui/chat-app/components/agents/message.tsx`](../app/components/beui/chat-app/components/agents/message.tsx)
- [`app/components/beui/chat-app/components/agents/message-bubble.tsx`](../app/components/beui/chat-app/components/agents/message-bubble.tsx)
- [`app/components/beui/chat-app/components/agents/message-scroller.tsx`](../app/components/beui/chat-app/components/agents/message-scroller.tsx)
- [`app/components/beui/chat-app/components/agents/prompt-input.tsx`](../app/components/beui/chat-app/components/agents/prompt-input.tsx)
- [`app/components/beui/chat-app/components/agents/streaming-response.tsx`](../app/components/beui/chat-app/components/agents/streaming-response.tsx)
- [`app/components/beui/chat-app/components/agents/todo-list.tsx`](../app/components/beui/chat-app/components/agents/todo-list.tsx)
- [`app/components/beui/chat-app/components/agents/tool-approval.tsx`](../app/components/beui/chat-app/components/agents/tool-approval.tsx)
- [`app/components/beui/chat-app/components/agents/tool-result.tsx`](../app/components/beui/chat-app/components/agents/tool-result.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `shiki`, `tailwind-merge`.

### Infinite Masonry (`infinite-masonry`)

Source: https://beui.dev/components/blocks/infinite-masonry

Entry files:

- [`app/components/beui/infinite-masonry/components/motion/infinite-masonry.tsx`](../app/components/beui/infinite-masonry/components/motion/infinite-masonry.tsx)

Dependencies: `@tanstack/react-virtual`, `clsx`, `lucide-react`, `motion`, `next`, `react`, `tailwind-merge`.

### Notification Stack (`notification-stack`)

Source: https://beui.dev/components/blocks/notification-stack

Entry files:

- [`app/components/beui/notification-stack/components/motion/notification-stack.tsx`](../app/components/beui/notification-stack/components/motion/notification-stack.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Project Folder (`project-folder`)

Source: https://beui.dev/components/blocks/project-folder

Entry files:

- [`app/components/beui/project-folder/components/motion/project-folder.tsx`](../app/components/beui/project-folder/components/motion/project-folder.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Card Folder (`card-folder`)

Source: https://beui.dev/components/blocks/card-folder

Entry files:

- [`app/components/beui/card-folder/components/motion/card-folder.tsx`](../app/components/beui/card-folder/components/motion/card-folder.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Fixtures (`knockout-bracket`)

Source: https://beui.dev/components/blocks/knockout-bracket

Entry files:

- [`app/components/beui/knockout-bracket/components/motion/knockout-bracket.tsx`](../app/components/beui/knockout-bracket/components/motion/knockout-bracket.tsx)
- [`app/components/beui/knockout-bracket/components/motion/knockout-wheel.tsx`](../app/components/beui/knockout-bracket/components/motion/knockout-wheel.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Availability Scheduler (`availability-scheduler`)

Source: https://beui.dev/components/blocks/availability-scheduler

Entry files:

- [`app/components/beui/availability-scheduler/components/motion/availability-scheduler/index.tsx`](../app/components/beui/availability-scheduler/components/motion/availability-scheduler/index.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Multi-chain Swap (`swap`)

Source: https://beui.dev/components/blocks/swap

Entry files:

- [`app/components/beui/swap/components/motion/swap.tsx`](../app/components/beui/swap/components/motion/swap.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Dynamic Island (`dynamic-island`)

Source: https://beui.dev/components/blocks/dynamic-island

Entry files:

- [`app/components/beui/dynamic-island/components/motion/dynamic-island.tsx`](../app/components/beui/dynamic-island/components/motion/dynamic-island.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Command Palette (`command-palette`)

Source: https://beui.dev/components/blocks/command-palette

Entry files:

- [`app/components/beui/command-palette/components/motion/command-palette.tsx`](../app/components/beui/command-palette/components/motion/command-palette.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Morphing Search (`morphing-search`)

Source: https://beui.dev/components/blocks/morphing-search

Entry files:

- [`app/components/beui/morphing-search/components/motion/morphing-search.tsx`](../app/components/beui/morphing-search/components/motion/morphing-search.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Expandable Action Bar (`expandable-action-bar`)

Source: https://beui.dev/components/blocks/expandable-action-bar

Entry files:

- [`app/components/beui/expandable-action-bar/components/motion/expandable-action-bar.tsx`](../app/components/beui/expandable-action-bar/components/motion/expandable-action-bar.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Overflow Actions (`overflow-actions`)

Source: https://beui.dev/components/blocks/overflow-actions

Entry files:

- [`app/components/beui/overflow-actions/components/motion/overflow-actions.tsx`](../app/components/beui/overflow-actions/components/motion/overflow-actions.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Expandable Tabs (`expandable-tabs`)

Source: https://beui.dev/components/blocks/expandable-tabs

Entry files:

- [`app/components/beui/expandable-tabs/components/motion/expandable-tabs.tsx`](../app/components/beui/expandable-tabs/components/motion/expandable-tabs.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Morphing Tabs (`morphing-tabs`)

Source: https://beui.dev/components/blocks/morphing-tabs

Entry files:

- [`app/components/beui/morphing-tabs/components/motion/morphing-tabs.tsx`](../app/components/beui/morphing-tabs/components/motion/morphing-tabs.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Swipeable List (`swipeable-list`)

Source: https://beui.dev/components/blocks/swipeable-list

Entry files:

- [`app/components/beui/swipeable-list/components/motion/swipeable-list.tsx`](../app/components/beui/swipeable-list/components/motion/swipeable-list.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### File Upload (`file-upload`)

Source: https://beui.dev/components/blocks/file-upload

Entry files:

- [`app/components/beui/file-upload/components/motion/file-upload.tsx`](../app/components/beui/file-upload/components/motion/file-upload.tsx)
- [`app/components/beui/file-upload/components/motion/attachment-upload.tsx`](../app/components/beui/file-upload/components/motion/attachment-upload.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Prediction Market (`prediction-market`)

Source: https://beui.dev/components/blocks/prediction-market

Entry files:

- [`app/components/beui/prediction-market/components/motion/prediction-market.tsx`](../app/components/beui/prediction-market/components/motion/prediction-market.tsx)
- [`app/components/beui/prediction-market/components/motion/prediction-market-card.tsx`](../app/components/beui/prediction-market/components/motion/prediction-market-card.tsx)

Dependencies: `@floating-ui/dom`, `clsx`, `lucide-react`, `motion`, `react`, `react-dom`, `tailwind-merge`.

### Wallet Card (`wallet-card`)

Source: https://beui.dev/components/blocks/wallet-card

Entry files:

- [`app/components/beui/wallet-card/components/motion/wallet-card/index.tsx`](../app/components/beui/wallet-card/components/motion/wallet-card/index.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### OTP Input (`otp-input`)

Source: https://beui.dev/components/blocks/otp-input

Entry files:

- [`app/components/beui/otp-input/components/motion/otp-input.tsx`](../app/components/beui/otp-input/components/motion/otp-input.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

### Sign Up Form (`signup-form`)

Source: https://beui.dev/components/blocks/signup-form

Entry files:

- [`app/components/beui/signup-form/components/motion/signup-form.tsx`](../app/components/beui/signup-form/components/motion/signup-form.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Bloom Menu (`bloom-menu`)

Source: https://beui.dev/components/blocks/bloom-menu

Entry files:

- [`app/components/beui/bloom-menu/components/motion/bloom-menu.tsx`](../app/components/beui/bloom-menu/components/motion/bloom-menu.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### Feedback Widget (`feedback-widget`)

Source: https://beui.dev/components/blocks/feedback-widget

Entry files:

- [`app/components/beui/feedback-widget/components/motion/feedback-widget.tsx`](../app/components/beui/feedback-widget/components/motion/feedback-widget.tsx)

Dependencies: `clsx`, `lucide-react`, `motion`, `react`, `tailwind-merge`.

### 404 / Not Found (`not-found`)

Source: https://beui.dev/components/blocks/not-found

Entry files:

- [`app/components/beui/not-found/components/motion/not-found/index.tsx`](../app/components/beui/not-found/components/motion/not-found/index.tsx)
- [`app/components/beui/not-found/components/motion/not-found/shared.tsx`](../app/components/beui/not-found/components/motion/not-found/shared.tsx)
- [`app/components/beui/not-found/components/motion/not-found/glitch.tsx`](../app/components/beui/not-found/components/motion/not-found/glitch.tsx)
- [`app/components/beui/not-found/components/motion/not-found/magnetic.tsx`](../app/components/beui/not-found/components/motion/not-found/magnetic.tsx)
- [`app/components/beui/not-found/components/motion/not-found/spotlight.tsx`](../app/components/beui/not-found/components/motion/not-found/spotlight.tsx)
- [`app/components/beui/not-found/components/motion/not-found/stacked.tsx`](../app/components/beui/not-found/components/motion/not-found/stacked.tsx)
- [`app/components/beui/not-found/components/motion/not-found/terminal.tsx`](../app/components/beui/not-found/components/motion/not-found/terminal.tsx)

Dependencies: `clsx`, `motion`, `react`, `tailwind-merge`.

