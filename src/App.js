function sanatizePosition(position) {
  let positionSplited = position.split(",");
  var x = positionSplited[0];
  var y = positionSplited[1];
  var direction = position.substr(3, 4);
  if (position === "") {
    x = "0"; y = "0";
  }
  else if (direction === "") {
    direction = "N";
  }
  return [x, y, direction];
}

function carPosition(position) {
  var listSanatized = sanatizePosition(position);
  return parseInt(listSanatized[0]), parseInt(listSanatized[1]);
}

function carDirection(position) {
  var listSanatized = sanatizePosition(position);
  return listSanatized[2];
}

function createMatrix(matrix) {
  var listSanatized = sanatizePosition(position);
  return [parseInt(listSanatized[0])], [parseInt(listSanatized[1])];
}

function createRoad(instructions) {
  let explainInstructions = instructions.split("/");
  var matrixDimention = explainInstructions[0];
  var carInformation = explainInstructions[1];
  var commands = explainInstructions[2];
  
  var matrix = createMatrix(matrixDimention);
  var direction = carDirection(carInformation);
  var position = carPosition(carInformation);

  return [matrix, direction, position, commands];

}

module.exports = {carPosition, sanatizePosition, carDirection, createRoad}