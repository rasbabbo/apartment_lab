var expect = require("chai").expect,
  Property = require("../../src/property_types/property.js");

console.log("Write some test for People...");



describe("Property", function() {
	var cali = Property("12 Bob")
	it('should reflect static value of Property', function () {
		expect(this.address).to.eql("12 Bob");
	});
		
		describe('#setManager', function (){
			it('should update manager from undefined', function(){
				var cali = Property.manger('roper');
				expect(Property.manager).to.eql('roper');
			});
		});

		it("should reflect the static values in Prop", function () {
			expect()
		});
	});

