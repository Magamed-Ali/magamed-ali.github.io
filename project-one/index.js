
function highAndLow(numbers){ 
let rew = numbers.split(' ');
let newRew = rew.map(parseFloat)
let min = Math.min.apply(null, newRew);

let max = Math.max.apply(null, newRew);
  return String(min, max)

}

console.log(highAndLow("15, 12, 34, 45")) 