const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname,'..', 'data', 'restaurants.json');

function getStoredRestaurants() {

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}

function storeRestaurants(storableRestaurants) {
  fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

// This marks which parts of this file is available to others files

module.exports = {
  getStoredRestaurants: getStoredRestaurants,
  storeRestaurants: storeRestaurants
}