// FUNCTIONS DECLARATIONS

const netxPlayer = () => {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    // toggle add class if it is not there and then if it is there it is going to remove thtah class

    document.querySelector('.dice').style.display = 'none'
}

const initGame = () => {
    scores = [0, 0]
    activePlayer = 0
    roundScore = 0
    gamePlaying = true

    document.querySelector('.dice').style.display = 'none'

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
}

initGame()

const rollDice = () => {
    let dice
    if (gamePlaying) {
        //  Get random number from 1 to 6 for the dice
        dice = Math.floor(Math.random() * 6) + 1
        //  Display results in the browser
        const diceDOM = document.querySelector('.dice') 
        diceDOM.style.display = 'block' 
        diceDOM.src = 'dice-' + dice + '.png'

         if (dice !== 1) { //  Add score
            roundScore += dice //update round score
            document.querySelector('#current-' + activePlayer).textContent = roundScore // display round score
        } else { // Next player
            netxPlayer()
        }
    }
    return dice
}