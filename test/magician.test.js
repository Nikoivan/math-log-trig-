import Magician from '../src/js/magician';

test('test for class Character', () => {
  const result = new Magician('Matvey');
  expect(result).toEqual({
    name: 'Matvey',
    type: 'Magician',
    health: 100,
    level: 1,
    attach: 100,
    defence: 40,
  });
});
