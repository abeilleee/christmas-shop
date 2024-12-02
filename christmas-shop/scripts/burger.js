import { BURGER } from "../scripts/constants.js";
import { HEADER_NAV } from "../scripts/constants.js";
import { NAV_LIST } from "../scripts/constants.js";
import { LIST_ITEM_LINKS } from "../scripts/constants.js";
import { LIST_ITEM } from "../scripts/constants.js";
import { LIST_ITEM_ACTIVE } from "../scripts/constants.js";

const togglerOpen = (element) => {
    element.classList.toggle('open');
}

BURGER.addEventListener('click', (event) => {
    togglerOpen(BURGER);
    togglerOpen(HEADER_NAV);
    togglerOpen(NAV_LIST);
    LIST_ITEM.forEach((elem) => elem.classList.add('list-item--burger'));
    document.body.classList.toggle('hidden');

});

BURGER.addEventListener('transitionend', () => {
    BURGER.classList.remove('fixed');
});

LIST_ITEM_LINKS.forEach((element) => element.addEventListener('click', (event) => {
    togglerOpen(BURGER);
    togglerOpen(HEADER_NAV);
    togglerOpen(NAV_LIST);
    LIST_ITEM.forEach((elem) => elem.classList.remove('list-item--burger'));
    document.body.classList.remove('hidden');
    BURGER.classList.add('fixed');
}));

if (LIST_ITEM_ACTIVE) {
    LIST_ITEM_ACTIVE.addEventListener('click', () => {
        LIST_ITEM_ACTIVE.classList.remove('list-item--no-hover');
        togglerOpen(BURGER);
        togglerOpen(HEADER_NAV);
        togglerOpen(NAV_LIST);
        LIST_ITEM.forEach((elem) => elem.classList.remove('list-item--burger'));
        document.body.classList.remove('hidden');
    })
};



window.addEventListener(('resize'), () => {
    if (document.documentElement.clientWidth > 768) {
        LIST_ITEM.forEach((elem) => elem.classList.remove('list-item--burger'));
        document.body.classList.remove('hidden');
    } else if (NAV_LIST.classList.contains('open') && document.documentElement.clientWidth < 768) {
        LIST_ITEM.forEach((elem) => elem.classList.add('list-item--burger'));
        document.body.classList.add('hidden');
    }
});