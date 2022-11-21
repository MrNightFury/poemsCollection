var sl = document.querySelectorAll('.slider-arrow-r');
for (let i = 0; i < sl.length; i++) {
    sl[i].onclick = function () {
        let l = sl[i].previousSibling.previousSibling;
        ll = parseInt(l.style.left);
        if (ll != ll) {
            ll = 0;
        }
        let count = Math.round(parseFloat(getComputedStyle(l).width) / parseFloat(getComputedStyle(l.childNodes[1]).width))
        // alert (parseFloat(getComputedStyle(l).width));
        // alert (parseFloat(getComputedStyle(l.childNodes[1]).width));
        // alert (count);
        
        // alert (l.style.left);
        // alert (-(count - 1) * 100 + "%");
        if (l.style.left != -(count - 1) * 100 + "%") {
            
            l.style.left = ll - 100 + "%";
        };
    }
}

var sl = document.querySelectorAll('.slider-arrow-l');
for (let i = 0; i < sl.length; i++) {
    // sl[i].previousSibling.previousSibling.style.left = "0%";
    sl[i].onclick = function () {
        let l = sl[i].previousSibling.previousSibling;
        ll = parseInt(l.style.left);
        if (ll != ll) {
            ll = "0%";
        }
        if (l.style.left != "0%") {
            l.style.left = ll + 100 + "%";
        };
    }
}