
// scroll to top
const gotoTopButton = document.getElementById('gotoTop');

export function displayToTopButton(down) {
    if (document.body.scrollTop > down || document.documentElement.scrollTop > down) {
        gotoTopButton.style.display = 'block';
    } else {
        gotoTopButton.style.display = 'none';
    }
}
