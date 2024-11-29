import { ARROW_UP } from "./constants.js";

const screenHeight = document.documentElement.clientHeight;

const goUp = () => {
    if (window.scrollY > 0) {
        window.scrollTo({ top: 0, left: 0, behaviour: "auto" });
    }
}

ARROW_UP.addEventListener(('click'), (goUp));

window.addEventListener(('scroll'), () => {
    if (window.scrollY > 300)
        ARROW_UP.classList.add('active');
    else if (window.scrollY < 300) {
        ARROW_UP.classList.remove('active');
    }
})