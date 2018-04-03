'use strict'

// let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// // Accidentally we added "2" and "false" to the array.
// // Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// // No, don't just remove the items :)
// // Create a function called sweets() which takes the list as a parameter.
// // Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"
// export = sweets;


let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets() {
  let realShopItems = shopItems.map((e, i) => {return e == 2 
    ? 'Croissant' 
    : e == false 
      ? 'Ice Cream' 
      : e}
    );
  return realShopItems;
}

console.log(sweets());