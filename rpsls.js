window.create = function (n) {
  const photos = document.getElementById('photos');
  const list = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  for (let i = 0; i < n; i++) {
    const img = document.createElement('img');
    img.className = 'img-fluid rounded mx-auto d-block';
    img.src = `images/${list[i]}.jpg`;
    img.setAttribute('onclick', `fight(${i}, ${n})`);
    const div = document.createElement('div');
    div.className = 'col-6 col-md-4 mt-4';
    div.appendChild(img);
    photos.appendChild(div);
  }
};

let totalWon = 0;
let totalTie = 0;
let totalLost = 0;

window.fight = function (user, range) {
  const cmp = Math.floor(Math.random() * range);
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
  const won = ', you won!';
  const lost = ', you lost!';
  const wonAlert = 'alert-success';
  const lostAlert = 'alert-danger';
  let className = 'alert ';
  text += '.<br>';
  if (user === 2 && cmp === 1) {
    text += 'Scissors cuts Paper' + won;
    className += wonAlert;
    totalWon++;
  } else if (user === 1 && cmp === 0) {
    text += 'Paper covers Rock' + won;
    className += wonAlert;
    totalWon++;
  } else if (user === 0 && cmp === 3) {
    text += 'Rock crushes Lizard' + won;
    className += wonAlert;
    totalWon++;
  } else if (user === 3 && cmp === 4) {
    text += 'Lizard poisons Spock' + won;
    className += wonAlert;
    totalWon++;
  } else if (user === 4 && cmp === 2) {
    text += 'Spock smashes Scissors' + won;
    className += wonAlert;
    totalWon++;
  } else if (user === 2 && cmp === 3) {
    text += 'Scissors decapitates Lizard' + won;
    className += wonAlert;
    totalWon++;
  } else if (user === 3 && cmp === 1) {
    text += 'Lizard eats Paper' + won;
    className += wonAlert;
    totalWon++;
  } else if (user === 1 && cmp === 4) {
    text += 'Paper disproves Spock' + won;
    className += wonAlert;
    totalWon++;
  } else if (user === 4 && cmp === 0) {
    text += 'Spock vaporizes Rock' + won;
    className += wonAlert;
    totalWon++;
  } else if (user === 0 && cmp === 2) {
    text += 'Rock crushes Scissors' + won;
    className += wonAlert;
    totalWon++;
  } else if (user === 2 && cmp === 0) {
    text += 'Rock crushes Scissors' + lost;
    className += lostAlert;
    totalLost++;
  } else if (user === 0 && cmp === 4) {
    text += 'Spock vaporizes Rock' + lost;
    className += lostAlert;
    totalLost++;
  } else if (user === 4 && cmp === 1) {
    text += 'Paper disproves Spock' + lost;
    className += lostAlert;
    totalLost++;
  } else if (user === 1 && cmp === 3) {
    text += 'Lizard eats Paper' + lost;
    className += lostAlert;
    totalLost++;
  } else if (user === 3 && cmp === 2) {
    text += 'Scissors decapitates Lizard' + lost;
    className += lostAlert;
    totalLost++;
  } else if (user === 2 && cmp === 4) {
    text += 'Spock smashes Scissors' + lost;
    className += lostAlert;
    totalLost++;
  } else if (user === 4 && cmp === 3) {
    text += 'Lizard poisons Spock' + lost;
    className += lostAlert;
    totalLost++;
  } else if (user === 3 && cmp === 0) {
    text += 'Rock crushes Lizard' + lost;
    className += lostAlert;
    totalLost++;
  } else if (user === 0 && cmp === 1) {
    text += 'Paper covers Rock' + lost;
    className += lostAlert;
    totalLost++;
  } else if (user === 1 && cmp === 2) {
    text += 'Scissors cuts Paper' + lost;
    className += lostAlert;
    totalLost++;
  } else {
    text += 'There is a tie.';
    className += 'alert-warning';
    totalTie++;
  }
  document.getElementById('statistics').innerHTML = `Won: ${totalWon} Tie: ${totalTie} Lost: ${totalLost}`;
  const child = document.createElement('div');
  child.className = className + ' alert-dismissible fade show';
  child.innerHTML = '<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>' + text;
  const parent = document.getElementById('text');
  parent.insertBefore(child, parent.firstChild);
};
