# Brand Repositioning & Homepage Overhaul Plan (2026)

## Objective
Overhaul the website's content and featured projects to position the user as an elite **"Full-Stack Inference Architect"** (combining Embedded Systems, Agentic AI, Efficient Inference, HPC, and HFT capabilities). The target audience is F500 companies and well-funded startups looking for top-tier engineering interns.

## Key Files & Context
- `src/pages/index.tsx`: Main landing page structure and CTA.
- `src/components/SomeText.tsx`: Hero section copy.
- `src/data/featured_projects.ts`: The portfolio showcase.
- `public/`: Image assets.

## Proposed Solution & Implementation Steps

### 1. Generate Placeholder Visuals (via `nanobanana`)
We will use the `nanobanana` tool to generate 5 high-quality, relevant placeholder images. These will sit in `public/` and can be easily replaced later.
- `public/hero_2026.webp`: A sleek, abstract visualization of a neural network mapped onto silicon architecture.
- `public/telemetry_2026.webp`: A high-tech race engineering telemetry dashboard.
- `public/fettle_2026.webp`: A node-based visualization of distributed voice AI networks.
- `public/soc_2026.webp`: Macro photography of a custom ASIC/FPGA die.
- `public/nature_2026.webp`: A polished, scientific graph showing biofeedback data overlays.

### 2. Overhaul Hero Copy (`src/components/SomeText.tsx`)
- Shift tone to aggressive, clinical, and elite.
- **Headline**: "Silicon to Intelligence." or "Full-Stack Inference Architect."
- **Sub-headline**: Highlight owning the stack from Verilog/STM32 up to PyTorch/Agentic orchestration. Mention Nature Q1 and IEEE A* publications.

### 3. Update Featured Projects (`src/data/featured_projects.ts`)
Replace "sophomore year" legacy feel with the absolute best 2026 accomplishments:
1. **Solar Racing Digital Twin**: Emphasize 80k+ lines of C++, FreeRTOS, and stochastic control (HPC/Embedded).
2. **Fettle Voice AI**: Emphasize LiveKit, PyTorch, and sub-second latency (Agentic AI).
3. **CoreEL SoC Design**: Emphasize RTL2GDSII, Verilog, and UVM verification (HFT/Hardware signaling).
4. **Biofeedback Edge AI**: Emphasize the Nature Q1 publication, Edge AI, and DSP (Research/Inference).

### 4. Overhaul Landing Page Structure (`src/pages/index.tsx`)
- Update the "2026 / Performance Engineering" blurb to summarize the dual capability in hardware determinism and AI stochasticity.
- Revamp the final CTA to explicitly mention "Available for internships in HFT, Inference Infrastructure, and Safety-Critical Embedded Systems."

## Verification & Testing
- Run local Next.js build to verify no broken imports or missing images.
- Ensure all React icons match the new project tech stacks.
- Validate layout on mobile and desktop viewports.
