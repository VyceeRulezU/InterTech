# Intertech – Internet Service Provider Landing Page

This project is a responsive landing page for **Intertech**, an internet service provider.
It was built using vanilla **HTML, CSS, and JavaScript**, with a focus on performance,
clarity, and user experience.

AI tools were used selectively to accelerate implementation, while all UX and
engineering decisions were critically reviewed and refined.

---

## 🔗 Live Sections Implemented

- Navigation Bar (glass-style, CTA-driven)
- Hero Section (in progress)
- Trust Logos Horizontal Scroll
- FAQ Accordion
- Footer (planned)

---

## 🧱 Tech Stack

- **HTML5** – semantic structure
- **CSS3** – Flexbox, transitions, animations
- **JavaScript (Vanilla)** – UI interactions
- **Google Material Icons** – iconography

No frameworks or libraries were used.

---

## ✨ Key Components

### 1. Navigation Bar
- Semi-transparent background with blur (glassmorphism)
- Clear separation between navigation links and primary CTA
- Designed to be easily extended for mobile responsiveness

---

### 2. Trust Logos Horizontal Scroll
- Automatically scrolling, infinite horizontal loop
- Implemented using CSS keyframes for performance
- Edge fade-in/out using gradient overlays to reduce harsh cutoffs
- Optimized to avoid distracting animation speed

**UX rationale:**  
The slow, continuous motion builds social proof without competing for attention.

---

## ✨ Key UX & Engineering Decisions

### Infrastructure Cards (Responsive Structure)

The infrastructure cards required **different DOM structures** for desktop
and mobile:

- **Desktop (`infra_cards_wrapper`)**
  - Multi-card layout optimized for horizontal space
  - Designed for balanced visual density

- **Mobile (`infra_cards_wrapper_mobile`)**
  - Simplified structure optimized for vertical scrolling
  - Reduced visual complexity and interaction cost

AI failed to produce a responsive structure that adapted meaningfully
between breakpoints. Rather than forcing responsiveness through CSS alone,
a **separate mobile-specific structure** was introduced to preserve UX quality.

---

### Testimonials Section

- **Desktop**
  - Three containers:
    - `test_card_top`
    - `test_card_mid`
    - `test_card_bot`
  - Each container scrolls vertically at different speeds
  - Creates subtle motion and depth without overwhelming the user

- **Mobile**
  - Single testimonial container
  - Standard vertical scroll
  - Reduced motion and height to avoid excessive scrolling

AI initially suggested stacking all three testimonial columns vertically
on mobile. This was rejected because it would create an excessively long
section, negatively impacting scannability and user attention.

---

### CTA & Footer Imagery

- CTA image and footer image were **accepted directly from AI**
- Minimal modification was required as:
  - Visual hierarchy was clear
  - Imagery supported conversion intent
  - No usability conflicts were introduced

---

### 3. FAQ Accordion
- Answers hidden by default
- Smooth open/close transitions using `max-height` and `opacity`
- Chevron icon rotates to indicate state change
- Only one FAQ item can be expanded at a time

**UX rationale:**  
Restricting open states reduces cognitive load and improves scannability.

---

## 🧠 AI Usage & Evaluation

AI was used to:
- Generate baseline component logic
- Suggest interaction patterns
- Speed up repetitive structure

Each AI output was:
- Reviewed critically
- Modified for UX quality
- Refactored for maintainability

Detailed evaluations are documented in:
- [`PROMPTLOG.md`](./PROMPTLOG.md)
- [`LEARNINGS.md`](./LEARNINGS.md)

---

## 📁 Project Structure

```text
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── PROMPTLOG.md
├── LEARNINGS.md
└── README.md
