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
import './assets/js/traits';
import { startFlickerBackgroundInterval } from './assets/js/flicker';
import { displayToTopButton } from './assets/js/scroll-top';

// if dom loaded
document.addEventListener('DOMContentLoaded', () => {
    console.info('DOM loaded');
    startFlickerBackgroundInterval();
    window.onscroll = () => {
        displayToTopButton(500);
    };
});
