var property = require("./property.js");

function Apartment(name, address) {
  // A building can have many many units 
  this.name = name;
  this.address = address;
  this.units = units;
  this.available = false;
}

inheret(Apartment, Property)

Apartment.prototype.available = function(){
  // a tenant it should not be available
  if (this.unit < units) {
  	this.available = "yes";
  } else {
  	console.error("Sorry, you're too late")
  }
  return this;
};


module.exports = ApartmentBuilding;