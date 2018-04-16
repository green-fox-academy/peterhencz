document.querySelector('button').addEventListener('click', function() {
  
  let url = 'http://api.icndb.com/jokes/random'
  let container = document.querySelector('div');

  fetch(url)
    .then( (response) => response.json())
    .then( (myJson) => { 
      let newJoke = document.createElement('p');
      newJoke.textContent = myJson.value.joke;
      container.appendChild(newJoke);
    });
  });
