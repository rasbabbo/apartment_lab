var property = require("./property");

function Duplex(address) {
  // A duplex only has 2 units;
  this.address = address
  this.untis = 2;
}

inherits(Duplex, Property);

module.exports = Duplex;