import { cardsArray } from "./constants.js";
import { BTN_CLOSE_MODAL } from "./constants.js";
import { MODAL_WRAPPER } from "./constants.js";
import { MODAL } from "./constants.js";
import { CARDS_CONTAINER } from "./constants.js";
import { CARDS_BOX } from "./constants.js";
import { setColorTitle } from "./cards_rendering.js";

let cardId;

if (document.body.contains(CARDS_BOX)) {
    CARDS_BOX.addEventListener(('click'), (event) => {
        let targetCard = event.target.closest('.card');
        cardId = Array(targetCard)[0].id;                   //Узнаю id карточки на которую был осуществлен клик
    });
};

if (document.body.contains(CARDS_CONTAINER)) {
    CARDS_CONTAINER.addEventListener(('click'), (event) => {
        let targetCard = event.target.closest('.card');
        cardId = Array(targetCard)[0].id;
    });
};



const createModalWindow = (array, id) => {
    let modal = document.createElement('div');
    modal.classList.add('modal__card');
    modal.innerHTML = `<div class="modal__img"></div>
            <div class="modal__container">
                <div class="modal__description">
                    <h4 class="title4 title-card">${array[id].category}</h4>
                    <h3 class="title3">${array[id].name}</h3>
                    <p class="description">${array[id].description}.</p>
                </div>
                <div class="modal__box">
                    <h4 class="title4">Adds superpowers to:</h4>
                    <div class="superpowers-box">
                        <div class="superpowers-box__element">
                            <p class="power description">Live</p>
                            <div class="scores-box">
                                <p class="scores description">+500</p>
                                <div class="scores___live snowflakes"></div>
                            </div>
                        </div>
                        <div class="superpowers-box__element">
                            <p class="superpowers-box__create description">Create</p>
                            <div class="scores-box">
                                <p class="scores description">+500</p>
                                <div class="scores___create snowflakes"></div>
                            </div>
                        </div>
                        <div class="superpowers-box__element">
                            <p class="superpowers-box__love description">Love</p>
                            <div class="scores-box">
                                <p class="scores description">+200</p>
                                <div class="scores___love snowflakes"></div>
                            </div>
                        </div>
                        <div class="superpowers-box__element">
                            <p class="superpowers-box__dream description">Dream</p>
                            <div class="scores-box">
                                <p class="scores description">+400</p>
                                <div class="scores___dream snowflakes"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> `;
    modal.setAttribute('id', id);
    return modal;
}

const setBackgroundImg = (array, id, card) => {
    const modalImg = card.querySelector('.modal__img');
    if (array[id].category === 'For Work') {
        modalImg.style.backgroundImage = 'url(./images/gift-for-work.png)';
    } else if (array[id].category === 'For Health') {
        modalImg.style.backgroundImage = 'url(./images/gift-for-health.png)';
    } else if (array[id].category === 'For Harmony') {
        modalImg.style.backgroundImage = 'url(./images/gift-for-harmony.png)';
    }
};


//Добавление снежинок

