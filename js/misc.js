var pages = function () {
    for (let i = 1; i <= 4; i++) {
        let page = document.getElementById("page-" + i);
        page.style.transform = "translateX(" + (4 * i) + "px) translateY(" + (2 * i) + "px)";
        page.style["z-index"] = 5 - i;
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