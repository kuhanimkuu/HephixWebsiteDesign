Design and build a complete, production-quality website for **Hephix Ltd**, a Nairobi-based technology holding company. This is a full redesign of an existing site (previously branded "Starstreak"). Nothing from the old visual style should carry over. Build it as a responsive React + Tailwind site with reusable components, and design every page listed below for desktop (1440px), tablet (768px), and mobile (390px).

==================================================
1. WHO HEPHIX IS
==================================================

Hephix is a technology holding company built on one deliberate philosophy:

**Every product Hephix creates is a self-contained ecosystem.** Not a feature. Not a standalone tool. A complete world unto itself.

Most tech companies build products that plug into each other. Hephix does the opposite. Each product, whatever industry it serves, is conceived, designed, and built from the ground up as its own living ecosystem, with its own architecture, its own community, and its own reason to exist. Products are united only by the founding philosophy, not by shared accounts or integrations.

Core line: **Depth over breadth. Ecosystems over utilities.**

The first expression of this philosophy is **Nexora**, a social networking platform for Android, currently in active development.

The website must communicate:
- a serious, long-term company (investor and partner credibility)
- the ecosystem philosophy, clearly and visually
- African roots with global ambition (Nairobi-built, made for the world)
- honesty about stage: an early company building its first product

CRITICAL CONTENT RULES
- Do NOT invent metrics. No user counts, uptime percentages, download numbers, revenue figures, or testimonials.
- Do NOT describe Hephix products as interconnected, integrated, sharing one account, or sharing APIs. That contradicts the philosophy.
- Do NOT use network diagrams, connecting lines, or orbiting nodes linking products together.
- Nexora's status is "In development". Never say it has launched.

==================================================
2. BRAND IDENTITY (USE EXACTLY)
==================================================

LOGO
The logo already exists. Reproduce it exactly as an SVG component with three variants.

Mark geometry (viewBox 0 0 148 148 area, mark occupies x 27.2–120.8, y 20–128):
- Pointy-top hexagon polygon: `74,20 120.8,47 120.8,101 74,128 27.2,101 27.2,47`, filled Ink.
- Everything below is clipped to the hexagon.
- H crossbar: rect x=40 y=63 w=68 h=20, filled Ember. Draw it first.
- H left pillar: rect x=40 y=28 w=20 h=90, filled Paper.
- H right pillar: rect x=88 y=28 w=20 h=90, filled Paper.

Lockup (viewBox 0 0 520 148):
- Mark on the left as above.
- Wordmark "HEPHIX" at x=153 y=87, Syne 800, size 52, letter-spacing -0.5, Ink.
- "LIMITED" at x=157 y=112, Syne 400, size 13, letter-spacing 7, Muted.

Variants:
1. Primary: Ink mark and wordmark on Paper background.
2. Reversed: Paper hexagon with Ink pillars (crossbar stays Ember), Paper wordmark, on Ink background.
3. Mark only: for favicon, app icon, and small UI use (use viewBox 27 20 94 108).

COLOR TOKENS (define as CSS variables)
- `--ink` #0F1117: primary text, dark sections, primary buttons
- `--ember` #C85A18: the single accent. Use sparingly: key highlights, active states, one word per headline at most
- `--paper` #F6F4F0: main page background (warm off-white)
- `--muted` #9E948E: secondary text, labels, captions
- `--white` #FFFFFF: cards on Paper
- `--line` #E2DDD6: borders and dividers
- `--ink-2` #1A1D25: raised surfaces inside dark sections
- `--ember-soft` #C85A18 at 10% opacity: subtle accent backgrounds
- Text on Ink: Paper. Secondary text on Ink: Muted.
- Check all text for WCAG AA contrast. Ember on Paper is for large text, icons, and accents only, never small body text.

