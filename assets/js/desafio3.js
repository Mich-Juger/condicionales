/* JavaScript Desafío 3*/

let digito_1 = document.querySelector('#digito_1');
let digito_2 = document.querySelector('#digito_2');
let digito_3 = document.querySelector('#digito_3');
let button_ingresar= document.querySelector('#ingresar');
let panel_resultado = document.querySelector('#resultado');

button_ingresar.addEventListener('click', function() {
    let resultado = digito_1.value + digito_2.value + digito_3.value;
    if (resultado == 911){ 
        panel_resultado.innerHTML = "Password 1 correcto";
        panel_resultado.style.color = 'black'
    } else if (resultado == 714){
        panel_resultado.innerHTML = "Password 2 correcto";
        panel_resultado.style.color = 'black'
    } else { 
        panel_resultado.innerHTML = "Password incorrecto";
        panel_resultado.style.color = 'red'
    }
});
/* JavaScript Desafío 3*/
