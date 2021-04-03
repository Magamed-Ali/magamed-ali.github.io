
// 1) Задание
let man = {
    name: 'Магомед',
    surname: 'Газмагамаев',
    age: 28,
    height: 1.73,
    weight: 84,
    login: 'inocode',
    password: "1234321",
    money: 17000,
    
};

// 2) Задание

man.address = {
    city: 'Грозный',
    street: 'ул.Аграрная',
    house: 21
}

// 3) Задание
console.log('3) Задание')
let registration = '1234321'
if (man.password === registration){
    console.log(`Добро пожаловать ${man.name} ${man.surname} Ваш логин ${man.login}`)
    }
    else{
        console.log(`Указанный пароль ${registration} не верен. Попробуйте еще раз`)
    }
// 4) Задание
man.getIMT = function(){
    return ((this.weight / (this.height**2)))
    
}

console.log('4) '+'Индекс массы тела ' + man.getIMT())

// 5) Задание
console.log('5) Задание')
man.imtResult = function(){
   if (man.getIMT() <= 18){
       return 'Недостаточный вес'
    }
    else if (man.getIMT() > 18 && man.getIMT()<=25){
    return 'Вес в норме'
    }
    else if(man.getIMT() > 25 && man.getIMT()<= 29){
    return 'Избыточный вес'
    }
    else if(man.getIMT() > 29){
    return 'Ожирение'
    }
}
console.log(man.imtResult())

// 6) Задание
console.log('6) Задание')
man.giveMoney = function(num1){
    if (num1 > (man.money/2)){
        return 'Делахь, сайгах дац са оццал ахч'
    }
    else if (num1 < (man.money/2)){
        return `Хьаэца хьай ${num1} Соьгахь диснаг х1ар ду: ${man.money - num1}. Сих хьадалахь!`
    }

}
console.log(man.giveMoney(7000))

// 7) Задание
console.log('7) Задание')
let lottery = Math.floor(Math.random() * (100 - 1 + 1)) + 1;


man.lotteryNumber = 57;

if (man.lotteryNumber === lottery){
    console.log(alert('поздравляем вы выиграли!'))
    man.money = man.money + 1000000
}
    else{
    console.log('Вы проиграли, попробуйте еще раз')
}