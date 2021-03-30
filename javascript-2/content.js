// 1) Задание
console.log("1) Задание")
const a = 9
if (a < 10){
    console.log("Константа меньше 10")
}
else {
    console.log("Константа не меньше 10")
}
console.log("\n")
// 2) Задание
console.log("2) Задание")
let text = "privet"
if (text == "lorem"){
    console.log("У вас ошибка в тексте!")
}
else{
    console.log("Содержимое переменной: " + text)
}
// 3) Задание
console.log("3) Задание")
let comment = "asdo;fjaosdfhasdfhakjsdfhakjsdfhjahf"
if (comment.length > 120){
    console.log("Текст слишком длинный. В нем" + comment + "символов")
}
else{
    console.log("Символы" + comment)
}

// 4) Задание
console.log("4) Задание")
let cartSum = 859
if (cartSum >= 5000){
    let cent = cartSum / 100
    cartSum = cartSum - cent
    console.log("Ваша скидка 5%. Итого:" + cartSum +". Доставка бесплатно")
}
else {
    console.log("Итого к оплате: " + cartSum +". До скидки осталось:" + (5000 - cartSum) +" чтобы cartSum стал 5000.")
}