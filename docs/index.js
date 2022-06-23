import './index.css';
import { fetchScores, addScores } from './modules/classes';

// Activate the refresh button to receive data from the API
const refresh = document.querySelector('.refresh');
const playerName = document.querySelector('.form .name');
const playerScore = document.querySelector('.form .score');

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const singleScore = {
    user: playerName.value,
    score: playerScore.value,
  };
  addScores(singleScore);
  form.reset();
});

refresh.addEventListener('click', () => {
  fetchScores();
});
