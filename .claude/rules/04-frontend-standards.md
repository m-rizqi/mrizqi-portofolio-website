# Frontend & UI Development Rules

> **[🤖 AI AGENT INSTRUCTIONS]**
> Follow these guidelines when developing web interfaces and components.

1. **Design System Compliance:** Strictly use the colors, typography, and spacing defined in `docs/pre-development/8-UI-UX-GUIDELINES.md`. Do not hardcode arbitrary hex values or padding.
2. **Component Modularity:** Break down large screens into small, reusable, single-responsibility components.
3. **State Management:** Keep UI components "dumb" where possible; lift business logic and state management to controllers, hooks, or stores.
4. **Accessibility (a11y):** Ensure all interactive elements have proper aria-labels, alt texts, and meet minimum touch target sizes.