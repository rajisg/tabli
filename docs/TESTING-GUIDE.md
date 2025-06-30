# Testing Guide - Manual Testing for Fabli

## Why Manual Testing?

The original project used Jest for automated testing, but for a Firefox extension, **manual testing is often more effective** because:
- Extensions interact directly with browser APIs
- User interface testing requires real browser interaction
- Extension permissions and security need real-world validation
- Manual testing catches usability issues automated tests miss

## Setting Up for Testing

### 1. Load the Extension
```bash
# Build the extension first
build-simple.bat

# Then in Firefox:
# 1. Open Firefox
# 2. Go to about:debugging
# 3. Click "This Firefox"
# 4. Click "Load Temporary Add-on"
# 5. Select build/manifest.json
```

### 2. Enable Developer Tools
- Right-click on the extension popup → "Inspect Element"
- Check the Browser Console for any errors
- Use the Network tab to monitor API calls

## Core Feature Testing

### Basic Functionality Tests

#### ✅ Extension Loading
- [ ] Extension icon appears in toolbar
- [ ] No console errors on load
- [ ] Permissions granted correctly

#### ✅ Popup Interface
- [ ] Popup opens when clicking extension icon
- [ ] Popup opens with Ctrl+Period shortcut
- [ ] All UI elements render correctly
- [ ] No JavaScript errors in console

#### ✅ Tab Display
- [ ] All open tabs are shown
- [ ] Tab titles display correctly
- [ ] Tab favicons load properly
- [ ] Active tab is highlighted
- [ ] Tabs grouped by window

#### ✅ Tab Navigation
- [ ] Clicking a tab switches to it
- [ ] Tab switching works across windows
- [ ] Recently used tabs appear at top
- [ ] Switching closes popup automatically

#### ✅ Tab Management
- [ ] Close button works on individual tabs
- [ ] Bulk close operations work
- [ ] Tab reordering functions
- [ ] Window minimize/maximize works

### Advanced Feature Testing

#### ✅ Search Functionality
- [ ] Search box appears and is functional
- [ ] Real-time filtering works as you type
- [ ] Search matches tab titles
- [ ] Search matches URLs
- [ ] Search results highlight matches
- [ ] Clear search works properly

#### ✅ Saved Tab Groups
- [ ] Save current window as tab group
- [ ] Restore saved tab groups
- [ ] Delete saved tab groups
- [ ] Saved groups persist after browser restart
- [ ] Import/export saved groups

#### ✅ Window Management
- [ ] Multiple windows display separately
- [ ] Window headers show correct titles
- [ ] Window collapse/expand works
- [ ] Window-specific actions function
- [ ] New window creation works

#### ✅ Preferences/Settings
- [ ] Settings modal opens
- [ ] Theme switching works
- [ ] Keyboard shortcuts can be modified
- [ ] Settings persist after restart
- [ ] Default settings restoration works

### Keyboard Shortcuts Testing

#### ✅ Default Shortcuts
- [ ] `Ctrl+Period` opens popup
- [ ] `Ctrl+Comma` opens popout window
- [ ] `Escape` closes popup
- [ ] Arrow keys navigate tabs
- [ ] `Enter` activates selected tab

#### ✅ Custom Shortcuts
- [ ] Shortcuts can be modified in settings
- [ ] Custom shortcuts work correctly
- [ ] No conflicts with browser shortcuts
- [ ] Shortcuts work globally (outside popup)

## Browser Compatibility Testing

### Firefox Versions
- [ ] Firefox 57+ (minimum supported)
- [ ] Current stable Firefox
- [ ] Firefox Developer Edition
- [ ] Firefox Nightly (if available)

### Operating Systems
- [ ] Windows 10/11
- [ ] macOS (if available)
- [ ] Linux (if available)

## Performance Testing

### Memory Usage
- [ ] Extension doesn't cause memory leaks
- [ ] Performance acceptable with 100+ tabs
- [ ] No significant browser slowdown
- [ ] Popup opens quickly (<500ms)

