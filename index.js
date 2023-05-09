let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60], 
]

let cashCashRegster = (price, cash, cid)=>{
    let change = cash - price
    statusResults = {
        status: "",
        changeCid: []
    }

    let sumCid = 0
    for (let i = 0; i < cid.length; i++){
        sumCid+=cid[i][1]
    }
    console.log('sumCid =',sumCid)
    console.log('change =',change)

    // 1st condition check if ther is cash is avialeble in cid

    if (sumCid < change && sumCid > 0){
        statusResults.status = "insufficient funds"
    }

    // 2nd condition if sum of cid is equal to change 

    else if (sumCid === change){
        statusResults.status = "closed"
        statusResults.status = cid
    }


    // 3rd condition 
    else{
    let newCid = []
    let newChange = 0

    let changeWhole = Math.floor(change)
    let flootchange = change - changeWhole


    console.log("changeWhole =", changeWhole)
    console.log("flootchange =", flootchange)

    // check the multiples for changeWhole numbers 

    multiOfChangeWhole = Math.floor(changeWhole/20)
    let afterMult =  multiOfChangeWhole*20

    console.log("multiOfChangeWhole = ", multiOfChangeWhole)
    console.log("afterMult =",afterMult)





}
}
cashCashRegster(3.26, 100, cid)