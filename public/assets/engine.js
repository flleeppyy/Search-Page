// Grab the saved search engine from cookies
if (document.cookie.includes("engine")) {
    let searchengine = document.cookie.split("engine=")[1].split(";")[0]
} else { 
    let searchengine = "ddg"
}

function dropdown() {
    elem = document.getElementById('sedropdownbox')
    switch(elem.style.visibility) {
        case 'visible': 
            elem.style.visibility = 'hidden'
            break
        
        case 'hidden': 
            elem.style.visibility = 'visible'
            break
        
        default:
            elem.style.visibility = 'hidden'
            break
    }
    
}

$("ddg").click(function (){
    //jq
})
function changesearchengine(engine) {
    switch(engine){
        case "ddg":
            engine = "ddg"
            document.cookie = "engine=ddg;"
            break
        case "google":
            engine = "google"
            document.cookie = "engine=google;"
            break
        case "bing":
            engine = "bing"
            document.cookie = "engine=bing;"
            break
        case "yahoo":
            engine = "yahoo"
            document.cookie = "engine=yahoo;"
            break
        default:
            engine = "ddg"
            document.cookie = "engine=ddg"
            console.warning("Case switched to Default: DDG")
            break

    }
}