const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    // The returned value is a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width.
    // rect have left, top, right, bottom, x, y, width, and height
    // relative to the top-left of the viewport.
    return (
        rect.top >=0 && rect.left >= 0
        && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
}

const run = () =>
    items.forEach(item => { if (isInViewport(item)) item.classList.add('show')})

// events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
