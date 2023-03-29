import Daemon from '../src/js/daemon';

test('test for class Character', () => {
  const result = new Daemon('Matvey');
  expect(result).toEqual({
    name: 'Matvey',
    type: 'Daemon',
    health: 100,
    level: 1,
    attach: 10,
    defence: 40,
  });
});
