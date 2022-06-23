import './index.css';

// Activate the refresh button to receive data from the API
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lPlrZ7dDVaYlzQKx8q6V/scores';
const refresh = document.querySelector('.refresh');
const playerName = document.querySelector('.form .name');
const playerScore = document.querySelector('.form .score');
const scoreList = document.querySelector('.scores');
const form = document.querySelector('.form');

// Fetch scores from the API
const fetchScores = async () => {
  scoreList.innerHTML = '';
  const response = await fetch(url);
  const dataFile = await response.json();
  const scoreData = dataFile.result;

  scoreData.forEach((entry) => {
    scoreList.innerHTML += `
    <p>${entry.user} : ${entry.score}</p>
    `;
  });
};

const addScores = async (userScores) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userScores),
  });
  return res;
};

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