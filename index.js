
let num = 0
let Player = 0
let Robot = 0
let newElement = document.querySelector("#table")

let round = 0

const chosen = (chose) => {
    round += 1

    if (Robot < 3 && Player < 3) {

        num = Math.floor(Math.random() * 3) + 1

        if (num === 1) {

            let img = document.querySelector("#robot-img")
            img.src = "images/scissors.png"

            if (chose === "scissors") {
                newElement.innerHTML += `<p>${round} round : Drow</p>`

            } else if (chose === "paper") {
                newElement.innerHTML += `<p>${round} round : Robot wins</p>`

                Robot += 1

            } else if (chose === "stone") {
                newElement.innerHTML += `<p>${round} round : Player wins</p>`

                Player += 1
            }

        } else if (num === 2) {

            let img = document.querySelector("#robot-img")
            img.src = "images/paper.png"


            if (chose === "scissors") {
                newElement.innerHTML += `<p>${round} round : Player wins</p>`
                Player += 1

            } else if (chose === "paper") {
                newElement.innerHTML += `<p>${round} round : Drow</p>`


            } else if (chose === "stone") {
                newElement.innerHTML += `<p>${round} round : Robot wins</p>`
                Robot += 1
            }

        } else if (num === 3) {

            let img = document.querySelector("#robot-img")
            img.src = "images/stone.png"

            if (chose === "scissors") {
                newElement.innerHTML += `<p>${round} round : Robot wins</p>`
                Robot += 1

            } else if (chose === "paper") {
                newElement.innerHTML += `<p>${round} round : Player wins</p>`
                Player += 1

            } else if (chose === "stone") {
                newElement.innerHTML += `<p>${round} round : Drow</p>`

            }
        }

        if (Robot === 3) {

            document.getElementById("winner").innerText = "Robot Won"
            document.getElementById("refresh").style.display = "block"

        } else if (Player === 3) {
            document.getElementById("winner").innerText = "Player Won"
            document.getElementById("refresh").style.display = "block"

        }
        document.getElementById("score").innerText = `Robot - ${Robot} : ${Player} - Player`
    }

}


const refresh = () => {
    location.reload()
}




