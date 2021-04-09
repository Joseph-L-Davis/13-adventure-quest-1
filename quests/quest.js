import quests from '../data.js';
import { findById } from '../utils.js';
// import { getUser } from '../local-storage-utils';

// const user = getUser();
const section = document.querySelector('section');
const form = document.createElement('form');
const params = new URLSearchParams(window.location.search);

const questId = params.get('id');
const quest = findById(quests, questId);

const description = document.createElement('div');
description.textContent = quest.description;

const h1 = document.createElement('h1');
h1.textContent = quest.title;

const image = document.createElement('img');
image.src = quest.image;

const result = document.createElement('div');

const button = document.createElement('button');
button.textContent = 'Ima go with this one';
 


form.append(h1, image, description, result, button);
section.append(form);

for (let choice of quest.choices) {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = quest.id;
    radio.checked = radio.value;
    label.append(choice.description, radio);
    form.append(label);
}

button.addEventListener('click', () => {
});

