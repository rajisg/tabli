declare global {
  interface Window {
    browser?: any;
    chrome?: any;
  }
  
  var browser: any;
  var chrome: any;
}

export {};