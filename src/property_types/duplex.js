var property = require("./property");

function Duplex(address) {
  // A duplex only has 2 units;
  this.address = address
  this.units = 2;
}

inherits(Duplex, Property);

Apartment.prototype.available = function(){
  // a tenant it should not be available
  if (this.units < 2) {
  	this.available = "yes";
  } else {
  	console.error("Sorry, you're too late")
  }
  return this;
};
module.exports = Duplex;