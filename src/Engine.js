import World from "./core/World";
import Player from "./entities/Player";

class Engine{
  constructor(canvas){
    this.canvas = canvas
    this.context = canvas.getContext("2d")
    this.world = new World()
  }
  start(){
    const player = new Player()
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
    this.world.draw(this.context)
  }
}

export default Engine