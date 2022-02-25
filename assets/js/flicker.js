// flicker background
function startFlickerBackgroundInterval() {
    const msList = [500, 1000, 545, 300, 600, 480];
    const delayMs = msList[Math.floor(Math.random() * msList.length)];
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

startFlickerBackgroundInterval(); 
