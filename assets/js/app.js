// app.js for concatenation of smaller libraryies
// to reduce http requests of small files
'use strict';

// Prefetch in-viewport links during idle time
import { listen } from 'quicklink/dist/quicklink.mjs';
listen();

// lazy sizes for image loading
import 'lazysizes';

// global alert
import './assets/js/alert';

import { sortboard } from './node_modules/sortboard/dist/sortboard.umd.min.js';

//traits filter
const sb = sortboard({
    container: '#sortlist',
    selector: '.card',
    gutter: 9,
    resetFilterValue: '🔁',
})
const anchors = children('#filters a')
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
// scroll to top
const gotoTopButton = document.getElementById('gotoTop');
window.onscroll = () => displaybutton(500);
function displaybutton(down) {
    if (document.body.scrollTop > down || document.documentElement.scrollTop > down) {
        gotoTopButton.style.display = 'block';
    } else {
        gotoTopButton.style.display = 'none';
    }
}

