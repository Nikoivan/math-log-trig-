import Character from "./character";
import Magician from "./magician";

const magician = new Character("Ivan", "Magician");

magician.stoned = true;
magician.setDistance(3);
magician.attack = magician.attach;

console.log(magician.attack);
