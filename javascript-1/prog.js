// 1 Вопрос. 

let data = '28.02.1999'
console.log("1) тип string " + "Дата - " + data)

// 2 Вопрос.
const Pi = 3.14
console.log("2) тип const - namber, Pi = " + Pi)
console.log("\n")

//3 Вопрос.

const x = 30

console.log("3) " + "переменная x первоначально равняется = " + x + " при изменении данной \n переменной выдает ошибку" + " prog.js:13 Uncaught TypeError: Assignment to constant variable.at")

// 4 Вопрос.

let name = prompt('Введите Имя')
let address = prompt( 'Введите Адрес')
let phone = prompt('Номер телефона')
console.log("\n" + "4)")
console.log("Студент  " + name)
console.log("Адрес: " + address)
console.log("Номер телефона: " + phone + "\n")

// 5 Вопрос

let rateUSD = 75.70
let num_of_ru = 594
console.log("5)")
console.log("Колличество рублей " + num_of_ru)
console.log("Курс рубля к USD " + rateUSD)
console.log("На сумму " + num_of_ru + " рублей, можно купить " + ((num_of_ru / rateUSD).toFixed(2)) +" ddollars.")