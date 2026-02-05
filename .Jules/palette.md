## 2023-10-27 - [Async State Cleanup]
**Learning:** Using `setTimeout` for simulated async UX without cleanup can lead to state updates on unmounted components.
**Action:** Always store `setTimeout` IDs in a `useRef` and provide a cleanup function in `useEffect`.

## 2023-10-27 - [Disabled Button Hover]
**Learning:** Hover styles on disabled buttons can be confusing and make the button feel interactive when it's not.
**Action:** Use `.btn:hover:not(:disabled)` to prevent hover effects on disabled states.

## 2023-10-27 - [Icon Link Accessibility]
**Learning:** Links containing only an icon and a badge (like a cart) need an `aria-label` that combines the purpose and the dynamic data, while the internal elements should be `aria-hidden`.
**Action:** Add `aria-label="Action name, [count] items"` and `aria-hidden="true"` to internal elements.
