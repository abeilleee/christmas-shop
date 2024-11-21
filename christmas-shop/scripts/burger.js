import { BURGER } from "../scripts/constants.js";
import { HEADER_NAV } from "../scripts/constants.js";
import { NAV_LIST } from "../scripts/constants.js";
import { LIST_ITEM_LINKS } from "../scripts/constants.js";
import { LIST_ITEM } from "../scripts/constants.js";

console.log(LIST_ITEM);

const togglerOpen = (element) => {
    element.classList.toggle('open');
}

BURGER.addEventListener('click', (event) => {
    togglerOpen(BURGER);
    togglerOpen(HEADER_NAV);
    togglerOpen(NAV_LIST);
    LIST_ITEM.forEach((elem) => elem.classList.toggle('list-item--burger'));
    document.body.classList.toggle('hidden');
});

LIST_ITEM_LINKS.forEach((element) => element.addEventListener('click', (event) => {
    togglerOpen(BURGER);
    togglerOpen(HEADER_NAV);
    togglerOpen(NAV_LIST);
    LIST_ITEM.forEach((elem) => elem.classList.remove('list-item--burger'));
    document.body.classList.remove('hidden');
}));

window.addEventListener(('resize'), () => {
    if (document.documentElement.clientWidth > 768) {
        LIST_ITEM.forEach((elem) => elem.classList.remove('list-item--burger'));
        document.body.classList.remove('hidden');
    }
});