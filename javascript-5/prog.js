// 1
console.log("1) Задание")
let a = ['lorem', 123, true, 'ipsum'];
console.log("Длина массива: ", a.length)
//2
console.log("2) Задание")

console.log("Первый элемент массива: ", a[0])

console.log("Последний элемент массива: ", a[a.length -1])
//3
console.log("3) Задание")
let em = [];
em[0] = 'Имя';
em[1] = true;
em[2] = 'Город';
em[3] = 'Тел';
em[4] = 125;
console.log(em)
//4
console.log("4) Задание ДОбавить в начало 3 элемента")

a.unshift(123, "Дом", "улица")
console.log(a)
//5
console.log("5) Задание удалить 1эл с нач и два с конца")

a.splice(0, 1)
console.log(a)

a.splice(a.length-2, a.length-1)
console.log(a)

// 6
console.log("6) Задание")
let meem = [];
for(let i = 1000; i > 0; i--){
    meem.unshift(i)
    
}
console.log(meem)

// 7
console.log("7) Задание")
let mas7 = ['html', 'css', 'js', 'react'];

mas7.push(prompt('добавить в массив "mas7" конечный элемент'))

console.log(mas7)

//8 
console.log("8) Задание")

for ( i = 0; i < mas7.length; i++){
    console.log(mas7[i])
}

//9
console.log("9) Задание")

let sum9 = [10, 123, 13, 481, 1931];
let suMmma = 0;
for (i = 0; i < mas7.length; i++){

    suMmma += sum9[i]
}
console.log(suMmma)

//10 
console.log("10) Задание")
/* вложенный массив имеет свой индекс как и элемент*/

let Zd_10 = ['frontend', ['fs', 'html', 'css'], 'react', ['node js', 'mysql'], 'php'];

console.log(Zd_10[1])
console.log(Zd_10[3])

if(Array.isArray(Zd_10[i])){
    fo
}
console.log(typeof(Zd_10))
// 11
console.log("11) Задание")
for (i = 0; i < Zd_10.length; i++){
    
    if (Array.isArray(Zd_10[i])){
        
        for( ia = 0; ia < Zd_10[i].length; ia++){

            console.log(Zd_10[i][ia])
        }
}
    else{
        console.log(Zd_10[i]) 
}

 
    }