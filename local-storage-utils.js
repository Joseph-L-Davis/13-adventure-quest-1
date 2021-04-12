import quests from './data.js';
//  MAGIC STRING
const USER = 'USER';

export function getUser() {
    const user = localStorage.getItem(USER);

    if (!user) return {};

    return JSON.parse(user);
}

export function setUser(user) {
    const stringUser = JSON.stringify(user);

    localStorage.setItem(USER, stringUser);
}

export function updateUserChoice(questId, choice) {
    const user = getUser();

    user.hp += choice.hp;

    user.gold += choice.gold;

    user.completed[questId] = true;

    setUser(user);
}

export function questsComplete() {
    const user = getUser();

    for (let quest of quests) {
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}