let holder = document.querySelector('.card-holder');

holder.addEventListener('wheel', event => {
    let toLeft  = event.deltaY < 0 && holder.scrollLeft > 0;
    let toRight = event.deltaY > 0 && holder.scrollLeft < holder.scrollWidth - holder.clientWidth;

    if (toLeft || toRight) {
        event.preventDefault();
        holder.scrollLeft += event.deltaY;
    }
})