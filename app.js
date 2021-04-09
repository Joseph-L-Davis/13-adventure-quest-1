// import functions and grab DOM elements
import { setUser } from './local-storage-utils.js';
const form = document.querySelector('form');

//  create even listener for form. create default user data

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const name = data.get('name');
    const playerClass = data.get('class');

    const user = {
        hp: 50,
        gold: 0,
        name: name,
        class: playerClass,
        completed: {}
    };

    setUser(user);
    console.table(user);

    window.location = './map';
});