import Character from './character';

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attach = 100;
    this.defence = 40;
  }
}

export default Magician;
