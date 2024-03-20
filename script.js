function Players(name,marker) {
    let playerName = name
    let playerMarker = marker

    return {playerName,playerMarker}
}

(function () {
    let gameBoard = {
        firstRow:  [,,],
        secondRow: [,,],
        thirdRow:  [,,]
    }
    
    let gameFlow = {
         player1 : Players('Joy','X'),
         player2 :  Players('Alice','O'),
         game : function (row,position,marker) {
           if (row == 'firstRow') {
            gameBoard.firstRow.splice(position,1,marker)  
           } else if (row == 'secondRow') {
            gameBoard.secondRow.splice(position,1,marker)  
           } else {
            gameBoard.thirdRow.splice(position,1,marker)
           }
         }
    }


    gameFlow.game('firstRow',0,'X')
    gameFlow.game('secondRow',0,'X')
    gameFlow.game('firstRow',1,'X')
    gameFlow.game('thirdRow',0,'X')
    gameFlow.game('firstRow',2,'O')
    gameFlow.game('secondRow',2,'X')
    gameFlow.game('secondRow',1,'O')
    gameFlow.game('thirdRow',2,'O')
    gameFlow.game('thirdRow',1,'O')
    console.log(gameBoard)

    return{gameBoard,gameFlow}
})()