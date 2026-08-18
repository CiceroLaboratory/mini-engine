import Entity from "./Entity.js";
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
      velocityX: 0,
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

    if(this.inputSystem.isPressed("ArrowUp")){
      this.movementSpeed.velocityY = -15
    } else if(this.inputSystem.isPressed("ArrowDown")){
      this.movementSpeed.velocityY = 5
    } else {
      // this.movementSpeed.velocityY  += 1
    }
    

    this.position.x += this.movementSpeed.velocityX
    this.position.y += this.movementSpeed.velocityY
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
