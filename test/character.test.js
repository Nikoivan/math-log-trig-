import Character from "../src/js/character";

test("test for class Character", () => {
  const result = new Character("Matvey", "Bowman");
  expect(result).toEqual({
    name: "Matvey",
    type: "Bowman",
    health: 100,
    level: 1,
    attach: 10,
    defence: 10,
  });
});

const characterErrorList = [
  ["Error - name isn't string", 1, "Daemon", "Ошибка в параметре name"],
  ["Error - name is too short", "a", "Daemon", "Ошибка в параметре name"],
  [
    "Error - name is too long",
    "AAAAAAAAAbbbbbddddduuuuullllaaaaeeevvvvv",
    "Daemon",
    "Ошибка в параметре name",
  ],
  [
    "Error - incorrect type of player",
    "Matvey",
    "Demon",
    "Ошибка в типе игрока",
  ],
];

const testCharacterErrors = test.each(characterErrorList);

testCharacterErrors(
  "test Errors of class Character by name is %q type is %w",
  (error, name, type, expected) => {
    expect(() => {
      const result = new Character(name, type);
      console.log(result);
    }).toThrowError(expected);
  }
);

test("test for set attack and get attack of class Character", () => {
  const magician = new Character("Ivan", "Magician");

  magician.setDistance(2);
  magician.attack = magician.attach;
  expect(magician.attack).toBe(9);
});

test("test for method setDistance  of class Character", () => {
  const magician = new Character("Ivan", "Magician");

  magician.setDistance(2);

  expect(magician.dist).toBe(2);
});

test("test for set stoned of class Character", () => {
  const magician = new Character("Ivan", "Magician");

  magician.stoned = true;
  magician.setDistance(3);
  magician.attack = magician.attach;
  expect(magician.attack).toBe(7);
});
