let Dolphins = {
    Turn1: 97,
    Turn2: 112,
    Turn3: 101,
}

let Koalas = {
    Turn1: 109,
    Turn2: 95,
    Turn3: 106,
}

let Avg_Score = (Turn1, Turn2, Turn3) => {
    return (Turn1 + Turn2 + Turn3) / 3
}

let Dolphins_Avg = Avg_Score(Dolphins.Turn1, Dolphins.Turn2, Dolphins.Turn3)
let Koalas_Avg = Avg_Score(Koalas.Turn1, Koalas.Turn2, Koalas.Turn3)

if ((Dolphins_Avg < 100) && (Koalas_Avg < 100)) {
    console.log("No one get trophy - Due to lower than minimal score <Dolphins: " + Dolphins_Avg + "; Koalas: " + Koalas_Avg + ">")
} 
else {
    if (Dolphins.Avg_Score > Koalas.Avg_Score) {
        console.log("Dolphins is a victory team with score " + Dolphins_Avg + " - " + Koalas_Avg + " ")
    } 
    if (Koalas_Avg > Dolphins_Avg) {
        console.log("Koalas is a victory team with score " + Koalas_Avg + " - " + Dolphins_Avg + " ")
    } 
    if (Dolphins.Avg_Score == Koalas.Avg_Score) {
        console.log("It's a draw -  <Dolphins: " + Dolphins_Avg + "; Koalas: " + Koalas_Avg + ">")
    }
}