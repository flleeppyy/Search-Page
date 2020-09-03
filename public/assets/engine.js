let selectedengine = document.getElementById('selectedengine');
let inputbox = document.getElementById('inputbox');
let searchengine;
let searchwith = "Search with ";
// Grab the saved search engine from cookies
if (document.cookie.match(/^(.*;)?\s*engine\s*=\s*[^;]+(.*)?$/)) { // https://stackoverflow.com/a/25617724
    searchengine = document.cookie.match(/^(.*;)?\s*engine\s*=\s*[^;]+(.*)?$/)[0].split("engine=")[1];
    changesearchengine(searchengine);
} else { 
    searchengine = "ddg"
    changesearchengine(searchengine);
}

function dropdown() {
    elem = document.getElementById('sedropdownbox');
    switch(elem.style.visibility) {
        case 'visible': 
            elem.style.visibility = 'hidden';
            break;
        
        case 'hidden': 
            elem.style.visibility = 'visible';
            break;
        
        default:
            elem.style.visibility = 'hidden';
            break;
    }
}

$("ddg").click(function (){
    //jq
})
function changesearchengine(engine) {
    switch(engine){
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