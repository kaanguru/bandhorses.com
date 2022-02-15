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

const sb = sortboard({
    container: '#sortlist',
    selector: '.card',
    gutter: 15,
})

const anchors = children('#filters a')

anchors.forEach(el => {
    el.addEventListener(
        'click',
        event => {
            const an = event.target

            if (!an.classList.contains('active')) {
                const data = an.getAttribute('data-filter')
                sb.filter(data)

                anchors.forEach(a => {
                    a.classList.remove('active')
                })
                an.classList.add('active')
            }
        },
        false
    )
})

function children(selector, parent = document) {
    return Array.prototype.slice
        .call(parent.querySelectorAll(selector))
}
