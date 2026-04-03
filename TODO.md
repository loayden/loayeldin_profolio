# iOS AR Glasses Portfolio Implementation TODO

## Status: [ ] In Progress | [ ] Completed

### Phase 1: Design System & Globals (Priority High) ✓
- [x] Update `app/layout.tsx` (metadata, ThemeProvider wrap, iOS bg gradient)
- [x] Fix `app/globals.css` (SF Pro fonts only, remove gold/Poppins, iOS shadows/gradients)
- [x] Tweak `tailwind.config.js` (typography scales, buttons)
- [x] Wrap layout with `ThemeProvider.tsx`

### Phase 2: Navigation & Hero
- [x] Update `components/Navbar.tsx` (new section links, theme toggle)
- [x] Update `components/Hero.tsx` (AR glasses hero, tagline, CTA)


### Phase 3: Repurpose Existing Components
- [x] `components/Achievements.tsx` → Ecosystem (app screens, iCloud)
- [ ] `components/Projects.tsx` → UseCases (5 flows)
- [x] `components/Skills.tsx` → TechSpecs (tables/charts)
- [ ] `components/About.tsx` → Philosophy (principles)
- [ ] `components/Contact.tsx` → Gallery (carousel)
- [ ] `components/Footer.tsx` (CTAs)

### Phase 4: New Sections
- [x] Create `components/DeviceShowcase.tsx` (angles, materials)
- [x] Create `components/InteractionDesign.tsx` (gestures, UI demos)

### Phase 5: Assembly & Polish ✓
- [x] Update `app/page.tsx` (new section order with IDs)
- [x] Add responsive/micro-interactions
- [x] Accessibility audit (ARIA, contrast)
- [ ] Test dark/light, mobile/iPad
- [ ] Performance: Lighthouse 90+

### Phase 6: Followups
- [ ] `npm i` any deps (framer-motion if missing)
- [ ] `npm run dev` preview
- [ ] Optimize images/lazy

Progress tracked per step completion. Updated design system leverages existing tokens.

