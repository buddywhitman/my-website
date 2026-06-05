# Website Revamp Plan (2026 Standards)

## Background & Motivation
The current portfolio website relies on older dependencies (Next.js 12, React 17, Framer Motion 4) and a design aesthetic that doesn't fully capture the high-signal capabilities of the candidate. To attract recruiters from big tech and well-funded startups for specialized roles (Embedded Systems, Agentic AI, HFT, HPC), the website needs a complete UI/UX overhaul. The new design must embody 2026 standards: minimal, highly immersive, typography-driven, with subtle, physics-based micro-interactions (Emil Kowalski style).

## Scope & Impact
*   **Hero Section:** Update the bio to accurately reflect the candidate's focus (production inference infrastructure, safety-critical embedded systems, real-time voice AI, Q1 paper, patents).
*   **Aesthetic Redesign:** Transition to a "Minimal & Immersive" style. This means heavy use of dark mode, high-contrast typography, and fluid spring animations.
*   **Dependency Upgrades:** Upgrade `framer-motion` to v11+ and install MDX dependencies.
*   **Page Revamps:**
    *   `about.tsx`: Move away from a long vertical timeline to a more engaging, modular layout highlighting key achievements (patents, publications).
    *   `tech.tsx`: Implement interactive, hoverable tech pills/cards with subtle enter/exit animations.
*   **Blog Implementation:** Set up an MDX-based blog system under `src/pages/blog/` to allow for easy authoring of technical articles.

## Proposed Solution
We will implement the redesign using the `ui-ux-pro-max` and `emil-design-eng` guidelines:
1.  **Typography & Spacing:** Adopt a strict 4/8pt grid. Use fluid typography scaling and ensure WCAG AA contrast.
2.  **Animation Philosophy:** Avoid animating keyboard-initiated actions. Use custom spring physics (`{ type: "spring", bounce: 0.2, duration: 0.5 }`) for hover states, staggering elements on page load, and origin-aware scale transitions for interactive elements.
3.  **Hero Update:** Implement the new copy in `SomeText.tsx` and `index.tsx`, accompanied by staggered text-reveal animations.
4.  **Blog Setup:** Install `next-mdx-remote` and `gray-matter`. Create a `lib/mdx.ts` utility to parse `.mdx` files from a new `content/blog` directory, and set up dynamic routing in `pages/blog/[slug].tsx`.

## Alternatives Considered
*   **Bento Grid / Playful UI:** Rejected in favor of the "Minimal & Immersive" approach, which aligns better with the serious, high-signal nature of HFT/HPC and Agentic AI roles.
*   **Simple Markdown Parsing:** Rejected in favor of MDX, as MDX allows embedding interactive React components (like custom code blocks or charts) directly into blog posts.

## Implementation Plan
*   **Phase 1: Setup & Upgrades:** Upgrade `framer-motion`, install `next-mdx-remote`, `gray-matter`, and other necessary UI utilities (like `lucide-react` if replacing `react-icons`).
*   **Phase 2: Global Theme & Layout:** Redesign the Chakra UI theme configuration (`src/styles/customTheme`) to enforce the new minimal dark mode default and update the global layout components (`Header`, `Footer`).
*   **Phase 3: Hero & Index Redesign:** Update the copy and implement staggered spring animations on the home page.
*   **Phase 4: About & Tech Pages:** Refactor `about.tsx` into a high-impact, scannable layout. Revamp `tech.tsx` with animated skill pills.
*   **Phase 5: MDX Blog Integration:** Build the MDX parsing utilities, create the blog index page (`blog.tsx`), and the dynamic post route (`blog/[slug].tsx`). Add a sample post.

## Verification
*   **Performance:** Ensure animations do not cause layout shifts (CLS) and use hardware-accelerated CSS transforms where applicable.
*   **Accessibility:** Verify keyboard navigation, aria-labels for all icons, and contrast ratios.
*   **Responsiveness:** Test on mobile, tablet, and desktop viewports.

## Migration & Rollback
All changes will be committed logically. If any breaking changes occur due to the `framer-motion` upgrade, we can revert to the previous `package.json` state. The blog content is isolated and won't affect existing routes.