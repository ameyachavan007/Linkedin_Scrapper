function setup() {
    // noCanvas();

    let bgpage = chrome.extension.getBackgroundPage();
    let word = bgpage.word;
    nameHolder = document.getElementById('infoElement');
    nameHolder.innerHTML = word;
}