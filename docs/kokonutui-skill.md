# Kokonut UI component reference

Downloaded from the public Kokonut UI registry using the shadcn CLI: 75 components, four hooks, and one utility.

## Using these downloads

Each item has its own folder under `app/components/kokonutui/<slug>/`, preserving the source paths returned by the registry. Sources are downloaded for reuse; their dependencies are recorded, not installed. Before integrating a component, install its npm and registry dependencies and adjust upstream `@/components`, `@/hooks`, and `@/lib` imports to your consuming app. Some components also require shadcn theme tokens.

`manifest.json` records every source file, source URL, and dependency. Paid Pro components are not part of the public registry.

## Component index

| Component | Downloaded path | Use for |
| --- | --- | --- |
| AI Input Selector (`ai-prompt`) | [`app/components/kokonutui/ai-prompt/`](../app/components/kokonutui/ai-prompt/) | AI chat input with a model menu, a separate Effort control, file chips you can drop or paste, a / command menu, and Stop… |
| Command Button (`command-button`) | [`app/components/kokonutui/command-button/`](../app/components/kokonutui/command-button/) | A button with its shortcut drawn as keycaps that sink as you press the real keys. |
| Flick Card (`card-flip`) | [`app/components/kokonutui/card-flip/`](../app/components/kokonutui/card-flip/) | A two-sided card you spin with a drag or a flick, with thickness, light and a floor shadow that follow the angle. |
| Smooth Drawer (`smooth-drawer`) | [`app/components/kokonutui/smooth-drawer/`](../app/components/kokonutui/smooth-drawer/) | Checkout bottom sheet on Vaul snap points, peeking at the total and dragging up for details. |
| Halftone Background (`halftone-background`) | [`app/components/kokonutui/halftone-background/`](../app/components/kokonutui/halftone-background/) | Any image, or a lit sphere, printed as a halftone dot screen, with a loupe that looks closer under the cursor, built with… |
| Shape Hero (`shape-hero`) | [`app/components/kokonutui/shape-hero/`](../app/components/kokonutui/shape-hero/) | A landing hero where shapes drop in, pile up under the headline and can be grabbed and thrown. |
| AI Text Loading (`ai-text-loading`) | [`app/components/kokonutui/ai-text-loading/`](../app/components/kokonutui/ai-text-loading/) | AI thinking text with a soft wave through the letters and words that swap letter by letter. |
| Momentum Rail (`carousel-cards`) | [`app/components/kokonutui/carousel-cards/`](../app/components/kokonutui/carousel-cards/) | A card rail you flick with momentum, snapping on a spring, with scroll-driven cover-flow depth and parallax. |
| File Upload (`file-upload`) | [`app/components/kokonutui/file-upload/`](../app/components/kokonutui/file-upload/) | A multi-file upload queue with per-file progress, retry and cancel. |
| Command Palette (`action-search-bar`) | [`app/components/kokonutui/action-search-bar/`](../app/components/kokonutui/action-search-bar/) | ⌘K command palette with nested pages, fuzzy matching and in-row progress for running actions. |
| AI Input Search (`ai-input-search`) | [`app/components/kokonutui/ai-input-search/`](../app/components/kokonutui/ai-input-search/) | AI search input with Quick and Research modes and a live trace underneath that stacks each source as it is read, times… |
| Cradle Text (`cradle-text`) | [`app/components/kokonutui/cradle-text/`](../app/components/kokonutui/cradle-text/) | A headline hung like a Newton's cradle, so a knock on one letter clacks through the word, built with React and pendulum… |
| Currency Transfer (`currency-transfer`) | [`app/components/kokonutui/currency-transfer/`](../app/components/kokonutui/currency-transfer/) | Transfer tracker that converts the amount in place, walks through each step on a filling rail, and ends with a copyable… |
| Background Paths (`background-paths`) | [`app/components/kokonutui/background-paths/`](../app/components/kokonutui/background-paths/) | A ribbon of lines in one color that keeps flowing at any size and parts around the cursor. |
| Dot Field (`dot-field`) | [`app/components/kokonutui/dot-field/`](../app/components/kokonutui/dot-field/) | A halftone dot membrane that ripples behind a swipe and rings out from a click, built with React and Canvas. |
| Wind (`flow-field`) | [`app/components/kokonutui/flow-field/`](../app/components/kokonutui/flow-field/) | Streamlines that part around the cursor, swirl in its wake and scatter on click, built with React and Canvas. |
| Topo Background (`topo-background`) | [`app/components/kokonutui/topo-background/`](../app/components/kokonutui/topo-background/) | A living contour map that drifts, rises under the cursor and ripples on click, built with React and Canvas. |
| Drape Background (`drape-background`) | [`app/components/kokonutui/drape-background/`](../app/components/kokonutui/drape-background/) | A pleated curtain in a breeze that you can push and pull, built with React, WebGL and a cloth simulation. |
| Apple Activity Card (`apple-activity-card`) | [`app/components/kokonutui/apple-activity-card/`](../app/components/kokonutui/apple-activity-card/) | Activity rings that draw with a count-up, lap past 100% with a shadowed end cap and dim to focus, built with React and… |
| AI Voice (`ai-voice`) | [`app/components/kokonutui/ai-voice/`](../app/components/kokonutui/ai-voice/) | Voice input with a scrolling waveform, then a take you can play back, discard or send. |
| Swipe Tabs (`smooth-tab`) | [`app/components/kokonutui/smooth-tab/`](../app/components/kokonutui/smooth-tab/) | Tabs with a swipeable panel, a drag-tracked indicator and spring physics. |
| Marking Menu (`marking-menu`) | [`app/components/kokonutui/marking-menu/`](../app/components/kokonutui/marking-menu/) | A radial menu you hold to open or flick to pick blind, built with React and Motion. |
| Team Selector (`team-selector`) | [`app/components/kokonutui/team-selector/`](../app/components/kokonutui/team-selector/) | Seat picker with a scrubbable number, generated avatars and an optional rolling price line. |
| Detent Dial (`detent-dial`) | [`app/components/kokonutui/detent-dial/`](../app/components/kokonutui/detent-dial/) | Rotary knob that clicks from notch to notch and coasts when flicked, built with React and Motion. |
| Liquid Slider (`liquid-slider`) | [`app/components/kokonutui/liquid-slider/`](../app/components/kokonutui/liquid-slider/) | A vertical slider you fill like a glass, with a sloshing surface and rising bubbles. |
| Signature Pad (`signature-pad`) | [`app/components/kokonutui/signature-pad/`](../app/components/kokonutui/signature-pad/) | A signature field with a sprung pen tip, speed-weighted ink and SVG output. |
| Switch Button (`switch-button`) | [`app/components/kokonutui/switch-button/`](../app/components/kokonutui/switch-button/) | Light and dark theme toggle whose sun folds into a moon while the new theme spreads from the button as a circle. |
| Pull Cord (`pull-cord`) | [`app/components/kokonutui/pull-cord/`](../app/components/kokonutui/pull-cord/) | A lamp switch you pull on a swinging cord, built with React and a rope simulation. |
| Tear Button (`tear-button`) | [`app/components/kokonutui/tear-button/`](../app/components/kokonutui/tear-button/) | A confirm button you tear off like a ticket stub, hole by hole. |
| Bell Button (`bell-button`) | [`app/components/kokonutui/bell-button/`](../app/components/kokonutui/bell-button/) | A subscribe button whose bell swings and rings, with a clapper that really strikes. |
| Widget Grid (`bento-grid`) | [`app/components/kokonutui/bento-grid/`](../app/components/kokonutui/bento-grid/) | Dashboard widgets you lift, drag and resize on a 6-column grid, with spring physics and full keyboard support. |
| Hold Button (`hold-button`) | [`app/components/kokonutui/hold-button/`](../app/components/kokonutui/hold-button/) | Press and hold to confirm, with a fill that drains back on early release and a drawn check on completion. |
| Magnet Button (`attract-button`) | [`app/components/kokonutui/attract-button/`](../app/components/kokonutui/attract-button/) | A call-to-action button wrapped in a field of iron filings that align to its magnetic field and lean toward your cursor. |
| Gradient Button (`gradient-button`) | [`app/components/kokonutui/gradient-button/`](../app/components/kokonutui/gradient-button/) | Layered gradient button with emerald, purple, and orange variants, a gradient border in light and dark mode, soft inner… |
| V0 Button (`v0-button`) | [`app/components/kokonutui/v0-button/`](../app/components/kokonutui/v0-button/) | Open in v0 button that sends a component registry JSON to v0.dev for instant editing, built with React, the shadcn… |
| Tool Dock (`toolbar`) | [`app/components/kokonutui/toolbar/`](../app/components/kokonutui/toolbar/) | An editor tool dock with a sliding selection plate, shortcut tooltips and flyouts that you can throw to any edge. |
| AI State Loading (`ai-loading`) | [`app/components/kokonutui/ai-loading/`](../app/components/kokonutui/ai-loading/) | Agent progress as a list of steps with a live log, elapsed time and a summary when done. |
| AI Tool Approval (`ai-tool-approval`) | [`app/components/kokonutui/ai-tool-approval/`](../app/components/kokonutui/ai-tool-approval/) | Approve or deny an agent's tool calls. Destructive calls need a press and hold, and decided calls fold into a trace with… |
| AI Context Meter (`ai-context-meter`) | [`app/components/kokonutui/ai-context-meter/`](../app/components/kokonutui/ai-context-meter/) | How full the context window is, as a ring in the prompt footer that opens a breakdown by source and compacts when it fills. |
| AI Inline Citations (`ai-citations`) | [`app/components/kokonutui/ai-citations/`](../app/components/kokonutui/ai-citations/) | An answer with source chips beside each claim. One preview glides between chips and lights up the sentence it backs. |
| AI Diff Review (`ai-diff-review`) | [`app/components/kokonutui/ai-diff-review/`](../app/components/kokonutui/ai-diff-review/) | A coding agent's edits streaming in file by file, then reviewed per file with accept, reject and undo. |
| AI Model Selector (`ai-model-selector`) | [`app/components/kokonutui/ai-model-selector/`](../app/components/kokonutui/ai-model-selector/) | Pick a model and how hard it thinks. Effort is a detent track that reshapes for each model and keeps your level when you… |
| Throw Deck (`card-stack`) | [`app/components/kokonutui/card-stack/`](../app/components/kokonutui/card-stack/) | A pile of image cards you drag, flick off the top and send under the deck, with arrow keys and a details view. |
| Notification Stack (`notification-stack`) | [`app/components/kokonutui/notification-stack/`](../app/components/kokonutui/notification-stack/) | Stacked notifications that fan out on hover and swipe away, built with React and Tailwind CSS. |
| Liquid Gauge (`liquid-gauge`) | [`app/components/kokonutui/liquid-gauge/`](../app/components/kokonutui/liquid-gauge/) | A usage meter filled with liquid that sloshes, ripples and bubbles, built with React and a wave simulation. |
| Activity Terrain (`activity-terrain`) | [`app/components/kokonutui/activity-terrain/`](../app/components/kokonutui/activity-terrain/) | A contribution heatmap that tilts up into a 3D terrain you can turn, built with React and canvas. |
| Receipt Printer (`receipt-printer`) | [`app/components/kokonutui/receipt-printer/`](../app/components/kokonutui/receipt-printer/) | A receipt that prints line by line, then tears off and falls when you pull it, built with React. |
| Metric Card (`metric-card`) | [`app/components/kokonutui/metric-card/`](../app/components/kokonutui/metric-card/) | A revenue KPI card. Scrub a day, drag a range, or pick a segment; the number rolls, the line morphs and the breakdown… |
| Uptime Card (`uptime-card`) | [`app/components/kokonutui/uptime-card/`](../app/components/kokonutui/uptime-card/) | A status page card with 90 days per service that swell under the cursor, and a day you click opens its incident log. |
| Spending Ring (`spending-ring`) | [`app/components/kokonutui/spending-ring/`](../app/components/kokonutui/spending-ring/) | A spending breakdown you spin like a dial; flick the ring and it settles with a category under the marker. |
| Focal Point Picker (`focal-point-picker`) | [`app/components/kokonutui/focal-point-picker/`](../app/components/kokonutui/focal-point-picker/) | Set where a photo's subject is and see every crop follow it live. Hover a crop to see what it cuts. |
| Photo Straighten (`photo-straighten`) | [`app/components/kokonutui/photo-straighten/`](../app/components/kokonutui/photo-straighten/) | Level a crooked photo on a ruler you drag or flick. The crop grows to hide the corners, and a grid shows while you adjust. |
| Clip Trimmer (`clip-trimmer`) | [`app/components/kokonutui/clip-trimmer/`](../app/components/kokonutui/clip-trimmer/) | A video trim timeline with a filmstrip, handles that snap to whole seconds and a playhead that loops the kept range. |
| Synced Transcript (`synced-transcript`) | [`app/components/kokonutui/synced-transcript/`](../app/components/kokonutui/synced-transcript/) | A transcript that follows the spoken word, lets you click any word to jump there, and waits when you scroll away. |
| Avatar Picker (`avatar-picker`) | [`app/components/kokonutui/avatar-picker/`](../app/components/kokonutui/avatar-picker/) | Generated avatars from a name, morphing as you type, on a 3D coin you can flick, tap or shuffle. |
| Wheel Picker (`wheel-picker`) | [`app/components/kokonutui/wheel-picker/`](../app/components/kokonutui/wheel-picker/) | iOS-style 3D drum picker with flick momentum, built with React and Motion. |
| Typing Text (`type-writer`) | [`app/components/kokonutui/type-writer/`](../app/components/kokonutui/type-writer/) | Typewriter text that makes the odd typo and corrects it, erases by selecting, and blinks its caret only when idle, built… |
| Extruded Text (`swoosh-text`) | [`app/components/kokonutui/swoosh-text/`](../app/components/kokonutui/swoosh-text/) | Zinc 3D extruded text lit by your pointer, with letters that press in like keycaps. |
| Scroll Index (`scroll-index`) | [`app/components/kokonutui/scroll-index/`](../app/components/kokonutui/scroll-index/) | A section rail for long pages, with a tick per heading that you can hover, click or drag to scrub, built with React. |
| Plucked Text (`plucked-text`) | [`app/components/kokonutui/plucked-text/`](../app/components/kokonutui/plucked-text/) | A headline sitting on a string you can pluck, strum and let ring, built with React and real string physics. |
| Glitch Text (`glitch-text`) | [`app/components/kokonutui/glitch-text/`](../app/components/kokonutui/glitch-text/) | Flat text that cuts into hard-shifted bands with a thin red/cyan split, on idle, hover or text change. |
| Dynamic Text (`dynamic-text`) | [`app/components/kokonutui/dynamic-text/`](../app/components/kokonutui/dynamic-text/) | Morphing text where shared letters travel, old ones fall and new ones land, with decode and cycle modes. |
| Particle Button (`particle-button`) | [`app/components/kokonutui/particle-button/`](../app/components/kokonutui/particle-button/) | A status button for async actions, with a spinner, a drawn check and a particle burst on success. |
| Now Playing (`liquid-glass-card`) | [`app/components/kokonutui/liquid-glass-card/`](../app/components/kokonutui/liquid-glass-card/) | Music card with a spinning disc you can grab and turn to scrub, built with React and Tailwind CSS. |
| Account Menu (`profile-dropdown`) | [`app/components/kokonutui/profile-dropdown/`](../app/components/kokonutui/profile-dropdown/) | An account card that morphs into its own menu, with account switching, status, theme and hold-to-sign-out. |
| Loader (`loader`) | [`app/components/kokonutui/loader/`](../app/components/kokonutui/loader/) | Animated loading indicator with rotating gradient rings, size variants and customizable title text. Built with React and… |
| Slide Text Button (`slide-text-button`) | [`app/components/kokonutui/slide-text-button/`](../app/components/kokonutui/slide-text-button/) | Animated link button with a vertical text slide on hover and default and ghost variants, built with React, Next.js Link,… |
| Split Nav (`morphic-navbar`) | [`app/components/kokonutui/morphic-navbar/`](../app/components/kokonutui/morphic-navbar/) | Navigation bar that splits around the active link, with drag-to-scrub, flick projection and an optional compact fold. |
| Status Island (`status-island`) | [`app/components/kokonutui/status-island/`](../app/components/kokonutui/status-island/) | A pill that reports background work, reshaping as tasks change and opening into a list of everything in flight. |
| Morph Popover (`morph-popover`) | [`app/components/kokonutui/morph-popover/`](../app/components/kokonutui/morph-popover/) | A button that grows into the form it opens, with its label sliding up to become the title, then shrinks into a confirmation. |
| Lightbox Grid (`lightbox-grid`) | [`app/components/kokonutui/lightbox-grid/`](../app/components/kokonutui/lightbox-grid/) | A photo grid whose thumbnails grow into a full view and fly back to their slot when you drag them down. |
| Spoiler Text (`spoiler-text`) | [`app/components/kokonutui/spoiler-text/`](../app/components/kokonutui/spoiler-text/) | Inline text hidden under drifting specks, like a chat spoiler. A click blows the specks away from the point you touched. |
| Stack Panel (`stack-panel`) | [`app/components/kokonutui/stack-panel/`](../app/components/kokonutui/stack-panel/) | A panel that drills into pages like settings on a phone. The tapped row's label flies up into the title, and a swipe… |
| AI Autocomplete (`ai-autocomplete`) | [`app/components/kokonutui/ai-autocomplete/`](../app/components/kokonutui/ai-autocomplete/) | A text box that suggests how your sentence ends in grey after the caret. Tab takes it all, the right arrow takes one… |
| Undo Button (`undo-button`) | [`app/components/kokonutui/undo-button/`](../app/components/kokonutui/undo-button/) | An action button that gives you a few seconds to take it back, with the time left drawn around its own edge. |
| Use Auto Resize Textarea (`use-auto-resize-textarea`) | [`app/components/kokonutui/use-auto-resize-textarea/`](../app/components/kokonutui/use-auto-resize-textarea/) | React hook that auto-resizes a textarea to fit its content between a min and max height. |
| Use Click Outside (`use-click-outside`) | [`app/components/kokonutui/use-click-outside/`](../app/components/kokonutui/use-click-outside/) | React hook that runs a callback when the user clicks outside the referenced element. |
| Use Copy To Clipboard (`use-copy-to-clipboard`) | [`app/components/kokonutui/use-copy-to-clipboard/`](../app/components/kokonutui/use-copy-to-clipboard/) | React hook that copies text to the clipboard and exposes a copied state with a reset timeout. |
| Use Mobile (`use-mobile`) | [`app/components/kokonutui/use-mobile/`](../app/components/kokonutui/use-mobile/) | React hook that reports whether the viewport is below the 768px mobile breakpoint. |
| Utils (`utils`) | [`app/components/kokonutui/utils/`](../app/components/kokonutui/utils/) | The cn utility for merging Tailwind CSS classes, built on clsx and tailwind-merge. |

