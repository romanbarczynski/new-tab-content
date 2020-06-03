function openOptionsPage(e) {
    e.preventDefault();
    browser.runtime.openOptionsPage();
};

;(async function() {
    var gettingItem = browser.storage.local.get('content');
    gettingItem.then((res) => {
        if (res.content) {
            document.querySelector("body").innerHTML = res.content;
        } else {
            document.querySelector("a").onclick = openOptionsPage;
        }
    });
})()