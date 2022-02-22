import { sortboard } from '../../node_modules/sortboard/dist/sortboard.umd.min.js';

//traits filter
const sb = sortboard({
    container: '#sortlist',
    selector: '.card',
    gutter: 9,
    resetFilterValue: '🔁',
})
const anchors = children('#filters a')  // get all anchors

anchors.forEach(el => {
    el.addEventListener(
        'click',
        event => {
            const anchr = event.target
            if (!anchr.classList.contains('active')) {
                const data = anchr.getAttribute('data-filter')
                sb.filter(data)

                anchors.forEach(a => {
                    a.classList.remove('active')
                })
                anchr.classList.add('active')
            }
        },
        false
    )
})
function children(selector, parent = document) {
    return Array.prototype.slice
        .call(parent.querySelectorAll(selector))
}