const addSnowfalls = (modal, category) => {
    const elem = modal.querySelector(`.scores___${category}`); //Выбираю определенную категорию баллов
    const svgHtml = `<svg class="scores-box__snowfall" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_18076_26)">
<path d="M12.1959 9.88162L11.6482 9.56542L13.1158 9.17219L12.8732 8.26704L10.5005 8.90278L9.38146 8.25667C9.39689 8.17336 9.40538 8.08765 9.40538 7.99997C9.40538 7.91229 9.39692 7.82655 9.38146 7.74327L10.5005 7.09716L12.8732 7.7329L13.1158 6.82775L11.6482 6.43452L12.1959 6.11831L14.546 5.97725L14.8921 4.02063L13.0246 3.34203L11.7274 5.30677L11.1797 5.62297L11.5729 4.15545L10.6678 3.91293L10.032 6.28561L8.91226 6.9321C8.78247 6.82103 8.63242 6.73313 8.4683 6.67494V5.3828L10.2052 3.64586L9.5426 2.98325L8.46827 4.05755V3.42515L9.51792 1.32584L7.99976 0L6.48157 1.3259L7.53122 3.42521V4.05761L6.45689 2.98332L5.79429 3.64592L7.53119 5.38286V6.675C7.36708 6.73319 7.21702 6.82109 7.08724 6.93217L5.96746 6.28568L5.33171 3.91299L4.42656 4.15551L4.81979 5.62304L4.27213 5.30684L2.9749 3.34209L1.10742 4.02069L1.45349 5.97731L3.80362 6.11838L4.35128 6.43458L2.88375 6.82781L3.1263 7.73296L5.49898 7.09722L6.61807 7.74333C6.60264 7.82664 6.59414 7.91235 6.59414 8.00003C6.59414 8.08771 6.60261 8.17345 6.61807 8.25673L5.49898 8.90284L3.1263 8.2671L2.88375 9.17226L4.35128 9.56548L3.80362 9.88169L1.45349 10.0227L1.10742 11.9793L2.97493 12.6579L4.27216 10.6932L4.81985 10.377L4.42662 11.8445L5.33177 12.087L5.96752 9.71435L7.0873 9.06786C7.21708 9.17894 7.36714 9.26684 7.53125 9.32503V10.6172L5.79435 12.3541L6.45696 13.0167L7.53129 11.9424V12.5748L6.48163 14.6741L7.99983 16L9.51802 14.6741L8.46837 12.5748V11.9424L9.54269 13.0167L10.2053 12.3541L8.4684 10.6172V9.32503C8.63251 9.26684 8.78257 9.17894 8.91235 9.06786L10.0321 9.71435L10.6679 12.087L11.573 11.8445L11.1798 10.377L11.7275 10.6932L13.0247 12.6579L14.8922 11.9793L14.5462 10.0227L12.1959 9.88162Z"/>
</g>
<defs>
<clipPath id="clip0_18076_26">
<rect width="16" height="16" \/>
</clipPath>
</defs>
</svg>`;

    for (let i = 0; i < 5; i++) {
        elem.insertAdjacentHTML('beforeend', svgHtml);
    }
    let modalId = modal.getAttribute('id');
    let arr = elem.children;

    let liveScores = cardsArray[modalId].superpowers.live / 100;
    let createScores = cardsArray[modalId].superpowers.create / 100;
    let loveScores = cardsArray[modalId].superpowers.love / 100;
    let dreamScores = cardsArray[modalId].superpowers.dream / 100;

    console.log(modalId);
 
    console.log(arr[0])

    // for (let i = 0; i < liveScores; i++) {
    //     arr[0][i].style.stroke = 'red';
    // }
}



const setScores = (modal, category) => {
    const elem = modal.querySelector(`.scores___${category}`);  //Выбираю определенную категорию баллов
    let modalId = modal.getAttribute('id');

    let liveScores = cardsArray[modalId].superpowers.category / 100;
    let createScores = cardsArray[modalId].superpowers.create / 100;
    let loveScores = cardsArray[modalId].superpowers.love / 100;
    let dreamScores = cardsArray[modalId].superpowers.dream / 100;

    const arr = elem.children;
}




const toggleClass = (element) => {
    element.classList.toggle('open');
}

let child;

const openModal = (event) => {
    const { target } = event;

    if (target.closest('.card')) {
        toggleClass(MODAL_WRAPPER);
        document.body.classList.add('hidden');
        child = createModalWindow(cardsArray, cardId);
        setBackgroundImg(cardsArray, cardId, child);
        setColorTitle(cardsArray, cardId, child, 'modal__card');
        addSnowfalls(child, 'live');
        addSnowfalls(child, 'create');
        addSnowfalls(child, 'love');
        addSnowfalls(child, 'dream');
        MODAL.appendChild(child);
    }
}


if (document.body.contains(CARDS_BOX)) {
    CARDS_BOX.addEventListener(('click'), openModal);
};

if (document.body.contains(CARDS_CONTAINER)) {
    CARDS_CONTAINER.addEventListener(('click'), openModal);
};

MODAL_WRAPPER.addEventListener(('click'), (event) => {
    if (event.target.classList.contains('modal__wrapper')) {
        toggleClass(MODAL_WRAPPER);
        document.body.classList.remove('hidden');
        MODAL.removeChild(child);
    }
});

BTN_CLOSE_MODAL.addEventListener(('click'), (event) => {
    document.body.classList.remove('hidden');
    toggleClass(MODAL_WRAPPER);
    MODAL.removeChild(child);
});
