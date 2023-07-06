const robot = require('robotjs');

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
    robot.getPixelColor(672, 172) === 'ffdd55' && 
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
    STR: Infinity,
    DEX: Infinity,
    INT: Infinity,
    LUK: Infinity
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
  if(is4(849, 339)) {
    stats.STR = 4;
  } else if(is5(849, 339)){
    stats.STR = 5;
  }

  //DEX
  if(is4(849, 359)) {
    stats.DEX = 4;
  } else if(is5(849, 359)){
    stats.DEX = 5;
  }

  //INT
  if(is4(849, 379)) {
    stats.INT = 4;
  } else if(is5(849, 379)){
    stats.INT = 5;
  }

  //LUK
  if(is4(849, 399)) {
    stats.LUK = 4;
  } else if(is5(849, 399)){
    stats.LUK = 5;
  }
}

function checkMin(stats) {
  //STR
  if(isDoubleDigit(848, 339)) {
    stats.STR = 10;
  }

  //DEX
  if(isDoubleDigit(848, 359)) {
    stats.DEX = 10;
  }

  //INT
  if(isDoubleDigit(848, 379)) {
    stats.INT = 10;
  }

  //LUK
  if(isDoubleDigit(848, 399)) {
    stats.LUK = 10;
  }
}

function is4(x, y) {
  if(
    robot.getPixelColor(x, y) === '000000' &&
    robot.getPixelColor(x, y+6) === '000000'&&
    robot.getPixelColor(x, y+8) === '000000'&&
    robot.getPixelColor(x+1, y+6) === '000000'&&
    robot.getPixelColor(x-3, y+6) === '000000'
  ) {
    return true;
  }
}

function is5(x, y) {
  //LUK 849,399
  if(
    robot.getPixelColor(x, y) === '000000' &&
    robot.getPixelColor(x-3, y+1) === '000000' &&
    robot.getPixelColor(x+1, y+5) === '000000' &&
    robot.getPixelColor(x+1, y+6) === '000000' &&
    robot.getPixelColor(x-2, y+8) === '000000'
  ) {
    return true;
  }
}

function isDoubleDigit(x, y) {
  if(
    robot.getPixelColor(x, y) === '000000' &&
    robot.getPixelColor(x, y+1) === '000000'&&
    robot.getPixelColor(x, y+2) === '000000'&&
    robot.getPixelColor(x, y+6) === '000000'&&
    robot.getPixelColor(x, y+8) === '000000'
  ) {
    return true;
  }
}

function getRandomCoords(min, max) {
  return Math.random() * (max-min) + min;
}

main();