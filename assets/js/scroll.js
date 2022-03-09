
const gotoTopButton = document.getElementById("gotoTop");

function displayToTopButton(down) {
    if (document.body.scrollTop > down || document.documentElement.scrollTop > down) {
        gotoTopButton.style.display = "block";
    } else {
        gotoTopButton.style.display = "none";
    }
}
window.addEventListener("scroll", () => {
    displayToTopButton(500);
});

gotoTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});