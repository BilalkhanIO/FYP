# Palette's UX Journal

Critical UX/accessibility learnings from this project.

## 2025-05-15 - [Form Submission Reliability]
**Learning:** Structural isolation of the submit button from other interactive elements (like Links) in list items ensures more reliable `onSubmit` event firing in some environments and improves accessibility for keyboard users.
**Action:** Always place the submit button and auxiliary links (like "Forgot Password") in separate `<li>` elements within a form.
