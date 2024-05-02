const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Adivina un numero entre ${minNum} y ${maxNum}`)
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Entra un numero valido");
    }else if(guess<minNum || guess>maxNum){
        window.alert("Entra un valor entre 1 y 100");
    }else{
        attempts++;
        if(guess<answer){
            window.alert("muy bajo");
        }else if(guess >answer){
            window.alert("Muy alto");
        }else{
            window.alert(`Correcto, ${answer} es la respuesta, te tomo ${attempts} intentos`);
            running= false;
        }
    }
    
}