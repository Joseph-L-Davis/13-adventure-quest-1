// Import quests array
import quests from '../data.js';

const section = document.querySelector('section');

// Create anchor tags for all quest options
for (let quest of quests) {
    const aTag = document.createElement('a');

    aTag.textContent = quest.title;
    
    aTag.href = `../quests/?id=${quest.id}`;

    // aTag.style.position = 'absolute';


    section.append(aTag);
    console.log(aTag);
}
