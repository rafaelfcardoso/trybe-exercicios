// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, objSpecs)
    .then(response => response.json())
    .then(data => jokeContainer.innerText = data.joke);
};

window.onload = () => fetchJoke();