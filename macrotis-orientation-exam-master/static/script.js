let url = 'http://localhost:8080/tourist';

      let row = document.createElement('tr');
            console.log(row);

function createTable(attractions) {
  attractions.forEach((e) => {
    
    const row = document.createElement('tr');
            console.log(row);
    const tableDataName = document.createElement('td');
    tableDataName.textContent = e.attractions.attr_name;
    row.appendChild(tableDataName);
             console.log(attractions[1].city);
  });
}
fetch(url)
  .then( (resulte) => resulte.json())
  .then( (myJson) => {
      createTable(myJson.attractions);
      // const tableDataName = document.createElement('td');
      // tableDataName.textContent = myJson.attractions;
      // row.appendChild(tableDataName);
  });
