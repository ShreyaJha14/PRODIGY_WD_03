
let boxes = document.querySelectorAll(".box")
let gameover = new Audio("gameover.mp3")
let gameturn = new Audio("turn.mp3")

let turn = "X";
let isgameover =false;

boxes.forEach(e =>{
    // e.innerHTML = ""g
    e.addEventListener("click", () =>{
        if(!isgameover && e.innerHTML === ""){
            e.innerHTML = turn;
            checkwin();
            checkDraw();
            gameturn.play();
            changeTurn();
        }
    })
})

function changeTurn(){
    gameturn.play();
    if(turn === "X"){
        turn = "0";
        document.querySelector(".bg").style.left = "85px";
    }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}

function checkwin(){
    let winConditions = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ]
    for(let i = 0; i<winConditions.length; i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isgameover = true;
            document.querySelector("#Results").innerHTML = turn + " Won";
            gameover.play();
            document.querySelector("#playAgain").style.display = "inline"

            for(j = 0; j<3; j++){
                boxes[winConditions[i][j]].style.backgroundColor = "#619b8a"
                boxes[winConditions[i][j]].style.color = "#000"
            }
        }

    }
}

function checkDraw(){
    if(!isgameover){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isgameover = true;
            document.querySelector("#Results").innerHTML = "Draw";
            gameover.play();
            document.querySelector("#playAgain").style.display = "inline"
            
        }
    }
}

document.querySelector("#playAgain").addEventListener("click", ()=>{
    isgameover = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#Results").innerHTML = ""
    document.querySelector("#playAgain").style.display = "none";

    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#e9d7aa"
    })
})
reset.addEventListener('click',restart)

function restart() {
    isgameover = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#Results").innerHTML = ""
    document.querySelector("#playAgain").style.display = "none";

    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#e9d7aa"
    })

}