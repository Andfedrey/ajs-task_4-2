import getSortHelth from '../src/index'

test('sort checking', () => {
  const test =
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]

  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 }
  ]

  expect(getSortHelth(test)).toEqual(result)
})