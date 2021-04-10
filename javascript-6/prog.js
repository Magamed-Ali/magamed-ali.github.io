
// 1) Задание
console.log('1) Задание')
let mas = [10, -12, [231, 1, -32], -0.001, [75, 123, 21], 12, 321, [292, 21]];

for (i = 0; i < mas.length; i++){
    if( Array.isArray(mas[i])){
        console.log(mas[i]);
    }
}
// 2) Задание
console.log('2.1) Задание')
let people = [{name: 'Bradly', age: 74}, {name: 'Juliya', age: 20}, 
{name: 'Walter', age: 35}, {name: 'Kristen', age: 12}, {name: 'Sam', age: 2}];

for(i=0; i < people.length; i++){
    if(people[i].name){
    console.log(people[i].name)
}
}

console.log('2.2) Задание')
for(i=0; i < people.length; i++){
    if(people[i].name && people[i].age >= 18){
    console.log(people[i].name)
}
}

console.log('2.3) Задание')
for(i=0; i < people.length; i++){
    if(people[i].name && people[i].age > 65){
    console.log(people[i].name)
}
}
console.log('2.4) Задание')
function addPeople(name, age){
    return people.push({name, age})
}


addPeople('sara', 52)
console.log(people)

console.log(people[5])

// 3) Задание
console.log('3) Задание')
let pol;
function getPositiveArr(numm){
    pol = [];
        for(i=0; i < numm.length; i++){
            if ( numm[i] > 0){
            pol.push(numm[i])}
            
        }
}


let num1 = [10, -12, 231, 1, -32, -0.001, 75]; 
let num2 = [311, 122, -3, 132, 3.1, -2];
let num3 = [-2, -31, -65, -1, 7, -78, -5]

getPositiveArr(num1)
console.log('вернет новй массив: ',pol)
getPositiveArr(num2)
console.log('вернет новй массив: ',pol)
getPositiveArr(num3)
console.log('вернет новй массив: ',pol)