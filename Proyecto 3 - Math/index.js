//-------------------------------------Math-------------------------------------
//console.log(Math.PI);
//console.log(Math.E);

//let x = 3.21;
//let y = 2;
//let z = 1;

//Funciones en Math
//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x,y);
//z = Math.pow(y,x);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x); //-1 si es negativo, 1 si es positivo, 0 si es 0

//let max = Math.max(x, y, z);
//let min = Math.min(x, y, z);
//console.log(max);
//console.log(min);s
//-------------------------------------Math-------------------------------------


//let max =50;
//let min = 100;

//let randNum = Math.floor(Math.random() * (max - min))+min;//el numero despues del * limita el numero
//console.log(randNum);

const myButton = document.getElementById("roll");
const myLabel = document.getElementById("myLabel");
const max = 6;
const min = 1;
let randNum;

myButton.onclick = function(){
    randNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randNum;
}

const myCheck = document.getElementById("myCheck");
const visa = document.getElementById("visa");
const master = document.getElementById("master");
const transbank = document.getElementById("transbank");

const mysubmit = document.getElementById("mysubmit");

const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mysubmit.onclick = function(){
    if(myCheck.checked){
        subResult.textContent = `you are subscribed`;
    }else{
        subResult.textContent = `you are not subscribed`;
    }
    if(visa.checked){
        payResult.textContent = `Paid with visa`;
    }else if(master.checked){
        payResult.textContent = `Paid with MasterCard`;
    }else if(transbank.checked){
        payResult.textContent = `Paid with transbank`;
    }else{
        payResult.textContent = `Not paid`;
    }
}

//-------------------------ternary operator---------------------------

let age =  21;

let message = age >= 18 ? "you're an adult" : "you're underage";
console.log(message);

let time = 16;
let greeting = time < 12 ? "good morning" : "good afternoon";
console.log(greeting)

let isStudent = false;
let st = isStudent ? "you're a student" : "you're not a student";
console.log(st);

let purchaseAmount = 125;
let discount = purchaseAmount>=100 ? 10 : 0;
console.log(`your total is $${purchaseAmount - purchaseAmount*(discount/100)}`)
//-------------------------------------------------------------------

//------------------------String methods-----------------------------

let telefono = "123-456-789";
let userName = "seba"; 
console.log(userName.charAt(0));//Encontrar un elemento en posicion x en un string
console.log(userName.indexOf("a"));//Encontrar posición de un elemento en un string
console.log(userName.length);//largo de un string
console.log(userName.trim());//borra los ultimos espacios (?)
console.log(userName.repeat(3));//Repite n veces el string de manera consecutiva
console.log(userName.startsWith("s"));//boolean, confirma si un string comienza con un caracter
console.log(userName.endsWith("a"));//boolean, termina con el caracter indicado o no
console.log(userName.includes(" "));// Boolean, confirma si el string contiene el caracter especificado
console.log(telefono.replaceAll("-",""));//cambia todos los elementos indicados por el elemendo querido
console.log(telefono.padStart(15,"0"));//agrega al principio la cantidad faltante de caracteres, siendo estos los indicados
console.log(telefono.padEnd(15,"0"));//agrega al final los caracteres indicados
//-------------------------------------------------------------------


//------------------------string slicing-----------------------------

const NombreCompleto = "Sebastian Claveria";
//let primerNombre = NombreCompleto.slice(0,9);
//let Apellido = NombreCompleto.slice(10, 18);

let primerNombre = NombreCompleto.slice(0, NombreCompleto.indexOf(" "));
let Apellido = NombreCompleto.slice(NombreCompleto.indexOf(" ")+1);

console.log(primerNombre);
console.log(Apellido);
console.log(NombreCompleto.slice(-8));// Sirve par imprimir los ultimos caracteres del string

const email = "seba@correo.cl";
let userName2 = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);
console.log(userName2);
console.log(extension);
//-------------------------------------------------------------------

//------------------------Method Chaining----------------------------

//let nombreUsuario = window.prompt("Enter username:");
//nombreUsuario = nombreUsuario.trim();
//let letter = nombreUsuario.charAt(0);
//letter = letter.toUpperCase();
//let extraChar = nombreUsuario.slice(1);
//extraChar = extraChar.toLowerCase();
//nombreUsuario = letter + extraChar;
//console.log(nombreUsuario);

//nombreUsuario = nombreUsuario.trim().charAt(0).toUpperCase() + nombreUsuario.trim().slice(1).toLowerCase();
//console.log(nombreUsuario);
//-------------------------------------------------------------------

//------------------------Operadores Logicos-------------------------
//                          los operadores logicos son:
//                                    AND = &&
//                                    OR  = ||
//                                    NOT = !
//const temp = 20;
//                        Otros operadores logicos:
/*
                                  = es asignacion
                                  == es comparador
                                  === comparador estricto (contenido y tipo de dato)
                                  != inequidad
                                  !== inequidad estricta (contenido y tipo de dato)
*/

//Si una variable no es definida, queda como undefined, no como NULL o vacia

