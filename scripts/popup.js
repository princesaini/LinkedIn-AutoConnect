var count = 0;
const element = document.getElementById("butt");
element.addEventListener("click", myFunction);

function injectTheScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: "content-script.js" });
    });
}

function myFunction() {
    document.getElementById("butt").innerHTML = "Started";
    injectTheScript();
}