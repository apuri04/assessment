const chai = window.chai
const expect = chai.expect

describe('Tax Calculator', () => {
  it('should calculate the tax of the given income', () => {
    const totalTax = taxCalc(119000);
    expect(totalTax).to.equal(29142.00);
  });
})