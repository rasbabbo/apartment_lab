var Person = require("./person");
var Property = require("../property_types/property");
var inherits = require("../../src/inherits.js");



function Manager(name, contact) {
  // set name and contact
  this.name = name;
  this.contact = contact;
  this.properties = [];
};

inherits(Manager, Person);

Manager.prototype.addProperty = function(property) {
  // add property from properties
  if (property instanceof Property) {
  this.properties.push(property);
	} else {console.error("Didn't add:", property);
	}
	return this;
}

Manager.prototype.removeProperty = function(property) {
  // remove properties
  var indexOfProperty = this.properties.indexOf(property);
  if(indexOfProperty !== -1) {
  	this.properties.splice(indexOfProperty, 1);
  } else {
  	console.error("Didn't remove:", property)
  }
  return this;
};

module.exports = Manager;