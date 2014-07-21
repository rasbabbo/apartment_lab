var expect = require("chai").expect,
	Person = require("../../src/people/person.js"),
	Manager = require('../../src/people/manager.js');


// beforeEach(function() {
// 	;
// });
	// console.log("Write some test for manager...");

describe("Manager", function(){
	var roper;

	beforeEach(function () {
		roper = new Manager("Mr. Roper", "123-1234");
			// body...
	});

	describe ('manager', function(){
		it('the manager name should equal the person name', function() {
			expect(roper.name).to.equal('roper');
			});  
	});

	describe('#addProperty', function(){
		roper.addProperty("beacon");
		it('should reflect the addition of a new prop', function(){
			expect(roper.properties[0]).to.eql("beacon");
		});
	});


});