// script.js
let idiomaActual = 'es';

function cambiarIdioma() {
  console.log(idiomaActual)
    idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
    $('#titulo').text(getTextoTraducido('titulo'));
    // $('#parrafo').text(getTextoTraducido('parrafo'));
}

function getTextoTraducido(clave) {
  console.log(clave)
    const traducciones = {
        'titulo': {
            'es': 'Bienvenido',
            'en': 'Welcome'
        }
    };

    return traducciones[clave][idiomaActual];
}

$(document).ready(function() {
    // Cargar el contenido del otro archivo HTML usando jQuery
    $('#titulo').load('./index.html #titulo');
});
