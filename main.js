
// УРОК - 3


// document.getElementById('one').innerHTML = 'Hello World'


// document - обращение к нашему документы 
// getElementById - найти значение по id
// innerHTML - Свойство, которое представляет возможность получить содержимое элемента и изменять содержимое элемента посредством дан ого свойства.


// document.querySelector('#one').innerHTML = 666

// document.querySelector('p').innerHTML = 'Anime'



// let btnn = document.querySelector('.btn')
// let inp = document.querySelector('.txt')

// btnn.onclick = function (){
//     console.log('da');
//     console.log(inp.value);
// }


// let btnn = document.querySelector('.btn')
// let inp = document.querySelector('.txt')

// btnn.onclick = function (){
//     console.log('da');
//     let e = inp.value
//     console.log(e);
// }



// let btnn = document.querySelector('.btn')
// let inp = document.querySelector('.txt')
// let out = document.querySelector('#one')

// btnn.onclick = function (){
//     console.log('da');
//     let e = inp.value
//     out.innerHTML = `${e}`
// }



// let myhappy = prompt('Когда у тебя ДР бро?')
// console.log(myhappy);


// if(Условие){
//     действие которое произойдет если условие истино
// }


// let myhappy = prompt('Когда у тебя ДР бро?')
// if(myhappy == 22){
//     console.log('yes');
// }else{
//     console.log('no');
// }



let out = document.querySelector('#one')

let myhappy = prompt('Когда у тебя ДР бро?')
if(myhappy >= 100){
    out.innerHTML = 'yes';
}else{
    console.log(myhappy);
}