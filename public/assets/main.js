/*
let backgrounds = ['1.jpg','10.jpg','11.jpg','12.jpg','13.png','14.jpg','2.jpg','3.png','4.png','5.jpeg','6.png', '7.jpg','8.png',  '9.png']

var randbackground = '/backgrounds/' + backgrounds[Math.floor(Math.random() * backgrounds.length)];


$(function() {
    $('#bg').attr("style", `background-image: url(${randbackground});`);
    console.log($('body').attr("style"))
});
*/


let selectedengine = document.getElementById('selectedengine');
let inputbox = document.getElementById('inputbox');
let searchengine;
let searchwith = "Search with ";
let dropdownbox = document.getElementById('sedropdownbox');
let dropdownbutton = document.getElementById('sedropbtn');


// Grab the saved search engine from cookies
if (document.cookie.match(/^(.*;)?\s*engine\s*=\s*[^;]+(.*)?$/)) { // https://stackoverflow.com/a/25617724
    searchengine = document.cookie.match(/^(.*;)?\s*engine\s*=\s*[^;]+(.*)?$/)[0].split("engine=")[1];
    changesearchengine(searchengine);
} else {
    searchengine = "ddg"
    changesearchengine(searchengine);
}

function dropdown() {
    switch (dropdownbox.style.visibility) {
        case 'visible':
            dropdownbox.style.visibility = 'hidden';
            break;

        case 'hidden':
            dropdownbox.style.visibility = 'visible';
            break;

        default:
            dropdownbox.style.visibility = 'hidden';
            break;
    }
}

function changesearchengine(engine) {
    switch (engine) {
        case "ddg":
            engine = "ddg";
            document.cookie = "engine=ddg;";
            selectedengine.src = './assets/engineicons/ddg.png';
            inputbox.placeholder = searchwith + 'DuckDuckGo';
            break;
        case "google":
            engine = "google";
            document.cookie = "engine=google;";
            selectedengine.src = './assets/engineicons/google.png';
            inputbox.placeholder = searchwith + 'Google';
            break;
        case "bing":
            engine = "bing";
            document.cookie = "engine=bing;";
            selectedengine.src = './assets/engineicons/bing.png';
            inputbox.placeholder = searchwith + 'Bing';
            break;
        case "yahoo":
            engine = "yahoo";
            document.cookie = "engine=yahoo;";
            inputbox.placeholder = searchwith + 'Yahoo';
            break;
        default:
            engine = "ddg";
            document.cookie = "engine=ddg;";
            inputbox.placeholder = searchwith + 'DuckDuckGo';
            console.warning("Case switched to Default: DDG");
            break;
    }
}

document.addEventListener("click", (evt) => { //https://www.blustemy.io/detecting-a-click-outside-an-element-in-javascript/
    let targetElement = evt.target;
    do {
        if (targetElement == dropdownbox || targetElement == dropdownbutton) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    dropdownbox.style.visibility = 'hidden'
});

function search() {

}

document.addEventListener("click"), (evt) => {
    let targetElement = evt.target;
    do {
        if (targetElement == dropdownbox || targetElement == dropdownbutton) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    dropdownbox.style.visibility = 'hidden'
}