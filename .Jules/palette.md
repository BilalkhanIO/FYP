# Palette's Journal - CRITICAL UX/Accessibility Learnings

## 2025-05-14 - Asynchronous Form Feedback Pattern
**Learning:** When simulating or implementing asynchronous actions (like form submissions), providing immediate visual feedback through button text changes and disabling the button prevents duplicate submissions and improves user confidence. In React, using `useRef` for timer IDs and `useEffect` for cleanup is critical to prevent state updates on unmounted components if the user navigates away before the "request" completes.
**Action:** Always implement `isLoading` states for forms with proper button feedback and React hook cleanup for any timers used in simulations.

## 2025-05-14 - CSS for Disabled Interactive Elements
**Learning:** Adding `:disabled` styles (like `opacity` and `cursor: not-allowed`) is essential for accessibility. Additionally, using `.btn:hover:not(:disabled)` prevents confusing hover effects from triggering when an element is in a loading or disabled state.
**Action:** When adding a disabled state to a button, always ensure corresponding CSS exists to provide visual cues and suppress hover effects.
