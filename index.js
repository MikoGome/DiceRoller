const robot = require('robotjs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  const desiredStats = {
    STR: 4,
    DEX: 4,
    LUK: 4
  }
  setTimeout(() => {
    rollDice(desiredStats);
  }, 5000);
}

function rollDice(desiredStats) {
  if(!checkStats(desiredStats)) {
    robot.moveMouse(833, 484);
    robot.mouseClick();
    console.log('character created');
    process.exit();
    return;
  }
  robot.moveMouse(916,400);
  robot.mouseClick();
  setTimeout(() => {
    rollDice(desiredStats)
  }, 1000);
}

function checkStats(desiredStats) {
  const output = {
    STR: 0,
    DEX: 0,
    INT: 0,
    LUK: 0
  }
  //STR
  if(isMinVal(849, 339)) {
    output.STR = 4;
  }
  //DEX
  if(isMinVal(849, 359)) {
    output.DEX = 4;
  }
  //INT
  if(isMinVal(849, 379)) {
    output.INT = 4;
  }
  //LUK
  if(isMinVal(849, 399)) {
    output.LUK = 4;
  }

  //check
  for(const val in desiredStats) {
    if(desiredStats[val] !== output[val]) {
      return true;
    }
  }
  return false;
}

function isMinVal(x, y) {
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

function sleep(ms) {
  const sab = new SharedArrayBuffer(1024);
  const int32 = new Int32Array(sab);
  Atomics.wait(int32, 0, 0, ms);
}

main();