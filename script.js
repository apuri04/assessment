document.addEventListener(
  "DOMContentLoaded",
  function () {
    let grossIncome = 119000;
    const superContribution = parseFloat( 0.105 * grossIncome).toFixed(2);
    const totalTax = taxCalc(grossIncome);
  },
  false
);

//Defines the tax brackets
var taxBracket = [
  { from: 0, to: 18200, percentage: 0, amount: 0 },
  { from: 18201, to: 37000, percentage: 0.19, over: 18200, amount: 0 },
  { from: 37001, to: 90000, percentage: 0.325, over: 37000, amount: 3572 },
  { from: 90001, to: 180000, percentage: 0.325, over: 45000, amount: 5092 },
  { from: 180001, to: Infinity, percentage: 0.45, over: 180000, amount: 54097 },
];

//Loops through taxBracket object and finds the tax bracket for the post deduction gross income amount
function taxCalc(income) {
  for (var x = 0; x < taxBracket.length; x++) {
    if (income <= taxBracket[x].to) {
      var amountOver = income - taxBracket[x].over;
      return +parseFloat(taxBracket[x].amount + (amountOver * taxBracket[x].percentage)).toFixed(2);
    }
  }
}
