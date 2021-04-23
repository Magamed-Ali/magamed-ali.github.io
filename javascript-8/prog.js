// 1) Задание / из 2х массив получить 1
console.log('1) Задание')
arr_1= [101, 202, 303, 404, 505];
arr_2 = [606, 707, 808, 909];
// superArr = [101, 202, 303, 404, 505, 606, 707, 808, 909];

let superArr = arr_1.concat(arr_2);

console.log(superArr)

// 2) Задание / из 2х массив получить 1
console.log('2) Задание')
let new_supArr = Math.min(...superArr);
console.log('минемальное число массва new_supArr: ', new_supArr);

// 3 Задание вернуть произведение свойств width и height;
console.log('3) Задание')
const obj  = {
	width: 300,
	heigth: 550,
}
const new_obj = {...obj,
	area(){
		return this.width * this.heigth
	}};
	

console.log('произведение width и height = ', new_obj.area())

// 4) Задание вернуть сумму всех чисел
console.log('4) Задание ')
let func_new = (...a) =>  a.reduce(function(sum, current) {
	return sum + current;
  }, 0);

console.log('Cумма чисел = ', func_new(12, 23,34, 44, 122, 433))


