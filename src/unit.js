// var Tenant = require("./tenant.js");
// var Property = require("./property.js")
// var inherits = require("../../src/inherits.js")


function Unit (number, building, sqft, rent) {
  // set params above using this
  this.tenant = null;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent
}


Unit.prototype.available = function(){
  // check for tenant
}



