/* global write */
const wonText = ', you won!';
const lostText = ', you lost!';
const wonAlert = 'alert-success';
const lostAlert = 'alert-danger';
const names = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const photos = document.getElementById('photos');

if (!new URL(window.location.href).searchParams.has('lizard-spock')) {
  names.length = 3;
}
for (const i in names) {
  const img = document.createElement('img');
  img.className = 'img-fluid rounded mx-auto d-block';
  img.src = `images/${names[i]}.jpg`;
  img.setAttribute('onclick', `fight(${i})`);
  const div = document.createElement('div');
  div.className = 'col-6 col-md-4 mt-4';
  div.appendChild(img);
  photos.appendChild(div);
}

let totalWon = 0;
let totalTie = 0;
let totalLost = 0;

window.fight = function (user) {
  const cmp = Math.floor(Math.random() * names.length);
  let text = 'Computer chose ';
  switch (cmp) {
    case 0:
      text += 'Rock';
      break;
    case 1:
      text += 'Paper';
      break;
    case 2:
      text += 'Scissors';
      break;
    case 3:
      text += 'Lizard';
      break;
    default:
      text += 'Spock';
  }
  let className = 'alert ';
  text += '.<br>';
  if (user === 2 && cmp === 1) {
    text += 'Scissors cuts Paper' + wonText;
    className += wonAlert;
    totalWon++;
  } else if (user === 1 && cmp === 0) {
    text += 'Paper covers Rock' + wonText;
    className += wonAlert;
    totalWon++;
  } else if (user === 0 && cmp === 3) {
    text += 'Rock crushes Lizard' + wonText;
    className += wonAlert;
    totalWon++;
  } else if (user === 3 && cmp === 4) {
    text += 'Lizard poisons Spock' + wonText;
    className += wonAlert;
    totalWon++;
  } else if (user === 4 && cmp === 2) {
    text += 'Spock smashes Scissors' + wonText;
    className += wonAlert;
    totalWon++;
  } else if (user === 2 && cmp === 3) {
    text += 'Scissors decapitates Lizard' + wonText;
    className += wonAlert;
    totalWon++;
  } else if (user === 3 && cmp === 1) {
    text += 'Lizard eats Paper' + wonText;
    className += wonAlert;
    totalWon++;
  } else if (user === 1 && cmp === 4) {
    text += 'Paper disproves Spock' + wonText;
    className += wonAlert;
    totalWon++;
  } else if (user === 4 && cmp === 0) {
    text += 'Spock vaporizes Rock' + wonText;
    className += wonAlert;
    totalWon++;
  } else if (user === 0 && cmp === 2) {
    text += 'Rock crushes Scissors' + wonText;
    className += wonAlert;
    totalWon++;
  } else if (user === 2 && cmp === 0) {
    text += 'Rock crushes Scissors' + lostText;
    className += lostAlert;
    totalLost++;
  } else if (user === 0 && cmp === 4) {
    text += 'Spock vaporizes Rock' + lostText;
    className += lostAlert;
    totalLost++;
  } else if (user === 4 && cmp === 1) {
    text += 'Paper disproves Spock' + lostText;
    className += lostAlert;
    totalLost++;
  } else if (user === 1 && cmp === 3) {
    text += 'Lizard eats Paper' + lostText;
    className += lostAlert;
    totalLost++;
  } else if (user === 3 && cmp === 2) {
    text += 'Scissors decapitates Lizard' + lostText;
    className += lostAlert;
    totalLost++;
  } else if (user === 2 && cmp === 4) {
    text += 'Spock smashes Scissors' + lostText;
    className += lostAlert;
    totalLost++;
  } else if (user === 4 && cmp === 3) {
    text += 'Lizard poisons Spock' + lostText;
    className += lostAlert;
    totalLost++;
  } else if (user === 3 && cmp === 0) {
    text += 'Rock crushes Lizard' + lostText;
    className += lostAlert;
    totalLost++;
  } else if (user === 0 && cmp === 1) {
    text += 'Paper covers Rock' + lostText;
    className += lostAlert;
    totalLost++;
  } else if (user === 1 && cmp === 2) {
    text += 'Scissors cuts Paper' + lostText;
    className += lostAlert;
    totalLost++;
  } else {
    text += 'There is a tie.';
    className += 'alert-warning';
    totalTie++;
  }
  document.getElementById('statistics').innerHTML = `Won: ${totalWon} Tie: ${totalTie} Lost: ${totalLost}`;
  write(className, text);
};
