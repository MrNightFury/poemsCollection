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
            let childs = poem.childNodes;
            // for (let j = 0; j < childs.length; j++) {
                // alert(childs[j].height);
            // }
            // alert(poem.childNodes[1].style.height);
            
            poem.style.height = getComputedStyle (poem.childNodes[1]).getPropertyValue('height');
            // let chieldCount = poem.childElementCount;
            // poem.style.height = chieldCount * 1.65 + .5 + "em";
        } else {
            poem.style.height = "0px";
        }
    }
}

let menuTrigger = document.getElementById("menu-trigger");
menuTrigger.onclick = function (){
        let lis = document.querySelectorAll('.topnav > li');
        for (let i = 0; i < lis.length; i++) {
            lis[i].style["transition-delay"] = i / 10 + "s";
            lis[i].classList.toggle ("topnav-open");
        }

}