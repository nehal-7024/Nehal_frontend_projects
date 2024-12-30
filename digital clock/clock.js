const $ = (selector) => {
    return document.querySelector(selector);
}

const colon = $(".colon");
const dot = $(".dot");
//const active = $("#active");
const hour = $(".hour");
const min = $(".minute");
const sec = $(".sec");
//const time = $(".time");
const days = $(".days");

let showDot = true;

function update() {
    showDot = !showDot;
    const now = new Date();

    if (showDot) {
        colon.classList.add("invisible");
        dot.classList.add("invisible");
    } else {
        colon.classList.remove("invisible");
        dot.classList.remove("invisible");
    }
    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    sec.textContent = String(now.getSeconds()).padStart(2, '0');

    Array.from(days.children).forEach(
        (ele) => {
            ele.classList.remove("active");
        }
    );
    days.children[now.getDay()].classList.add("active");
};
setInterval(update, 500);