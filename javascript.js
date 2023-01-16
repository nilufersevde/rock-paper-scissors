

    //making computer choose a random warrior out of rock,paper,scissors 
    function getComputerChoice() {
      let items=["rock","paper","scissors"];
      const randomitem = items[Math.floor(Math.random() * items.length)];
      return randomitem;
    }
    


    //plays a single round of rock,paper,scissors, keeps the score of player and computer, returns a string implying if the player won or not 
    
    let playerScore=0;
    let compScore=0;


    function playRound() {
        
        const computerSelection=getComputerChoice();
    
        if (playerSelection === computerSelection) {
            return("it is a tie!");
            
        }

        else if (playerSelection=="rock" && computerSelection=="scissors") {
            playerScore+=1;
            return "rock beats scissors you win!";
            
        }

        else if (playerSelection=="rock" && computerSelection=="paper") {
            compScore+=1;
            return "paper beats rock you lose!";
            
        }

        else if (playerSelection=="paper" && computerSelection=="scissors") {
            compScore+=1;
            return "scissors beats paper you lose!";
            
        }

        else if ( playerSelection=="paper" && computerSelection=="rock" ) {
            playerScore+=1;
            return "paper beats rock you win!";
            
        }

        else if ( playerSelection=="scissors" &&computerSelection=="paper") {
            playerScore+=1;
            return "scissors beats paper you win!";   
        }

        else if (playerSelection=="scissors" &&computerSelection=="rock") {
            compScore+=1;
            return "rock beats scissors you lose!";    
        }
        

        else {
            return "you should choose from rock,paper,scissors";
        }

        
   
    }
   
    let rock=document.querySelector("#rock");
    let paper=document.querySelector("#paper");
    let scissors=document.querySelector("#scissors");

    rock.addEventListener("click", event => {
        playerSelection="rock";
        let winner=playRound();
        document.getElementById("winner").innerHTML = winner;

        if (playerScore==5) {
            document.getElementById("winner").innerHTML ="";
            playerScore=0;
            compScore=0;
            document.getElementById("result").innerHTML="YOU WON THE GAME!";
            
            
        }
        else if (compScore==5)  {
            document.getElementById("winner").innerHTML =""
            playerScore=0;
            compScore=0;
            document.getElementById("result").innerHTML="YOU LOST THE GAME!";
          
        }

        else {
            document.getElementById("result").innerHTML="";
        }
        document.getElementById("player-score").innerHTML = `Player Score: ${playerScore}`;
        document.getElementById("comp-score").innerHTML = `Computer Score: ${compScore}`;
        
    });


    paper.addEventListener("click", event => {
        playerSelection="paper";
        let winner=playRound();
        document.getElementById("winner").innerHTML = winner;
        if (playerScore==5) {
            document.getElementById("winner").innerHTML =""
            playerScore=0;
            compScore=0;
            document.getElementById("result").innerHTML="YOU WON THE GAME!";
           
        }
        else if (compScore==5)  {
            document.getElementById("winner").innerHTML =""
            playerScore=0;
            compScore=0;
            document.getElementById("result").innerHTML="YOU LOST THE GAME!";
            
        }

        else {
            document.getElementById("result").innerHTML="";
        }

        document.getElementById("player-score").innerHTML = `Player Score: ${playerScore}`;
        document.getElementById("comp-score").innerHTML = `Computer Score: ${compScore}`;
        
    });


    scissors.addEventListener("click", event => {
        playerSelection="scissors";
        let winner=playRound();
        document.getElementById("winner").innerHTML = winner;
        if (playerScore==5) {
            document.getElementById("winner").innerHTML =""
            playerScore=0;
            compScore=0;
            document.getElementById("result").innerHTML="YOU WON THE GAME!";
            
        }
        else if (compScore==5)  {
            document.getElementById("winner").innerHTML =""
            playerScore=0;
            compScore=0;
            document.getElementById("result").innerHTML="YOU LOST THE GAME!";
            
        }

        else {
            document.getElementById("result").innerHTML="";
        }
        
        document.getElementById("player-score").innerHTML = `Player Score: ${playerScore}`;
        document.getElementById("comp-score").innerHTML = `Computer Score: ${compScore}`;
        
    });

