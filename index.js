let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
];

const checkCashRegister = (price, cash, cid) => {
  console.log(cid);
};
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
]);

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
