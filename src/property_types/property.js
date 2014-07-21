var inherits = require("../../src/inherits.js")


function Property(address) {
  this.address = address;
  this.units = 0;
  this.manager = undefined;
  this.tenant = ""
}

Property.prototype.setManager = function(person) {
  this.manager = person
  // set this.manager to person
};

Property.prototype.getManager = function(){
  return this.manager;
  // return this.manager 
};

Property.prototype.addTenant = function(unit, tenant) {
  if ((this.getManager !== undefined) &&
      (this.tenant.references >= this.tenant.references[1])) {
      this.tenant.push(addTenant(tenant));
      this.units += 1;
      }

  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
  this.tenant = "";
};

Property.prototype.availableUnits = function(){
  // return num of units available


}

Property.prototype.rentedUnits = function(){
  // return rented units
  return this.units
}


module.exports = Property;
