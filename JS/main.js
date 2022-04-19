for (i=0; i<3; i++) {
    let color = prompt('Ingrese el color favorito de Agustin');

    if (color == "verde" || color == "Verde" || color == "VERDE") {
        alert('El color ingresado es el correcto!');
        break
    }

    alert('Incorrecto, vuelva a intentarlo')
}