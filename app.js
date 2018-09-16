//Chuck Norris Jokes Generator
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let jokes = '';
      response.value.forEach(function(joke) {
        jokes += `
        <li>Joke: ${joke.joke}</li>`;
      });
      document.querySelector('.jokes').innerHTML = jokes;
    }
  };

  xhr.send();

  e.preventDefault();
}
