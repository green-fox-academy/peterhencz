let request = new XMLHttpRequest();

request.open('GET', 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11+moon&api-key=21efe9f045624f4589bcfdf544e2508f');

request.onload = () => {
  let data = JSON.parse(request.responseText);
  console.log(data.response.docs);
};

function addElement () { 
  // create a new div element 
  let newDiv = document.createElement('div1'); 
  // and give it some content 
  let newContent = document.createTextNode('p'); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  let currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}

request.send();
