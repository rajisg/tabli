// Detect browser type
const isFirefox = typeof browser !== 'undefined' && typeof chrome === 'undefined';
const isChrome = typeof chrome !== 'undefined' && !isFirefox;

export const BROWSER_NAME = isFirefox ? 'firefox' : 'chrome';
export const BROWSER_PATH_PREFIX = '../';
