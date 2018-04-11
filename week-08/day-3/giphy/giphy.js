'use strict';

let button = document.getElementById('btn');
let img = document.getElementById('blabla');

button.addEventListener('click', function() {

let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = (event) => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    let dataGIF = JSON.parse(xhr.responseText);
    console.log(dataGIF);
    img.src = dataGIF.data.image_url;
  }
}

xhr.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=JI3Z62Cptuu0mDnXhv4i90o1WJd76EAd&tag=&rating=G');
xhr.send();

})

console.log('request sent');
