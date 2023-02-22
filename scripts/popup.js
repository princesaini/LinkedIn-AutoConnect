const element = document.getElementById("butt");
element.addEventListener("click", myFunction);

function injectTheScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
        action: 'start-conecting-with-people'
      }, function(response) {
            if (!chrome.runtime.lastError) {
            // if you have any response
            } else {
                console.log(chrome.runtime.lastError);
            // if your document doesn’t have any response, it’s fine but you should actually handle
            // it and we are doing this by carefully examining chrome.runtime.lastError
            }
        });
    });
}

function myFunction() {
    document.getElementById("butt").innerHTML = "Started";
    injectTheScript();
}