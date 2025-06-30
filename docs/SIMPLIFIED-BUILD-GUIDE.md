# Simplified Build Guide - No npm Required!

## The Problem
You're getting PowerShell execution policy errors when trying to run `npm install` on Windows 11. The good news is: **you don't need npm to build and test this extension!**

## What You Actually Need

### Essential Dependencies (Already in the codebase)
- **TypeScript source files** - Already written
- **React components** - Already implemented  
- **CSS styles** - Already created
- **HTML templates** - Already exist
- **Extension manifest** - Already configured

### What npm Was Doing (That We Can Skip)
- **Complex build pipeline** - We can simplify this
- **Testing framework** - We can test manually in Firefox
- **Code linting** - Nice to have, not essential
- **Development server** - Not needed for extensions

## Simple Build Process

### Option 1: Manual Build (Recommended for beginners)

1. **Create build directory structure**:
   ```
   build/
   ├── manifest.json
   ├── popup.html
   ├── popout.html  
   ├── preferences.html
   ├── css/
   ├── js/
   ├── images/
   └── fonts/
   ```

2. **Copy static files**:
   - Copy `src/manifest.json` → `build/manifest.json`
   - Copy `src/html/*` → `build/`
   - Copy `src/css/*` → `build/css/`
   - Copy `src/images/*` → `build/images/`

3. **Compile TypeScript** (if you have TypeScript installed globally):
   ```bash
   tsc src/ts/*.ts --outDir build/js --target es2017 --module commonjs
   ```

4. **Or use pre-compiled JavaScript** (if available in build/ already)

### Option 2: Use Existing Build (If Available)

Check if there's already a `build/` directory with compiled files:
- If yes, you can load it directly into Firefox
- If no, follow Option 1

### Option 3: Minimal TypeScript Setup

If you want TypeScript compilation without npm:

1. **Install TypeScript globally** (one-time setup):
   ```bash
   # Using Windows package manager
   winget install Microsoft.TypeScript
   
   # Or download from https://www.typescriptlang.org/
   ```

2. **Compile the project**:
   ```bash
   tsc --project tsconfig.json
   ```

## Loading in Firefox

1. **Open Firefox**
2. **Go to** `about:debugging`
3. **Click** "This Firefox"
4. **Click** "Load Temporary Add-on"
5. **Select** `build/manifest.json`
6. **Test** the extension by pressing Ctrl+Period

## What We're Removing/Simplifying

### Unnecessary Dependencies
- **Jest testing framework** - We'll test manually
- **Storybook** - Documentation tool, not needed for core functionality
- **ESLint/Prettier** - Code formatting, nice but not essential
- **Webpack dev server** - Not needed for extension development
- **Bootstrap** - Can be replaced with simpler CSS
- **Complex build scripts** - Simplified to basic file copying

### Keeping Essential Dependencies
- **React** - Core UI framework (can be loaded from CDN)
- **TypeScript** - For type safety (can be compiled separately)
- **webextension-polyfill** - For cross-browser compatibility

## Alternative Approach: CDN Dependencies

Instead of npm packages, load dependencies from CDN in HTML files:

```html
<!-- In popup.html -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/webextension-polyfill@0.12.0/dist/browser-polyfill.min.js"></script>
```

## Testing Strategy

### Manual Testing (Replaces Jest)
1. **Load extension in Firefox**
2. **Open multiple tabs and windows**
3. **Test each feature**:
   - Popup opens (Ctrl+Period)
   - Tab switching works
   - Search functionality
   - Save/restore tab groups
   - Settings page

### Debug Tools
- **Firefox Developer Tools** - Right-click popup → Inspect Element
- **Extension Console** - Check for JavaScript errors
- **about:debugging** - Monitor extension behavior

## Simplified package.json

Create a minimal package.json with only essential scripts:

```json
{
  "name": "fabli",
  "version": "4.0.4",
  "scripts": {
    "build": "tsc && copy-files",
    "dev": "firefox about:debugging"
  }
}
```

## Benefits of This Approach

- **No PowerShell issues** - No npm scripts to run
- **Faster development** - Direct file editing and testing
- **Simpler debugging** - Fewer layers of abstraction
- **Better understanding** - See exactly what files do what
- **Cross-platform** - Works on any system with Firefox

## Next Steps

1. Try loading the existing build/ directory in Firefox
2. If it works, you're done!
3. If not, follow the manual build process
4. Make small changes and test incrementally
5. Focus on functionality over tooling

Remember: **The goal is a working Firefox extension, not a perfect build system!**