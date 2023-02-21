function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function (element) {
        return RegExp(text).test(element.textContent);
    });
}

function connectionFunction() {
    var count = 0;
    var acceptBtn = contains(".artdeco-button__text", "Connect");
    if (acceptBtn.length) {
        acceptBtn.forEach((btn) => {
            setInterval((h1) =>{
                btn.click();
                count += 1;


            setInterval((execSendBt) => {
                var sendBtn = contains(".artdeco-button__text", "Send");
                if (sendBtn.length) {
                    sendBtn.forEach((sB)=>{
                        sB.click();
                    })
                }
            },1000);
            
            },1000);

        })
    } else {
        alert('No connection accept buttons to click!')
    }
}

connectionFunction();