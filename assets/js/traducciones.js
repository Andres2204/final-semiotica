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
  idiomaActual = obtenerIdiomaActual();
  const nuevoIdioma = idiomaActual === 'es' ? 'en' : 'es';
  establecerIdiomaActual(nuevoIdioma);
}

function getTextoTraducido(clave) {
    const traducciones = {
        'bienvenido': {
            'es': 'Bienvenido',
            'en': 'Welcome'
        },
        'llamar': {
            'es': 'Llamar Mesero',
            'en': 'Call Waiter'
        },
        'menu': {
            'es': 'Ver menu',
            'en': 'See Menu'
        },
        'ayuda': {
            'es': '¿Necesitas Ayuda?',
            'en': '¿Need Help?'
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
  const elementosTitulo = document.querySelectorAll('.bienvenido');
  const elementosLlamar = document.querySelectorAll('.llamar');
  const elementosMenu = document.querySelectorAll('.menu');
  const elementosAyuda = document.querySelectorAll('.ayuda');
  elementosTitulo.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('bienvenido');
  });
  elementosLlamar.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('llamar');
  });
  elementosMenu.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('menu');
  });
  elementosAyuda.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('ayuda');
  });

    // elementosParrafo.forEach(function(elemento) {
    //     elemento.innerText = getTextoTraducido('parrafo');
    // });
}
