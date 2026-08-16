import Entity from "./Entity";

class Player extends Entity{
  constructor(){
    super()
    this.size ={
      width: 25,
      height: 25
    }
    this.position = {
      x: 250,
      y: 250,
    }
  }
  udpate(){}
  draw(context){
    context.fillStyle = "orange"
    context.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
  }
}

export default Player