TYPOGRAPHY (Google Fonts)
- Display and headings: **Syne**. H1 800, H2 700, H3 700. Tight line-height (1.05 for H1, 1.15 for H2). Slight negative letter-spacing on large sizes.
- Body and UI: **Inter** 400/500/600. Body 17px desktop and 16px mobile, line-height 1.6.
- Eyebrow labels: Inter 600, 12px, uppercase, letter-spacing 0.14em, Ember or Muted.
- Scale (desktop / mobile): H1 72/44, H2 48/32, H3 28/22, lead paragraph 21/18.

SHAPE LANGUAGE: THE HEXAGON
The hexagon is the brand's core motif, and it carries the philosophy:
- **One hexagon = one complete, self-contained ecosystem.**
- Use pointy-top hexagons for product cells, section markers, icon containers, and decorative backgrounds.
- Hexagons in a group must sit apart with clear gaps, never touching, never linked by lines. Each is whole on its own.
- Filled Ink hexagon = an existing ecosystem. Outlined hexagon (1.5px Line or Muted stroke, empty) = a future ecosystem not yet announced.
- Bullets and list markers may use a small 8px Ember hexagon.
- Corners elsewhere: cards 4px radius, buttons 4px radius. Keep it architectural and precise, not bubbly.

VISUAL STYLE
- Calm, confident, editorial. Think architecture firm meets modern tech company.
- Generous whitespace, strong grid (12 columns, 1200px max content width, 24px gutters).
- Alternate Paper sections with full-bleed Ink sections to create rhythm.
- Subtle texture allowed: a faint hexagon grid pattern in Line color at 40% opacity, used on at most one or two sections.
- Imagery: abstract geometric compositions built from hexagons, and simple phone mockups for Nexora. No stock photos of people, no generic tech imagery.

AVOID
Gradients, glassmorphism, glowing blobs, floating particles, neon, emerald or teal colors, 3D tilt effects, animated number counters, rocket or sparkle icons, and busy motion.

MOTION
- Restrained and purposeful. Fade and rise 12px on scroll reveal, 400ms ease-out, staggered 60ms.
- Hero: the product hexagon draws its outline, then fills (under 1.2s total).
- Hover: cards lift 2px with a Line to Ink border shift. Buttons darken slightly.
- Respect prefers-reduced-motion.

THEME
Light (Paper) is the default. Include a dark theme using Ink as background, Ink-2 for surfaces, and Paper for text, with a toggle in the navbar. Ember stays the same in both themes.

==================================================
3. GLOBAL COMPONENTS
==================================================

NAVBAR
- Left: primary logo lockup (reversed on dark).
- Center or right links: Philosophy, Products, About, Careers, Blog, Contact.
- Right: theme toggle, and primary button "Get in touch".
- Sticky, Paper background with bottom Line border once scrolled.
- Mobile: mark-only logo, hamburger opening a full-screen Ink menu with large Syne links.

FOOTER (Ink background)
- Reversed logo and the line: "Every product, its own ecosystem."
- Columns: Company (About, Philosophy, Team, Careers, Blog), Products (Nexora), Legal (Privacy Policy, Terms of Service, Cookie Policy), Contact (hello@hephix.org, Nairobi, Kenya).
- Social icons: LinkedIn, X, GitHub.
- Bottom row: "© 2026 Hephix Ltd. All rights reserved." and a very small, low-contrast "Admin" link.

BUTTONS
- Primary: Ink background, Paper text. Hover: Ember background.
- Secondary: transparent with 1.5px Ink border.
- Text link: Ink with Ember underline on hover, arrow icon that shifts 4px on hover.
- On dark sections, invert: Paper primary, Paper-outline secondary.

OTHER COMPONENTS
- Section eyebrow with small Ember hexagon + label
- Product hex cell card (filled or outlined state, see Products)
- Status badge: "In development" (Ember outline), "Live" (Ink fill), "Coming later" (Muted outline)
- Principle card: hexagon icon container, title, 2-line description
- Callout block: Paper-dark background with 3px Ember left border
- Form fields: 48px height, Line border, Ink border on focus, Ember error text with icon
- Blog card, job listing row, team member card
- Tag chip, toast notification, empty state, loading skeleton
- Pagination, breadcrumb

