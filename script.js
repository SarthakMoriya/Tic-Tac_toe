console.log('Welcome to Tic Tac Toe')

let music = new Audio('gameover.mp3')
const audioTurn = new Audio('turn.mp3')



let gameOver = false


let turn = "X"

//Function To change turn

const changeTurn = () => { return turn === "X" ? "0" : "X"; }

//Game Logic

const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(el => {
        if ((boxText[el[0]].innerHTML === boxText[el[1]].innerHTML) && (boxText[el[2]].innerHTML === boxText[el[0]].innerHTML) && (boxText[el[0]].innerHTML !== '')) {
            document.querySelector('.info').innerHTML = boxText[el[0]].innerHTML + ' Winner!'
            gameOver = true

            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '210px'

            music=new Audio('music.mp3')
            music.play()
            resetGame()
        }
    })
}


let boxes = document.getElementsByClassName('box');


Array.from(boxes).forEach((element) => {
    // console.log(element)
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        music.play()
        if (boxText.innerHTML === '') {
            boxText.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin()
            if (!gameOver) {
                document.getElementsByClassName('info')[0].innerHTML = `Turn For Player : " ${turn} "`
            } else {

            }
        }
    })
})


//Reset Game

const reset = document.getElementById('reset')

const resetGame = () => {

    reset.addEventListener('click', () => {
        console.log("Lund")
        Array.from(boxes).forEach((element) => {
            // console.log(element)
            element.querySelector('.boxText').innerHTML = '';

        })

        document.getElementsByClassName('info')[0].innerHTML=`Turn For Player : " ${turn} "`

        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px'
    })
}