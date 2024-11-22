import { cardsArray } from "./constants.js";
import { CARDS_BOX } from "./constants.js";

//создание пустой карточки
const createCardTemplate = () => {
    const card1 = document.createElement('div');
    card1.classList.add('card');
    return card1;
}

//генерация индексов
const generateRandomIndexes = (amountOfCards) => {
    let number = cardsArray.length;
    const arrOfIndexes = [];
    while (arrOfIndexes.length < amountOfCards) {
        let indexRandom = Math.floor(Math.random() * number);
        if (!arrOfIndexes.includes(indexRandom)) {
            arrOfIndexes.push(indexRandom);
        }
    }
    return arrOfIndexes;
}

//создание шаблона карточки
const createCard = (card, i) => {
    card.innerHTML = `<img class="card__img" src="./images/gift-for-work.png" alt="gift-for-work"> 
            <div class="card__description">
                <h4 class="title4 title4--purple title-card">${cardsArray[i].category}</h4>
                <h3 class="title3">${cardsArray[i].name}</h3>
            </div>`;
    return card;
}

//установка цвета для title
const setColorTitle = (array, id, card) => {
    const cardTitle = card.querySelector('.card .title-card');
    if (array[id].category === 'For Work') {
        cardTitle.classList.add('title4--purple');
    } else if (array[id].category === 'For Health') {
        cardTitle.classList.add('title4--green');
    } else if (array[id].category === 'For Harmony') {
        cardTitle.classList.add('title4--pink');
    }
};

//Установка картинки для карточки подарка
const setImage = (container, i, classImg) => {
    const cardImg = container.querySelector(`.${classImg}`); {
        if (cardsArray[i].category === 'For Work') {
            cardImg.setAttribute('src', './images/gift-for-work.png');
        } else if (cardsArray[i].category === 'For Health') {
            cardImg.setAttribute('src', './images/gift-for-health.png');
        } else if (cardsArray[i].category === 'For Harmony') {
            cardImg.setAttribute('src', './images/gift-for-harmony.png');
        }
    }
}

const generateRandomCards = (container, amountOfCards) => {
    container.innerHTML = '';
    let indexes = generateRandomIndexes(amountOfCards);

    for (let i of indexes) {
        let cardNew = createCardTemplate();
        cardNew.setAttribute('id', i);
        cardNew = createCard(cardNew, i);
        setColorTitle(cardsArray, i, cardNew);
        setImage(cardNew, i, 'card__img');
        console.log(cardNew);
        container.appendChild(cardNew);
    }
}
generateRandomCards(CARDS_BOX, 4);