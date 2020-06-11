const cashInDrawer = [
  { currencyUnit: "ONE HUNDRED", amount: 100.0 },
  { currencyUnit: "TWENTY", amount: 20.0 },
  { currencyUnit: "TEN", amount: 10.0 },
  { currencyUnit: "FIVE", amount: 5.0 },
  { currencyUnit: "ONE", amount: 1.0 },
  { currencyUnit: "QUARTER", amount: 0.25 },
  { currencyUnit: "DIME", amount: 0.1 },
  { currencyUnit: "NICKEL", amount: 0.05 },
  { currencyUnit: "PENNY", amount: 0.01 },
];

function checkCashRegister(price, cash, cid) {
  let resultObject = { status: null, change: [] };
  let changeValue = cash - price;

  const register = cid.reduce(
    (acc, currentValue) => {
      acc.total += currentValue[1];
      acc[currentValue[0]] = currentValue[1];
      return acc;
    },
    { total: 0 }
  );

  if (register.total === changeValue) {
    resultObject.status = "CLOSED";
    resultObject.change = cid;
    return resultObject;
  } else if (register.total < changeValue) {
    resultObject.status = "INSUFFICIENT_FUNDS";
    return resultObject;
  }

  const changeArr = cashInDrawer.reduce((acc, currentValue) => {
    let val = 0;

    while (register[currentValue.currencyUnit] > 0 && changeValue >= currentValue.amount) {
      changeValue -= currentValue.amount;
      register[currentValue.currencyUnit] -= currentValue.amount;
      val += currentValue.amount;
      changeValue = Math.round(changeValue * 100) / 100;
    }

    if (val > 0) {
      acc.push([currentValue.currencyUnit, val]);
    }

    return acc;
  }, []);

  if (changeArr.length < 1 || changeValue > 0) {
    resultObject.status = "INSUFFICIENT_FUNDS";
    return resultObject;
  }

  resultObject.status = "OPEN";
  resultObject.change = changeArr;
  return resultObject;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
// should return {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
