const robot = require('robotjs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  const desiredStats = {
    STR: 4,
    DEX: 4,
    LUK: 5
  }
  
  setTimeout(() => {
    rollDice(desiredStats);
  }, 3000);

}

function rollDice(desiredStats) {
  if(checkStats(desiredStats)) {
    robot.moveMouse(833, 484);
    robot.mouseClick();
    console.log('character created');
    process.exit();
    return;
  }
  if(robot.getPixelColor(1304, 662) === 'ee1111') {
    robot.moveMouse(916,400);
    robot.mouseClick();
    robot.moveMouseSmooth(getRandomCoords(910,920), getRandomCoords(395,405));
  }
  setTimeout(() => {
    rollDice(desiredStats)
  }, 1000);
}

function checkStats(desiredStats) {
  const output = {
    STR: Infinity,
    DEX: Infinity,
    INT: Infinity,
    LUK: Infinity
  }
  //STR
  if(is4(849, 339)) {
    output.STR = 4;
  } else if(is5(849, 339)){
    output.STR = 5;
  }

  //DEX
  if(is4(849, 359)) {
    output.DEX = 4;
  } else if(is5(849, 359)){
    output.DEX = 5;
  }

  //INT
  if(is4(849, 379)) {
    output.INT = 4;
  } else if(is5(849, 379)){
    output.INT = 5;
  }

  //LUK
  if(is4(849, 399)) {
    output.LUK = 4;
  } else if(is5(849, 399)){
    output.LUK = 5;
  }

  //check
  for(const val in desiredStats) {
    if(output[val] > desiredStats[val]) {
      return false;
    }
  }
  return true;
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

function getRandomCoords(min, max) {
  return Math.random() * (max-min) + min;
}

main();