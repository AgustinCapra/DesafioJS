//Desafio complementario Nº 2 ARRAYS
class Jugador {
    constructor (nombre, numero, edad, lesionado) {
        this.nombre = nombre;
        this.numero = numero;
        this.edad = edad;
        this.lesionado = lesionado;
    } 
    lesion() {
        this.lesionado = true;
    }
}

let jugador1 = new Jugador ('Pedro', '7', '34', false);
let jugador2 = new Jugador ('Javier', '10', '31', false);
let jugador3 = new Jugador ('Carlos', '3', '36', false);
let jugador4 = new Jugador ('Juan', '9', '28', false);
let jugador5 = new Jugador ('Agustin', '1', '68', false);

jugador2.lesion();

const equipoTitular = [jugador1, jugador2, jugador3, jugador4, jugador5];
console.log(equipoTitular);