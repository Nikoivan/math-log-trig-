class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Ошибка в параметре name');
    }
    const checkTypes = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (!checkTypes.includes(type)) {
      throw new Error('Ошибка в типе игрока');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attach = 10;
    this.defence = 10;
  }

  setDistance(value) {
    this.dist = value;
  }

  set stoned(value) {
    if (typeof value !== 'boolean') {
      throw new Error('Ошибка. Неправильный тип данных');
    }
    this.unicStoned = value;
  }

  get stoned() {
    return this.unicStoned;
  }

  set attack(value) {
    if (typeof value !== 'number') {
      throw new Error('Ошибка. Неправильный тип данных');
    }
    this.unicAttack = value;
  }

  get attack() {
    if (this.unicStoned) {
      this.unicAttack
        *= (110 - this.dist * 10 - Math.log2(this.dist) * 5) / 100;
    } else {
      this.unicAttack *= (110 - this.dist * 10) / 100;
    }
    return Math.floor(this.unicAttack);
  }
}

export default Character;
