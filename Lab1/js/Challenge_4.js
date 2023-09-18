let bill = 430;

function tip (bill) {
    return (bill>=50 && bill<=300) ? tip = bill*0.15 : tip = bill*0.2;
}

let final_value =  (bill, tip) => {
    return bill + tip
}

console.log("The bill was " + bill + ", the tip was "+ tip(bill) + ", and the total value "+ final_value(bill, tip) +" ")