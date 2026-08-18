class InputSystem {
  constructor() {
    this.keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false,
    };
    window.addEventListener("keydown", ({ key }) => {
      if (Object.hasOwn(this.keys, key)) {
        this.keys[key] = true;
      }
    });
    window.addEventListener("keyup", ({ key }) => {
      if (Object.hasOwn(this.keys, key)) {
        this.keys[key] = false;
      }
    });
  }
  isPressed(key){
    return this.keys[key]
  }
}


export default InputSystem