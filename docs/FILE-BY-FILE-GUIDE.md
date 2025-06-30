# Complete File-by-File Guide

## Extension Configuration Files

### `src/manifest.json` - Extension Definition
**What it does**: Tells Firefox what the extension can do and how to load it
**Key sections**:
- `permissions`: What browser APIs the extension can access (tabs, storage, bookmarks)
- `browser_action`: Defines the popup that appears when you click the extension icon
- `background`: Scripts that run continuously in the background
- `commands`: Keyboard shortcuts (Ctrl+Period for popup, Ctrl+Comma for popout)

**When to modify**: When adding new permissions, changing shortcuts, or updating extension metadata

### `src/service-worker.js` - Background Script
**What it does**: Runs continuously while Firefox is open, even when popup is closed
**Current content**: Minimal setup - just imports the main background logic
**Purpose**: Monitors tab changes, handles keyboard shortcuts, manages extension state

## HTML Templates

### `src/html/popup.html` - Main Popup Interface
**What it does**: The HTML structure for the small popup that appears when you click the extension icon
**Key elements**:
- Links to CSS and JavaScript files
- Container div where React components are rendered
- Bootstrap CSS for styling

### `src/html/popout.html` - Standalone Window
**What it does**: HTML for the larger standalone window (opened with Ctrl+Comma)
**Difference from popup**: Larger size, more space for advanced features

### `src/html/preferences.html` - Settings Page
**What it does**: Configuration interface for user preferences
**Features**: Theme selection, behavior settings, keyboard shortcuts

## Styling

### `src/css/tabli.css` - Main Stylesheet
**What it does**: Custom styles for the extension interface
**Key styles**:
- Tab list appearance
- Button styling
- Window header formatting
- Search bar design
- Modal dialog styles

## Core TypeScript Files

### `src/ts/state.ts` - Application State (1220 lines - THE HEART)
**What it does**: Manages all data about tabs, windows, and user preferences
**Key functions**:
- `TabManagerState` class: Main state container
- Tab and window tracking
- Search functionality
- Saved tab groups management
- State persistence to browser storage

**Why it's important**: This is where all the extension's data lives and gets updated

### `src/ts/actions.ts` - User Action Handlers (979 lines)
**What it does**: Handles what happens when users click buttons or use shortcuts
**Key actions**:
- `activateTab()`: Switch to a specific tab
- `closeTab()`: Close a tab
- `saveWindow()`: Save a group of tabs
- `openSavedWindow()`: Restore saved tabs
- `searchTabs()`: Filter tabs by search term

**When to modify**: When adding new features or changing how existing features work

### `src/ts/tabManagerState.ts` - Tab State Management (574 lines)
**What it does**: Tracks the current state of all browser tabs and windows
**Key responsibilities**:
- Syncing with browser's actual tabs
- Detecting tab changes
- Managing window focus
- Handling tab creation/deletion

### `src/ts/tabWindow.ts` - Window Management (441 lines)
**What it does**: Represents a browser window and its tabs
**Key features**:
- Window state tracking
- Tab ordering
- Window-specific operations
- Saved window restoration

### `src/ts/utils.ts` - Utility Functions (380 lines)
**What it does**: Common helper functions used throughout the extension
**Key utilities**:
- URL manipulation
- String formatting
- Date/time handling
- Browser API wrappers

## React Components (src/ts/components/)

### `Popup.tsx` - Main Popup Interface (213 lines)
**What it does**: The main React component that renders the popup
**Key features**:
- Window list display
- Search integration
- Theme switching
- Modal management

### `SelectablePopup.tsx` - Advanced Popup (531 lines)
**What it does**: Enhanced popup with selection and bulk operations
**Features**:
- Multi-tab selection
- Bulk close/move operations
- Advanced filtering
- Keyboard navigation

### `TabWindowList.tsx` - Window List Component (173 lines)
**What it does**: Displays all browser windows and their tabs
**Features**:
- Collapsible window sections
- Tab count display
- Window-specific actions

