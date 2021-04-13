// Import quests array
import quests from '../data.js';
import { getUser, questsComplete } from '../local-storage-utils.js';
const user = getUser();

const section = document.querySelector('section');
const results = document.querySelector('#results');
results.textContent = `HP: ${user.hp}---Gold: ${user.gold}`;

// Check if user is dead
const userIsDead = user.hp <= 0;
if (userIsDead || questsComplete()) {
    window.location = '../results';
}

// Create anchor tags for all quest options
for (let quest of quests) {
    const aTag = document.createElement('a');

    aTag.id = quest.id;

    aTag.href = `../quests/?id=${quest.id}`;

    if (user.completed[quest.id]) {
        aTag.textContent = '';
    } else {
        aTag.textContent = quest.title;
    }
    section.append(aTag);
    
}
