var person = require("./person.js");

function Tenant(name, contact) {
  // set this.name, and contact
  this.references = [];
};

Tenant.prototype.addReference = function(reference){
  // add reference to references
  this.reference.push(reference);
};

module.exports = Tenant;