Use Lucide icons at 1.5px stroke.

==================================================
4. PAGES AND CONTENT
==================================================

-------- 4.1 HOME --------

A. HERO (Paper, full viewport height on desktop)
- Eyebrow: "HEPHIX LTD · NAIROBI, KENYA"
- H1: "We don't build apps. We build **ecosystems**." (the word "ecosystems" in Ember)
- Lead: "Hephix is a technology holding company. Every product we create is a complete, self-contained world, built from the ground up for its own industry and its own people."
- Buttons: "Discover Nexora" (primary), "Our philosophy" (secondary)
- Right side visual: a composition of separated hexagons. One large filled Ink hexagon containing a subtle Nexora mark, surrounded at a distance by 4 to 6 smaller outlined, empty hexagons of varying sizes. No lines between them. The filled one draws in on load.
- Mobile: visual goes below text, simplified to 1 filled + 3 outlined.

B. PHILOSOPHY STRIP (Ink, full-bleed)
- Eyebrow: "OUR PHILOSOPHY"
- H2: "Depth over breadth. Ecosystems over utilities."
- Three principle cards in a row (stack on mobile):
  1. **Self-contained** — "Each product stands on its own. Its own architecture, its own community, its own world. Nothing depends on anything else to make sense."
  2. **Industry-agnostic** — "The industries will differ. The markets will differ. The principle stays the same: build the whole ecosystem, not a single feature."
  3. **Built for depth** — "We would rather build one complete world well than ten tools that barely hold together."
- Text link: "Read the full philosophy →"

C. FIRST ECOSYSTEM: NEXORA (Paper)
- Eyebrow: "THE FIRST ECOSYSTEM"
- H2: "Nexora"
- Status badge: "In development"
- Lead: "Nexora is not being built as a social media app. It is being built as a complete social ecosystem, with its own community architecture, content systems, and engagement mechanics designed to work as one coherent world."
- Two-column layout: left, two or three Android phone mockups (abstract UI in brand colors, no real screenshots); right, a feature list with small Ember hexagon bullets:
  - **Flash Communities**: time-limited communities for events, campaigns, and moments, which can grow into permanent communities
  - **Communities for every scale**: public, private, local, regional, and official spaces
  - **End-to-end encrypted messages**: private conversations only the people in them can read
  - **Posts, polls, and media**: text, images, video, audio, documents, and links
  - **Built for Africa and beyond**: designed in Nairobi for a global audience
- Button: "Explore Nexora" and text link "Join the waitlist →"

D. HOW WE BUILD (Paper, faint hexagon-grid texture)
- Eyebrow: "HOW WE BUILD"
- H2: "Principles behind every Hephix ecosystem"
- 2x2 grid:
  1. **Privacy by design** — "We do not sell personal data. Protection is part of the architecture, not an afterthought."
  2. **Rooted in Nairobi** — "Built with local insight, held to global standards."
  3. **Long-term ownership** — "We build to own and grow our products for years, not to flip them."
  4. **Honest progress** — "We share where we actually are. Right now, that is building Nexora."

E. FUTURE ECOSYSTEMS (Ink)
- Visual: a row of 3 outlined hexagons, the first one containing a small "+" icon.
- H2: "More ecosystems are coming."
- Body: "Nexora is the first. Future Hephix products will serve different industries, and each one will be its own world."
- Button (inverted): "Work with us"

F. CLOSING CTA (Paper)
- H2: "Build the next ecosystem with us."
- Three link cards side by side: **Careers** ("Join the team"), **Partnerships** ("Work with Hephix"), **Investors** ("Talk to the founders"). Each links to Contact with the matching enquiry type preselected.

