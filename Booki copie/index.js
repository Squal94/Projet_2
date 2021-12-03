const allStars = document.querySelectorAll(".fa-star");
//..console.log("allStars", allStars);

init();

function init() {
    allStars.forEach(star => {
        star.addEventListener("click", getRating);
        star.addEventListener("mouseover", addCSS);
        star.addEventListener("mouseleave", removeCSS);
    })
}


function getRating(e) {
    //..console.log(e, e.target);
    //...console.dir(e.target);
    console.log(e.target.dataset, e.target.nodeName, e.target.nodeType);
}

function addCSS(e, css = "checked") {
    const overedStar = e.target;
    overedStar.classList.add(css);
    const previousSiblings = getPreviousSliblings(overedStar);
    console.log("previousSiblings", previousSiblings);
    previousSiblings.forEach(elem => elem.classList.add(css))
}

function removeCSS(e, css = "checked"){
    e.target.classList.remove(css);  
}


function getPreviousSliblings(elem) {
    console.log("elem.previousSlibling", elem.previousSlibling);
    let siblings = [];
    const iNodeType = 1;
    while ((elem = elem.previousSlibling)) {
        if (elem.nodeType = iNodeType) {
            siblings = [elem, ...siblings];
        }
    }
    return siblings;
}



