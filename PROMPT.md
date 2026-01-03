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

## Summary
AI outputs were used as a starting point, not a final solution.  
Each response required refinement to meet production-quality, UX, and maintainability standards.
