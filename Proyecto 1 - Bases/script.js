//console.log("Hello");
//console.log("hello2");

//window.alert("alerta");
//window.alert("segunda");

//asi se comenta

/*asi
se comentan
mas lineas*/
//obtener elemento por su id
//document.getElementById("myH1").textContent = "Hello";
//document.getElementById("myP").textContent = "lorem";

//let x;
//x=100;
//console.log(x);
//let age = 25, price=15;
//console.log(`suma de ${age} y ${price} es: ${age+price}`);

//%tambien es modulo y ** es elevado
/*let fullName="Seba";
let age=31;
let pro=true;
document.getElementById("p1").textContent= `Nombre: ${fullName}`;
document.getElementById("p2").textContent= `Edad: ${age}`;
if(pro){
    document.getElementById("p3").textContent= `Estado: Profesional`;
}else{
    document.getElementById("p3").textContent= `Estado: Estudiante`;
}*/

//absorver datos
/*forma facil
let username;
username = window.prompt("username");
console.log(username);*/

/*forma util
let username2;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("username2").value;
    document.getElementById("myH1").textContent = username;
}
*/

/*Asi no se incrementa el valor, solo se le agrega al valor
let age = window.prompt("How old?");
age+=1;
console.log(age);*///el resultado en prompt es age1, es decir el numero segido consecutivo de un 1

/*let age = window.prompt("how old?");
age = Number(age); //Se convierte el objeto a tipo numerico
age+=1;
console.log(age);*///De esta forma si se suma 

//Typeconversion
 let x;//="pizza"|="0"|=""
 let y;//="pizza"|="0"|=""
 let z;//="pizza"|="0"|=""
 const PI = 3.14159;
 let radius;
 let circumference;

 //radius = window.prompt('Enter radius of circle');
 

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("username2").value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}
//Convertimos
 x=Number(x);
 y=String(y);
 z=Boolean(z);
//resultados
 console.log(x, typeof x);//NaN, 'number'|0, 'number'|NaN, 'number'
 console.log(y, typeof y);//pizza, 'string'|0, 'string'| (vacio), 'string'
 console.log(z, typeof z);//true, 'boolean'|false, 'boolean'|false, 'boolean'