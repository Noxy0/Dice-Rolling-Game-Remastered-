function rollDices() {
    var dice1 = document.getElementById('dice1');
    var dice2 = document.getElementById('dice2');

    var dice3 = dice1.innerHTML = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    var dice4 = dice2.innerHTML = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        console.log('The dices rolled!');

    

    if ((dice3 + dice4 == 7) || (dice3 + dice4 == 11)) {
        document.getElementById('header').innerHTML = 'You Win!';
           console.log('Player win');
    }
    else {
        document.getElementById('header').innerHTML = 'You lose!';
            console.log('player lose');
    }
}