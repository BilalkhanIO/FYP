## 2025-05-14 - [Aria-label overrides content]
**Learning:** Adding an `aria-label` to a container (like an anchor tag) that has child text content (like a badge or count span) causes the `aria-label` to override the child content in the accessible name calculation. This makes the child content invisible to screen readers.
**Action:** When using `aria-label` on a container with dynamic or important child text, ensure the label includes that text (e.g., `aria-label="View shopping cart, 3 items"`) or use `aria-labelledby` if appropriate.
