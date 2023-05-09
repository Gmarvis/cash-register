// currency note table in dollar
let currencyNote = [
    {name: "penny", value: 0.01},
    {name: "Nickel", value: 0.05},
    {name: "Dime", value: 0.01},
    {name: "Quarter", value: 0.25},
    {name: "OneDollar", value: 1.0},
    {name: "FiveDollar", value: 5.0},
    {name: "Ten", value: 10.0},
    {name: "Twenty", value: 20.0},
]

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


// console.log(cid[cid.length-1])


let cashCashRegster = function (price,cash,cid) {

    let balance = cash - price

    statusResult = {
        status: "",
        change: []
    }

let sumCid = 0
for (let i = 0; i < cid.length;i++){
    sumCid+=cid[i][1]
}
    console.log('sumCid=',sumCid)
    console.log('balance = ',balance)

    // return balance;



// check 1st condition "checking if cash is lessthan change"
    if (sumCid < balance && sumCid > 0 ){
        statusResult.status = "insufficient funds"
        return change 

        // return statusResult
    }

// second condition "checking if sumCid is equal to change" if yes then cid is closed

    else if (sumCid === balance){
        statusResult.status = "closed"
        statusResult.change = cid
        return statusResult
    }

// 3rd condition 
else {
let cashToReturn = [] // this will take the array of the deffrent coresponding banck notes to be givin out out as change to the customer with their coresponding values



for (let i = 0; i < cid.length; i++){
    let changeValue = 0 // this is the value of our balance to be given out, this vulue will keep updating as we go through the cid looking for balance with specific bank notes.


    while (currencyNote[i].value<=balance && cid[i][1]>0){
        cid[i][1]-=currencyNote[i].value
        balance-=currencyNote[i].value
        changeValue+=currencyNote[i].value
        // console.log(changeValue)
    }
    if (changeValue>0){
        cashToReturn.push(cid[i][0],changeValue)
    }
    console.log(cashToReturn)


    if (balance>0){
        statusResult.status = "insufficient funds"
        console.log(statusResult)
    }

}

}


// return change

// console.log("sumCid =", sumCid)
}
cashCashRegster(70.95,100,cid)





