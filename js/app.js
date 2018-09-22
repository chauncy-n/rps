// constants 
const COUNTDOWN = 3;

//  apps state (variables)
var playerWeapon;
var computerWeapon;

var scores;
var weapons; 
var stage;

var beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');

//  cached element references
var weaponBox = document.getElementById('weapons');

//var scoresBox = document.getElementById('scores');
var humanScore = document.getElementById("h-score");
var computerScore = document.getElementById("c-score");
var ties = document.getElementById("ties");
var matchHumanScore = document.getElementById('h-mscore')
var matchComputerScore = document.getElementById('c-mscore')

var resultsBox = document.getElementById("results");
var resultText = document.querySelector('#results > p');
var resetButton = document.querySelector('footer > button');

//   event listeners
weaponBox.addEventListener('click', weaponClick);
resetButton.addEventListener('click', initialize);
// functions
function resetRoundScores(){
    scores.round.wins = 0;
    scores.round.wins = 0;
    scores.round.draws = 0;
}

function doCountdown(winner){
    var countRemaining = COUNTDOWN;
    //beepAudio.play();
    resultText.textContent = countRemaining;
    var counter = setInterval(function(){
        countRemaining--;
        if (countRemaining){
            resultText.textContent = countRemaining;
            //beepAudio.play();
        }else {
            clearInterval(counter);
            if (winner === 't'){
                scores.round.draws++;
                resultText.textContent = "tie"
            }else if (winner === 'w'){
                scores.round.wins++;
                resultText.textContent = 'win'
            }else{
                scores.round.losses++
                resultText.textContent = 'loss'
            }
            if(scores.round.wins === 2) {
                scores.match.wins++;
                resetRoundScores();
                
            }else if (scores.round.losses === 2){
                scores.match.losses++
                scores.round.wins = 0;
            }
        }
        stage = 'results';
        reDraw();
        setTimeout(function() {
            stage = 'select';
            reDraw();
        }, 3000);
    }, 1000);
    
}

function getWinner(){
    if( playerWeapon === computerWeapon){
        return 't';
    }else{
        if(weapons[playerWeapon] === computerWeapon) {
            return 'w';

        }else {
            return 'l';
        }
    }
    
}

function weaponClick(e){
    if(e.target !== weaponBox){
        playerWeapon =  e.target.alt;
        console.log("playerWeapon", playerWeapon);
        // randomly choose AI weapon
        var choices = Object.keys(weapons);
        var rand = Math.floor(Math.random() * 3);
        computerWeapon = choices[rand];
        console.log(computerWeapon);
        var winner = getWinner();
        stage = 'countdown';
        reDraw();
        doCountdown(winner);  
    }  
}
function reDraw(){
    humanScore.textContent = scores.round.wins;
    computerScore.textContent = scores.round.losses;
    ties.textContent = scores.round.draws;

    matchHumanScore.textContent = scores.match.wins;
    matchComputerScore.textContent = scores.match.losses;

    switch (stage){
        case 'select':
        console.log("redrawing for select stage");
            //do stuff if we are in the select stage
            // hide results
            resultsBox.style.display = 'none';
            // display weapons
            weaponBox.style.diplay = 'block';
            break;
        case 'countdown':
        case 'results':
        console.log("redrawing for result stage");
            //do stuff if we are counting down
            //hide weapons
            weaponBox.style.diplay = 'none';
            //show result box
            resultsBox.style.display = 'block';
            break;
    }
}

function initialize(){
    scores = {
        round: {
            wins: 0,
            draws: 0,
            losses: 0
        },
        match: {
            wins: 0,
            losses: 0
        }
    }
    
    weapons = {
        r: 's',
        p: 'r',
        s: 'p'
    }
    playerWeapon = 'r';
    computerWeapon = 'r';

    stage = "select";
    reDraw();
}

initialize();
