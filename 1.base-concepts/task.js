"use strict"
function solveEquation(a, b, c) {
  let arr = ["х1", "х2"];
  let d = b**2-4*a*c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d))/(2*a);
    arr[1] = (-b - Math.sqrt(d))/(2*a);
    return arr;
  } else if (d == 0) {
    arr = ["x1"];
    arr[0] = -b/(2*a);
    return arr;
  } else if (d < 0) {
    return arr = [];
  }
}
solveEquation(1, 5, 4)

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent/100/12;
  let S = amount - contribution;
  let amountPerMonth = S * (P + (P / (((1 + P)**countMonths) - 1)));
  let totalAmount = amountPerMonth * countMonths;
  return totalAmount.toFixed(2);
}
calculateTotalMortgage(10, 0, 10000, 36)