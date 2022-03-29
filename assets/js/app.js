// app.js for concatenation of smaller libraryies
// to reduce http requests of small files
"use strict";

// Prefetch in-viewport links during idle time
import { listen } from "quicklink/dist/quicklink.mjs";
listen();

// lazy sizes for image loading
import "lazysizes";
import yall from "yall-js";

// global alert
import "./assets/js/alert";
import "./assets/js/traits";
import "./assets/js/menu";
import "./assets/js/scroll";
import "./assets/js/twitter-code.js";

import { startFlickerBackgroundInterval } from "./assets/js/flicker";

if (document.body.classList.contains("home")) {
    startFlickerBackgroundInterval();
}
document.addEventListener("DOMContentLoaded", yall);