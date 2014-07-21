var expect = require("chai").expect,
	Person = require("../../src/people/person.js"),
	Tenant = require('../../src/people/tenant.js');

	console.log("tenant");

	describe("Tenant", function(){
		var jack;

		beforeEach(function) {
			jack = new Tenant("Jack Tripper", "122-1223");
		});

	describe ("tenant", function() {
		it('the tenant name should reflect the person name', function() {
			expect(jack.name).to.equal('jack');
		});
	});

	describe ("#addReference", function() {
		it('should add a buddy from Person', function() {
			var larry = new Person("Larry Miz", "111-1111");
			jack.addReference(larry);
			expect(jack.references).to.eql([larry]);
		});
	});

	
	});
	
