import quests from '../data.js';
import { findById } from '../utils.js';
// import { getUser } from '../local-storage-utils';

const section = document.querySelector('section');
const params = new URLSearchParams(window.location.search);
console.log(quests);
const questId = params.get('id');
const quest = findById(quests, questId);
console.log(questId);
const h1 = document.createElement('h1');
h1.textContent = quest.title;

const image = document.createElement('img');
image.src = quest.image;

const button = document.createElement('button');
button.textContent = 'Ima go with this one';

section.append(h1, image, button);

for (let choice of quest.choices) {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = quest.id;
    label.append(choice.description, radio);
    section.append(label);
}

button.addEventListener('click', () => {

});



