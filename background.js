var URL = 'chrome-extension://' + location.host + '/index.html';

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({url: URL});
});