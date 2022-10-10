/* JavaScript Desafío 2*/


let sticker1 = document.querySelector('#sticker1');
let sticker2 = document.querySelector('#sticker2');
let sticker3 = document.querySelector('#sticker3');
let button_verificar = document.querySelector('#verificar');
let resultado_verificar = document.querySelector('#resultado_verificar');


button_verificar.addEventListener('click', function() {
    let resultado = Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value);
    if (resultado <= 10){ 
        resultado_verificar.innerHTML = 'Total a llevar: '+ resultado;
    } else { 
        resultado_verificar.innerHTML = "Llevas demasiados stickers";
    }
});

/* JavaScript Desafío 2*/