### `TabItemUI.tsx` - Individual Tab Display (360 lines)
**What it does**: How each tab appears in the list
**Features**:
- Tab favicon and title
- Close button
- Active tab highlighting
- Drag and drop support

### `SearchBar.tsx` - Search Interface (301 lines)
**What it does**: The search box and filtering logic
**Features**:
- Real-time search
- Search history
- Filter by window
- Keyboard shortcuts

### `WindowHeader.tsx` - Window Title Bar (260 lines)
**What it does**: The header for each window section
**Features**:
- Window title and tab count
- Minimize/maximize buttons
- Window-specific actions
- Collapse/expand toggle

### `PreferencesModal.tsx` - Settings Dialog (372 lines)
**What it does**: The settings interface
**Features**:
- Theme selection
- Behavior preferences
- Keyboard shortcut configuration
- Import/export settings

### Modal Components
- **`SaveModal.tsx`** - Dialog for saving tab groups
- **`RevertModal.tsx`** - Confirmation for reverting changes
- **`UnmanageModal.tsx`** - Remove windows from management

### UI Helper Components
- **`HeaderButton.tsx`** - Styled buttons for window headers
- **`FlatButton.tsx`** - Simple button component
- **`ExpanderButton.tsx`** - Collapse/expand toggle
- **`MenuButton.tsx`** - Dropdown menu button

## Support Files

### `src/ts/bgHelper.ts` - Background Communication (121 lines)
**What it does**: Handles communication between popup and background script
**Key functions**:
- Message passing
- Background script initialization
- Event handling

### `src/ts/preferences.ts` - Settings Management (115 lines)
**What it does**: Manages user preferences and settings
**Features**:
- Default settings
- Settings validation
- Preference persistence

### `src/ts/savedState.ts` - Saved Tab Groups (115 lines)
**What it does**: Manages saved collections of tabs
**Features**:
- Save current tabs
- Restore saved groups
- Manage saved collections

### `src/ts/searchOps.ts` - Search Logic (147 lines)
**What it does**: Advanced search and filtering functionality
**Features**:
- Text matching
- URL filtering
- Window-specific search
- Search result ranking

## Build Configuration

### `webpack.config.js` - Build System (132 lines)
**What it does**: Configures how TypeScript and React get compiled into JavaScript
**Key settings**:
- Entry points for different scripts
- Output file locations
- TypeScript compilation rules
- Development vs production builds

### `tsconfig.json` - TypeScript Configuration (27 lines)
**What it does**: Tells TypeScript compiler how to process the code
**Key settings**:
- Target JavaScript version
- Module system
- Type checking rules
- File inclusion/exclusion

### `babel.config.js` - JavaScript Transformation (15 lines)
**What it does**: Configures Babel to transform modern JavaScript for browser compatibility
**Purpose**: Ensures the code works in older browser versions

## Testing Files (Can be simplified/removed)

### `jest.config.js` - Test Configuration (148 lines)
**What it does**: Configures the Jest testing framework
**Can be removed**: For simplified development, manual testing is sufficient

### `jest.setup.js` - Test Setup (27 lines)
**What it does**: Sets up the testing environment
**Can be removed**: Not needed for basic development

## Development Files (Can be simplified)

### `.eslintrc.json` - Code Style Rules (36 lines)
**What it does**: Defines coding standards and catches common errors
**Can be simplified**: Nice to have but not essential for basic development

### `.prettierrc` - Code Formatting (5 lines)
**What it does**: Automatically formats code consistently
**Can be simplified**: Helpful but not required

## Quick Reference for Common Tasks

**Adding a new button**: 
1. Add to relevant component in `src/ts/components/`
2. Add action handler in `src/ts/actions.ts`
3. Update state in `src/ts/state.ts` if needed

**Changing appearance**: 
1. Modify `src/css/tabli.css`
2. Update component styles in `.tsx` files

**Adding new feature**: 
1. Plan the UI component needed
2. Add state management in `state.ts`
3. Create action handlers in `actions.ts`
4. Build the React component
5. Test in Firefox

**Debugging issues**: 
1. Check browser console for errors
2. Use Firefox developer tools on popup
3. Check background script console in about:debugging