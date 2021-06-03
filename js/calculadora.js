'use strict'
//Declaramos variables
var operandoa;
var operandob;
var operacion;

const cero = document.querySelector('#cero');
const uno = document.querySelector('#uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');
const cuatro = document.querySelector('#cuatro');
const cinco = document.querySelector('#cinco');
const seis = document.querySelector('#seis');
const siete = document.querySelector('#siete');
const ocho = document.querySelector('#ocho');
const nueve = document.querySelector('#nueve');
const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const division = document.querySelector('#division');
const multiplicacion = document.querySelector('#multiplicacion');
const reset = document.querySelector('#reset');
const igual = document.querySelector('#igual');
const limpiar = document.querySelector('#limpiar');
const resultado = document.querySelector('#resultado');

//Eventos de click
uno.onclick = function () {
    resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function () {
    resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function () {
    resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function () {
    resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function () {
    resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function () {
    resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function () {
    resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function () {
    resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function () {
    resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function () {
    resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function () {
    resetear();
}

limpiar.onclick = function () {
    resetear();
}

suma.onclick = function () {
    operandoa = resultado.textContent;
    operacion = "+";
    resultado.textContent = "";
}

resta.onclick = function () {
    operandoa = resultado.textContent;
    operacion = "-";
    resultado.textContent = "";
}
multiplicacion.onclick = function () {
    operandoa = resultado.textContent;
    operacion = "*";
    resultado.textContent = "";
}
division.onclick = function () {
    operandoa = resultado.textContent;
    operacion = "/";
    resultado.textContent = "";
}
igual.onclick = function () {
    operandob = resultado.textContent;
    resolver();
}


function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}

var fondo = document.querySelector('#fondo');
const oscuro = document.querySelector('#dark')
const blanco = document.querySelector('#light')

oscuro.onclick = function () {
    fondo.style.backgroundColor = " #171718 ";
}

blanco.onclick = function () {
    fondo.style.backgroundColor = "#FFFCFF";
}


