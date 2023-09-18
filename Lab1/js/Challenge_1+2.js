let Mark = {
    Weight: 95,
    Height: 1.88,
}
let John = {
    Weight: 85,
    Height: 1.78,
}
let BMI = (Weight, Height) => {
    return Weight / Height ** 2
}
let flag = BMI(Mark.Weight, Mark.Height) > BMI(John.Weight, John.Height)
//console.log(flag)


if (flag == true) {
    console.log("Mark's BMI (" + BMI(Mark.Weight, Mark.Height) + ") higher than John's BMI (" + BMI(John.Weight, John.Height) + "")
} else {
    console.log("John's BMI (" + BMI(John.Weight, John.Height) + ") higher than Mark's (" + BMI(Mark.Weight, Mark.Height) + "")
}
