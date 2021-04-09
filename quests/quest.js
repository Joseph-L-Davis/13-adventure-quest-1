import quests from '../data.js';
import { findById } from '../utils.js';
import { getUser, setUser, updateUserChoice } from '../local-storage-utils';

const section = document.querySelector('section');
const params = new URLSearchParams(window.location.search);

const questId = params.get('id');
const quest = findById(quests, questId);

const h2 = document.createElement('h2');