-------- 4.2 PHILOSOPHY --------
A long-form editorial page.
- Hero: H1 "Every product, its own ecosystem." with a large single filled hexagon beside it.
- Section "The idea": "Unlike companies that build products designed to complement one another, Hephix operates on the principle that each product, regardless of the industry it serves, is conceived, designed, and built as its own living ecosystem from the ground up."
- Section "What an ecosystem means to us": 4 hexagon-icon points: its own architecture, its own community, its own engagement mechanics, its own reason to exist.
- Section "What it is not": a simple two-column comparison. Left "Utility thinking": single features, products that only make sense together, breadth first. Right "Ecosystem thinking": complete worlds, products that stand alone, depth first.
- Pull quote in large Syne on Ink: "Depth over breadth. Ecosystems over utilities."
- Section "Nexora, the first expression" linking to Products.

-------- 4.3 PRODUCTS --------
- Hero: H1 "Our ecosystems", lead "Each one complete on its own."
- Product grid built from hexagon cells (data-driven, see Section 6):
  - Filled cell for each existing product: logo, name, tagline, status badge, "Learn more" link.
  - Always end the grid with one or two outlined empty cells labelled "Next ecosystem" and "Coming later" (no names).
- Below: the Nexora spotlight section (reuse Home section C, expanded with a longer description and the full feature list).
- Nexora detail page at /products/nexora: hero, feature sections alternating image and text, a "Safety and privacy" block (end-to-end encrypted messages, no sale of personal data, community guidelines, in-app reporting), a status block, and a waitlist form (name, email).

-------- 4.4 ABOUT --------
- Hero: H1 "A Nairobi company building complete worlds."
- Story: "Hephix is a technology holding company founded in Nairobi, Kenya. It began with a single idea: that a product should be a whole ecosystem, not a feature. That idea became Nexora, our first product, which is now in active development."
- Vision: "A future where technology built in Africa leads on design, depth, and impact, and where every product we make is a world people choose to live in."
- Mission: "To conceive, design, and build self-contained digital ecosystems across industries, starting with Nexora."
- Values grid (6 hexagon-icon cards): **Depth** (build the whole thing, properly), **Ownership** (long-term commitment to what we build), **Privacy & Trust** (protection at the core), **User-First** (real people, real cultural context), **Excellence** (global standards), **Honesty** (clear about where we are).
- "Where we are" milestone list, vertical, with hexagon markers. Use editable placeholder entries only: "Company founded", "Nexora development begins", "Starstreak becomes Hephix (2026)", "Next: Nexora launch". Show dates as placeholders to be filled in the CMS.
- Founders section: grid of team member cards (data-driven). Card: square photo with Ink duotone treatment or a hexagon-framed initial avatar if no photo, name, role, short bio, social icons. Design for 5 cards: one "Lead Founder & CEO" and four "Co-Founder".
- CTA to Careers.

-------- 4.5 CAREERS --------
- Hero: H1 "Help build the next ecosystem."
- Why Hephix: 3 principle cards (ownership of real products, early-stage impact, Nairobi-based and remote-friendly).
- Open roles list: rows showing title, department, location, type, arrow. Filters by department.
- Empty state: outlined hexagon icon, "No open roles right now", "Send us your CV anyway" with a mailto to careers@hephix.org.
- Job detail page: title, meta row (department, location, salary if provided), sections for Description, Responsibilities, Requirements, Benefits, and a sticky "Apply" card on desktop.

-------- 4.6 BLOG --------
- Listing: featured post large card, then a 3-column grid of cards (image, category chip, title, excerpt, date). Category filter chips. Pagination.
- Post page: centered 720px reading column, Syne title, meta row, featured image, rich text styles (H2, H3, lists, blockquote with Ember border, code, images with captions), share links, and "More from Hephix" related posts.
- If a post has no image, use a generated hexagon pattern cover in brand colors.

