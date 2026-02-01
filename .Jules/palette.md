## 2025-05-14 - Improving form submission feedback
**Learning:** Inconsistent loading states across forms (Login vs Signup) can confuse users. Providing immediate visual feedback and disabling the submit button prevents multiple submissions and improves the perceived responsiveness of the app.
**Action:** Always include an `isLoading` state in form components and a corresponding `:disabled` style in the CSS.
