function saveOptions(e) {
    browser.storage.local.set({
      content: document.querySelector("#content").value
    });
    e.preventDefault();
}

function restoreOptions() {
    var gettingItem = browser.storage.local.get('content');
    gettingItem.then((res) => {
        document.querySelector("#content").value = res.content || 'Put your HTML here';
    });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);