# Design System: The Architectural Perspective

## 1. Overview & Creative North Star: "The Orchestrated Workspace"
This design system moves away from the cluttered, line-heavy interfaces of legacy project management tools. Our Creative North Star is **"The Orchestrated Workspace"**—an editorial-inspired digital environment where the interface recedes to let high-level work take center stage. 

Instead of rigid grids and heavy borders, we utilize **intentional asymmetry**, **tonal layering**, and **expansive breathing room**. The goal is to make the user feel like an architect of their own productivity, moving through a series of sophisticated, stacked surfaces rather than a flat digital spreadsheet. We break the "template" look by treating the dashboard as a high-end publication: bold typography scales, varying content densities, and a focus on "glass and light" over "boxes and lines."

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
We use a palette of Slate and Blue not just for aesthetics, but as a functional tool for navigation and hierarchy.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning or containment. 
Boundaries must be defined solely through background color shifts or tonal transitions. To separate the Sidebar from the Dynamic Content Area, use `surface-container-low` against a `surface` background. The eye should perceive a change in depth, not a physical line.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of materials.
*   **Base Layer (`surface`):** The canvas of the application.
*   **Nested Containers:** Use `surface-container-low` for secondary information areas and `surface-container-lowest` for high-priority interactive cards. This "pitted" or "layered" approach creates natural focus points without visual noise.

### The "Glass & Gradient" Rule
To elevate the experience beyond standard SaaS:
*   **Floating Elements:** Modals and Notifications must use Glassmorphism. Apply `surface` colors at 80% opacity with a `24px` backdrop-blur. 
*   **Signature Textures:** For primary CTAs and active states, use a subtle linear gradient from `primary` (#0051ae) to `primary_container` (#0969da) at a 135-degree angle. This adds a "lithographic" quality that flat colors lack.

---

## 3. Typography: The Editorial Voice
We utilize **Inter** (and **Mona Sans** for brand moments) to create a structured, authoritative hierarchy.

*   **Display & Headline (The Statement):** Use `display-md` and `headline-lg` for project titles and dashboard overviews. These should feel "heavy" and grounded, providing an anchor for the eye.
*   **Title & Body (The Content):** `title-md` is used for task card headers, while `body-md` handles the bulk of project data.
*   **The Contrast Principle:** Pair a bold `headline-sm` with a light `label-sm` in all-caps for metadata. This high-contrast pairing (Weight vs. Size) is a hallmark of high-end editorial design.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows and borders are replaced by **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by stacking tiers. Place a `surface-container-lowest` card on a `surface-container-low` column (in a Kanban board). The contrast between #FFFFFF and #ecf4ff provides all the separation required.
*   **Ambient Shadows:** If a card must float (e.g., during a drag-and-drop action), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(20, 28, 37, 0.06)`. The shadow color must be a tint of `on_surface`, never pure black.
*   **The "Ghost Border" Fallback:** If a divider is mandatory for accessibility, use `outline_variant` at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Refined Primitives

### Kanban Boards & Task Cards
*   **No Dividers:** Forbid horizontal lines between tasks. Use `8px` of vertical whitespace.
*   **Surface Shifting:** The Kanban column is `surface-container-low`. The Task Card is `surface-container-lowest`. This creates a "recessed" look for the board.
*   **Lucide Icons:** Use `MoreHorizontal` for card actions, rendered in `on_surface_variant` to keep the focus on the task title.

### Buttons & Inputs
*   **Primary Button:** Gradient-filled (`primary` to `primary_container`) with `xl` (12px) roundedness.
*   **Input Fields:** Ghost-styled. No bottom border. Use a `surface-container-high` background with a subtle inner shadow to imply a "carved" interactive area.
*   **Checkboxes:** When checked, use `tertiary` (#006226) with a scale-up micro-interaction to feel rewarding.

### Navigation & Modals
*   **Sidebar:** Utilize `surface-dim` for the background. Active states should not use a box; use a "pill" of `primary_fixed` with `on_primary_fixed` text.
*   **Modals:** Maximum glassmorphism. The overlay should be `surface_dim` at 40% opacity with a heavy blur, making the dashboard behind it feel like a distant, frosted memory.

---

## 6. Do’s and Don’ts

### Do:
*   **DO** use whitespace as a functional element. If two elements feel cluttered, increase padding rather than adding a line.
*   **DO** use `surface-tint` for subtle accents in progress bars and loading states to maintain brand soul.
*   **DO** ensure Light and Dark modes maintain the same "Stacking" logic (Dark mode simply uses darker surface-container tiers).

### Don't:
*   **DON'T** use 100% opaque borders. They create "visual cages" that trap the user’s eye.
*   **DON'T** use standard grey shadows. Always tint shadows with the surface color.
*   **DON'T** crowd the Top Navigation. It should only house the most critical global actions (Search, Notifications, Profile). Use the `MoreHorizontal` icon for everything else.