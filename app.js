// GAME LOGIC
let numbers = []
let winningScore = 0

document.querySelector('.btn-roll').addEventListener('click', (e) => {
    const dice = rollDice()
    numbers.push(dice)

    const secondLastEl = numbers[numbers.length - 2]
    const lastEl = numbers[numbers.length - 1]
   
    if (secondLastEl === 6 && lastEl === 6) {
        // setting player general score to 0
        document.getElementById(`score-${activePlayer}`).textContent = '0'
        
        // clear array for next player
        numbers.splice(0, numbers.length) 
        netxPlayer()
    }
})

document.querySelector('.input__score').addEventListener('input' , e => {
    winningScore = e.target.value
})

document.querySelector('.btn-hold').addEventListener('click', (e) => {
    if(gamePlaying) {
        //  Add current score to global score
        scores[activePlayer] += roundScore
        //  Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    
        //Check if the player have won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            gamePlaying = false
        } else {
            //  Next player
            netxPlayer()
        }    
    }
}) 

document.querySelector('.btn-new').addEventListener('click', initGame)

