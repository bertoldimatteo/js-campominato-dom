
const boxEasy = document.querySelector(".box-easy");
const boxMedium = document.querySelector(".box-medium");
const boxHard = document.querySelector(".box-hard");

boxEasy.addEventListener("click", easyHide);
boxMedium.addEventListener("click", mediumHide);
boxHard.addEventListener("click", hardHide);

function easyHide() {
    boxMedium.classList.add("hidden");
    boxHard.classList.add("hidden");
}

function mediumHide() {
    boxEasy.classList.add("hidden");
    boxHard.classList.add("hidden");
}

function hardHide() {
    boxEasy.classList.add("hidden");
    boxMedium.classList.add("hidden");
}
