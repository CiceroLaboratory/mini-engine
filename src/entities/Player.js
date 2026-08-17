import Entity from "./Entity";

class Player extends Entity {
  constructor(inputSystem) {
    super();
    this.inputSystem = inputSystem;
    this.size = {
      width: 25,
      height: 25,
    };
    this.position = {
      x: 250,
      y: 250,
    };
    this.movementSpeed = {
      velocityX: 5,
      velocityY: 0,
    };
  }
  update() {
     if (this.inputSystem.isPressed("ArrowRight")) {
      this.movementSpeed.velocityX = 3;
    } else if (this.inputSystem.isPressed("ArrowLeft")) {
      this.movementSpeed.velocityX = -3;
    } else {
      this.movementSpeed.velocityX = 0;
    }

    this.position.x += this.movementSpeed.velocityX
  }
  draw(context) {
    context.fillStyle = "orange";
    context.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height,
    );
  }
}

export default Player;
