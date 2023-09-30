const {
  sum,
  subtraction,
  product,
  division,
  myBeverage,
} = require("./index.js");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
/*
test("subtracts 2 from 10 to equal 8", () => {
  expect(subtraction(10, 3)).toBe(7);
});

test("multiplies 5 with 9 to equal 45", () => {
  expect(product(5, 9)).toBe(45);
});

test("divides 20 to 2 to equal 10", () => {
  expect(division(20, 2)).toBe(10);
});
*/
describe("my beverage", () => {
  test("is delicious", () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test("is not sour", () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
