chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.reloadAndRepeat) {
    // Reload after {timeout} ms and execute again, repeat
    chrome.tabs.executeScript(
      sender.tab.id,
      { code: "window.location.reload()" },
      () => {
        // Add listener so callback executes only if page loaded. otherwise calls instantly
        const listener = function (tabId, changeInfo, tab) {
          if (tabId === sender.tab.id && changeInfo.status === "complete") {
            // Remove listener, so only run once
            chrome.tabs.onUpdated.removeListener(listener);
            // Do stuff
            chrome.tabs.executeScript(sender.tab.id, {
              file: "content_script.js",
            });
          }
        };
        chrome.tabs.onUpdated.addListener(listener);
      }
    );
  }
});
