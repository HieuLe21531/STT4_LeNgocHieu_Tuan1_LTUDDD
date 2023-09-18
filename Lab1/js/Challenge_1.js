let Mark = {
    Weight: 78,
    Height: 1.69,
}
let John = {
    Weight: 92,
    Height: 1.95,
}
let BMI = (Weight, Height) => {
    return Weight / Height ** 2
}
let flag = BMI(Mark.Weight, Mark.Height) > BMI(John.Weight, John.Height)
//console.log(flag);


if (flag == true) {
    console.log("Mark's BMI (" + BMI(Mark.Weight, Mark.Height) +") higher than John's BMI (" + BMI(John.Weight, John.Height))
} else {
    console.log("John's BMI higher than Mark's")
}
