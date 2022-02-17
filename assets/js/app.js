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
    gutter: 15,
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

/* //Start of Tawk.to Script
// eslint-disable-next-line no-unused-vars
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement('script'), s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/620dd9f7a34c24564126b0bb/1fs31mrlc';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
//End of Tawk.to Script */