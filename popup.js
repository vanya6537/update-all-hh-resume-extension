document
  .getElementById("cta")
  .addEventListener("click", () =>
    chrome.tabs.executeScript({ file: "content_script.js" })
  );
