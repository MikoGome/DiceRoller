const robot = require('robotjs');
const numbers = require('./numbers.js');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  const desiredStats = {
    INT: 10
  }
  
  setTimeout(() => {
    rollDice(desiredStats, 'min');
  }, 5000);

}

function rollDice(desiredStats, mode) {
  if(checkStats(desiredStats, mode)) {
    robot.moveMouse(833, 484);
    robot.mouseClick();
    console.log('character created');
    process.exit();
    return;
  }

  if(
    robot.getPixelColor(1304, 662) === 'ee1111' && 
    robot.getPixelColor(672, 172) === 'ffcc33' && 
    robot.getPixelColor(676, 131) === '555588'
  ) {
    robot.moveMouse(916,400);
    robot.mouseClick();
    robot.moveMouseSmooth(getRandomCoords(910,920), getRandomCoords(395,405));
  }
  setTimeout(() => {
    rollDice(desiredStats, mode)
  }, 1000);
}

function checkStats(desiredStats, mode) {
  const output = {
    STR: mode === 'max' ? Infinity : 0,
    DEX: mode === 'max' ? Infinity : 0,
    INT: mode === 'max' ? Infinity : 0,
    LUK: mode === 'max' ? Infinity : 0
  }

  if(mode === 'max') {
    checkMax(output);
  } else if(mode === 'min') {
    checkMin(output);
  }

  //check
  for(const val in desiredStats) {
    if(mode === 'max' && output[val] > desiredStats[val]) {
      return false;
    } else if(mode === 'min' && output[val] < desiredStats[val]) {
      return false;
    }
  }
  return true;
}

function checkMax(stats) {
  //STR
  if(numbers.is4(849, 339)) {
    stats.STR = 4;
  } else if(numbers.is5(849, 339)){
    stats.STR = 5;
  }

  //DEX
  if(numbers.is4(849, 359)) {
    stats.DEX = 4;
  } else if(numbers.is5(849, 359)){
    stats.DEX = 5;
  }

  //INT
  if(numbers.is4(849, 379)) {
    stats.INT = 4;
  } else if(numbers.is5(849, 379)){
    stats.INT = 5;
  }

  //LUK
  if(numbers.is4(849, 399)) {
    stats.LUK = 4;
  } else if(numbers.is5(849, 399)){
    stats.LUK = 5;
  }
}

function checkMin(stats) {
  //STR
  if(numbers.isDoubleDigit(848, 339)) {
    stats.STR = 10;
  }

  //DEX
  if(numbers.isDoubleDigit(848, 359)) {
    stats.DEX = 10;
  }

  //INT
  if(numbers.isDoubleDigit(848, 379)) {
    stats.INT = 10;
  }

  //LUK
  if(numbers.isDoubleDigit(848, 399)) {
    stats.LUK = 10;
  }
}

function getRandomCoords(min, max) {
  return Math.random() * (max-min) + min;
}

main();