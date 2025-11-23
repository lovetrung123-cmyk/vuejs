# HRM System Design Guidelines

## Design Approach

**Selected System**: Material Design 3
**Justification**: This enterprise HRM application is utility-focused, information-dense, and requires proven patterns for data tables, forms, and dashboards. Material Design provides robust components for productivity tools while maintaining modern aesthetics.

## Typography

**Font Family**: 
- Primary: 'Inter' or 'Roboto' from Google Fonts
- Monospace: 'Roboto Mono' for employee codes, IDs

**Hierarchy**:
- Dashboard headers: text-3xl font-bold
- Section titles: text-2xl font-semibold
- Card headers: text-lg font-semibold
- Table headers: text-sm font-medium uppercase tracking-wide
- Body text: text-base font-normal
- Helper text: text-sm text-gray-600
- Data values: text-base font-medium

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 6, 8, 12, 16** (e.g., p-4, gap-6, mb-8)

**Grid Structure**:
- Dashboard: 12-column grid with gap-6
- Stats cards: 4-column grid (lg:grid-cols-4 md:grid-cols-2)
- Content areas: max-w-7xl mx-auto with px-6 py-8
- Form layouts: max-w-4xl with consistent field spacing (space-y-6)

## Component Library

### Navigation
**Sidebar Navigation** (fixed left, w-64):
- Logo and company name at top (h-16, p-4)
- Collapsible menu groups for modules
- Active state with left border indicator (border-l-4)
- Icons from Material Icons CDN
- Bottom section for user profile and settings

**Top Bar** (h-16):
- Breadcrumbs on left
- Search bar center (max-w-md)
- Notifications, user avatar on right
- Spacing: px-6, gap-4

### Dashboard Components
**Stats Cards** (elevation-1 shadow):
- Icon circle with background (w-12 h-12, rounded-full)
- Metric value: text-3xl font-bold
- Label: text-sm text-gray-600
- Trend indicator with icon and percentage
- Padding: p-6

**Chart Containers**:
- Card with p-6
- Header with title and date range selector
- Chart area with min-h-80
- Use Chart.js or similar library placeholders

### Data Tables
**Structure**:
- Sticky header row
- Alternating row backgrounds (even:bg-gray-50)
- Row hover state (hover:bg-gray-100)
- Action column (right-aligned) with icon buttons
- Pagination controls at bottom
- Rows per page selector

**Table Header**:
- Background: bg-gray-100
- Text: text-xs font-semibold uppercase tracking-wider
- Padding: px-6 py-3
- Sort indicators for sortable columns

**Table Cells**:
- Padding: px-6 py-4
- Status badges with rounded-full pills
- Employee photos: w-8 h-8 rounded-full

### Forms
**Input Fields**:
- Label above: text-sm font-medium mb-2
- Input: border rounded-lg px-4 py-2.5 w-full
- Focus state: ring-2 ring-blue-500
- Error state: border-red-500 with error text below
- Helper text: text-sm text-gray-500 mt-1

**Form Sections**:
- White cards with p-6, space-y-6
- Section headers with border-b pb-4 mb-6
- Grid layouts for multi-column forms (grid-cols-2 gap-6)

**Action Buttons** (bottom of forms):
- Primary: px-6 py-2.5 rounded-lg
- Secondary: outlined variant
- Spacing: gap-4, justify-end

### Modals & Dialogs
- Backdrop: backdrop-blur-sm
- Container: max-w-2xl, rounded-xl, p-6
- Header with title and close button (border-b pb-4)
- Content area with py-6
- Footer with action buttons (border-t pt-4)

### Status Indicators
**Leave Request Status**:
- Draft: gray badge
- Pending: yellow/amber badge
- Approved: green badge
- Rejected: red badge
- Cancelled: gray badge

**Attendance Status**:
- Present: green
- Absent: red
- Late: orange
- Half-day: blue

**Badges**: px-3 py-1 rounded-full text-xs font-medium

### Employee Cards (Grid View)
- Card with p-4, rounded-lg, shadow
- Avatar centered at top (w-20 h-20, rounded-full)
- Name: text-lg font-semibold, text-center
- Job title: text-sm text-gray-600
- Department tag below
- Contact icons at bottom

### Filters & Search
**Filter Panel** (collapsible sidebar or top bar):
- Multi-select dropdowns for departments, roles
- Date range pickers
- Status checkboxes
- Apply/Reset buttons
- Spacing: space-y-4, p-4

## Images

**Employee Profiles**: Avatar placeholders (circular) throughout app
**Dashboard**: No hero images needed - focus on data visualization
**Empty States**: Simple illustrations for empty tables/lists

## Interaction Patterns

**Loading States**: Skeleton loaders for tables and cards
**Notifications**: Toast messages (top-right corner)
**Confirmations**: Modal dialogs for destructive actions
**Inline Editing**: Click-to-edit for simple fields in tables

## Responsive Behavior

**Mobile** (< 768px):
- Hamburger menu for sidebar
- Stack stat cards vertically
- Horizontal scroll for wide tables
- Single-column forms

**Tablet** (768px - 1024px):
- 2-column stat cards
- Simplified table view
- 2-column forms

This design system provides consistency, scalability, and professional appearance suitable for enterprise HRM applications while maintaining excellent usability for daily operations.