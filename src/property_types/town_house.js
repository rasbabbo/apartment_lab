var property = require("./property");

function TownHouse(address){
  // only has one unit per address
  this.address = address;
  this.unit = 1;
};

inherit(TownHouse, Property);

TownHouse.prototype.available = function(){
  // a tenant it should not be available

};

module.exports = TownHouse;
