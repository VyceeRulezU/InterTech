# Prompt Log

This document records how AI-assisted outputs were evaluated, refined, and corrected during the development of the Intertech landing page.

For each AI-generated output, I reviewed the response critically before integrating it into the project.

---

## 1. Navigation Bar Component

### What I accepted from AI
- The overall semantic HTML structure (`header`, `nav`, anchor links).
- The idea of separating navigation links from the primary CTA.
- Use of flexbox for horizontal alignment and spacing.

### What I modified and why
- Rewrote class names to align with my existing CSS architecture.
- Adjusted spacing, border radius, and color tokens to match the Intertech visual system.
- Added a blurred, semi-transparent background using `rgba` and `backdrop-filter` to support a glassmorphism effect consistent with the brand tone.
- Removed unnecessary positioning styles to avoid layout conflicts later.

### Mistakes AI made
1. Used inconsistent naming conventions that didn’t align with my existing codebase.
2. Omitted accessibility considerations (focus states, semantic clarity).
3. Provided a rigid layout that wasn’t easily adaptable to mobile without refactoring.

---

## 2. Trust Logos Horizontal Scroll

### What I accepted from AI
- The concept of duplicating logos to create a seamless infinite scroll.
- Using CSS keyframes instead of JavaScript for performance.
- The idea of gradient overlays to fade logos at the edges.

### What I modified and why
- Tuned animation speed to be slower and less distracting.
- Adjusted gradient colors to match the page background instead of hardcoded values.
- Simplified the DOM structure to reduce unnecessary wrapper elements.
- Ensured hover interactions didn’t interrupt the scrolling experience unintentionally.

### Mistakes AI made
1. Hardcoded background colors in gradients, reducing reusability.
2. Didn’t consider responsiveness for varying logo sizes.
3. Included optional JS without explaining when it’s actually necessary.

---

## 3. FAQ Accordion Component

### What I accepted from AI
- The accordion logic ensuring only one item is open at a time.
- Use of `max-height` and `opacity` for smooth transitions.
- Rotating the chevron icon instead of swapping icons.

### What I modified and why
- Improved the click target to avoid accidental toggles.
- Refined transition timing to feel more natural and less abrupt.
- Adjusted typography hierarchy for better scannability.
- Planned keyboard accessibility enhancements beyond the initial implementation.

### Mistakes AI made
1. Relied on a fixed `max-height`, which can break with longer content.
2. Did not address keyboard or screen-reader accessibility.
3. Assumed all FAQs would have similar content length.

---

## 4. Infrastructure Cards (Desktop vs Mobile)

### What I accepted from AI
- General card concept and content grouping

### What I modified and why
- Created **separate DOM structures**:
  - `infra_cards_wrapper` for desktop
  - `infra_cards_wrapper_mobile` for mobile
- This ensured usability and clarity across screen sizes

### Mistakes AI made
1. Attempted to force responsiveness through CSS only.
2. Failed to adapt layout meaningfully for mobile.
3. Ignored content density and scroll fatigue.

---

## 3. Testimonials Section

### What I accepted from AI
- Concept of animated testimonial cards
- Use of vertical scrolling for motion

### What I modified and why
- Desktop uses three containers with different scroll behaviors
- Mobile uses a single container
- Rejected stacking all testimonial columns vertically on mobile
  due to excessive section height and poor UX

### Mistakes AI made
1. Suggested identical structures for desktop and mobile.
2. Did not account for mobile scroll fatigue.
3. Over-prioritized animation over usability.

---

## 5. CTA & Footer Imagery

### What I accepted from AI
- CTA image selection
- Footer image usage

### What I modified and why
- Minimal to no modification was needed
- Visual intent aligned with conversion goals

### Mistakes AI made
1. No major issues, but lacked explanation of image rationale.
2. Did not validate contrast across breakpoints.
3. Did not consider loading optimization.

---


## Summary
AI outputs were used as a starting point, not a final solution.  
Each response required refinement to meet production-quality, UX, and maintainability standards.
