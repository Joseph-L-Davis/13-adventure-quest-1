// Import quests array
import quests from '../data.js';
import { getUser } from '../local-storage-utils.js';
const user = getUser();


const section = document.querySelector('section');
const header = document.querySelector('header');
const hp = document.querySelector('#hp');
const gold = document.querySelector('#gold');
hp.textContent = `HP: ${user.hp}`;
gold.textContent = ` Gold: ${user.gold}`;

// Create anchor tags for all quest options
for (let quest of quests) {
    const aTag = document.createElement('a');

    aTag.textContent = quest.title;
    
    aTag.href = `../quests/?id=${quest.id}`;

    // aTag.style.position = 'absolute';


    section.append(aTag);
    // console.log(aTag);
}
