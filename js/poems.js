var tr = document.querySelectorAll('.poem-trigger');
for (let i = 0; i < tr.length; i++) {
    tr[i].onclick = function (){
        let poem = tr[i].nextSibling.nextSibling;
        let height = poem.style.height;
        if (height == "0px" || height == 0) {
            let childs = poem.childNodes;
            poem.style.height = getComputedStyle (poem.childNodes[1]).getPropertyValue('height');
        } else {
            poem.style.height = "0px";
        }
    }
}