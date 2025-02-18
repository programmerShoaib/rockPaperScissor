
    let playerScore = 1;
    let computerScore = 1;                                              // initial scores

    let choices = document.querySelectorAll('.choice');                 // get all the choices
    let resultDisplay = document.querySelector('#msg');                 // get the result display
    choices.forEach(choice => {                                         // loop through the choices to check which one is clicked
        choice.addEventListener('click', () => {                        // add event listener click to each choice
            const playerChoice = choice.getAttribute('id');             // get the choice id
            // console.log(playerChoice);
            playGame(playerChoice);
        })
    });

    const playGame = (playerChoice) => {                                // this function get the player choice
        // console.log("this is player choice " , playerChoice);
        const computerChoice = computerChoiceFunc();
        // console.log("this is computer choice " , computerChoice);
        decideWin(playerChoice, computerChoice);
    }

    const computerChoiceFunc = () => {                                  // this function get the computer choice             
        const options = ['rock', 'paper', 'scissor'];                   
        const randIdx = Math.floor(Math.random() * 3);                
        return options[randIdx];
    }

    const decideWin = (playerChoice, computerChoice) => {               // this function decide the winner
        let playerWin = true;                                           // player value is false initially
        if (playerChoice === computerChoice) {                          // if the player choice is equal to the computer choice
            // console.log("it's a tie");
            gameDraw(playerChoice, computerChoice);
        } else {
            if (playerChoice === 'rock') {                              // if the player choice is rock
                playerWin = computerChoice === 'scissor' ? true : false;
                // console.log(playerWin);                                
            } else if (playerChoice === 'paper') {                      // if the player choice is paper
                playerWin = computerChoice === 'rock' ? true : false;
                // console.log(playerWin);
            } else if (playerChoice === 'scissor') {                    // if the player choice is scissor
                playerWin = computerChoice === 'paper' ? true : false;
                // console.log(playerWin);
            }else {
                console.log("something went wrong");
            }
            showWinner(playerWin, playerChoice, computerChoice);
        }
    }

    const showWinner = (playerWin, playerChoice, computerChoice) => {                                       // this function show the winner
        if (playerWin) {                                                                                    // if the player win
            document.getElementById('playerScore').textContent = playerScore ++;                            // player score increment
            resultDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}`;                 // show the result
            document.getElementById(playerChoice).classList.add('green-glow');                              // add the green glow to the player choice
            setTimeout(() => document.getElementById(playerChoice).classList.remove('green-glow'), 400);    // remove the green glow after 500ms
        } else {
            document.getElementById('compScore').textContent = computerScore ++;                            // computer score increment
            resultDisplay.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;                // show the result
            document.getElementById(computerChoice).classList.add('red-glow');                              // add the red glow to the computer choice
            setTimeout(() => document.getElementById(computerChoice).classList.remove('red-glow'), 400);    // remove the red glow after 500ms
        }
    }

    const gameDraw = (playerChoice, computerChoice) => {                                                  // this function show the draw condition 
        resultDisplay.textContent = "It's a draw!";
        document.getElementById(playerChoice).classList.add('gray-glow');
        setTimeout(() => {
            document.getElementById(playerChoice).classList.remove('gray-glow');
        }, 1000);
    }