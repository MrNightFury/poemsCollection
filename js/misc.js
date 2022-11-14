var pages = function () {
    for (let i = 1; i <= 4; i++) {
        let page = document.getElementById("page-" + i);
        page.style.transform = "translateX(" + (4 * i) + "px) translateY(" + (2 * i) + "px)";
        page.style["z-index"] = 5 - i;
    }
}

var tr = document.querySelectorAll('.poem-trigger');
for (let i = 0; i < tr.length; i++) {
    tr[i].onclick = function (){
        let poem = tr[i].nextSibling.nextSibling;
        
        let height = poem.style.height;

        if (height == "0px" || height == 0) {
            let chieldCount = poem.childElementCount;
            poem.style.height = chieldCount * 1.65 + .5 + "em";
        } else {
            poem.style.height = "0px";
        }
    }
}