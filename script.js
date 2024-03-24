function Players(name,marker) {
    let playerName = name
    let playerMarker = marker

    return {playerName,playerMarker}
}

(function () {
    let box = document.querySelectorAll('.box')
    let gameOver = document.querySelector('dialog')

    let gameBoard = {
        firstRow:  [,,],
        secondRow: [,,],
        thirdRow:  [,,]
    }
    
    let gameFlow = {
         player1 : Players('Joy','X'),
         player2 :  Players('Alice','O'),
         roundCount : 1,
         game : function () {
            if (this.roundCount > 9) {
                gameOver.showModal()
            }
         }
    }

    let display = {
        clickBox : function () {
            box.forEach(element => element.addEventListener('click', () => {
                if (gameFlow.roundCount % 2 == 0) {
                    element.textContent = `${gameFlow.player2.playerMarker}`
                    element.setAttribute('style','color: #0000ff;')
                } else {
                    element.textContent = `${gameFlow.player1.playerMarker}`
                    element.setAttribute('style','color: #ffa500;')
                }

                ++gameFlow.roundCount
                gameFlow.game()
            }))
        }
    }
    
    display.clickBox()
    return{gameBoard,gameFlow,display}
})()