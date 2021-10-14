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

function createRoad(instructions) {
  let explainInstructions = instructions.split("/");
  var matrixDimention = explainInstructions[0];
  var carInformation = explainInstructions[1];
  var commands = explainInstructions[2];
  
  var matrix = createCoordinates(matrixDimention);
  var coordinates = carPosition(carInformation);
  var direction = createCoordinates(carInformation);

  return [matrix, coordinates, direction, commands];
}

module.exports = {sanatizeString, carDirection, createCoordinates, createRoad}