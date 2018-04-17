const submitButton = document.querySelector('#form-submit-button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

const formData = document.querySelector('form');
const xhr = new XMLHttpRequest();

xhr.open('POST', '/colors');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = () => {
  const colorsItem = document.createElement('div');
  colorsItem.classList.add('colors-item', 'shrink', 'ui-draggable', 'ui-draggable-handle');
  colorsItem.id = `#${hexcode}`;

  const colorsItemMenu = document.createElement('div');
  colorsItemMenu.classList.add('color-items-menu');
  colorsItem.appendChild(colorsItemMenu);

  const addMargin = document.createElement('p');
  addMargin.classList.add('marginPlus');
  addMargin.innerText = '+';
  addMargin.addEventListener('click', function(){
    colorsItem.style.margin = '200px';
  });
  colorsItemMenu.appendChild(addMargin);

  const removeMargin = document.createElement('p');
  removeMargin.classList.add('marginMinus');
  removeMargin.innerText = '-';
  removeMargin.addEventListener('click', function(){
    colorsItem.style.margin = '0.5vw';
  });
  colorsItemMenu.appendChild(removeMargin);

  const itemHexcode = document.createElement('div');
  itemHexcode.classList.add('item-hexcode');
  itemHexcode.style.backgroundColor = `#${hexcode}`;
  itemHexcode.addEventListener('click', function(){
  colorsItem.style.backgroundColor = `#${hexcode}`;
    });
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


  const itemTag2 = document.createElement('span');
  itemTag2.innerText = formData.elements.tag2.value;
  itemTags.appendChild(itemTag2);

  const itemTag3 = document.createElement('span');
  itemTag3.innerText = formData.elements.tag3.value;
  itemTags.appendChild(itemTag3);

  const colors = document.querySelector('.colors');
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
  xhr.send(JSON.stringify({
    hexcode: hexcode,
    tag1: formData.elements.tag1.value,
    tag2: formData.elements.tag2.value,
    tag3: formData.elements.tag3.value,
  }));
});

let colorsItems = document.querySelectorAll('.colors-item');
let addMargins = document.querySelectorAll('.marginPlus');

addMargins.forEach((e, i) => {
  e.addEventListener('click', function(){
    colorsItems[i].style.margin = '200px';
  });
});

let removeMargins = document.querySelectorAll('.marginMinus');

removeMargins.forEach((e, i) => {
  e.addEventListener('click', function(){
    colorsItems[i].style.margin = '0.5vw';
  });
});


let fullBackgroundColor = document.querySelectorAll('.item-hexcode');

fullBackgroundColor.forEach((e, i) => {
  e.addEventListener('click', function(){
   colorsItems[i].classList.add('fullcolor');
  });
});

$( function() {
  $( ".colors-item" ).draggable();
});
