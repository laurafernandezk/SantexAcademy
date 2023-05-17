
const numberLocalidades= document.getElementById("number-localidades");

const numberMentores= document.getElementById("number-mentores");

const numberParticipantes= document.getElementById("number-participantes");

let cantidadLocalidades=0;

let cantidadMentores=0;

let cantidadParticipantes=0;

let tiempoLocalidades= setInterval(() => {
    cantidadLocalidades ++
    numberLocalidades.textContent = cantidadLocalidades
    if(cantidadLocalidades ===58){
        clearInterval(tiempoLocalidades)
    }
}, 38);

let tiempoMentores= setInterval(() => {
    cantidadMentores ++
    numberMentores.textContent = cantidadMentores
    if(cantidadMentores ===50){
        clearInterval(tiempoMentores)
    }
}, 42);


let tiempoParticipantes=setInterval(() => {
    cantidadParticipantes++
    numberParticipantes.textContent=cantidadParticipantes
    if(cantidadParticipantes===301){
        clearInterval(tiempoParticipantes)
    }
    
}, 6);