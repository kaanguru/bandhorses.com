const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h3',
        'alert-link',
        'bi-link-45deg',
        'bi-twitter',
        'bi-discord',
        'bi-medium',
        'bi-pinterest',
        'bi-youtube',
        'bi-vimeo',
        ...whitelister([
          './assets/scss/components/_alerts.scss',
          // './assets/scss/components/_buttons.scss',
          './assets/scss/components/_code.scss',
          // './assets/scss/components/_syntax.scss',
        ]),
      ],
    }),
  ],
}
