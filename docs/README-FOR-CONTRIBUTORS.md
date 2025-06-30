# Fabli - Firefox Tab Manager
## Complete Guide for New Contributors

### What is Fabli?
Fabli is a Firefox browser extension that helps users manage their tabs efficiently. It provides a popup interface to view, organize, search, and save groups of tabs across multiple browser windows.

### Project Structure Overview

```
Fabli/
├── src/                    # Source code
│   ├── manifest.json      # Extension configuration
│   ├── service-worker.js  # Background script
│   ├── html/             # HTML templates
│   ├── css/              # Stylesheets
│   ├── images/           # Icons and graphics
│   └── ts/               # TypeScript source code
│       ├── components/   # React UI components
│       ├── types/        # Type definitions
│       └── *.ts         # Core logic files
├── build/                 # Compiled extension (generated)
├── docs/                 # Documentation
├── package.json          # Dependencies and build scripts
├── webpack.config.js     # Build configuration
└── tsconfig.json        # TypeScript configuration
```

### Core Files Explained

#### Extension Configuration
- **`src/manifest.json`** - Defines extension permissions, popup, background scripts, and metadata
- **`src/service-worker.js`** - Background script that runs when extension is active

#### User Interface
- **`src/html/popup.html`** - Main popup window template
- **`src/html/popout.html`** - Standalone window template  
- **`src/html/preferences.html`** - Settings page template

#### Core Logic (src/ts/)
- **`state.ts`** - Main application state management (1220 lines - the heart of the app)
- **`tabManagerState.ts`** - Tab and window state tracking
- **`tabWindow.ts`** - Window management logic
- **`actions.ts`** - User action handlers (open, close, save tabs, etc.)
- **`bgHelper.ts`** - Background script communication
- **`utils.ts`** - Utility functions

#### React Components (src/ts/components/)
- **`Popup.tsx`** - Main popup interface
- **`SelectablePopup.tsx`** - Advanced popup with selection features
- **`TabWindowList.tsx`** - List of browser windows
- **`TabItemUI.tsx`** - Individual tab display
- **`SearchBar.tsx`** - Tab search functionality
- **`PreferencesModal.tsx`** - Settings interface
- **`SaveModal.tsx`** - Save tab groups dialog

### How the Extension Works

1. **Background Process**: `service-worker.js` runs continuously, monitoring tab changes
2. **State Management**: `state.ts` maintains current state of all tabs and windows
3. **User Interface**: React components render the popup showing tabs and windows
4. **User Actions**: Clicking tabs/buttons triggers actions in `actions.ts`
5. **Persistence**: Tab groups and preferences saved to browser storage

### Key Features Implemented

- **Tab Overview**: See all open tabs across all windows
- **Quick Navigation**: Click any tab to switch to it
- **Tab Search**: Find tabs by title or URL
- **Window Management**: Minimize, close, or organize windows
- **Saved Tab Groups**: Save and restore sets of tabs
- **Keyboard Shortcuts**: Ctrl+Period (popup), Ctrl+Comma (popout)

### Development Workflow

#### Simple Build Process (No npm needed!)
1. **Manual Build**: Copy files to build/ directory and compile TypeScript
2. **Load in Firefox**: Go to `about:debugging` → Load Temporary Add-on → Select `build/manifest.json`
3. **Test Changes**: Reload extension after making changes

#### File Modification Guide
- **UI Changes**: Edit React components in `src/ts/components/`
- **Logic Changes**: Modify core files in `src/ts/`
- **Styling**: Update `src/css/tabli.css`
- **Extension Config**: Modify `src/manifest.json`

### Common Development Tasks

#### Adding a New Feature
1. Add UI component in `src/ts/components/`
2. Add action handler in `src/actions.ts`
3. Update state management in `src/state.ts` if needed
4. Test in Firefox developer mode

#### Fixing Bugs
1. Identify the component or logic file involved
2. Use browser developer tools to debug
3. Check console for error messages
4. Test fix by reloading extension

#### Modifying Appearance
1. Edit CSS in `src/css/tabli.css`
2. Modify React component styling in relevant `.tsx` files
3. Update icons in `src/images/` if needed

### Testing Your Changes

1. **Load Extension**: 
   - Open Firefox
   - Go to `about:debugging`
   - Click "This Firefox"
   - Click "Load Temporary Add-on"
   - Select `build/manifest.json`

2. **Test Features**:
   - Open multiple tabs and windows
   - Use Ctrl+Period to open popup
   - Try searching, saving tab groups
   - Check that all buttons work

3. **Debug Issues**:
   - Right-click extension popup → Inspect Element
   - Check browser console for errors
   - Use Firefox's extension debugging tools

### Getting Started Checklist

- [ ] Read this documentation
- [ ] Examine the file structure
- [ ] Look at `src/manifest.json` to understand permissions
- [ ] Browse React components to see the UI structure
- [ ] Check `src/ts/state.ts` to understand data flow
- [ ] Try building and loading the extension
- [ ] Make a small change and test it

### Need Help?

- **File Purpose Unclear?** Check the detailed file descriptions above
- **Build Issues?** Try the manual build process described
- **Code Questions?** Look at similar existing components for patterns
- **Extension Not Loading?** Check manifest.json syntax and file paths

This extension is built with modern web technologies but doesn't require complex tooling to modify and test!