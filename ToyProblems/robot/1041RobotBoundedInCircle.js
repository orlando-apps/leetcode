// On an infinite plane, a robot initially stands at (0, 0) and faces north.  The robot can receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degress to the right.
// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

/**
 * @param {string} instructions
 * @return {boolean}
 */

var isRobotBounded = function(instructions) {
  let facing = 0; //beginning is pointing at 0 [0,1]
  let loc = [0,0];
  //up , right, down, left
  const direction = [[0,1],[1,0],[0,-1],[-1,0]];

  for (let i = 0; i < instructions.length; i++){
      let instruction = instructions[i]
      if (instruction === 'G'){
          //use modulo 4 because there are only four options in direction
          console.log(facing)
          loc[0] += direction[facing % 4][0];
          loc[1] += direction[facing % 4][1];
      } else if (instruction === 'R'){
          facing += 1;
      } else if(instruction === 'L'){
          //to avoid going negative, set facing to 4, which is same as 0
          if (!facing) facing = 4;
          facing -= 1;
      }
  }
  // 2 senarios - return back to orgin or is not facing Up @ [0,0]
  // if is facing down, and you run it again, it go back to up.
  if (loc[0] === 0 && loc[1] === 0 ) return true;
  if (facing % 4 !== 0 ) return true;
  return false;
};