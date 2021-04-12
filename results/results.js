import { getUser } from '../local-storage-utils.js';
const user = getUser();
// const section = document.querySelector('section');
const main = document.querySelector('main');
const button = document.querySelector('button');

const userIsDead = user.hp <= 0;
if (!userIsDead) {
    main.textContent = `Well you made it to the end with ${user.gold} gold in your pocket. Spend it wisely!`;
} else {
    main.textContent = `No amount of gold could save you from your inevitable death... Rest well you fool.`;
}

button.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});