let idiomaActual = 'es';

function obtenerIdiomaActual() {
  console.log('Idioma Obtenido.')
  return localStorage.getItem('idiomaActual') || 'es';
}

function establecerIdiomaActual(idioma) {
  console.log('Idioma Seteado.')
  localStorage.setItem('idiomaActual', idioma);
  actualizarTraducciones();
}

function cambiarIdioma() {
  console.log('Cambiando...')
  const idiomaActual = obtenerIdiomaActual();
  const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
  establecerIdiomaActual(nuevoIdioma);
}


function getTextoTraducido(clave) {
    const traducciones = {
        'titulo': {
            'es': 'Bienvenido',
            'en': 'Welcome'
        },
        // 'parrafo': {
        //     'es': 'Este es un ejemplo de página multilingüe.',
        //     'en': 'This is an example of a multilingual page.'
        // }
        // Agrega más traducciones según sea necesario
    };

    return traducciones[clave][idiomaActual];
}

function actualizarTraducciones() {
  console.log('Actualizando Idioma...')
  // Actualiza todas las traducciones en todas las páginas
  const elementosTitulo = document.querySelectorAll('.titulo');
  // const elementosParrafo = document.querySelectorAll('.parrafo');
  console.log(elementosTitulo)
  elementosTitulo.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('titulo');
    console.log(getTextoTraducido('titulo'))
    console.log('Idioma Seteado')

  });

    // elementosParrafo.forEach(function(elemento) {
    //     elemento.innerText = getTextoTraducido('parrafo');
    // });
}
