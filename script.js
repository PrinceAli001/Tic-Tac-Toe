function Players(name,marker) {
    let playerName = name
    let playerMarker = marker

    return {playerName,playerMarker}
}

(function () {
    let box = document.querySelectorAll('.box')
    let boxOne = document.querySelector('#box1')
    let boxTwo = document.querySelector('#box2')
    let boxThree = document.querySelector('#box3')
    let boxFour = document.querySelector('#box4')
    let boxFive = document.querySelector('#box5')
    let boxSix = document.querySelector('#box6')
    let boxSeven = document.querySelector('#box7')
    let boxEight = document.querySelector('#box8')
    let boxNine = document.querySelector('#box9')
    let gameOver = document.querySelector('#game-over')
    let winLossDraw = document.querySelector('#win-loss-draw')
    let pause = document.querySelector('#pause')
    let menu = document.querySelector('#menu')
    let restart = document.querySelectorAll('.restart-game')
    let resume = document.querySelector('#resume')
    let submit = document.querySelector('#submit')
    let currentName = document.querySelector('#players-name')
    let playerOne = document.querySelector('#player-one')
    let playerTwo = document.querySelector('#player-two')
    let playersForm = document.querySelector('#players-form')
    let bodyName = document.querySelector('#body-players-name')
    let charMenu = document.querySelectorAll('.char-menu')

    
    let gameFlow = {
         player1 : Players(`Joy`,'X'),
         player2 :  Players(`Alice`,'O'),
         roundCount : 1,
         game : function () {
            if (boxOne.textContent == 'X' && 
            boxTwo.textContent == 'X' &&
            boxThree.textContent == 'X') {
            boxOne.setAttribute('style','background-color: #90ee90;')
            boxTwo.setAttribute('style','background-color: #90ee90;')
            boxThree.setAttribute('style','background-color: #90ee90;')
        } else if (boxFour.textContent == 'X' && 
            boxFive.textContent == 'X' &&
            boxSix.textContent == 'X') {
            boxFour.setAttribute('style','background-color: #90ee90;')
            boxFive.setAttribute('style','background-color: #90ee90;')
            boxSix.setAttribute('style','background-color: #90ee90;')
        } else if (boxSeven.textContent == 'X' && 
            boxEight.textContent == 'X' &&
            boxNine.textContent == 'X') {
            boxSeven.setAttribute('style','background-color: #90ee90;')
            boxEight.setAttribute('style','background-color: #90ee90;')
            boxNine.setAttribute('style','background-color: #90ee90;')
        } else if (boxOne.textContent == 'X' && 
            boxFive.textContent == 'X' &&
            boxNine.textContent == 'X') {
            boxOne.setAttribute('style','background-color: #90ee90;')
            boxFive.setAttribute('style','background-color: #90ee90;')
            boxNine.setAttribute('style','background-color: #90ee90;')
        } else if (boxThree.textContent == 'X' && 
            boxFive.textContent == 'X' &&
            boxSeven.textContent == 'X') {
            boxThree.setAttribute('style','background-color: #90ee90;')
            boxFive.setAttribute('style','background-color: #90ee90;')
            boxSeven.setAttribute('style','background-color: #90ee90;')
        } else if (boxOne.textContent == 'X' && 
            boxFour.textContent == 'X' &&
            boxSeven.textContent == 'X') {
            boxOne.setAttribute('style','background-color: #90ee90;')
            boxFour.setAttribute('style','background-color: #90ee90;')
            boxSeven.setAttribute('style','background-color: #90ee90;')
        } else if (boxTwo.textContent == 'X' && 
            boxFive.textContent == 'X' &&
            boxEight.textContent == 'X') {
            boxTwo.setAttribute('style','background-color: #90ee90;')
            boxFive.setAttribute('style','background-color: #90ee90;')
            boxEight.setAttribute('style','background-color: #90ee90;')
        } else if (boxThree.textContent == 'X' && 
            boxSix.textContent == 'X' &&
            boxNine.textContent == 'X') {
            boxThree.setAttribute('style','background-color: #90ee90;')
            boxSix.setAttribute('style','background-color: #90ee90;')
            boxNine.setAttribute('style','background-color: #90ee90;')
        } else if (boxOne.textContent == 'O' && 
            boxTwo.textContent == 'O' &&
            boxThree.textContent == 'O') {
            boxOne.setAttribute('style','background-color: #90ee90;')
            boxTwo.setAttribute('style','background-color: #90ee90;')
            boxThree.setAttribute('style','background-color: #90ee90;')
        } else if (boxFour.textContent == 'O' && 
            boxFive.textContent == 'O' &&
            boxSix.textContent == 'O') {
            boxFour.setAttribute('style','background-color: #90ee90;')
            boxFive.setAttribute('style','background-color: #90ee90;')
            boxSix.setAttribute('style','background-color: #90ee90;')
        } else if (boxSeven.textContent == 'O' && 
            boxEight.textContent == 'O' &&
            boxNine.textContent == 'O') {
            boxSeven.setAttribute('style','background-color: #90ee90;')
            boxEight.setAttribute('style','background-color: #90ee90;')
            boxNine.setAttribute('style','background-color: #90ee90;')
        } else if (boxOne.textContent == 'O' && 
            boxFive.textContent == 'O' &&
            boxNine.textContent == 'O') {
            boxOne.setAttribute('style','background-color: #90ee90;')
            boxFive.setAttribute('style','background-color: #90ee90;')
            boxNine.setAttribute('style','background-color: #90ee90;')
        } else if (boxThree.textContent == 'O' && 
            boxFive.textContent == 'O' &&
            boxSeven.textContent == 'O') {
            boxThree.setAttribute('style','background-color: #90ee90;')
            boxFive.setAttribute('style','background-color: #90ee90;')
            boxSeven.setAttribute('style','background-color: #90ee90;')
        } else if (boxOne.textContent == 'O' && 
            boxFour.textContent == 'O' &&
            boxSeven.textContent == 'O') {
            boxOne.setAttribute('style','background-color: #90ee90;')
            boxFour.setAttribute('style','background-color: #90ee90;')
            boxSeven.setAttribute('style','background-color: #90ee90;')
        } else if (boxTwo.textContent == 'O' && 
            boxFive.textContent == 'O' &&
            boxEight.textContent == 'O') {
            boxTwo.setAttribute('style','background-color: #90ee90;')
            boxFive.setAttribute('style','background-color: #90ee90;')
            boxEight.setAttribute('style','background-color: #90ee90;')
        } else if (boxThree.textContent == 'O' && 
            boxSix.textContent == 'O' &&
            boxNine.textContent == 'O') {
            boxThree.setAttribute('style','background-color: #90ee90;')
            boxSix.setAttribute('style','background-color: #90ee90;')
            boxNine.setAttribute('style','background-color: #90ee90;')
        } 




            if (this.roundCount <= 10) {
                if ((boxOne.textContent == 'X' && 
                    boxTwo.textContent == 'X' &&
                    boxThree.textContent == 'X')
                    ||
                    (boxFour.textContent == 'X' &&
                    boxFive.textContent == 'X' &&
                    boxSix.textContent == 'X') 
                    ||
                    (boxSeven.textContent == 'X' &&
                    boxEight.textContent == 'X' &&
                    boxNine.textContent == 'X')
                    ||
                    (boxOne.textContent == 'X' &&
                    boxFive.textContent == 'X' &&
                    boxNine.textContent == 'X')
                    ||
                    (boxThree.textContent == 'X' &&
                    boxFive.textContent == 'X' &&
                    boxSeven.textContent == 'X')
                    ||
                    (boxOne.textContent == 'X' &&
                    boxFour.textContent == 'X' &&
                    boxSeven.textContent == 'X')
                    ||
                    (boxTwo.textContent == 'X' &&
                    boxFive.textContent == 'X' &&
                    boxEight.textContent == 'X')
                    ||
                    (boxThree.textContent == 'X' &&
                    boxSix.textContent == 'X' &&
                    boxNine.textContent == 'X')) {
                    winLossDraw.textContent = `${playerOne.value} wins!`
                   setTimeout(() => {
                    gameOver.showModal()
                   }, 1000);
                } else if ((boxOne.textContent == 'O' && 
                            boxTwo.textContent == 'O' &&
                            boxThree.textContent == 'O')
                            ||
                            (boxFour.textContent == 'O' &&
                            boxFive.textContent == 'O' &&
                            boxSix.textContent == 'O') 
                            ||
                            (boxSeven.textContent == 'O' &&
                            boxEight.textContent == 'O' &&
                            boxNine.textContent == 'O')
                            ||
                            (boxOne.textContent == 'O' &&
                            boxFive.textContent == 'O' &&
                            boxNine.textContent == 'O')
                            ||
                            (boxThree.textContent == 'O' &&
                            boxFive.textContent == 'O' &&
                            boxSeven.textContent == 'O')
                            ||
                            (boxOne.textContent == 'O' &&
                            boxFour.textContent == 'O' &&
                            boxSeven.textContent == 'O')
                            ||
                            (boxTwo.textContent == 'O' &&
                            boxFive.textContent == 'O' &&
                            boxEight.textContent == 'O')
                            ||
                            (boxThree.textContent == 'O' &&
                            boxSix.textContent == 'O' &&
                            boxNine.textContent == 'O')) {
                    winLossDraw.textContent = `${playerTwo.value} wins!`
                    setTimeout(() => {
                        gameOver.showModal()
                    }, 1000);
                }
            }
         }
    }

    let display = {
        clickBox : function () {
            box.forEach(element => element.addEventListener('click', () => {
                if (gameFlow.roundCount % 2 == 0) {
                    element.textContent = `${gameFlow.player2.playerMarker}`
                    element.setAttribute('style','color: #0000ff;')
                    currentName.textContent = `${playerOne.value}`
                } else {
                    element.textContent = `${gameFlow.player1.playerMarker}`
                    element.setAttribute('style','color: #ffa500;')
                    currentName.textContent = `${playerTwo.value}`
                }

                
                ++gameFlow.roundCount

                if (element.textContent == 'X') {
                    element.setAttribute('style','pointer-events: none; color: #ffa500;')
                }
                if (element.textContent == 'O') {
                    element.setAttribute('style','pointer-events: none; color: #0000ff;')
                }

                gameFlow.game()
            }))
        }
    }
    
    display.clickBox()

    pause.addEventListener('click', () => {
        menu.showModal()
    })

    resume.addEventListener('click', () => {
        menu.close()
    })

    restart.forEach(element => element.addEventListener('click', () => {
        box.forEach(element => element.textContent = '')
        gameFlow.roundCount = 1;
        currentName.textContent = `${playerOne.value}`
        if (gameOver) {
            gameOver.close()
            box.forEach(element => element.setAttribute('style','background-color: none;'))
        }
            menu.close()
    }))

    submit.addEventListener('click', (event) => {
        event.preventDefault()
        if (gameFlow.roundCount == 1) {
            currentName.textContent = `${playerOne.value}`
        }
        bodyName.setAttribute('style','display: block;')
        playersForm.close()
    })

    charMenu.forEach(element => element.addEventListener('click', ()=> {
        location.reload()
    }))

    return{gameFlow,display}
})()