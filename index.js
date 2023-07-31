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
  checkCashRegister(25, 20, [
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

// let cashCashRegster = (price, cash, cid)=>{
//     let change = cash - price
//     statusResults = {
//         status: "",
//         changeCid: []
//     }

//     let sumCid = 0
//     for (let i = 0; i < cid.length; i++){
//         sumCid+=cid[i][1].toFixed(2)
//     }
//     console.log('sumCid =',sumCid)
//     console.log('change =',change)

//     // 1st condition check if ther is cash is avialeble in cid

//     if (sumCid < change){
//         statusResults.status = "insufficient funds"
//         console.log("statusResults =", statusResults)
//     }

//     // 2nd condition if sum of cid is equal to change

//     else if (sumCid === change){
//         statusResults.status = "closed"
//         statusResults.change = cid
//         console.log("statusResults = ", statusResults)
//     }

//     // 3rd condition
//     else{
//     let newCid = [] // newCid is the array to collect the bank note names and thier coresponding values.
//     let newChange = 0 //  this will constantly be updadating as we look for clients change.

//     let changeWhole = Math.floor(change) // changeWhole is our change minus floot numbers
//     let flootchange = change - changeWhole // flootnumbers

//     console.log("changeWhole =", changeWhole)
//     console.log("flootchange =", flootchange)

//     // check the multiples for changeWhole numbers

//     let multiOfChangeWhole = Math.floor(changeWhole/20)
//     let afterMult =  multiOfChangeWhole*20

//     let chRem = changeWhole%20
//     console.log("chRem",chRem)
//     console.log("--------------------------------------")

//     console.log("multiOfChangeWhole = ", multiOfChangeWhole)
//     console.log("afterMult =",afterMult)

//     console.log("-----------------------------------------------------------------")
//     if (afterMult>=cid[7][1]){
//         let removeCash = afterMult - cid[7][1]
//         cid[7][1]=afterMult-removeCash
//         newChange = removeCash + chRem

//         console.log("removeCash=",removeCash)
//         console.log("newChange =", newChange)
//     }

// }
// }
// cashCashRegster(3.26, 100, cid)
