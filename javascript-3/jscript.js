// 1) Задание
console.log("1) Задание")
function number_a(a){
    if (a<10){
        return "константа меньше 10"
    }
    else{
        return "константа не меньше 10"
    }
}
console.log(number_a(15))

// 2) Задание
console.log("2) Задание")
function _max(a, b, c){
    if (a>b){
        return a
    }
    else if (b>c){
        return b
    }
    else{
        return c
    }
}
console.log("максимальное число " + _max(1, 15, 10)  )


// 3) Задание
console.log("3) Задание")
function getDiscountSum(x, y){
    return x * (y/100)
}
console.log("скидка - " + getDiscountSum(15000, 20))

// 4) Задание
function F(a, b){
    if (a.length < b){
        return "Ошибка, слишком маленький текст"
    }
    else{
        return a.substr(-b)
    }
}
console.log(F("dfdfsdfdf", 10))


//5 Задание
console.log("5) Задание")
console.log("Выводимая переменная в console является глобальной, в функции test() объявлена как новая переменная let price, ответ 120.")


