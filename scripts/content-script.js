var Content = function() {
    this.addListners();
}


Content.prototype.addListners = function () {
    chrome.runtime.onMessage.addListener(this.onMessage.bind(this));
}

Content.prototype.onMessage = function (message, sender, sendResponse) {
    switch (message.action) {
      case 'start-conecting-with-people':
        // Start connecting with people
        this.connectionFunction();
        break;
    }
}

Content.prototype.contains = function (selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function (element) {
        return RegExp(text).test(element.textContent);
    });
}

Content.prototype.connectionFunction = async function () {
    let count = 0;
    var connectBtn = this.contains(".artdeco-button__text", "Connect");
    if (connectBtn.length) {
        // connectBtn.forEach(async (btn) => {
            for(let i = 0; i<connectBtn.length; i++) {
                //btn.click();
                connectBtn[i].click();
                count += 1;
                if (count > 5) return;
                await new Promise(r => setTimeout(r, 2000));
                var sendBtn = this.contains(".artdeco-button__text", "Send");
                if (sendBtn.length) {
                    sendBtn.forEach((sB)=>{
                        sB.click();
                    })
                }
            }
        // });
    } else {
        alert('No connection accept buttons to click!')
    }
}

const content = new Content();
