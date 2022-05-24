let cantidadInvitados = 0;
let entrada = document.getElementById('entrada');
let btn = document.getElementById('btn');
let actualizado = document.getElementById("ultimo");
let listaInvitados = document.getElementById("lista")
let cantidadTotal = document.getElementById('cantidad');

btn.innerHTML = 'Agregar invitado';
btn.addEventListener('click', function() {
    cantidadInvitados++;
    let invitado = entrada.value;
    if (invitado != "") {
        actualizado.innerHTML = 'El último invitado/a agregado fue: ' + invitado;
        let invitados = document.createElement('li');
        let txt = document.createTextNode(invitado);
        invitados.appendChild(txt);
        listaInvitados.appendChild(invitados);

        /* if (cantidadInvitados > 1) {
            cantidadTotal.innerHTML = `Invitados totales: ${cantidadInvitados} personas.`
        }else{
            cantidadTotal.innerHTML = `Invitados totales: ${cantidadInvitados} persona.`
        } */
        cantidadInvitados > 1 ? cantidadTotal.innerHTML = `Invitados totales: ${cantidadInvitados} personas.` : cantidadTotal.innerHTML = `Invitados totales: ${cantidadInvitados} persona.`
    }
})

document.addEventListener("click", function (e) {
    if (e.target.localName == 'li') {
        e.target.classList.add('asistio')
    }
})





//Desafio complementario Nº 2 ARRAYS
/* class Jugador {
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
console.log(equipoTitular); */