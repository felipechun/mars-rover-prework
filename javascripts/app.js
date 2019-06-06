// Rover Object Goes Here
const rover1 = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
};
const rover2 = {
  direction: 'N',
  x: 1,
  y: 0,
  travelLog: [],
};

// ======================
let grid = [
  ['R1', 'R2', 'X', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['X', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
];

// grid[0][0] = cp
// rover.x += 1

// grid[rover.y][rover.x]
// ======================

// let gridPosition = grid[rover.y][rover.x];

function turnLeft(rover) {
  console.log('turnLeft was called!');
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      console.log('Rover was facing North. Rover turned left and is now facing West.');
      break;
    case 'W':
      rover.direction = 'S';
      console.log('Rover was facing West. Rover turned left and is now facing South.');
      break;
    case 'S':
      rover.direction = 'E';
      console.log('Rover was facing South. Rover turned left and is now facing East.');
      break;
    case 'E':
      rover.direction = 'N';
      console.log('Rover was facing East. Rover turned left and is now facing North.');
      break;
    default:
      console.log('Rover was not able to turn left and still faces the same direction!');
  }
}

function turnRight(rover) {
  console.log('turnRight was called!');
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      console.log('Rover was facing North. Rover turned right and is now facing East.');
      break;
    case 'E':
      rover.direction = 'S';
      console.log('Rover was facing East. Rover turned right and is now facing South.');
      break;
    case 'S':
      rover.direction = 'W';
      console.log('Rover was facing South. Rover turned right and is now facing West.');
      break;
    case 'W':
      rover.direction = 'N';
      console.log('Rover was facing West. Rover turned right and is now facing North.');
      break;
    default:
      console.log('Rover was not able to turn right and still faces the same direction!');
  }
}
// && (rover1.y - 1 === rover2.y && rover1.x === rover2.x) && ()
function moveForward(rover) {
  let roverPosition;
  if (rover === rover1) {
    roverPosition = 'R1';
  } else roverPosition = 'R2';
  console.log('moveForward was called');
  if (rover.direction === 'N' && rover.y > 0 && grid[rover.y - 1][rover.x] === 'O') {
    grid[rover.y][rover.x] = 'O';
    rover.y -= 1;
    grid[rover.y][rover.x] = roverPosition;
    // gridPosition = grid[rover.y][rover.x];
    const currentPosition = `(${rover.x}, ${rover.y})`;
    console.log(`Rover has moved forward facing North. Rover's current position is: ${currentPosition}`);
  } else if (rover.direction === 'S' && rover.y < 9 && grid[rover.y + 1][rover.x] === 'O') {
    grid[rover.y][rover.x] = 'O';
    rover.y += 1;
    grid[rover.y][rover.x] = roverPosition;
    // gridPosition = grid[rover.y][rover.x];
    const currentPosition = `(${rover.x}, ${rover.y})`;
    console.log(`Rover has moved forward facing South. Rover's current position is: ${currentPosition}`);
  } else if (rover.direction === 'E' && rover.x < 9 && grid[rover.y][rover.x + 1] === 'O') {
    grid[rover.y][rover.x] = 'O';
    rover.x += 1;
    grid[rover.y][rover.x] = roverPosition;
    // gridPosition = grid[rover.y][rover.x];
    const currentPosition = `(${rover.x}, ${rover.y})`;
    console.log(`Rover has moved forward facing East. Rover's current position is: ${currentPosition}`);
  } else if (rover.direction === 'W' && rover.x > 0 && grid[rover.y][rover.x - 1] === 'O') {
    grid[rover.y][rover.x] = 'O';
    rover.x -= 1;
    grid[rover.y][rover.x] = roverPosition;
    // gridPosition = grid[rover.y][rover.x];
    const currentPosition = `(${rover.x}, ${rover.y})`;
    console.log(`Rover has moved forward facing West. Rover's current position is: ${currentPosition}`);
  } else {
    console.log(`Rover found an OBSTACLE and did not move forward. Rover's current position is: ${currentPosition}`);
  }
}
// && grid[rover.y += 1][rover.x] !== 'X' &&  grid[rover.y += 1][rover.x] !== rover2.name

function moveBackward(rover) {
  let roverPosition;
  if (rover === rover1) {
    roverPosition = 'R1';
  } else roverPosition = 'R2';
  console.log('moveBackward was called');
  if (rover.direction === 'N' && rover.y < 9 && grid[rover.y + 1][rover.x] === 'O') {
    grid[rover.y][rover.x] = 'O';
    rover.y += 1;
    grid[rover.y][rover.x] = roverPosition;
    // gridPosition = grid[rover.y][rover.x];
    const currentPosition = `(${rover.x}, ${rover.y})`;
    console.log(`Rover has moved backward facing North. Rover's current position is: ${currentPosition}`);
  } else if (rover.direction === 'S' && rover.y > 0 && grid[rover.y - 1][rover.x] === 'O') {
    grid[rover.y][rover.x] = 'O';
    rover.y -= 1;
    grid[rover.y][rover.x] = roverPosition;
    // gridPosition = grid[rover.y][rover.x];
    const currentPosition = `(${rover.x}, ${rover.y})`;
    console.log(`Rover has moved backward facing South. Rover's current position is: ${currentPosition}`);
  } else if (rover.direction === 'E' && rover.x > 0 && grid[rover.y][rover.x - 1] === 'O') {
    grid[rover.y][rover.x] = 'O';
    rover.x -= 1;
    grid[rover.y][rover.x] = roverPosition;
    // gridPosition = grid[rover.y][rover.x];
    const currentPosition = `(${rover.x}, ${rover.y})`;
    console.log(`Rover has moved backward facing East. Rover's current position is: ${currentPosition}`);
  } else if (rover.direction === 'W' && rover.x < 9 && grid[rover.y][rover.x + 1] === 'O') {
    grid[rover.y][rover.x] = 'O';
    rover.x += 1;
    grid[rover.y][rover.x] = roverPosition;
    // gridPosition = grid[rover.y][rover.x];
    const currentPosition = `(${rover.x}, ${rover.y})`;
    console.log(`Rover has moved backward facing West. Rover's current position is: ${currentPosition}`);
  } else {
    const currentPosition = `(${rover.x}, ${rover.y})`;
    console.log(`Rover found an OBSTACLE and did not move backward. Rover's current position is: ${currentPosition}`);
  }
}

function executeCommand(commandList, rover) {
  const letters = {
    f: true,
    b: true,
    l: true,
    r: true,
  };
  for (let j = 0; j < commandList.length; j += 1) {
    if (!letters[commandList[j].toLowerCase()]) {
      return console.log('Error');
    }
  }
  for (let i = 0; i < commandList.length; i += 1) {
    switch (commandList[i].toLowerCase()) {
      case 'f':
        moveForward(rover);
        rover.travelLog.push([rover.x, rover.y]);
        break;
      case 'b':
        moveBackward(rover);
        rover.travelLog.push([rover.x, rover.y]);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      default:
        console.log('Command did not execute!');
        break;
    }
  } console.log(rover.travelLog);
  console.log(grid);
}
