const limit = 4000000

let ultimate = 1
let penultimate = 0
let current = 1
let sum = 0

while (true) {
  current = penultimate + ultimate
  penultimate = ultimate
  ultimate = current

  if (current > limit ) break
  if (current % 2 === 0) {
    sum += current
  }
}
console.log(sum)
