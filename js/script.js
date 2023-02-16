function homeSelect() {
    window.document.querySelector("body").style.backgroundImage = "url(./image/montain1.png)"

    window.document.querySelector(".hom").style.fontWeight = "700"
    window.document.querySelector(".hom").style.color = "#FFF"
    window.document.querySelector(".hom").style.fontSize = "2.4rem"

    window.document.querySelector(".exp").style.fontWeight = "400"
    window.document.querySelector(".exp").style.color = "#C4C4CC"
    window.document.querySelector(".exp").style.fontSize = "2.2rem"

    window.document.querySelector(".uni").style.fontWeight = "400"
    window.document.querySelector(".uni").style.color = "#C4C4CC"
    window.document.querySelector(".uni").style.fontSize = "2.2rem"
}

function univerSelect() {
    window.document.querySelector("body").style.backgroundImage = "url(./image/montain2.png)"

    window.document.querySelector(".uni").style.fontWeight = "700"
    window.document.querySelector(".uni").style.color = "#FFF"
    window.document.querySelector(".uni").style.fontSize = "2.4rem"

    window.document.querySelector(".hom").style.fontWeight = "400"
    window.document.querySelector(".hom").style.color = "#C4C4CC"
    window.document.querySelector(".hom").style.fontSize = "2.2rem"

    window.document.querySelector(".exp").style.fontWeight = "400"
    window.document.querySelector(".exp").style.color = "#C4C4CC"
    window.document.querySelector(".exp").style.fontSize = "2.2rem"
}

function explorerSelect() {
    window.document.querySelector("body").style.backgroundImage = "url(./image/montain3.png)"

    window.document.querySelector(".exp").style.fontWeight = "700"
    window.document.querySelector(".exp").style.color = "#FFF"
    window.document.querySelector(".exp").style.fontSize = "2.4rem"

    window.document.querySelector(".hom").style.fontWeight = "400"
    window.document.querySelector(".hom").style.color = "#C4C4CC"
    window.document.querySelector(".hom").style.fontSize = "2.2rem"

    window.document.querySelector(".uni").style.fontWeight = "400"
    window.document.querySelector(".uni").style.color = "#C4C4CC"
    window.document.querySelector(".uni").style.fontSize = "2.2rem"
}

const routes = {
    "/home": "./pages/home.html",
    "/universe": "./pages/universe.html",
    "/explorer": "./pages/explorer.html"
}

let titulo = document.querySelector("h2")

function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
}

function handle() {
    const { pathname } = window.location
    const route = routes[pathname] || routes["/home"]
    fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector("#app").innerHTML = html
        })

    switch (route) {
        case "./pages/home.html":
            homeSelect()
            break

        case "./pages/universe.html":
            univerSelect()
            break

        case "./pages/explorer.html":
            explorerSelect()
            break

        default:
            console.log("erro")
    }
}

handle()

window.onpopstate = () => handle()
window.route = () => route()