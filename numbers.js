const robot = require('robotjs');

function black(x,y) {
  return !['ffeecc', 'ffddcc','eeddcc', 'eeeecc'].includes(robot.getPixelColor(x, y));
}

module.exports = {
  is8(x, y) {
    //INT: 849, 379
    if(
      //848,379
      black(x-1,y) &&
      //847,379
      black(x-2,y) &&
      //848,383
      black(x-1,y+4) &&
      //847,383
      black(x-2,y+4) &&
      //848,387
      black(x-1,y+8) &&
      //850,381
      black(x+1,y+2) &&
      //850,382
      black(x+1,y+3)
    ) {
      return 8;
    }
 },
  
  is6(x, y) {
    //LUK: 849, 399
    // console.log(robot.getPixelColor(x,y));
    // console.log(robot.getPixelColor(x-1,y));
    // console.log(robot.getPixelColor(x-2,y));
    // console.log(robot.getPixelColor(x-3,y+3));
    // console.log(robot.getPixelColor(x+1,y+6));
    // console.log(robot.getPixelColor(x-3,y+5));
    // console.log(robot.getPixelColor(x-3,y-14));
    if(
      //849,399
      black(x, y) &&
      //848,399
      black(x-1, y) &&
      //847,399
      black(x-2, y) &&
      //846,402
      black(x-3, y+3) &&
      //850,405
      black(x+1, y+6) &&
      //846,404
      black(x-3, y+5) &&
      //846,405
      black(x-3, y+6)
    ) {
      return 6;
    }
  },

  is5(x, y) {
    //LUK: 849, 399
    if(
      //849,399
      black(x, y) &&
      //848,399
      black(x-1, y) &&
      //847,399
      black(x-2, y) &&
      //846,402
      black(x-3, y+3) &&
      //850,405
      black(x+1, y+6) &&
      //850,399
      black(x+1, y)
    ) {
      return 5;
    }
  },

  is7(x, y) {
    //LUK: 849, 399
    if(
      //850,399
      black(x-1, y) &&
      //849,399
      black(x, y) &&
      //847, 405
      black(x-2, y+6) &&
      //846,399
      black(x-3, y) &&
      //847,399
      black(x-2, y) &&
      //845, 399
      black(x-4, y)
    ) {
      return 7
    }
  },

  is4(x, y) {
    //STR: 849,339
    if(
      //849,339
      black(x, y) &&
      //849,345
      black(x, y+6) &&
      //849,344
      black(x, y+5) &&
      //850,345
      black(x+1,y+6) &&
      //849,346
      black(x,y+7) &&
      //848,345
      black(x-1,y+6) &&
      //846,345
      black(x-3, y+6)
    ) {
      return 4;
    }
  },
}