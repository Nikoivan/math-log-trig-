import Character from "./character";

class Daemon extends Character {
  constructor(name) {
    super(name, "Daemon");

    this.attach = 10;
    this.defence = 40;
  }
}

export default Daemon;
