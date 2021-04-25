let btn = document.getElementById('btn');
let inp = document.getElementById('input');
let list = document.getElementById('list');
let btn2 = document.getElementById('btn2');
document.getElementById('input').placeholder = 'Текст';

btn.addEventListener('click', (ev) => {
    
   const listItem = document.createElement('div'); // создать див
   const rem = document.createElement('button'); // соз кнп удал
   const check = document.createElement('input');
   
   
   check.type = 'checkbox';                      // доб чекбокс
   rem.prepend('x');                              // доб сод кнопки
   rem.classList.add('btn_new');
   listItem.classList.add('list_item');           //добавить класс к диву
   listItem.prepend(inp.value);                    // пол содерж велю
   listItem.prepend(check)                        // добавить чекбокс
   listItem.append(rem)                        // доб кнопку в строку
   if (inp.value == ''){
    alert('введите текст!')
   }
   if (inp.value.length > 1){
    list.prepend(listItem); 
   }
  // list.prepend(listItem);                          // доб в список новое зн
   
  





check.addEventListener('change', (ev) =>{
    ev.target.parentNode.classList.toggle('done'); // доб перекл и класс
    // ev.target именно тот блок в котором происходит событие
    let disabled = ev.target.nextElementSibling.disabled; // сделать кнопку не активной
    if (disabled){
        ev.target.nextElementSibling.disabled = '';
    } else{
        ev.target.nextElementSibling.disabled = 'disabled';
    }
})
   rem.addEventListener('click', (ev) => {  // метод удалить

        ev.target.parentNode.remove();  // событие уд

   });
   inp.value = '';                        // вернуть велью пустым
   
});



btn2.addEventListener('click', () => {
    let done = document.getElementsByClassName('done');
   // done[0].remove();
   function show() {
    for(i = 0; i < done.length; i++){
      if ('done'){
         
        done[i].remove(); 
      }
      return show();
  }
   
}
show();
   
});