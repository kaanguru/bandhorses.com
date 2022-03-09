const menuToggler = document.getElementById("menuToggler");
const menuIkonum = document.getElementById("menuIkonum");
const kapatIkonum = document.getElementById("kapatIkonum");
menuToggler.onclick = () => {
    showIcon = !showIcon
    if (showIcon === true) {
        menuIkonum.style.display = "inline-block";
        kapatIkonum.style.display = "none";
    } else {
        menuIkonum.style.display = "none";
        kapatIkonum.style.display = "inline-block";
        menuToggler.style.border = "none";
    }

};
let showIcon = true
kapatIkonum.style.display = "none"