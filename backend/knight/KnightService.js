var serialize = require("serialize-javascript");

class KnightService {
  identifyAvailableMovements(position) {
    let originalPosition = position;
    let { x, y } = this.unMountPosition(position);
    let firstMovements = this.calculateAvailableMovements(
      x,
      y,
      originalPosition
    );
    let secondMovements = [];

    for (var i = 0; i < firstMovements.length; i++) {
      let movementPosition = this.unMountPosition(firstMovements[i]);
      let availableMovements = this.calculateAvailableMovements(
        movementPosition["x"],
        movementPosition["y"],
        originalPosition
      );
      secondMovements = secondMovements.concat(availableMovements);
    }
    return serialize({
      firstMovements: firstMovements,
      secondMovements: secondMovements
    });
  }

  calculateAvailableMovements(x, y, originalPosition) {
    let availableMovements = [];
    const steps = [{ x: 2, y: 1 }, { x: 1, y: 2 }];
    for (var i = 0; i < steps.length; i++) {
      let stepX = steps[i]["x"];
      let stepY = steps[i]["y"];
      let moves = this.moves(x, y, stepX, stepY);

      for (var k = 0; k < moves.length; k++) {
        let move = moves[k];
        availableMovements.push(this.checkBoundaries(move[0], move[1]));
      }
    }
    return availableMovements.filter(n => n);
  }

  checkBoundaries(x, y, originalPosition) {
    const boundaryUp = 9;
    const boundaryDown = 0;
    const position = this.generatePosition(x, y);
    if (
      x < boundaryUp &&
      x > boundaryDown &&
      y < boundaryUp &&
      y > boundaryDown &&
      position != originalPosition
    ) {
      return position;
    }
  }

  generatePosition(x, y) {
    return String.fromCharCode(x + 64) + y;
  }

  unMountPosition(position) {
    return {
      x: parseInt(position.charCodeAt(0) - 64),
      y: parseInt(position[1])
    };
  }

  moves(x, y, stepX, stepY) {
    return [
      [x + stepX, y - stepY],
      [x + stepX, y + stepY],
      [x - stepX, y - stepY],
      [x - stepX, y + stepY]
    ];
  }
}

module.exports = KnightService;
