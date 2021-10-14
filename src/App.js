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
  var listOfPosition = sanatizePosition(position);
  return parseInt(listOfPosition[0]), parseInt(listOfPosition[1]);
}

function carDirection(position) {
  var listOfPosition = sanatizePosition(position);
  return listOfPosition[2];
}

module.exports = {carPosition, sanatizePosition, carDirection}