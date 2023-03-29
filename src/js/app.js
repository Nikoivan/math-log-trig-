import Magician from './magician';

const magician = new Magician('Ivan');

magician.stoned = true;
magician.setDistance(2);
magician.attack = magician.attach;

console.log(magician.attack);
