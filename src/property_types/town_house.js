var property = require("./property");

function TownHouse(address){
  // only has one unit per address
  this.address = address;
  this.unit = 1;
  this.available = "no";
};

inherit(TownHouse, Property);

TownHouse.prototype.available = function(){
  // a tenant it should not be available
  if (this.unit < 1) {
  	this.available = "yes";
  } else {
  	console.error("Sorry, you're too late")
  }
  return this;
};

module.exports = TownHouse;
