// Game State
let computerScore = 0;
let yourScore = 0;

// DOM Elements
const gameScreen = document.getElementById('gameScreen');
const resultScreen = document.getElementById('resultScreen');
const winnerScreen = document.getElementById('winnerScreen');
const rulesPopup = document.getElementById('rulesPopup');

const computerScoreEl = document.getElementById('computerScore');
const yourScoreEl = document.getElementById('yourScore');
const computerScoreResultEl = document.getElementById('computerScoreResult');
const yourScoreResultEl = document.getElementById('yourScoreResult');

const choiceBtns = document.querySelectorAll('.choice-btn');
const rulesBtn = document.getElementById('rulesBtn');
const rulesBtnResult = document.getElementById('rulesBtnResult');
const rulesBtnWinner = document.getElementById('rulesBtnWinner');
const closeRulesBtn = document.getElementById('closeRules');

const playAgainBtn = document.getElementById('playAgainBtn');
const playAgainWinnerBtn = document.getElementById('playAgainWinner');
const nextBtn = document.getElementById('nextBtn');

const playerChoiceEl = document.getElementById('playerChoice');
const pcChoiceEl = document.getElementById('pcChoice');
const resultTextEl = document.getElementById('resultText');
const resultSubtextEl = document.getElementById('resultSubtext');

// Initialize game - Load scores from localStorage
function initGame() {
    const savedComputerScore = localStorage.getItem('computerScore');
    const savedYourScore = localStorage.getItem('yourScore');
    
    if (savedComputerScore !== null) {
        computerScore = parseInt(savedComputerScore);
    }
    if (savedYourScore !== null) {
        yourScore = parseInt(savedYourScore);
    }
    
    updateScoreDisplay();
}

// Update score display
function updateScoreDisplay() {
    computerScoreEl.textContent = computerScore;
    yourScoreEl.textContent = yourScore;
    computerScoreResultEl.textContent = computerScore;
    yourScoreResultEl.textContent = yourScore;
    
    // Save to localStorage
    localStorage.setItem('computerScore', computerScore);
    localStorage.setItem('yourScore', yourScore);
}

// Get computer's random choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Determine winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'player';
    }
    
    return 'computer';
}

// Get choice icon path
function getChoiceIcon(choice) {
    const icons = {
        'rock': 'assets/rock.svg',
        'paper': 'assets/paper.svg',
        'scissors': 'assets/scissors.svg'
    };
    return icons[choice];
}

// Get choice class
function getChoiceClass(choice) {
    return choice + '-choice';
}

// Display result
function displayResult(playerChoice, computerChoice, winner) {
    // Update player choice display
    const playerImg = playerChoiceEl.querySelector('.result-icon');
    playerImg.src = getChoiceIcon(playerChoice);
    playerImg.alt = playerChoice;
    playerChoiceEl.className = 'choice-display ' + getChoiceClass(playerChoice);
    
    // Update computer choice display
    const pcImg = pcChoiceEl.querySelector('.result-icon');
    pcImg.src = getChoiceIcon(computerChoice);
    pcImg.alt = computerChoice;
    pcChoiceEl.className = 'choice-display ' + getChoiceClass(computerChoice);
    
    // Update result message
    if (winner === 'player') {
        yourScore++;
        resultTextEl.textContent = 'YOU WIN';
        resultSubtextEl.textContent = 'AGAINST PC';
        playerChoiceEl.classList.add('winner-glow');
        pcChoiceEl.classList.remove('winner-glow');
        nextBtn.classList.remove('hidden');
    } else if (winner === 'computer') {
        computerScore++;
        resultTextEl.textContent = 'YOU LOST';
        resultSubtextEl.textContent = 'AGAINST PC';
        pcChoiceEl.classList.add('winner-glow');
        playerChoiceEl.classList.remove('winner-glow');
        nextBtn.classList.add('hidden');
    } else {
        resultTextEl.textContent = 'TIE UP';
        resultSubtextEl.textContent = '';
        playerChoiceEl.classList.remove('winner-glow');
        pcChoiceEl.classList.remove('winner-glow');
        nextBtn.classList.add('hidden');
    }
    
    // Update scores
    updateScoreDisplay();
    
    // Switch to result screen
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    // Hide rules popup on result screen
    rulesPopup.classList.add('hidden');
}

// Handle player choice
function handlePlayerChoice(choice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(choice, computerChoice);
    displayResult(choice, computerChoice, winner);
}

// Play again
function playAgain() {
    resultScreen.classList.add('hidden');
    winnerScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    // Show rules popup when going back to game screen
    if (!rulesPopup.classList.contains('hidden')) {
        rulesPopup.classList.remove('hidden');
    }
}

// Show winner screen
function showWinnerScreen() {
    resultScreen.classList.add('hidden');
    winnerScreen.classList.remove('hidden');
    // Hide rules popup on winner screen
    rulesPopup.classList.add('hidden');
}

// Show/Hide rules
function showRules() {
    rulesPopup.classList.remove('hidden');
}

function hideRules() {
    rulesPopup.classList.add('hidden');
}

// Event Listeners
choiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const choice = btn.getAttribute('data-choice');
        handlePlayerChoice(choice);
    });
});

rulesBtn.addEventListener('click', showRules);
if (rulesBtnResult) rulesBtnResult.addEventListener('click', showRules);
if (rulesBtnWinner) rulesBtnWinner.addEventListener('click', showRules);
closeRulesBtn.addEventListener('click', hideRules);

if (playAgainBtn) playAgainBtn.addEventListener('click', playAgain);
if (playAgainWinnerBtn) playAgainWinnerBtn.addEventListener('click', playAgain);

if (nextBtn) nextBtn.addEventListener('click', showWinnerScreen);

// Close rules popup when clicking outside
rulesPopup.addEventListener('click', (e) => {
    if (e.target === rulesPopup) {
        hideRules();
    }
});

// Initialize game on page load
initGame();
