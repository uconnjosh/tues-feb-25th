describe('Address', function() {
  describe("fullAddress", function() {
    it("returns the full address the nice formatting", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "1 Park Ave";
      testAddress.city = "New York";
      testAddress.state = "New York";
      testAddress.fullAddress().should.equal("1 Park Ave, New York, New York");
    });
  });
});
