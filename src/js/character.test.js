import Character from './character';

test('testing with a simple character', () => {
  const input = ['John', 'Bowman'];
  const john = new Character(...input);

  john.damage(10);

  const expected = {
    name: 'John',
    type: 'Bowman',
    health: 94,
    attack: 10,
    defence: 40,
  };

  expect(john).toEqual(expected);
});
