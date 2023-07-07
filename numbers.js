const robot = require('robotjs');

module.exports = {
  is4(x, y) {
    if(
      robot.getPixelColor(x, y) === '000000' &&
      robot.getPixelColor(x, y+6) === '000000'&&
      robot.getPixelColor(x, y+8) === '000000'&&
      robot.getPixelColor(x+1, y+6) === '000000'&&
      robot.getPixelColor(x-3, y+6) === '000000'
    ) {
      return 4;
    }
  },

  is5(x, y) {
    if(
      robot.getPixelColor(x, y) === '000000' &&
      robot.getPixelColor(x-3, y+1) === '000000' &&
      robot.getPixelColor(x+1, y+5) === '000000' &&
      robot.getPixelColor(x+1, y+6) === '000000' &&
      robot.getPixelColor(x-2, y+8) === '000000'
    ) {
      return 5;
    }
  },
  
  is6(x, y) {
    if(
      robot.getPixelColor(x-1, y) === '000000' &&
      robot.getPixelColor(x-2, y+3) === '000000' &&
      robot.getPixelColor(x-3, y+7) === '000000' &&
      // ['222211', '221111'].includes(robot.getPixelColor(x+1, y+6))  &&
      robot.getPixelColor(x-1, y+8) === '000000'
    ) {
      return 6;
    }
  },

  is7(x, y) {
    if(
      robot.getPixelColor(x, y) === '000000' &&
      robot.getPixelColor(x+1, y) === '000000' &&
      robot.getPixelColor(x-1, y) === '000000' &&
      robot.getPixelColor(x-2, y) === '000000' &&
      robot.getPixelColor(x-3, y) === '000000' 
      // ['222211', '221111'].includes(robot.getPixelColor(x-4, y))
    ) {
      return 7
    }
  },

  is8(x, y) {
    if(
      robot.getPixelColor(x-1, y) === '000000' &&
      robot.getPixelColor(x-2, y) === '000000' &&
      robot.getPixelColor(x-1, y+4) === '000000' &&
      robot.getPixelColor(x-1, y+4) === '000000' &&
      robot.getPixelColor(x-1, y+8) === '000000' &&
      robot.getPixelColor(x-1, y+8) === '000000' 
      // ['222211', '221111'].includes(robot.getPixelColor(x, y+1)) &&
      // ['222211', '221111'].includes(robot.getPixelColor(x-3, y+7))
    ) {
      return 8;
    }
  },

  // isDoubleDigit(x, y) {
  //   if(
  //     robot.getPixelColor(x-1, y) === '000000' &&
  //     robot.getPixelColor(x-1, y+1) === '000000'&&
  //     robot.getPixelColor(x-1, y+2) === '000000'&&
  //     robot.getPixelColor(x-1, y+3) === '000000'&&
  //     robot.getPixelColor(x-1, y+4) === '000000'&&
  //     robot.getPixelColor(x-1, y+5) === '000000'&&
  //     robot.getPixelColor(x-1, y+6) === '000000'&&
  //     robot.getPixelColor(x-1, y+7) === '000000'&&
  //     robot.getPixelColor(x-1, y+8) === '000000'
  //   ) {
  //     return true;
  //   }
  // }



}