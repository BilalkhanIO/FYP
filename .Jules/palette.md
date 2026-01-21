## 2024-07-25 - Loading States for Async Operations

**Learning:** Forms involving asynchronous actions (like login or sign-up) must provide immediate feedback to the user. Without a loading indicator and a disabled state on the submit button, users may click multiple times, leading to duplicate requests and a confusing experience.

**Action:** Always check forms for asynchronous submissions and implement a loading state. This involves:
1.  An `isLoading` state variable.
2.  Setting `isLoading` to `true` at the start of the submission handler.
3.  Setting `isLoading` to `false` after the async operation completes (or fails).
4.  Disabling the submit button and changing its text (e.g., to "Loading...") when `isLoading` is `true`.
