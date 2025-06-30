# Fabli - A Firefox Tab Manager

Fabli is a simple, powerful tab manager for Firefox, forked from the original Tabli Chrome extension.

![Screenshot of Fabli Popup](screenshots/tabli-screenshot.png "Fabli screenshot")

The popup can be used to quickly scroll through all open windows and tabs and switch to or close any open window or tab with a single click. Fabli also supports saving and restoring sets of tabs.

## Quick Start

### For Users
1. **Download**: Get the latest release or build from source
2. **Install**: Load the extension in Firefox via `about:debugging`
3. **Use**: Press `Ctrl+Period` to open the popup, `Ctrl+Comma` for the popout window

### For Developers (No npm required!)
1. **Clone** this repository
2. **Run** `build-simple.bat` (Windows) or follow the manual build steps
3. **Load** in Firefox: `about:debugging` → Load Temporary Add-on → Select `build/manifest.json`
4. **Develop**: Edit files and reload the extension to test changes

## Documentation

- **[Complete Contributor Guide](docs/README-FOR-CONTRIBUTORS.md)** - Everything you need to know to contribute
- **[Simplified Build Guide](docs/SIMPLIFIED-BUILD-GUIDE.md)** - Build without npm/PowerShell issues
- **[File-by-File Guide](docs/FILE-BY-FILE-GUIDE.md)** - Detailed explanation of every file

## Key Features

- **Tab Overview**: See all open tabs across all windows
- **Quick Navigation**: Click any tab to switch to it instantly
- **Tab Search**: Find tabs by title or URL with real-time filtering
- **Window Management**: Minimize, close, or organize windows
- **Saved Tab Groups**: Save and restore collections of tabs
- **Keyboard Shortcuts**: Fast access with customizable hotkeys

## Development Philosophy

This project prioritizes **simplicity and accessibility** for new contributors:
- ✅ **No complex build tools required** - Basic file copying and TypeScript compilation
- ✅ **Clear documentation** - Every file explained in detail
- ✅ **Manual testing** - Load in Firefox and test features directly
- ✅ **Minimal dependencies** - Only essential libraries included

## Feedback

I welcome candid feedback, suggestions and bug reports. Please let me know your experience with Fabli!

## Original Project

Based on [Tabli](https://github.com/antonycourtney/tabli) by Antony Courtney. Adapted for Firefox with simplified development workflow.