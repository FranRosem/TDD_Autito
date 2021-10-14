function getPosition(position) {
  if (position === "") {
    position = "0,0";
  }
  return position;
}

module.exports = {getPosition}