### Resource Usage
- [ ] CPU usage remains low
- [ ] No excessive network requests
- [ ] Storage usage is reasonable
- [ ] No conflicts with other extensions

## Error Handling Testing

### Edge Cases
- [ ] Works with 0 tabs (shouldn't happen, but test anyway)
- [ ] Works with 1000+ tabs
- [ ] Handles tabs with very long titles
- [ ] Handles tabs with no favicons
- [ ] Works with private browsing windows
- [ ] Handles network connectivity issues

### Error Recovery
- [ ] Graceful handling of permission denials
- [ ] Recovery from corrupted saved data
- [ ] Proper error messages for users
- [ ] No crashes on malformed URLs
- [ ] Handles browser API changes

## Security Testing

### Permissions
- [ ] Only requests necessary permissions
- [ ] No access to sensitive data
- [ ] Proper handling of private tabs
- [ ] No data leakage to external services
- [ ] Secure storage of user data

### Content Security
- [ ] No inline scripts in HTML
- [ ] Proper CSP headers
- [ ] No eval() usage
- [ ] Safe handling of user input
- [ ] No XSS vulnerabilities

## Usability Testing

### User Experience
- [ ] Interface is intuitive for new users
- [ ] Common tasks are easy to perform
- [ ] Error messages are helpful
- [ ] Loading states are clear
- [ ] Responsive design works on different screen sizes

### Accessibility
- [ ] Keyboard navigation works throughout
- [ ] Screen reader compatibility
- [ ] High contrast mode support
- [ ] Proper ARIA labels
- [ ] Focus indicators are visible

## Regression Testing

### After Code Changes
- [ ] All existing features still work
- [ ] No new console errors
- [ ] Performance hasn't degraded
- [ ] Settings/data aren't lost
- [ ] UI layout isn't broken

### Before Releases
- [ ] Complete feature test suite
- [ ] Cross-browser testing
- [ ] Performance benchmarks
- [ ] Security audit
- [ ] Documentation updates

## Test Data Setup

### Creating Test Scenarios
```javascript
// Open multiple windows with various tab types
// Window 1: Regular browsing tabs
// Window 2: Development tabs (GitHub, docs, etc.)
// Window 3: Media tabs (YouTube, music, etc.)
// Window 4: Shopping tabs (e-commerce sites)

// Create saved tab groups for testing
// Group 1: "Development" - coding-related tabs
// Group 2: "Research" - documentation and articles
// Group 3: "Entertainment" - media and social tabs
```

### Test URLs
Use a variety of websites to test different scenarios:
- Regular websites (news, blogs)
- Single-page applications (Gmail, Twitter)
- Media sites (YouTube, Spotify)
- Development tools (GitHub, Stack Overflow)
- Local development servers
- Sites with long titles
- Sites with special characters in URLs

## Automated Testing Scripts

While we focus on manual testing, you can create simple automation for repetitive tasks:

```javascript
// Browser console script to open multiple test tabs
for (let i = 0; i < 10; i++) {
  window.open(`https://example.com/page${i}`, '_blank');
}

// Script to test search functionality
const searchBox = document.querySelector('.search-input');
searchBox.value = 'test';
searchBox.dispatchEvent(new Event('input'));
```

## Reporting Issues

### Bug Report Template
```
**Bug Description**: Brief description of the issue

**Steps to Reproduce**:
1. Step one
2. Step two
3. Step three

**Expected Behavior**: What should happen

**Actual Behavior**: What actually happens

**Environment**:
- Firefox version: 
- Operating System: 
- Extension version: 

**Console Errors**: Any JavaScript errors

**Screenshots**: If applicable
```

### Testing Checklist for Contributors

Before submitting changes:
- [ ] All core features tested manually
- [ ] No new console errors
- [ ] Performance is acceptable
- [ ] Works in clean Firefox profile
- [ ] Documentation updated if needed
- [ ] Changes tested on target Firefox version

Remember: **Good manual testing catches issues that automated tests miss!**