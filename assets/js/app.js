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
    container: '#mylist',
    selector: 'li',
})

const onEvent = () => console.log('ok!')
sb.on('filter', onEvent)

sb.filter('programing front-end')
// https://codepen.io/joseluisq/pen/kYbMYM