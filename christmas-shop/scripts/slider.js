import { SLIDER } from "./constants.js";
import { ARROW_RIGHT } from "./constants.js";
import { ARROW_LEFT } from "./constants.js";


let offsetChange;
let offsetMax;
let visibleArea;
let offset = 0;

const changeOffset = () => {
    let width = window.innerWidth;
    if (width >= 1440) {
        visibleArea = 1440 - 164;
    } else if (width >= 1190) {
        visibleArea = width - 164;
    } else if (width < 1190) {
        visibleArea = width - 16;
    }
    offsetChange = Math.round(width >= 768 ? Math.floor(1988.87 - visibleArea) / 3 : Math.floor(1988.87 - visibleArea) / 6);
    offsetMax = Math.round(width >= 768 ? offsetChange * 3 : offsetChange * 6);
}

const moveLeft = () => {
    if (offset <= offsetMax) {
        offset -= offsetChange;
        ARROW_RIGHT.classList.remove('arrow--disabled');
    }
    if (offset === 0) {
        ARROW_LEFT.classList.add('arrow--disabled');
    }
    SLIDER.style.right = `${offset}px`;
}

const moveRight = () => {
    if (offset <= offsetMax) {
        offset += offsetChange;
    }
    if (offset === offsetMax) {
        ARROW_RIGHT.classList.add('arrow--disabled');
    }
    SLIDER.style.right = `${offset}px`;
    ARROW_LEFT.classList.remove('arrow--disabled');
}

window.addEventListener('resize', () => {
    SLIDER.style.right = 0 + 'px';
    offset = 0;
    changeOffset();
    ARROW_RIGHT.classList.remove('arrow--disabled');
    ARROW_LEFT.classList.add('arrow--disabled');
});

ARROW_LEFT.addEventListener('click', (moveLeft));
ARROW_RIGHT.addEventListener('click', (moveRight));

changeOffset();