## Files and dependencies

### AI Input Selector (`ai-prompt`)

Source: https://kokonutui.com/r/ai-prompt.json

Files:

- [`app/components/kokonutui/ai-prompt/components/kokonutui/ai-prompt.tsx`](../app/components/kokonutui/ai-prompt/components/kokonutui/ai-prompt.tsx)
- [`app/components/kokonutui/ai-prompt/hooks/use-auto-resize-textarea.ts`](../app/components/kokonutui/ai-prompt/hooks/use-auto-resize-textarea.ts)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: `textarea`, `dropdown-menu`.

### Command Button (`command-button`)

Source: https://kokonutui.com/r/command-button.json

Files:

- [`app/components/kokonutui/command-button/components/kokonutui/command-button.tsx`](../app/components/kokonutui/command-button/components/kokonutui/command-button.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Flick Card (`card-flip`)

Source: https://kokonutui.com/r/card-flip.json

Files:

- [`app/components/kokonutui/card-flip/components/kokonutui/card-flip.tsx`](../app/components/kokonutui/card-flip/components/kokonutui/card-flip.tsx)

npm dependencies: `lucide-react`.

Registry dependencies: None listed.

### Smooth Drawer (`smooth-drawer`)

Source: https://kokonutui.com/r/smooth-drawer.json

Files:

- [`app/components/kokonutui/smooth-drawer/components/kokonutui/smooth-drawer.tsx`](../app/components/kokonutui/smooth-drawer/components/kokonutui/smooth-drawer.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: `drawer`, `button`.

### Halftone Background (`halftone-background`)

Source: https://kokonutui.com/r/halftone-background.json

Files:

- [`app/components/kokonutui/halftone-background/components/kokonutui/halftone-background.tsx`](../app/components/kokonutui/halftone-background/components/kokonutui/halftone-background.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Shape Hero (`shape-hero`)

Source: https://kokonutui.com/r/shape-hero.json

Files:

- [`app/components/kokonutui/shape-hero/components/kokonutui/shape-hero.tsx`](../app/components/kokonutui/shape-hero/components/kokonutui/shape-hero.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### AI Text Loading (`ai-text-loading`)

Source: https://kokonutui.com/r/ai-text-loading.json

Files:

- [`app/components/kokonutui/ai-text-loading/components/kokonutui/ai-text-loading.tsx`](../app/components/kokonutui/ai-text-loading/components/kokonutui/ai-text-loading.tsx)

npm dependencies: `motion`.

Registry dependencies: None listed.

### Momentum Rail (`carousel-cards`)

Source: https://kokonutui.com/r/carousel-cards.json

Files:

- [`app/components/kokonutui/carousel-cards/components/kokonutui/carousel-cards.tsx`](../app/components/kokonutui/carousel-cards/components/kokonutui/carousel-cards.tsx)

npm dependencies: `lucide-react`.

Registry dependencies: None listed.

### File Upload (`file-upload`)

Source: https://kokonutui.com/r/file-upload.json

Files:

- [`app/components/kokonutui/file-upload/components/kokonutui/file-upload.tsx`](../app/components/kokonutui/file-upload/components/kokonutui/file-upload.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### Command Palette (`action-search-bar`)

Source: https://kokonutui.com/r/action-search-bar.json

Files:

- [`app/components/kokonutui/action-search-bar/components/kokonutui/action-search-bar.tsx`](../app/components/kokonutui/action-search-bar/components/kokonutui/action-search-bar.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### AI Input Search (`ai-input-search`)

Source: https://kokonutui.com/r/ai-input-search.json

Files:

- [`app/components/kokonutui/ai-input-search/components/kokonutui/ai-input-search.tsx`](../app/components/kokonutui/ai-input-search/components/kokonutui/ai-input-search.tsx)
- [`app/components/kokonutui/ai-input-search/hooks/use-auto-resize-textarea.ts`](../app/components/kokonutui/ai-input-search/hooks/use-auto-resize-textarea.ts)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: `textarea`.

### Cradle Text (`cradle-text`)

Source: https://kokonutui.com/r/cradle-text.json

Files:

- [`app/components/kokonutui/cradle-text/components/kokonutui/cradle-text.tsx`](../app/components/kokonutui/cradle-text/components/kokonutui/cradle-text.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Currency Transfer (`currency-transfer`)

Source: https://kokonutui.com/r/currency-transfer.json

Files:

- [`app/components/kokonutui/currency-transfer/components/kokonutui/currency-transfer.tsx`](../app/components/kokonutui/currency-transfer/components/kokonutui/currency-transfer.tsx)

npm dependencies: `lucide-react`.

Registry dependencies: None listed.

### Background Paths (`background-paths`)

Source: https://kokonutui.com/r/background-paths.json

Files:

- [`app/components/kokonutui/background-paths/components/kokonutui/background-paths.tsx`](../app/components/kokonutui/background-paths/components/kokonutui/background-paths.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Dot Field (`dot-field`)

Source: https://kokonutui.com/r/dot-field.json

Files:

- [`app/components/kokonutui/dot-field/components/kokonutui/dot-field.tsx`](../app/components/kokonutui/dot-field/components/kokonutui/dot-field.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Wind (`flow-field`)

Source: https://kokonutui.com/r/flow-field.json

Files:

- [`app/components/kokonutui/flow-field/components/kokonutui/flow-field.tsx`](../app/components/kokonutui/flow-field/components/kokonutui/flow-field.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Topo Background (`topo-background`)

Source: https://kokonutui.com/r/topo-background.json

Files:

- [`app/components/kokonutui/topo-background/components/kokonutui/topo-background.tsx`](../app/components/kokonutui/topo-background/components/kokonutui/topo-background.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Drape Background (`drape-background`)

Source: https://kokonutui.com/r/drape-background.json

Files:

- [`app/components/kokonutui/drape-background/components/kokonutui/drape-background.tsx`](../app/components/kokonutui/drape-background/components/kokonutui/drape-background.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Apple Activity Card (`apple-activity-card`)

Source: https://kokonutui.com/r/apple-activity-card.json

Files:

- [`app/components/kokonutui/apple-activity-card/components/kokonutui/apple-activity-card.tsx`](../app/components/kokonutui/apple-activity-card/components/kokonutui/apple-activity-card.tsx)

npm dependencies: `motion`.

Registry dependencies: None listed.

### AI Voice (`ai-voice`)

Source: https://kokonutui.com/r/ai-voice.json

Files:

- [`app/components/kokonutui/ai-voice/components/kokonutui/ai-voice.tsx`](../app/components/kokonutui/ai-voice/components/kokonutui/ai-voice.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### Swipe Tabs (`smooth-tab`)

Source: https://kokonutui.com/r/smooth-tab.json

Files:

- [`app/components/kokonutui/smooth-tab/components/kokonutui/smooth-tab.tsx`](../app/components/kokonutui/smooth-tab/components/kokonutui/smooth-tab.tsx)

npm dependencies: `motion`, `lucide-react`.

Registry dependencies: None listed.

### Marking Menu (`marking-menu`)

Source: https://kokonutui.com/r/marking-menu.json

Files:

- [`app/components/kokonutui/marking-menu/components/kokonutui/marking-menu.tsx`](../app/components/kokonutui/marking-menu/components/kokonutui/marking-menu.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### Team Selector (`team-selector`)

Source: https://kokonutui.com/r/team-selector.json

Files:

- [`app/components/kokonutui/team-selector/components/kokonutui/team-selector.tsx`](../app/components/kokonutui/team-selector/components/kokonutui/team-selector.tsx)

npm dependencies: `motion`, `lucide-react`.

Registry dependencies: None listed.

### Detent Dial (`detent-dial`)

Source: https://kokonutui.com/r/detent-dial.json

Files:

- [`app/components/kokonutui/detent-dial/components/kokonutui/detent-dial.tsx`](../app/components/kokonutui/detent-dial/components/kokonutui/detent-dial.tsx)

npm dependencies: `motion`.

Registry dependencies: None listed.

### Liquid Slider (`liquid-slider`)

Source: https://kokonutui.com/r/liquid-slider.json

Files:

- [`app/components/kokonutui/liquid-slider/components/kokonutui/liquid-slider.tsx`](../app/components/kokonutui/liquid-slider/components/kokonutui/liquid-slider.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Signature Pad (`signature-pad`)

Source: https://kokonutui.com/r/signature-pad.json

Files:

- [`app/components/kokonutui/signature-pad/components/kokonutui/signature-pad.tsx`](../app/components/kokonutui/signature-pad/components/kokonutui/signature-pad.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Switch Button (`switch-button`)

Source: https://kokonutui.com/r/switch-button.json

Files:

- [`app/components/kokonutui/switch-button/components/kokonutui/switch-button.tsx`](../app/components/kokonutui/switch-button/components/kokonutui/switch-button.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Pull Cord (`pull-cord`)

Source: https://kokonutui.com/r/pull-cord.json

Files:

- [`app/components/kokonutui/pull-cord/components/kokonutui/pull-cord.tsx`](../app/components/kokonutui/pull-cord/components/kokonutui/pull-cord.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Tear Button (`tear-button`)

Source: https://kokonutui.com/r/tear-button.json

Files:

- [`app/components/kokonutui/tear-button/components/kokonutui/tear-button.tsx`](../app/components/kokonutui/tear-button/components/kokonutui/tear-button.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Bell Button (`bell-button`)

Source: https://kokonutui.com/r/bell-button.json

Files:

- [`app/components/kokonutui/bell-button/components/kokonutui/bell-button.tsx`](../app/components/kokonutui/bell-button/components/kokonutui/bell-button.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Widget Grid (`bento-grid`)

Source: https://kokonutui.com/r/bento-grid.json

Files:

- [`app/components/kokonutui/bento-grid/components/kokonutui/bento-grid.tsx`](../app/components/kokonutui/bento-grid/components/kokonutui/bento-grid.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### Hold Button (`hold-button`)

Source: https://kokonutui.com/r/hold-button.json

Files:

- [`app/components/kokonutui/hold-button/components/kokonutui/hold-button.tsx`](../app/components/kokonutui/hold-button/components/kokonutui/hold-button.tsx)

npm dependencies: `class-variance-authority`, `lucide-react`, `motion`.

Registry dependencies: None listed.

### Magnet Button (`attract-button`)

Source: https://kokonutui.com/r/attract-button.json

Files:

- [`app/components/kokonutui/attract-button/components/kokonutui/attract-button.tsx`](../app/components/kokonutui/attract-button/components/kokonutui/attract-button.tsx)

npm dependencies: `lucide-react`.

Registry dependencies: None listed.

### Gradient Button (`gradient-button`)

Source: https://kokonutui.com/r/gradient-button.json

Files:

- [`app/components/kokonutui/gradient-button/components/kokonutui/gradient-button.tsx`](../app/components/kokonutui/gradient-button/components/kokonutui/gradient-button.tsx)

npm dependencies: None listed.

Registry dependencies: `button`.

### V0 Button (`v0-button`)

Source: https://kokonutui.com/r/v0-button.json

Files:

- [`app/components/kokonutui/v0-button/components/kokonutui/v0-button.tsx`](../app/components/kokonutui/v0-button/components/kokonutui/v0-button.tsx)

npm dependencies: None listed.

Registry dependencies: `button`.

### Tool Dock (`toolbar`)

Source: https://kokonutui.com/r/toolbar.json

Files:

- [`app/components/kokonutui/toolbar/components/kokonutui/toolbar.tsx`](../app/components/kokonutui/toolbar/components/kokonutui/toolbar.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### AI State Loading (`ai-loading`)

Source: https://kokonutui.com/r/ai-loading.json

Files:

- [`app/components/kokonutui/ai-loading/components/kokonutui/ai-loading.tsx`](../app/components/kokonutui/ai-loading/components/kokonutui/ai-loading.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### AI Tool Approval (`ai-tool-approval`)

Source: https://kokonutui.com/r/ai-tool-approval.json

Files:

- [`app/components/kokonutui/ai-tool-approval/components/kokonutui/ai-tool-approval.tsx`](../app/components/kokonutui/ai-tool-approval/components/kokonutui/ai-tool-approval.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### AI Context Meter (`ai-context-meter`)

Source: https://kokonutui.com/r/ai-context-meter.json

Files:

- [`app/components/kokonutui/ai-context-meter/components/kokonutui/ai-context-meter.tsx`](../app/components/kokonutui/ai-context-meter/components/kokonutui/ai-context-meter.tsx)

npm dependencies: `motion`.

Registry dependencies: None listed.

### AI Inline Citations (`ai-citations`)

Source: https://kokonutui.com/r/ai-citations.json

Files:

- [`app/components/kokonutui/ai-citations/components/kokonutui/ai-citations.tsx`](../app/components/kokonutui/ai-citations/components/kokonutui/ai-citations.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### AI Diff Review (`ai-diff-review`)

Source: https://kokonutui.com/r/ai-diff-review.json

Files:

- [`app/components/kokonutui/ai-diff-review/components/kokonutui/ai-diff-review.tsx`](../app/components/kokonutui/ai-diff-review/components/kokonutui/ai-diff-review.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### AI Model Selector (`ai-model-selector`)

Source: https://kokonutui.com/r/ai-model-selector.json

Files:

- [`app/components/kokonutui/ai-model-selector/components/kokonutui/ai-model-selector.tsx`](../app/components/kokonutui/ai-model-selector/components/kokonutui/ai-model-selector.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### Throw Deck (`card-stack`)

Source: https://kokonutui.com/r/card-stack.json

Files:

- [`app/components/kokonutui/card-stack/components/kokonutui/card-stack.tsx`](../app/components/kokonutui/card-stack/components/kokonutui/card-stack.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### Notification Stack (`notification-stack`)

Source: https://kokonutui.com/r/notification-stack.json

Files:

- [`app/components/kokonutui/notification-stack/components/kokonutui/notification-stack.tsx`](../app/components/kokonutui/notification-stack/components/kokonutui/notification-stack.tsx)

npm dependencies: `lucide-react`.

Registry dependencies: None listed.

### Liquid Gauge (`liquid-gauge`)

Source: https://kokonutui.com/r/liquid-gauge.json

Files:

- [`app/components/kokonutui/liquid-gauge/components/kokonutui/liquid-gauge.tsx`](../app/components/kokonutui/liquid-gauge/components/kokonutui/liquid-gauge.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Activity Terrain (`activity-terrain`)

Source: https://kokonutui.com/r/activity-terrain.json

Files:

- [`app/components/kokonutui/activity-terrain/components/kokonutui/activity-terrain.tsx`](../app/components/kokonutui/activity-terrain/components/kokonutui/activity-terrain.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Receipt Printer (`receipt-printer`)

Source: https://kokonutui.com/r/receipt-printer.json

Files:

- [`app/components/kokonutui/receipt-printer/components/kokonutui/receipt-printer.tsx`](../app/components/kokonutui/receipt-printer/components/kokonutui/receipt-printer.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Metric Card (`metric-card`)

Source: https://kokonutui.com/r/metric-card.json

Files:

- [`app/components/kokonutui/metric-card/components/kokonutui/metric-card.tsx`](../app/components/kokonutui/metric-card/components/kokonutui/metric-card.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Uptime Card (`uptime-card`)

Source: https://kokonutui.com/r/uptime-card.json

Files:

- [`app/components/kokonutui/uptime-card/components/kokonutui/uptime-card.tsx`](../app/components/kokonutui/uptime-card/components/kokonutui/uptime-card.tsx)

npm dependencies: `lucide-react`.

Registry dependencies: None listed.

### Spending Ring (`spending-ring`)

Source: https://kokonutui.com/r/spending-ring.json

Files:

- [`app/components/kokonutui/spending-ring/components/kokonutui/spending-ring.tsx`](../app/components/kokonutui/spending-ring/components/kokonutui/spending-ring.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Focal Point Picker (`focal-point-picker`)

Source: https://kokonutui.com/r/focal-point-picker.json

Files:

- [`app/components/kokonutui/focal-point-picker/components/kokonutui/focal-point-picker.tsx`](../app/components/kokonutui/focal-point-picker/components/kokonutui/focal-point-picker.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Photo Straighten (`photo-straighten`)

Source: https://kokonutui.com/r/photo-straighten.json

Files:

- [`app/components/kokonutui/photo-straighten/components/kokonutui/photo-straighten.tsx`](../app/components/kokonutui/photo-straighten/components/kokonutui/photo-straighten.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### Clip Trimmer (`clip-trimmer`)

Source: https://kokonutui.com/r/clip-trimmer.json

Files:

- [`app/components/kokonutui/clip-trimmer/components/kokonutui/clip-trimmer.tsx`](../app/components/kokonutui/clip-trimmer/components/kokonutui/clip-trimmer.tsx)

npm dependencies: `lucide-react`.

Registry dependencies: None listed.

### Synced Transcript (`synced-transcript`)

Source: https://kokonutui.com/r/synced-transcript.json

Files:

- [`app/components/kokonutui/synced-transcript/components/kokonutui/synced-transcript.tsx`](../app/components/kokonutui/synced-transcript/components/kokonutui/synced-transcript.tsx)

npm dependencies: `lucide-react`.

Registry dependencies: None listed.

### Avatar Picker (`avatar-picker`)

Source: https://kokonutui.com/r/avatar-picker.json

Files:

- [`app/components/kokonutui/avatar-picker/components/kokonutui/avatar-picker.tsx`](../app/components/kokonutui/avatar-picker/components/kokonutui/avatar-picker.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### Wheel Picker (`wheel-picker`)

Source: https://kokonutui.com/r/wheel-picker.json

Files:

- [`app/components/kokonutui/wheel-picker/components/kokonutui/wheel-picker.tsx`](../app/components/kokonutui/wheel-picker/components/kokonutui/wheel-picker.tsx)

npm dependencies: `motion`.

Registry dependencies: None listed.

### Typing Text (`type-writer`)

Source: https://kokonutui.com/r/type-writer.json

Files:

- [`app/components/kokonutui/type-writer/components/kokonutui/type-writer.tsx`](../app/components/kokonutui/type-writer/components/kokonutui/type-writer.tsx)

npm dependencies: `motion`.

Registry dependencies: None listed.

### Extruded Text (`swoosh-text`)

Source: https://kokonutui.com/r/swoosh-text.json

Files:

- [`app/components/kokonutui/swoosh-text/components/kokonutui/swoosh-text.tsx`](../app/components/kokonutui/swoosh-text/components/kokonutui/swoosh-text.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Scroll Index (`scroll-index`)

Source: https://kokonutui.com/r/scroll-index.json

Files:

- [`app/components/kokonutui/scroll-index/components/kokonutui/scroll-index.tsx`](../app/components/kokonutui/scroll-index/components/kokonutui/scroll-index.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Plucked Text (`plucked-text`)

Source: https://kokonutui.com/r/plucked-text.json

Files:

- [`app/components/kokonutui/plucked-text/components/kokonutui/plucked-text.tsx`](../app/components/kokonutui/plucked-text/components/kokonutui/plucked-text.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Glitch Text (`glitch-text`)

Source: https://kokonutui.com/r/glitch-text.json

Files:

- [`app/components/kokonutui/glitch-text/components/kokonutui/glitch-text.tsx`](../app/components/kokonutui/glitch-text/components/kokonutui/glitch-text.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Dynamic Text (`dynamic-text`)

Source: https://kokonutui.com/r/dynamic-text.json

Files:

- [`app/components/kokonutui/dynamic-text/components/kokonutui/dynamic-text.tsx`](../app/components/kokonutui/dynamic-text/components/kokonutui/dynamic-text.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Particle Button (`particle-button`)

Source: https://kokonutui.com/r/particle-button.json

Files:

- [`app/components/kokonutui/particle-button/components/kokonutui/particle-button.tsx`](../app/components/kokonutui/particle-button/components/kokonutui/particle-button.tsx)

npm dependencies: `class-variance-authority`, `lucide-react`, `motion`.

Registry dependencies: `button`.

### Now Playing (`liquid-glass-card`)

Source: https://kokonutui.com/r/liquid-glass-card.json

Files:

- [`app/components/kokonutui/liquid-glass-card/components/kokonutui/liquid-glass-card.tsx`](../app/components/kokonutui/liquid-glass-card/components/kokonutui/liquid-glass-card.tsx)

npm dependencies: `class-variance-authority`, `lucide-react`.

Registry dependencies: `card`, `button`.

### Account Menu (`profile-dropdown`)

Source: https://kokonutui.com/r/profile-dropdown.json

Files:

- [`app/components/kokonutui/profile-dropdown/components/kokonutui/profile-dropdown.tsx`](../app/components/kokonutui/profile-dropdown/components/kokonutui/profile-dropdown.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### Loader (`loader`)

Source: https://kokonutui.com/r/loader.json

Files:

- [`app/components/kokonutui/loader/components/kokonutui/loader.tsx`](../app/components/kokonutui/loader/components/kokonutui/loader.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Slide Text Button (`slide-text-button`)

Source: https://kokonutui.com/r/slide-text-button.json

Files:

- [`app/components/kokonutui/slide-text-button/components/kokonutui/slide-text-button.tsx`](../app/components/kokonutui/slide-text-button/components/kokonutui/slide-text-button.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Split Nav (`morphic-navbar`)

Source: https://kokonutui.com/r/morphic-navbar.json

Files:

- [`app/components/kokonutui/morphic-navbar/components/kokonutui/morphic-navbar.tsx`](../app/components/kokonutui/morphic-navbar/components/kokonutui/morphic-navbar.tsx)

npm dependencies: `motion`.

Registry dependencies: None listed.

### Status Island (`status-island`)

Source: https://kokonutui.com/r/status-island.json

Files:

- [`app/components/kokonutui/status-island/components/kokonutui/status-island.tsx`](../app/components/kokonutui/status-island/components/kokonutui/status-island.tsx)

npm dependencies: `motion`.

Registry dependencies: None listed.

### Morph Popover (`morph-popover`)

Source: https://kokonutui.com/r/morph-popover.json

Files:

- [`app/components/kokonutui/morph-popover/components/kokonutui/morph-popover.tsx`](../app/components/kokonutui/morph-popover/components/kokonutui/morph-popover.tsx)

npm dependencies: `motion`.

Registry dependencies: None listed.

### Lightbox Grid (`lightbox-grid`)

Source: https://kokonutui.com/r/lightbox-grid.json

Files:

- [`app/components/kokonutui/lightbox-grid/components/kokonutui/lightbox-grid.tsx`](../app/components/kokonutui/lightbox-grid/components/kokonutui/lightbox-grid.tsx)

npm dependencies: `motion`.

Registry dependencies: None listed.

### Spoiler Text (`spoiler-text`)

Source: https://kokonutui.com/r/spoiler-text.json

Files:

- [`app/components/kokonutui/spoiler-text/components/kokonutui/spoiler-text.tsx`](../app/components/kokonutui/spoiler-text/components/kokonutui/spoiler-text.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Stack Panel (`stack-panel`)

Source: https://kokonutui.com/r/stack-panel.json

Files:

- [`app/components/kokonutui/stack-panel/components/kokonutui/stack-panel.tsx`](../app/components/kokonutui/stack-panel/components/kokonutui/stack-panel.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### AI Autocomplete (`ai-autocomplete`)

Source: https://kokonutui.com/r/ai-autocomplete.json

Files:

- [`app/components/kokonutui/ai-autocomplete/components/kokonutui/ai-autocomplete.tsx`](../app/components/kokonutui/ai-autocomplete/components/kokonutui/ai-autocomplete.tsx)

npm dependencies: None listed.

Registry dependencies: None listed.

### Undo Button (`undo-button`)

Source: https://kokonutui.com/r/undo-button.json

Files:

- [`app/components/kokonutui/undo-button/components/kokonutui/undo-button.tsx`](../app/components/kokonutui/undo-button/components/kokonutui/undo-button.tsx)

npm dependencies: `lucide-react`, `motion`.

Registry dependencies: None listed.

### Use Auto Resize Textarea (`use-auto-resize-textarea`)

Source: https://kokonutui.com/r/use-auto-resize-textarea.json

Files:

- [`app/components/kokonutui/use-auto-resize-textarea/hooks/use-auto-resize-textarea.ts`](../app/components/kokonutui/use-auto-resize-textarea/hooks/use-auto-resize-textarea.ts)

npm dependencies: None listed.

Registry dependencies: None listed.

### Use Click Outside (`use-click-outside`)

Source: https://kokonutui.com/r/use-click-outside.json

Files:

- [`app/components/kokonutui/use-click-outside/hooks/use-click-outside.ts`](../app/components/kokonutui/use-click-outside/hooks/use-click-outside.ts)

npm dependencies: None listed.

Registry dependencies: None listed.

### Use Copy To Clipboard (`use-copy-to-clipboard`)

Source: https://kokonutui.com/r/use-copy-to-clipboard.json

Files:

- [`app/components/kokonutui/use-copy-to-clipboard/hooks/use-copy-to-clipboard.ts`](../app/components/kokonutui/use-copy-to-clipboard/hooks/use-copy-to-clipboard.ts)

npm dependencies: None listed.

Registry dependencies: None listed.

### Use Mobile (`use-mobile`)

Source: https://kokonutui.com/r/use-mobile.json

Files:

- [`app/components/kokonutui/use-mobile/hooks/use-mobile.ts`](../app/components/kokonutui/use-mobile/hooks/use-mobile.ts)

npm dependencies: None listed.

Registry dependencies: None listed.

### Utils (`utils`)

Source: https://kokonutui.com/r/utils.json

Files:

- [`app/components/kokonutui/utils/lib/utils.ts`](../app/components/kokonutui/utils/lib/utils.ts)

npm dependencies: `clsx`, `tailwind-merge`.

Registry dependencies: None listed.

