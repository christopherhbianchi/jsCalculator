console.log("LOADED TEST FILE")

describe("Calculator Test Suite", function() {
  describe("...clear", function(){
    it("clears the display", function() {
      $("#display").text("9898");
      $("#clear")[0].click();
      expect($("#display").text()).to.equal("")
    })
    it("clears the display after buttons have been clicked", function() {
      $("#9")[0].click()
      $("#8")[0].click()
      $("#9")[0].click()
      $("#8")[0].click()
      expect($("#display").text()).to.equal("9898");
      $("#clear")[0].click();
      expect($("#display").text()).to.equal("");
    })
  })
  describe("...addition", function() {
    afterEach(function(){
      $("#clear")[0].click();
    });

    it("2+2=4", function() {
      $("#2")[0].click();
      $("#add")[0].click();
      $("#2")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('4')
    });

    it("58+90=148", function(){
      $("#5")[0].click();
      $("#8")[0].click();
      $("#add")[0].click();
      $("#9")[0].click();
      $("#0")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('148')
    });

    it("13+74=87", function(){
      $("#1")[0].click();
      $("#3")[0].click();
      $("#add")[0].click();
      $("#7")[0].click();
      $("#4")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('87')
    });
  });

  describe("...subtract", function() {
    afterEach(function(){
      $("#clear")[0].click();
    });

    it("1-2=-1", function() {
      $("#1")[0].click();
      $("#subtract")[0].click();
      $("#2")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('-1')
    });

    it("90-58=32", function(){
      $("#9")[0].click();
      $("#0")[0].click();
      $("#subtract")[0].click();
      $("#5")[0].click();
      $("#8")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('32')
    });

    it("13-74=-61", function(){
      $("#1")[0].click();
      $("#3")[0].click();
      $("#subtract")[0].click();
      $("#7")[0].click();
      $("#4")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('-61')
    });
  });
  describe("...multiply", function() {
    afterEach(function(){
      $("#clear")[0].click();
    });

    it("1*2=2", function() {
      $("#1")[0].click();
      $("#multiply")[0].click();
      $("#2")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('2')
    });

    it("90*58=5220", function(){
      $("#9")[0].click();
      $("#0")[0].click();
      $("#multiply")[0].click();
      $("#5")[0].click();
      $("#8")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('5220')
    });

    it("13*74=962", function(){
      $("#1")[0].click();
      $("#3")[0].click();
      $("#multiply")[0].click();
      $("#7")[0].click();
      $("#4")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('962')
    });
  });
  describe("...divide", function() {
    afterEach(function(){
      $("#clear")[0].click();
    });

    it("5/2=2.5", function() {
      $("#5")[0].click();
      $("#divide")[0].click();
      $("#2")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('2.5')
    });

    it("90/58=1.5517241379310345", function(){
      $("#9")[0].click();
      $("#0")[0].click();
      $("#divide")[0].click();
      $("#5")[0].click();
      $("#8")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('1.5517241379310345')
    });

    it("13/74=0.17567567567567569", function(){
      $("#1")[0].click();
      $("#3")[0].click();
      $("#divide")[0].click();
      $("#7")[0].click();
      $("#4")[0].click();
      $("#equals")[0].click();
      expect($("#display").text()).to.equal('0.17567567567567569')
    });
  });
});