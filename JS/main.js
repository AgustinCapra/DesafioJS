//Desafio complementario

/* for (i=0; i<3; i++) {
    let color = prompt('Ingrese el color favorito de Agustin');

    if (color == "verde" || color == "Verde" || color == "VERDE") {
        alert('El color ingresado es el correcto!');
        break
    }

    alert('Incorrecto, vuelva a intentarlo')
} */


//Desafio obligatorio Nº 1 Simulador interactivo.

let scorePlayer1 = Math.floor(Math.random() * (1000 - 1)) + 1;
let scorePlayer2 = Math.floor(Math.random() * (1000 - 1)) + 1;
let scorePlayer3 = Math.floor(Math.random() * (1000 - 1)) + 1;
let perfectScore = 150;


function puntuacion(){
if (scorePlayer1 > scorePlayer2 && scorePlayer1 > scorePlayer3 || scorePlayer1 == perfectScore) {
    alert('El ganador es player 1 con: ' + scorePlayer1 + ' puntos.')
} else if (scorePlayer2 > scorePlayer1 && scorePlayer2 > scorePlayer3 || scorePlayer2 == perfectScore) {
        alert('El ganador es player 2 con: ' + scorePlayer2 + ' puntos.')
    } else if (scorePlayer3 > scorePlayer1 && scorePlayer3 > scorePlayer2 || scorePlayer3 == perfectScore) {
        alert('El ganador es player 3 con: ' + scorePlayer3 + ' puntos.')
    } else {
        alert ('No hay ganadores, es un empate')
}
}

puntuacion();

console.log('Player 1: ' + scorePlayer1, 'Player 2: ' + scorePlayer2, 'Player 3: ' + scorePlayer3);