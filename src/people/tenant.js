var Person = require("./person.js");
var inherits = require("../../src/inherits.js")


function Tenant(name, contact) {
	this.name = name;
	this.contact = contact;
  // set this.name, and contact
  this.references = [];
};

inherits(Tenant, Person);

Tenant.prototype.addReference = function(reference){
  // add reference to references
  this.reference.push(reference);
};

module.exports = Tenant;
