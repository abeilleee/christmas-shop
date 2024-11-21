import { BURGER } from "../scripts/constants.js";
import { HEADER_NAV } from "../scripts/constants.js";
import { NAV_LIST } from "../scripts/constants.js";
import { LIST_ITEM_LINKS } from "../scripts/constants.js";

const togglerOpen = (element) => {
    element.classList.toggle('open');
}

BURGER.addEventListener('click', (event) => {
    togglerOpen(BURGER);
    togglerOpen(HEADER_NAV);
    togglerOpen(NAV_LIST);
    document.body.classList.toggle('hidden');
});

LIST_ITEM_LINKS.forEach((element) => element.addEventListener('click', (event) => {
    togglerOpen(BURGER);
    togglerOpen(HEADER_NAV);
    togglerOpen(NAV_LIST);
    document.body.classList.remove('hidden');
}));

window.addEventListener(('resize'), () => {
    if (document.documentElement.clientWidth > 768) {
        document.body.classList.remove('hidden');
    }
});