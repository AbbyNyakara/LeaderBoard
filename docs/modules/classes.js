const scoreList = document.querySelector('.scores');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lPlrZ7dDVaYlzQKx8q6V/scores';
// Fetch scores from the API
export const fetchScores = async () => {
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

export const addScores = async (userScores) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userScores),
  });
  return res;
};