let bill = [122, 55, 44]
let tip = []

function calcTip(bill) {
    let tmp_tip
    for (let i = 0; i < bill.length; i++) {
        return (bill >= 50 && bill <= 300) ? tmp_tip = bill[i] * 0.15 : tmp_tip = bill[i] * 0.2;
        tip.push(tmp_tip);
    }
}





let final_value = (bill, tip) => {
    return bill + tip
}

console.log("The bill was " + bill + ", the tip was " + tip(bill) + ", and the total value " + final_value(bill, tip) + " ")