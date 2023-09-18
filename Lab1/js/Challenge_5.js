let Dolphins = {
    Turn1: 85,
    Turn2: 54,
    Turn3: 41,
}

let Koalas = {
    Turn1: 23,
    Turn2: 34,
    Turn3: 27,
}

let Avg_Score = (Turn1, Turn2, Turn3) => {
    return (Turn1 + Turn2 + Turn3) / 3
}

let Dolphins_Avg = Avg_Score(Dolphins.Turn1, Dolphins.Turn2, Dolphins.Turn3)
let Koalas_Avg = Avg_Score(Koalas.Turn1, Koalas.Turn2, Koalas.Turn3)

let Dolphins_Win = Dolphins_Avg >= 2*Koalas_Avg
let Koalas_Win = Koalas_Avg >= 2*Dolphins_Avg

if (Dolphins_Win == true) {
    console.log("Dolphins is a victory team with score " + Dolphins_Avg + " - " + Koalas_Avg + " ")
} 
else {
    if (Koalas_Win == true) {
        console.log("Koalas is a victory team with score " + Koalas_Avg + " - " + Dolphins_Avg + " ")
    } else {
        console.log("No one get trophy - Due to not enough gap <Dolphins: " + Dolphins_Avg + "; Koalas: " + Koalas_Avg + ">")
    }
}