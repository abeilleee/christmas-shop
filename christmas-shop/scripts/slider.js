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