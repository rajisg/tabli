// Detect browser type
import browser from 'webextension-polyfill';

const isFirefox = typeof (globalThis as any).browser !== 'undefined' && typeof (globalThis as any).chrome === 'undefined';
const isChrome = typeof (globalThis as any).chrome !== 'undefined' && !isFirefox;

export const BROWSER_NAME = isFirefox ? 'firefox' : 'chrome';
export const BROWSER_PATH_PREFIX = '../';
