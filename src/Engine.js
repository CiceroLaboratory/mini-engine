import World from "./core/World.js";
import Player from "./entities/Player.js";
import InputSystem from "./systems/InputSystem.js";

class Engine{
  constructor(canvas){
    this.canvas = canvas
    this.context = canvas.getContext("2d")
    this.world = new World()
    this.inputSystem = new InputSystem()
  }
  start(){
    const player = new Player(this.inputSystem)
    this.world.add(player)
    this.gameLoop()
    console.log("Engine's on")
  }
  gameLoop(){
    this.update()
    this.draw()
    requestAnimationFrame(()=> this.gameLoop())
  }
  update(){
    this.world.update()
  }
  draw(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.fillStyle = 'deepskyblue'
    this.context.fillRect(0,0, this.canvas.width, this.canvas.height)
    this.world.draw(this.context)
  }
}

export default Engine