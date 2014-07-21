var expect = require("chai").expect,
	Person = require("../../src/people/person.js"),
	Manager = require('../../src/people/manager.js');


// beforeEach(function() {
// 	;
// });
	// console.log("Write some test for manager...");

describe("manager", function(){
	var roper = new Manager('roper', '123-1234');
	it('the manager name should equal the person name', function() {
		expect(roper.name).to.equal('roper');
	});  
});

describe('#addProperty', function(){
	var roper = Manager.addProperty("beacon");
	it('should reflect the addition of a new prop', function(){
		expect(roper.properties[0]).to.eql("beacon");
	});
});



// })