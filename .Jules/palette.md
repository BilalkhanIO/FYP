# Palette's UX Journal 🎨

## 2025-05-14 - ARIA Label Redundancy in Icon Buttons
**Learning:** When adding an `aria-label` to a container (like a link or button) that contains child elements with text (like a badge or icon), the `aria-label` completely overrides the child content for screen readers. If child elements are not hidden, some screen readers might still try to announce them redundantly or in a confusing way depending on the role.
**Action:** Always use `aria-hidden="true"` on internal icons and text spans when a descriptive `aria-label` is provided on the parent interactive element.

## 2025-05-14 - Structural Isolation for Submit Buttons
**Learning:** In some React environments, placing a `<Link>` or other interactive elements inside the same `<li>` as a `type="submit"` button can sometimes interfere with the focus management or the reliability of the `onSubmit` event firing depending on how the browser interprets the hit area.
**Action:** Isolate the primary submit button in its own structural container (like its own `<li>`) to ensure clean interaction boundaries.
