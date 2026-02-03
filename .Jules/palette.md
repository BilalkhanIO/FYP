## 2025-05-15 - Improving Form Submission Feedback
**Learning:** Inconsistent implementation of loading states across forms (Signup had it, Login didn't) created a jarring user experience. Adding an `isLoading` state and disabling the submit button provides immediate feedback and prevents double-submissions.
**Action:** Always verify if forms have an `isLoading` state and ensure the submit button visually reflects this state using a `:disabled` pseudo-class.

## 2025-05-15 - Accessible Icon Links with Badges
**Learning:** Icon-only links with numeric badges (like a shopping cart) are announced poorly by screen readers if not labeled correctly. Using `aria-label` on the parent link and `aria-hidden="true"` on the icon and badge elements ensures a clean, descriptive announcement.
**Action:** When adding `aria-label` to links containing dynamic text badges, ensure the internal elements are hidden to prevent redundant announcements.
