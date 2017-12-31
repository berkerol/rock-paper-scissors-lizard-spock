let totalWon = 0;
let totalTie = 0;
let totalLost = 0;

function fight (user, range) {
  let cmp = Math.floor(Math.random() * range);
  let text;
  switch (cmp) {
    case 0:
      text = 'Computer chose Rock.';
      break;
    case 1:
      text = 'Computer chose Paper.';
      break;
    case 2:
      text = 'Computer chose Scissors.';
      break;
    case 3:
      text = 'Computer chose Lizard.';
      break;
    default:
      text = 'Computer chose Spock.';
  }
  let won = '<br>Congratulations, you won!';
  let lost = '<br>What a shame, you lost!';
  let className = 'alert ';
  text += '<br>';
  if (user === 2 && cmp === 1) {
    text += 'Scissors cuts Paper.' + won;
    className += 'alert-success';
    totalWon++;
  } else if (user === 1 && cmp === 0) {
    text += 'Paper covers Rock.' + won;
    className += 'alert-success';
    totalWon++;
  } else if (user === 0 && cmp === 3) {
    text += 'Rock crushes Lizard.' + won;
    className += 'alert-success';
    totalWon++;
  } else if (user === 3 && cmp === 4) {
    text += 'Lizard poisons Spock.' + won;
    className += 'alert-success';
    totalWon++;
  } else if (user === 4 && cmp === 2) {
    text += 'Spock smashes Scissors.' + won;
    className += 'alert-success';
    totalWon++;
  } else if (user === 2 && cmp === 3) {
    text += 'Scissors decapitates Lizard.' + won;
    className += 'alert-success';
    totalWon++;
  } else if (user === 3 && cmp === 1) {
    text += 'Lizard eats Paper.' + won;
    className += 'alert-success';
    totalWon++;
  } else if (user === 1 && cmp === 4) {
    text += 'Paper disproves Spock.' + won;
    className += 'alert-success';
    totalWon++;
  } else if (user === 4 && cmp === 0) {
    text += 'Spock vaporizes Rock.' + won;
    className += 'alert-success';
    totalWon++;
  } else if (user === 0 && cmp === 2) {
    text += 'Rock crushes Scissors.' + won;
    className += 'alert-success';
    totalWon++;
  } else if (user === 2 && cmp === 0) {
    text += 'Rock crushes Scissors.' + lost;
    className += 'alert-danger';
    totalLost++;
  } else if (user === 0 && cmp === 4) {
    text += 'Spock vaporizes Rock.' + lost;
    className += 'alert-danger';
    totalLost++;
  } else if (user === 4 && cmp === 1) {
    text += 'Paper disproves Spock.' + lost;
    className += 'alert-danger';
    totalLost++;
  } else if (user === 1 && cmp === 3) {
    text += 'Lizard eats Paper.' + lost;
    className += 'alert-danger';
    totalLost++;
  } else if (user === 3 && cmp === 2) {
    text += 'Scissors decapitates Lizard.' + lost;
    className += 'alert-danger';
    totalLost++;
  } else if (user === 2 && cmp === 4) {
    text += 'Spock smashes Scissors.' + lost;
    className += 'alert-danger';
    totalLost++;
  } else if (user === 4 && cmp === 3) {
    text += 'Lizard poisons Spock.' + lost;
    className += 'alert-danger';
    totalLost++;
  } else if (user === 3 && cmp === 0) {
    text += 'Rock crushes Lizard.' + lost;
    className += 'alert-danger';
    totalLost++;
  } else if (user === 0 && cmp === 1) {
    text += 'Paper covers Rock.' + lost;
    className += 'alert-danger';
    totalLost++;
  } else if (user === 1 && cmp === 2) {
    text += 'Scissors cuts Paper.' + lost;
    className += 'alert-danger';
    totalLost++;
  } else {
    text += 'There is a tie.';
    className += 'alert-warning';
    totalTie++;
  }
  text += '<br>Won: ' + totalWon + '. Tie: ' + totalTie + '. Lost: ' + totalLost + '.';
  let child = document.createElement('div');
  child.className = className + ' alert-dismissible';
  child.innerHTML = '<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>' + text;
  let parent = document.getElementById('text');
  parent.insertBefore(child, parent.firstChild);
}
