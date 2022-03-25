import { DB } from '../db.js'

const cardsContainer = document.querySelector('[data-question-cards-container]');
const cardTemplate = document.querySelector('[data-question-template]');
const searchInput = document.querySelector('[data-search]');

let questions = [];

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    questions.forEach( card => {
        const isVisible = card.q.toLowerCase().includes(value) || card.a.toLowerCase().includes(value);
        card.element.classList.toggle('hide', !isVisible);
    })
});

const renderCard = data => {
    questions = data.map( cardData => {
        const card = cardTemplate.content.cloneNode(true).children[0];

        card.querySelector('[data-num]').textContent = cardData.num;
        card.querySelector('[data-title]').textContent = cardData.q;
        card.querySelector('[data-content]').innerHTML = cardData.a;

        cardsContainer.append(card);
        return { num: cardData.num, q: cardData.q, a: cardData.a, element: card }
    });
}

renderCard(DB.content.questions);