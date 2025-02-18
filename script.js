
    let playerScore = 0;
    let computerScore = 0;                                              // initial scores

    let choices = document.querySelectorAll('.choice');                 // get all the choices
    choices.forEach(choice => {                                         // loop through the choices to check which one is clicked
        choice.addEventListener('click', () => {                        // add event listener click to each choice
            const playerChoice = choice.getAttribute('id');             // get the choice id
            // console.log(playerChoice);
            playGame(playerChoice);
        })
    });

    const playGame = (playerChoice) => {                                   // this function get the player choice
        console.log("this is player choice " , playerChoice);
        const computerChoice = computerChoiceFunc();
        console.log("this is computer choice " , computerChoice);
        // decideWin(playerChoice, computerChoice);
    }

    const computerChoiceFunc = () => {                       
        const options = ['rock', 'paper', 'scissor'];                   
        const randIdx = Math.floor(Math.random() * 3);                
        return options[randIdx];
    }


   