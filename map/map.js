// Import quests array
import quests from '../data.js';
import { getUser, questsComplete } from '../local-storage-utils.js';
const user = getUser();

const section = document.querySelector('section');
const results = document.querySelector('#results');
const hp = document.querySelector('#hp');
const gold = document.querySelector('#gold');
results.textContent = `HP: ${user.hp}---Gold: ${user.gold}`;

// Check if user is dead
const userIsDead = user.hp <= 0;
if (userIsDead || questsComplete()) {
    window.location = '../results';
}

// Create anchor tags for all quest options
for (let quest of quests) {
    const aTag = document.createElement('a');

    aTag.textContent = quest.title;
    
    aTag.href = `../quests/?id=${quest.id}`;

    section.append(aTag);
}