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
      return true;
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
      return true;
    }
  },

  isDoubleDigit(x, y) {
    if(
      robot.getPixelColor(x, y) === '000000' &&
      robot.getPixelColor(x, y+1) === '000000'&&
      robot.getPixelColor(x, y+2) === '000000'&&
      robot.getPixelColor(x, y+3) === '000000'&&
      robot.getPixelColor(x, y+4) === '000000'&&
      robot.getPixelColor(x, y+5) === '000000'&&
      robot.getPixelColor(x, y+6) === '000000'&&
      robot.getPixelColor(x, y+7) === '000000'&&
      robot.getPixelColor(x, y+8) === '000000'
    ) {
      return true;
    }
  }



}