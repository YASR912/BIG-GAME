var score1 = 0;
var score2 = 0;
var active = 0;

var current1 = 0;
var current2 = 0;



function player() {
    if (score1 < 100 && score2 < 100) {
        var randomDice = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".dice img").setAttribute("src", "./Resources/" + randomDice + ".png");

        if (active == 0) {
            if (randomDice != 1) {
                current1 = current1 + randomDice;
            }

            else {
                current1 = 0;
                active = 1;
                document.querySelector(".player2").classList.add("active");
                document.querySelector(".player1").classList.remove("active");
                document.querySelector(".player1 h1").classList.add("unactive");
                document.querySelector(".player2 h1").classList.remove("unactive");
            }
            document.querySelector(".player1 .current-score").innerHTML = current1;
        }

        else {
            if (randomDice != 1) {
                current2 = current2 + randomDice;
            }

            else {
                current2 = 0;
                active = 0;
                document.querySelector(".player1").classList.add("active");
                document.querySelector(".player2").classList.remove("active");
                document.querySelector(".player1 h1").classList.remove("unactive");
                document.querySelector(".player2 h1").classList.add("unactive");
            }
            document.querySelector(".player2 .current-score").innerHTML = current2;
        } 
    }
}

function hold () {
    if (active == 0) {
        score1 = score1 + current1;
        if (score1 < 100) {
            active = 1;
            document.querySelector(".player2").classList.add("active");
            document.querySelector(".player1").classList.remove("active");
            document.querySelector(".player1 h1").classList.add("unactive");
            document.querySelector(".player2 h1").classList.remove("unactive");
        }
        else {
            document.querySelector(".player1").style.backgroundColor = "rgba(255, 255, 255, 0.87)";
            // document.querySelector(".player1 p").style.color = "white";
            document.querySelector(".player1 h1").style.color = "rgb(43, 43, 43)";
        }
       
        document.querySelector(".player1 p").innerHTML = score1;
        current1 = 0;
        document.querySelector(".player1 .current-score").innerHTML = current1;
    }
    else {
        score2 = score2 + current2;
        if (score2 < 100) {
            active = 0;
            document.querySelector(".player1").classList.add("active");
            document.querySelector(".player2").classList.remove("active");
            document.querySelector(".player1 h1").classList.remove("unactive");
            document.querySelector(".player2 h1").classList.add("unactive");
        }
        else {
            document.querySelector(".player2").style.backgroundColor = "rgba(255, 255, 255, 0.87)";
            // document.querySelector(".player2 p").style.color = "white";
            document.querySelector(".player2 h1").style.color = "rgb(43, 43, 43)";
        }
        current2 = 0;
        document.querySelector(".player2 .current-score").innerHTML = current2;
        document.querySelector(".player2 p").innerHTML = score2;
    }
}






document.querySelector("#newGame").addEventListener("click", function () {
    score1 = 0;
    score2 = 0;
})

document.querySelector("#rollBtn").addEventListener("click", player);
document.querySelector("#holdBtn").addEventListener("click", hold);
document.querySelector("#newGame").addEventListener("click", function () {
    document.querySelector(".player1").style.backgroundColor = "rgb(43, 43, 43)";
    document.querySelector(".player2").style.backgroundColor = "rgb(43, 43, 43)";
    // document.querySelector(".player2 p").style.color = "black";
    document.querySelector(".player2 h1").style.color = "white";
    // document.querySelector(".player1 p").style.color = "black";
    document.querySelector(".player1 h1").style.color = "white";
    score1= 0;
    score2 = 0;
    active = 0;
    current1 = 0;
    current2 = 0;
    document.querySelector(".player1 .current-score").innerHTML = 0;
    document.querySelector(".player2 .current-score").innerHTML = 0;
    document.querySelector(".player1 p").innerHTML = 0;
    document.querySelector(".player2 p").innerHTML = 0;

    document.querySelector(".player1").classList.add("active");
    document.querySelector(".player2").classList.remove("active");
    document.querySelector(".player2 h1").classList.add("unactive");
    document.querySelector(".player1 h1").classList.remove("unactive");
})
