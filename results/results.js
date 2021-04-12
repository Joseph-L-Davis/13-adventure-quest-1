import { getUser } from '../local-storage-utils.js';
const user = getUser();
// const section = document.querySelector('section');
const results = document.querySelector('#results');


results.textContent = `HP; ${user.hp} --- Gold: ${user.gold}`;