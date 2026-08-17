class World{
  constructor(){
    this.entities = []
  }
  add(entity){
    this.entities.push(entity)
  }
  update(){
    for(const entity of this.entities){
      entity.update()
    }
  }
  draw(context){
    for(const entity of this.entities){
      entity.draw(context)
    }
  }
}

export default World