
// 1) Задание
console.log('// 1) Задание')
let zd_1 = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];

zd_1.forEach(function(a, b, c) {
	if (a % 2 != 0){
		console.log(a)
	}	
})
// 2) Задание
console.log('// 2) Задание')
let str_massiv = [ 'lorem ipsum', 'javascript', 'php', 'css', 'react', 'git', 'html', 'mysql']

str_massiv.forEach(function (a,b) {
	if (a.length <= 4)
	console.log(a)
})
// 3) Задание
console.log('// 3.1) Задание')
let massiv_filt = [1, -3, 5, 6, -7, 8, 9, -11];

let new_mas_filter = massiv_filt.filter(function(a, b, c) {
	if (a < 0){
		return a
	}
});
console.log(new_mas_filter)
console.log('// 3.2) Задание')
let mas_3_2 = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];

let mas_3_2_0 = mas_3_2.filter(function (a,b,c) {
	if(a%2 === 0){
		return a
	}
})
console.log(mas_3_2_0)
console.log('// 3.3) Задание')

let str_mas_2 = [ 'lorem ipsum', 'javascript', 'php', 'css', 'react', 'git', 'html', 'mysql'];

let new_str_mas_2 = str_mas_2.filter(function (a,b,c) {
	if(a.length != 3){
		return a;
	}
})
console.log(new_str_mas_2)

// 4 Задание
console.log('// 4.1) Задание')
let map_mas = [5, 6, 7, 8, 9];

let new_map_mas = map_mas.map(function (a,b) {
	return a *a;
})
console.log(new_map_mas)

console.log('// 4.2) Задание')

let map_mas2 = [{a: 10, b: 5}, {a: 20, b: 22}, {a: 131, b:55}];

let new_map_mas2 = map_mas2.map(function (name, namber) {
	return  map_mas2[namber].a + map_mas2[namber].b
})
console.log(new_map_mas2)

