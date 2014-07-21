var expect = require("chai").expect;
var Person = require("../../src/people/person.js");


describe("Person", function(){
	var bob = new Person('bob', '123-1234');
	it("folks should have same Person contacts", function() {
		expect(bob.contact).to.equal("123-1234");
  });
  it('should have same name', function () {
  	expect(bob.name).to.eql("bob");
  });
});






