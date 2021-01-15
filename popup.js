function injectTheScript() {
    try {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            // query the active tab, which will be only one tab
            //and inject the script in it
            chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
        });
    }catch (err){
        console.error(err);
    }
}

document.getElementById('cta').addEventListener('click', injectTheScript);