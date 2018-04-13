'use strict';

let button = document.getElementById('btn');
let imgs = document.querySelectorAll('.gif');

button.addEventListener('click', function() {

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = (event) => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    let dataGIF = JSON.parse(xhr.response);
    console.log(dataGIF);
    imgs.forEach((img, index) => { 
      img.src = dataGIF.data[index].images.fixed_width_still.url;
    })
  }
}
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=pizza&api_key=JI3Z62Cptuu0mDnXhv4i90o1WJd76EAd&limit=16&offset=${Math.floor(Math.random() * 1000)}&rating=G&lang=it`);
xhr.send();

})

console.log('request sent');
