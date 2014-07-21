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
  if (reference instanceof Person) {
  this.reference.push(reference);	
  } else {console.error(reference, " is not your friend");
}
return this;
};

module.exports = Tenant;
