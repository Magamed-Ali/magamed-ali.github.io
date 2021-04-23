

let ul = document.getElementById('nev_id');
ul.classList.add('nevclass');


 /////

let btn_1 = document.getElementById('btn_1');
btn_1.addEventListener('click', function(){  
    let li = document.createElement('li');
    li.classList.add('list-item');
    li.prepend('добаляет текст в начало');
    ul.prepend(li);
    li.classList.toggle('bg-red1');
    
     
   });
   
let btn_2 = document.getElementById('btn_2');
btn_2.addEventListener('click', function (){
    let li = document.createElement('li');
  
    li.append('добавить текст в Конец');
    ul.append(li)
    li.classList.toggle('bg-red2');

});

let btn_3 = document.getElementById('btn_3');

 btn_3.addEventListener('click', function(){
       
    ul.firstChild.remove()
        
});

let btn_4 = document.getElementById('btn_4');

btn_4.addEventListener('click', function(){

    ul.lastChild.remove()
});
        
let btn_5 = document.getElementById('btn_5');

btn_5.addEventListener('click', function(){
    let body = document.getElementById('body');
   body.innerHTML = '';

   body.style.backgroundColor = 'Black';
   
    
});