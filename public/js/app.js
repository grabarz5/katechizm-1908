import { DB } from '../db.js';

const cardsContainer = document.querySelector('[data-question-cards-container]');
const chaptersContainer = document.querySelector('[data-chapters-container]');
const cardTemplate = document.querySelector('[data-question-template]');
const chapterTemplate = document.querySelector('[data-chapter-template]');
const searchInput = document.querySelector('[data-search]');

let questions = [];
let chapters = [];

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    questions.forEach( card => {
        const isVisible = card.q.toLowerCase().includes(value) || card.a.toLowerCase().includes(value);
        card.element.classList.toggle('hide', !isVisible);
    })
});

const getCategory = path => {
    const _s = path.split('/');

    if( _s[1] === 'cat' )
        return _s[2];
}

const renderCard = data => {
    questions = data
        .filter(el => (getCategory(location.pathname)) ? (el.chapter == getCategory(location.pathname)) : el)
        .map(cardData => {
            const { num, q, a } = cardData;
            const card = cardTemplate.content.cloneNode(true).children[0];

            card.querySelector('[data-num]').textContent = num;
            card.querySelector('[data-title]').textContent = q;
            card.querySelector('[data-content]').innerHTML = a;

            cardsContainer.append(card);
            return { num: num, q: q, a: a, element: card }
        });
}

const renderMenu = data => {
    chapters = data.map(rowData => {
        const { num, desc, parts } = rowData;
        const chapter = chapterTemplate.content.cloneNode(true).children[0];

        if (typeof parts === 'object') {
            chapter.classList.add('menu__part');
        }
        chapter.querySelector('[data-element-link]').textContent = desc;
        if(typeof num != 'undefined'){
            chapter.querySelector('[data-element-link]').setAttribute('href', `/cat/${num}`);
        } else {
            chapter.querySelector('[data-element-link]').setAttribute('href', `/`);
        }

        chaptersContainer.append(chapter);
        return { num: num, desc: desc, parts: parts, element: chapter }
    });
}


window.addEventListener('DOMContentLoaded', () => {

    renderCard(DB.content.questions);
    renderMenu(DB.content.chapters);

    const toggler = document.querySelector('.menu-toggler');
    const menuWrapper = document.querySelector('.menu-wrapper');

    toggler.addEventListener('click', () => {
        menuWrapper.classList.toggle('hide');
    }, false);

    menuWrapper.addEventListener('click', e => {
        if(e.target == e.currentTarget)
            menuWrapper.classList.toggle('hide');
    });
});