let displayValorAnterior = document.getElementById('valor-anterior');
let displayValorActual = document.getElementById('valor-actual')
let btnsNumeros = document.querySelectorAll('.numero');
let btnsOperadores = document.querySelectorAll('.operador');
let btnUser = document.getElementById("user");

let nombre = prompt("Ingrese usuario");
let titulo = document.getElementById("titulo");

titulo.innerHTML = `Bienvenido ${nombre} a tu calculadora!`;



let display = new Display(displayValorAnterior, displayValorActual);

btnsNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

btnsOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});

let btn = document.getElementById("user");
btn.addEventListener("click", respuestaClick);
function respuestaClick(){
    nombre = prompt("Ingrese usuario");
    localStorage.setItem("Usuario", nombre);
    let lclstr = localStorage.getItem("Usuario")
    titulo.innerHTML = `Bienvenido ${nombre} a tu calculadora!`;
    console.log(lclstr);
}

