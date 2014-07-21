describe('bmiCalculatorEnglish', function() {
  it('calculates the BMI from the  weight in pounds and the height in inches', function() {
    bmiCalculatorEnglish(192, 72).should.equal(26.04);
  });
  it('calculates the BMI from the  weight in pounds and the height in inches', function() {
    bmiCalculatorEnglish(365, 72).should.equal(49.5));
  });
  /*it('should return an alert when  the weight or the height are zero', function() {
    bmiCalculatorEnglish(365, 0).should.equal(alert));
  });
  it('should return an alert when  the weight or the height are zero', function() {
    bmiCalculatorEnglish(0, 99).should.equal(alert));
  });
  it('should return an alert when  the weight or the height are zero', function() {
    bmiCalculatorEnglish(0, 0).should.equal(alert));
  });*/
});
