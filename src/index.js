export default function getSortHelth(arr) {
  return arr.sort((a, b) => b.health - a.health)
}

const a = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]
console.log(getSortHelth(a));