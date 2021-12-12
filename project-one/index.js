
function divisors(integer) {
  let people = [];
  for(let i = 2; i <= 9; i++){
    if(integer%i === 0){
      people.push(i)
    }
  }
  if(people.length === 0){
    people = (`${integer} is prime`)
  }
  return people;
};

console.log(divisors(13))