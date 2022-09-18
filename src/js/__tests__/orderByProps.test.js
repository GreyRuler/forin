import orderByProps from '../orderByProps';

test.each([
  [
    ['name', 'level'],
    [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ],
  ],
  [
    ['defence', 'attack'],
    [
      { key: 'defence', value: 40 },
      { key: 'attack', value: 80 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ],
  ],
  [
    ['level', 'health'],
    [
      { key: 'level', value: 2 },
      { key: 'health', value: 10 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'name', value: 'мечник' },
    ],
  ],
  [
    ['level', 'health', 'attack', 'name'],
    [
      { key: 'level', value: 2 },
      { key: 'health', value: 10 },
      { key: 'attack', value: 80 },
      { key: 'name', value: 'мечник' },
      { key: 'defence', value: 40 },
    ],
  ],
  [
    ['level', 'health', 'attack', 'name', 'defence'],
    [
      { key: 'level', value: 2 },
      { key: 'health', value: 10 },
      { key: 'attack', value: 80 },
      { key: 'name', value: 'мечник' },
      { key: 'defence', value: 40 },
    ],
  ],
])(
  ('should sort and return an array with properties as elements'),
  (sort, expected) => {
    const obj = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const result = orderByProps(obj, sort);
    expect(result).toEqual(expected);
  },
);
