
function carPosition(position) {
  var x = position.split(",")[0];
  var y = position.split(",")[1];
  if (position == "") {
    x = "0";
    y = "0";
  }
  return x + "," + y;
}

module.exports = {carPosition}