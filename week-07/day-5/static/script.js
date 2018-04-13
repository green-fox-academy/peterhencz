document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
 
  const formData = document.querySelector('form');
  const xmlhttp = new XMLHttpRequest();
console.log('this is the submit')
  xmlhttp.open('POST', '/colors');
  xmlhttp.setRequestHeader('Content-Type', 'application/json');
  xmlhttp.onload = () => {
      const colorsItem = document.createElement('div');
      colorsItem.classList.add('colors-item');

      const itemHexcode = document.createElement('div');
      itemHexcode.classList.add('item-hexcode');
      itemHexcode.style.backgroundColor = `#${hexcode}`;
      colorsItem.appendChild(itemHexcode);

      const h1 = document.createElement('h1');
      h1.innerText = formData.elements.hexcode.value;
      colorsItem.appendChild(h1);

      const itemTitle = document.createElement('div')
      itemTitle.classList.add('item-title')
      colorsItem.appendChild(itemTitle)

      const itemTags = document.createElement('div')
      itemTags.classList.add('item-tags')
      colorsItem.appendChild(itemTags)
 
      const itemTag1 = document.createElement('span');
      itemTag1.innerText = formData.elements.tag1.value;
      itemTags.appendChild(itemTag1);
      itemTag1.addEventListener('click', onTagCLick)

      const itemTag2 = document.createElement('span');
      itemTag2.innerText = formData.elements.tag2.value;
      itemTags.appendChild(itemTag2);
      itemTag2.addEventListener('click', onTagCLick)

      const itemTag3 = document.createElement('span');
      itemTag3.innerText = formData.elements.tag3.value;
      itemTags.appendChild(itemTag3);
      itemTag3.addEventListener('click', onTagCLick)

      const colors = document.querySelector('.colors');
      // colors.appendChild(colorsItem);
      colors.insertBefore(colorsItem, document.querySelector('.colors > div:first-of-type'));

      formData.elements.hexcode.value = '';
      formData.elements.tag1.value = '';
      formData.elements.tag2.value = '';
      formData.elements.tag3.value = '';    
  };

  let hexcode = formData.elements.hexcode.value;
  if (hexcode[0] === '#') {
    hexcode = hexcode.replace('#', '');
  }
  xmlhttp.send(JSON.stringify({
    hexcode: hexcode,
    tag1: formData.elements.tag1.value,
    tag2: formData.elements.tag2.value,
    tag3: formData.elements.tag3.value,
  }));
});

const spans = document.querySelectorAll('span');

function setUpSpans() {
  spans.forEach(span => {
    span.addEventListener('click', onTagCLick)
  });
};

function onTagCLick(event) { 
  let selectedTag = event.target.outerText;
  console.log(selectedTag)
  let hiddenDivs = document.querySelectorAll('.colors-item');
  hiddenDivs.forEach(div => {
    let lastDiv = div.querySelector('div:last-of-type')
    let spansInLastDiv = lastDiv.querySelectorAll('span')
    let fukinChecker = false;
    spansInLastDiv.forEach(spang => spang.outerText === selectedTag ? fukinChecker = true : '');
    if(!fukinChecker) {
      div.classList.add('invisible');
    }
  })
}

setUpSpans();

let cica = document.querySelectorAll('.cica');
cica.forEach(e => {
  e.onclick = (event) => { 
    if (event.target.tagName !== 'SPAN') {  
      let hiddenDivs = document.querySelectorAll('.invisible');
      hiddenDivs.forEach(div => {
      div.classList.remove('invisible');
      });
    }
  };
});
    
