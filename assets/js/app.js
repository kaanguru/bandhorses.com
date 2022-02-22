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

// scroll to top
const gotoTopButton = document.getElementById('gotoTop');

function displayToTopButton(down) {
    if (document.body.scrollTop > down || document.documentElement.scrollTop > down) {
        gotoTopButton.style.display = 'block';
    } else {
        gotoTopButton.style.display = 'none';
    }
}

// flicker background
function startFlickerBackgroundInterval() {
    const msList = [500, 1000, 545, 300, 600, 480];
    const delayMs = msList[Math.floor(Math.random() * msList.length)];
    console.log('delayMs :>> ', delayMs);
    let header = document.getElementById('header');
    setInterval(flip, delayMs);
    function flip() {
        if (header.classList.contains('flicker') === true) {
            header.classList.remove('flicker');
        } else {
            setTimeout(() => {
                header.classList.add('flicker');
            }, delayMs / 2);
        }
    }
}

// if dom loaded
document.addEventListener('DOMContentLoaded', () => {
    startFlickerBackgroundInterval();
    window.onscroll = () => displayToTopButton(500);
});