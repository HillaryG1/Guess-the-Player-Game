document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitGuess');
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const playerImage = document.getElementById('playerImage');
    const restartButton = document.getElementById('restartButton'); 
    const scoreDisplay = document.getElementById('score'); // New score display element
    
    let score = 0; // New score variable
  
    // Define players with their images and correct answers
    const players = [
        {
            name: 'Odell Beckham Jr',
            silhouetteImage: 'Images copy/obj silhouette.png',
            realImage: 'https://grantland.com/wp-content/uploads/2015/08/odell-beckham-jr-the-catch.png',
            correctAnswers: ['odell beckham jr', 'obj', 'beckham', 'odell', 'odell beckham']
        },
        {
            name: 'Michael Jordan',
            silhouetteImage: 'Images copy/mj silh.png', 
            realImage: 'https://www.transparentpng.com/thumb/michael-jordan/michael-jordan-icon-png-1.png',
            correctAnswers: ['michael jordan', 'mj', 'michael', 'jordan', '23', 'michael jeffrey jordan']
        },
        {
            name: 'Bruce Lee',
            silhouetteImage: 'Images copy/lee silh.png',
            realImage: 'https://pngimg.com/uploads/bruce_lee/bruce_lee_PNG43.png',
            correctAnswers: ['bruce lee', 'bruce', 'lee']
        },
        {
            name: 'Tom Brady',
            silhouetteImage: 'Images copy/brady silh.png', 
            realImage: 'https://pngimg.com/uploads/american_football/american_football_PNG128.png',
            correctAnswers: ['tom brady', 'tb12', '12', 'brady', 'tom']
        }
        // Add more players here with their silhouette images, real images, and correct answers
    ];
  
    let currentPlayerIndex = 0;
  
    function updateUIWithSilhouette() {
        playerImage.src = players[currentPlayerIndex].silhouetteImage;
        feedback.textContent = '';
        guessInput.value = '';
    }
  
    function restartGame() {
        currentPlayerIndex = 0;
        score = 0;
        updateUIWithSilhouette();
        scoreDisplay.textContent = `Score: ${score}`;
        restartButton.style.display = 'none'; // Hide the restart button
    }
  
    function guess() {
        const userGuess = guessInput.value.trim().toLowerCase();
        if (userGuess === '') {
            alert('Please enter your guess.');
            return;
        }
  
        const currentPlayer = players[currentPlayerIndex];
        if (currentPlayer.correctAnswers.includes(userGuess)) {
            feedback.textContent = `${currentPlayer.name} is correct!`;
            playerImage.src = currentPlayer.realImage;
            currentPlayerIndex++;
            score += 10;
            scoreDisplay.textContent = `Score: ${score}`;
            if (currentPlayerIndex < players.length) {
                setTimeout(updateUIWithSilhouette, 2300); ///// speed of the images transtioning 
            } else {
                feedback.textContent = 'You\'ve guessed all players!';
                restartButton.style.display = 'block'; // Show the restart button at the end of the game
            }
        } else {
            feedback.textContent = 'That\'s not correct. Try again.';
            score -= 5;
            if (score < 0) {
                score = 0;
            }
            scoreDisplay.textContent = `Score: ${score}`;
        }
    }
  
    submitButton.addEventListener('click', guess);
    guessInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            guess();
        }
    });
  
    restartButton.addEventListener('click', restartGame);
  });
  