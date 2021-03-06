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

function moveCarInMatrix(matrix, coordinates, direction, move) {
  var xPosition = coordinates[0];
  var yPosition = coordinates[1];
  switch (direction) {
    case "O":
      if (xPosition != 0 && move == "A")
        xPosition = xPosition - 1;
      else if (move == "S")
        xPosition = xPosition - 2;
      break;
    case "E":
      if (matrix[0] != xPosition && move == "A")
        xPosition = xPosition + 1;
      else if (move == "S")
      xPosition = xPosition + 2;
      break;
    case "N":
      if (matrix[1] != yPosition && move == "A")
        yPosition = yPosition + 1;
      else if (move == "S")
        yPosition = yPosition + 2;
      break;
    case "S":
      if (yPosition != 0 && move == "A")
        yPosition = yPosition - 1;
      else if (move == "S")
        yPosition = yPosition - 2;
      break;
    default:
      xPosition = xPosition;
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
    "N":90,"S":270,"O":180,"E":0
  };
  var cardinalPointsInverted = {
    90:"N",270:"S",180:"O",0:"E", 
  };
  var directionAngles = {
    "I":90, "D":-90
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
  var carCoordinates = myRoad[1];
  var carDirection = myRoad[2];
  var movements = myRoad[3];
  for (var i = 0; movements[i] != null; i++) {
    if (movements[i] != "A" && movements[i] != "S") {
      carDirection = adjustDirection(carDirection, movements[i]);
    }
    else {
      carCoordinates = moveCarInMatrix(matrix, carCoordinates, carDirection, movements[i]);
    }
  }
  return [carCoordinates[0], carCoordinates[1], carDirection]
}

module.exports = {sanatizeString, carDirection, createCoordinates, createRoad, moveCarInMatrix, moveCar}