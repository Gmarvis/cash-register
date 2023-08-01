let denom = [
  { name: "ONE HUNDRED", value: 100.0 },
  { name: "TWENTY", value: 20.0 },
  { name: "TEN", value: 10.0 },
  { name: "FIVE", value: 5.0 },
  { name: "ONE", value: 1.0 },
  { name: "QUARTER", value: 0.25 },
  { name: "DIME", value: 0.1 },
  { name: "NICKEL", value: 0.05 },
  { name: "PENNY", value: 0.01 },
];

const checkCashRegister = (price, cash, cid) => {
  // find the change
  let change = cash - price;

  // define our results
  let result = {
    status: "",
    change: [],
  };

  // calculate our total cash in drawer
  let sumCid = 0;
  for (let i = 0; i < cid.length; i++) {
    sumCid += cid[i][1];
  }

  // check if the sumCid < change if true we return INSUFFICIENT_FUNDS
  if (sumCid < cid) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  // check if the sumCid === change if true we return "CLOSED"

  if (sumCid === change) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }

  //   console.log("sumCid: ", sumCid);

  // if all check resolve to false then here implement the logic to handle costomers change
  let newResults = [];
  cid = cid.reverse();
  for (let i = 0; i < cid.length; i++) {
    let val = 0;
    while (denom[i].value <= change && cid[i][1] > 0) {
      cid[i][1] -= denom[i].value;
      change -= denom[i].value;
      val += denom[i].value;
    }


    if (val > 0) {
      newResults.push([cid[i][0], val]);
    }
  }

  if (change > 0) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  result.status = "OPEN";
  result.change = newResults;
  console.log(newResults);
  return result;
};

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
