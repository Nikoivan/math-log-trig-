class Character {
  constructor(name, type) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error("Ошибка в параметре name");
    }
    const checkTypes = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    if (!checkTypes.includes(type)) {
      throw new Error("Ошибка в типе игрока");
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
    this.unicStoned = value;
  }

  get stoned() {
    return this.unicStoned;
  }

  set attack(obj) {
    if (this.stoned) {
      this.unicAttack =
        ((110 - this.dist * 10 - Math.log2(this.dist) * 5) / 100) * obj;
    } else {
      this.unicAttack = ((110 - this.dist * 10) / 100) * obj;
    }
  }

  get attack() {
    return Math.floor(this.unicAttack);
  }
}

export default Character;
