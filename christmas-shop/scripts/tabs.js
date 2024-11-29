import { CARDS_CONTAINER } from "./constants.js";
import { TAB_ALL } from "./constants.js";
import { TAB_FOR_WORK } from "./constants.js";
import { TAB_FOR_HEALTH } from "./constants.js";
import { TAB_FOR_HARMONY } from "./constants.js";

import { generateRandomCards } from "./cards_rendering.js";
import { generateCategoryOfCards } from "./cards_rendering.js";

generateRandomCards(CARDS_CONTAINER, 36);

const removeClass = (element) => {
    element.classList.remove('tab--active');
}

TAB_ALL.addEventListener(('click'), (event) => {
    TAB_ALL.classList.add('tab--active');
    removeClass(TAB_FOR_WORK);
    removeClass(TAB_FOR_HEALTH);
    removeClass(TAB_FOR_HARMONY);
    generateCategoryOfCards('all', CARDS_CONTAINER);
})

TAB_FOR_WORK.addEventListener(('click'), (event) => {
    console.log('hi')
    TAB_FOR_WORK.classList.add('tab--active');
    removeClass(TAB_ALL);
    removeClass(TAB_FOR_HEALTH);
    removeClass(TAB_FOR_HARMONY);
    console.log(generateCategoryOfCards('work', CARDS_CONTAINER));
})

TAB_FOR_HEALTH.addEventListener(('click'), (event) => {
    TAB_FOR_HEALTH.classList.add('tab--active');
    removeClass(TAB_ALL);
    removeClass(TAB_FOR_WORK);
    removeClass(TAB_FOR_HARMONY);
    generateCategoryOfCards('health', CARDS_CONTAINER);
})

TAB_FOR_HARMONY.addEventListener(('click'), (event) => {
    TAB_FOR_HARMONY.classList.add('tab--active');
    removeClass(TAB_ALL);
    removeClass(TAB_FOR_HEALTH);
    removeClass(TAB_FOR_WORK);
    generateCategoryOfCards('harmony', CARDS_CONTAINER);
})