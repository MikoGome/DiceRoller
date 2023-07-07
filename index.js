const robot = require('robotjs');
const numbers = require('./numbers.js');
const fs = require('fs');

function main() {
  const desiredStats = {
    STR: 4,
    DEX: 4,
    LUK: 5
  }
  
  setTimeout(() => {
    rollDice(desiredStats, 'max');
  }, 5000);

}

function rollDice(desiredStats, mode) {
  if(
    robot.getPixelColor(1304, 662) === 'ee1111' && 
    robot.getPixelColor(672, 172) === 'ffcc33' && 
    robot.getPixelColor(676, 131) === '555588'
  ) {

    if(checkStats(desiredStats, mode)) {
      robot.moveMouse(833, 484);
      robot.mouseClick();
      console.log('character created');
      process.exit();
      return;
    }

    robot.moveMouse(916,400);
    robot.mouseClick();
    robot.moveMouseSmooth(getRandomCoords(910,920), getRandomCoords(395,405));

  }

  setTimeout(() => {
    rollDice(desiredStats, mode)
  }, 1000);
}

function getStat(x, y) {
  for(const method in numbers) {
    const value = numbers[method](x, y);
    if(value) return value;
  }
}
function checkStats(desiredStats, mode) {
  const output = {
    STR: undefined,
    DEX: undefined,
    INT: undefined,
    LUK: undefined
  }

  //Get Values

  //STR: 849, 339
  output.STR = getStat(849,339);

  //DEX: 849, 359
  output.DEX = getStat(849, 359);

  //INT: 849, 379
  output.INT = getStat(849, 379);

  //LUK: 849, 399
  output.LUK = getStat(849, 399);

  if(!output.STR) {
    output.STR = 25 - output.DEX - output.INT - output.LUK;
  } else if(!output.DEX) {
    output.DEX = 25 - output.STR - output.INT - output.LUK;
  } else if(!output.INT) {
    output.INT = 25 - output.STR - output.DEX - output.LUK;
  } else if(!output.LUK) {
    output.LUK = 25 - output.STR - output.DEX - output.INT;
  }

  console.log(output);

  if(output.STR + output.DEX + output.INT + output.LUK !== 25 || (output.STR <= desiredStats.STR && output.DEX <= desiredStats.DEX && output.LUK <= desiredStats.LUK)) {
    fs.appendFileSync('./stats.txt', JSON.stringify(output)+'\n');
    console.log('error');
    return true;
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

function getRandomCoords(min, max) {
  return Math.random() * (max-min) + min;
}

main();