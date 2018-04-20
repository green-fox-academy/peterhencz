let url = 'http://localhost:8080/tourist';


  const formData = document.querySelector('form');

const tbody = document.querySelector('tbody');

function createTable(attractions) {
  attractions.forEach((e) => {
    
    const row = document.createElement('tr');

    const tableDataName = document.createElement('td');
    tableDataName.textContent = e.attr_name;
    row.appendChild(tableDataName);

    const tableDataCity = document.createElement('td');
    tableDataCity.textContent = e.city;
    row.appendChild(tableDataCity);

    const tableDataPrice = document.createElement('td');
    tableDataPrice.textContent = e.price;
    row.appendChild(tableDataPrice);

    const tableDataLongitude = document.createElement('td');
    tableDataLongitude.textContent = e.longitude;
    row.appendChild(tableDataLongitude);

    const tableDataLattitude = document.createElement('td');
    tableDataLattitude.textContent = e.lattitude;
    row.appendChild(tableDataLattitude);

    const tableDataCategory= document.createElement('td');
    tableDataCategory.textContent = e.category;
    row.appendChild(tableDataCategory);

    const tableDataDuration= document.createElement('td');
    tableDataDuration.textContent = e.duration;
    row.appendChild(tableDataDuration);

    const tableDataAge= document.createElement('td');
    tableDataAge.textContent = e.recommended_age;
    row.appendChild(tableDataAge);

    // const button = document.createElement('button');
    // button.innerText = 'EDIT';
    // button.onclick = (event) => {

    // // formData.elements.attr_name.value = '';
    // // formData.elements.city.value = '';
    // // formData.elements.price.value = '';
    // // formData.elements.longitude.value = '';   
    // // formData.elements.lattitude.value = '';
    // // formData.elements.category.value = '';
    // // formData.elements.duration.value = '';
    // // formData.elements.recommended.value = '';   

    // }
    
    row.appendChild(button); 
    tbody.appendChild(row);
  });
}

// function createForm() {
// }


// post and get works but separately

fetch(url)
  .then( (result) => result.json())
  .then( (myJson) => {
      createTable(myJson.attractions);
});

// fetch(url, {
//   method: "post",
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//     body: JSON.stringify({
//       queryInputs
//   })

//   .then( (result) => result.json())
//   .then( (myJson) => {
//       createTable(myJson.attractions);
