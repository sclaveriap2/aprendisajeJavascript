function happyBirthday(username,age){
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log(`Happy birthday ${username} you`);
    console.log("Happy birthday to you");
    console.log(`you are ${age} years old`);
}

happyBirthday("Dude",33);

function add(x,y){
    return x+y;
}
function parImpar(x){
    if(x%2==0){
        return "par";
    }else{
        return "impar"
    }
}

function parImpar2(x){
    return x % 2 === 0 ? "Par" : "Impar";
}

function parImparBoolean(x){ //turnary
    return x % 2 === 0 ? true : false;
}

function EmailValido(correo){
    if (correo.includes("@")){
        return true;
    }else{
        return false
    }
}

function EmailValido2(correo){ //Turnary
    
    return correo.includes("@") ? true : false;
}
let answer = add(2,3);
console.log(answer);
console.log(parImparBoolean(72));
console.log(EmailValido2("Seba@2.cl"));


const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp*9/5+32;
        result.textContent = temp.toFixed(1) + "F"
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp-32)*(5/9);
        result.textContent = temp.toFixed(1) + "F"
    }else{
        result.textContent = "Select a unit";
    }
}