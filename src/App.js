function sanatizeString(positions) {
  let positionSplited = positions.split(",");
  var x = positionSplited[0];
  var y = positionSplited[1];
  var direction = positions.substr(3, 4);
  if (positions === "") {
    x = "0"; y = "0";
  }
  else if (direction === "") {
    direction = "N";
  }
  return [x, y, direction];
}

function createCoordinates(positions) {
  var listSanatized = sanatizeString(positions);
  return [parseInt(listSanatized[0]), parseInt(listSanatized[1])];
}

function carDirection(positions) {
  var listSanatized = sanatizeString(positions);
  return listSanatized[2];
}

function moveCarInMatrix(matrix, coordinates, direction) {
  var xPosition = coordinates[0];
  var yPosition = coordinates[1];
  switch (direction) {
    case "O":
      if (xPosition != 0)
        xPosition = xPosition - 1;
      break;
    case "E":
      if (matrix[0] != xPosition)
        xPosition = xPosition + 1;
      break;
    case "N":
      if (matrix[1] != yPosition)
        yPosition = yPosition + 1;
      break;
    case "S":
      if (yPosition != 0)
        yPosition = yPosition - 1;
      break;
    default:
      return 0;
      break;
  }
  return [xPosition, yPosition];
}

function createRoad(instructions) {
  let explainInstructions = instructions.split("/");

  var matrixDimention = explainInstructions[0];
  var carInformation = explainInstructions[1];
  var commands = explainInstructions[2];
  
  var matrix = createCoordinates(matrixDimention);
  var coordinates = createCoordinates(carInformation);
  var direction = carDirection(carInformation);

  return [matrix, coordinates, direction, commands];
}

function adjustDirection(currentDirection, newDirection){
  var cardinalPoints = {
    "O":180,
    "E":0, 
    "N":90, 
    "S":270
  };
  var cardinalPointsInverted = {
    180:"O",
    0:"E", 
    90:"N", 
    270:"S"
  };
  var directionAngles = {
    "D":-90,
    "I":90
  };
  var directionUpdated = cardinalPoints[currentDirection] + directionAngles[newDirection];
  if (directionUpdated < 0)
    directionUpdated = directionUpdated + 360;
  if (directionUpdated == 360)
    directionUpdated = 0;
  return cardinalPointsInverted[directionUpdated];
}

function moveCar(commands) {
  let myRoad = createRoad(commands);
  var matrix = myRoad[0];
  let carCoordinates = myRoad[1];
  var carDirection = myRoad[2];
  var movements = myRoad[3];

  for (var i = 0; movements[i] != null; i++) {
    if (movements[i] != "A") {
      carDirection = adjustDirection(carDirection, movements[i]);
    }
    else {
      carCoordinates = moveCarInMatrix(matrix, carCoordinates, carDirection);
    }
  }
  return (""+carCoordinates[0]).toString() + "," + (""+carCoordinates[1]).toString() + carDirection;
}

module.exports = {sanatizeString, carDirection, createCoordinates, createRoad, moveCarInMatrix, moveCar}