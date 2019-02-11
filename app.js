// VARIABLES
const inputDesc = document.querySelector('#inputDesc')
let winningScore = 0 

// GAME LOGIC
document.querySelector('.btn-roll').addEventListener('click', (e) => {
    if (winningScore !== 0 && typeof parseInt(winningScore) === 'number' && Number.isNaN(parseInt(winningScore)) !== true ) { // Checking if score is not equal to 0
        const dice = rollDice()
        console.log(dice)
        
        const secondLastEl = dice[dice.length - 2] // getting second last element from array
        const lastEl = dice[dice.length - 1] // getting last element from array
       
            if (secondLastEl === 6 && lastEl === 6) {
                // setting player general score to 0
                document.getElementById(`score-${activePlayer}`).textContent = '0'
                
                // clear array for next player
                dice.splice(0, dice.length) 
                netxPlayer()
            }
            
        inputDesc.textContent ='Winning score: '
        inputDesc.style.color = '#000'
    } else {
        inputDesc.textContent = 'Provide a winning score !'
        inputDesc.style.color = '#EB4D4D'
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
            document.querySelector('.dice_2').style.display = 'none'
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

