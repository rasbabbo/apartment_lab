var person = require("./person");
var inherits = require("../../src/inherits.js")

function Manager(name, contact) {
  // set name and contact
  this.name = name;
  this.contact = contact;
  this.properties = [];
}

Manager.prototype.addProperty = function(property) {
  // add property from properties
  this.properties.push(property);
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
  this.properties.slice()
};

module.exports = Manager;