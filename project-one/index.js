const data = [
    {name: "Саша", age: 19},
    {name: "Катя", age: 21},
    {name: "Миша", age: 17},
    {name: "Федя", age: 23},
    {name: "Клава", age: 22}
  ]
 


  function calcAvgAge(array) {
      let x = array.reduce((s, i) => s += i.age, 0)
      return x / 5
 }

 console.log(calcAvgAge(data))




 const arr = [17, 23, 31, 44, 59];



function doubleNumber(array) {
  let x = array.map((item, index) => item*2);
  return console.log(x)
}
doubleNumber(arr)


var words = ['Ночь', 'Улица', 'Фонарь', 'Аптека', 'Бессмысленный', 'Тусклый', 'Свет'];



function getLastElementOfArray(array) {
  let x = array.length-1
  return array[x]
}
console.log(getLastElementOfArray(words))



const numbers = [1, 2, 3, 4, 5, 6];


function separateArray(array) {
    let even =[];
    let odd =[];
  array.map((i) => {
      if(i%2==0){
          even.push(i)
      }
        else {
            odd.push(i)
      }
    })
    return {
        even: even,
        odd: odd
    }
}
console.log(separateArray(numbers))

function findNearestFactorial(value) {
  
  let x = 1;
  let i = 1;
for(i; value >= i; i++){
  console.log(i)
  x = x * i
}
return console.log(x)
}

findNearestFactorial(0)