-------- 4.7 CONTACT --------
- Two-column: left form, right details.
- Form: name, email, enquiry type (select: General, Partnerships, Investors, Careers, Press, Nexora support), subject, message, submit. Include success state ("Message sent. We'll reply within a few working days.") and inline validation errors.
- Details panel (Ink card): contact emails
  - General: hello@hephix.org
  - Support: support@hephix.org
  - Privacy: privacy@hephix.org
  - Legal: legal@hephix.org
  - Security: security@hephix.org
  - Location: Nairobi, Kenya
- Newsletter signup strip below: email field + "Subscribe".

-------- 4.8 LEGAL PAGES (Privacy Policy, Terms of Service, Cookie Policy) --------
These hold long legal documents (15+ numbered sections, tables, callouts).
- Layout: left sticky table of contents (desktop), right reading column (max 760px).
- Header: document title, product name, version, "Last updated" date, and a "Download PDF" button.
- Styles for: numbered H2 sections with Ember numbers, H3 subsections, paragraphs, bullet lists, data tables with Ink header row and zebra rows, callout boxes, and an email link style.
- Mobile: table of contents collapses into a dropdown at the top.
- Show active section highlight in the table of contents while scrolling.

-------- 4.9 SYSTEM PAGES --------
- 404: large outlined hexagon with a gap in its outline, "This page isn't part of any ecosystem.", button back home.
- Loading state: the logo mark with hexagon outline drawing on loop.

-------- 4.10 ADMIN PANEL (restyle, same functions) --------
Private, functional, clean. Same brand tokens, denser layout, Inter only except page titles.
- Login: centered card on Paper, mark-only logo, email, password, "Sign in", error state.
- Shell: left sidebar (Ink) with reversed logo and nav: Dashboard, Blog Posts, Careers, Team Members, Products, Contact Inbox, Newsletter, Legal Pages, Site Settings. Top bar with page title, user email, role badge (Super Admin / Team Member), sign out.
- Dashboard: count cards (posts, open roles, unread messages, subscribers), recent contact messages, quick actions.
- List pages: data table with search, status filter, row actions (edit, delete), empty state, delete confirmation modal.
- Editor pages: two-column form (main fields left, publish settings right), rich text editor area, image upload field with preview, save/publish buttons, unsaved-changes warning.
- Legal Pages editor: select document, rich text editor, version and last-updated fields, preview button.
- Show disabled/locked states for sections a Team Member cannot edit (Team, Products).

==================================================
5. RESPONSIVE AND ACCESSIBILITY
==================================================
- Frames for every page at 1440, 768, and 390 widths.
- Minimum tap targets 44px. Visible focus rings (2px Ember outline, 2px offset).
- Semantic headings in order, alt text on all images, form labels always visible (no placeholder-only labels).
- Hexagon decorations are aria-hidden.

==================================================
6. DATA MODEL (keep components data-driven)
==================================================
The existing backend is Supabase. Build components to render from these fields so they can be wired up later:
- products: name, tagline, description, features, logo_url, website_url, order, status ("in_development" | "live" | "coming_later")
- blogs: title, slug, excerpt, content, featured_image, category, published, created_at
- careers: title, department, location, salary, description, responsibilities, requirements, benefits, active
- team: name, role, bio, photo_url, email, linked_in, twitter, github, order
- legal_pages: slug, title, content, version, updated_at
- contact_submissions: name, email, enquiry_type, subject, message
- newsletter: email

Use realistic placeholder content for blog posts, roles, and team cards, clearly marked as placeholders.

==================================================
7. DELIVERABLES
==================================================
1. Design system page: logo variants, color tokens, type scale, spacing scale (4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128), hexagon motif rules, all components with states (default, hover, focus, active, disabled, error).
2. All pages above at three breakpoints, in light theme, plus Home, Products, and Nexora in dark theme.
3. Working responsive React + Tailwind build with routing for every page, the theme toggle, scroll reveal motion, and the hero hexagon animation.
