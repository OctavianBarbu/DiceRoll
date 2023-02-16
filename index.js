
function rollDicee() {
    playerOneDiceNumber = Math.floor(Math.random()*6 +1)
    playerTwoDiceNumber = Math.floor(Math.random()*6 +1)

    var playerOneDiceImage = document.querySelector(".img1")
    var playerTwoDiceImage = document.querySelector(".img2")

    playerOneDiceImage.setAttribute("src", `images/dice${playerOneDiceNumber}.png`)
    playerTwoDiceImage.setAttribute("src", `images/dice${playerTwoDiceNumber}.png`)

    if (playerOneDiceNumber > playerTwoDiceNumber){
        var winner = "Player 1"
    } else if (playerTwoDiceNumber > playerOneDiceNumber){
        var winner = "Player 2"
    }

    var heading = document.querySelector("h1")

    if (winner){
        heading.textContent = winner + ' WINS!!!'
    } else {
        heading.textContent = 'It\'s a DRAW!'

    }
}


