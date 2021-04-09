import quests from '../data.js';
import { findById } from '../utils.js';
import { getUser } from '../local-storage-utils';

const section = document.querySelector('section');
const params = new URLSearchParams(window.location.search);

const questId = params.get('id');
const quest = findById(quests, questId);

const h2 = document.createElement('h2');
h2.textContent = quest.title;

const image = document.createElement('img');
image.src = quest.image;

for (let choice of quest.choices) {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = quest.id;
    label.append(choice.description, radio);
}