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
        'config': {
            'es': 'Configuraciones',
            'en': 'Settings'
        },
        'acerca': {
            'es': 'Acerca de nosotros',
            'en': 'About us'
        },
        'acerca2': {
            'es': 'Somos una empresa dedicada a la creacion de aplicaciones para restaurantes, en las cuales pueden tener el control de su negocio y facilitar enormemente su gestión en el día a día con lo que respecta a su operación.',
            'en': 'We are a company dedicated to creating applications for restaurants, in which they can have control of their business and greatly facilitate their day-to-day management with regard to their operation.'
        },
        'acerca3': {
            'es': 'Easy Service se encarga de gestionar los pedidos de tus clientes, los cuales tienen la libertad de analizar rápida y fácilmente, teniendo asi la oportunidad de liberar cargas a tus empleados y hacer el tiempo de trabajo mas eficáz.',
            'en': 'Easy Service is responsible for managing your clients orders, which they have the freedom to analyze quickly and easily, thus having the opportunity to free up your employees burdens and make work time more efficient.'
        },
        'dark': {
          'es': 'Modo Oscuro',
          'en': 'Dark Mode'
        },
        'carrito': {
          'es': 'Ir al carrito',
          'en': 'Go to cart'
        },
        'user': {
          'es': 'Ingrese su usuario y contraseña',
          'en': 'Type your user and password'
        },
        'user2': {
          'es': 'Usuario',
          'en': 'User'
        },
        'pass': {
          'es': 'Contraseña',
          'en': 'Password'
        },
        'register': {
          'es': 'Registrarse',
          'en': 'Sign In'
        },
        'confirm-pass': {
          'es': 'Registrarse',
          'en': 'Sign In'
        },
        'carritocomp': {
          'es': 'Carrito de compras',
          'en': 'Cart'
        },
        'comprar': {
          'es': 'Comprar',
          'en': 'Buy'
        },
        'adicional': {
          'es': 'Precio Adicional',
          'en': 'Aditional Price'
        },
        'cedula': {
          'es': 'Cedula',
          'en': 'ID'
        },
        'fecha': {
          'es': 'Fecha de Nacimiento',
          'en': 'Birthday'
        },
    };

    return traducciones[clave][idiomaActual];
}

function actualizarTraducciones() {
  const elementosTitulo = document.querySelectorAll('.bienvenido');
  const elementosLlamar = document.querySelectorAll('.llamar');
  const elementosMenu = document.querySelectorAll('.menu');
  const elementosAyuda = document.querySelectorAll('.ayuda');
  const elementosConfig = document.querySelectorAll('.config');
  const elementosAcerca = document.querySelectorAll('.acerca');
  const elementosAcerca2 = document.querySelectorAll('.acerca2');
  const elementosAcerca3 = document.querySelectorAll('.acerca3');
  const elementosDark = document.querySelectorAll('.dark');
  const elementosCart = document.querySelectorAll('.cart');
  const elementosUser = document.querySelectorAll('.user');
  const elementosPass = document.querySelectorAll('.pass');
  const elementosRegister = document.querySelectorAll('.register');
  const elementosConfirm = document.querySelectorAll('.confirm-pass');
  const elementosCarritocomp = document.querySelectorAll('.carritocomp');
  const elementosComprar = document.querySelectorAll('.comprar');
  const elementosAdicional = document.querySelectorAll('.adicional');
  const elementosUser2 = document.querySelectorAll('.user2');
  const elementosCedula = document.querySelectorAll('.cedula');
  const elementosFecha = document.querySelectorAll('.fecha');
  
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
  elementosConfig.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('config');
  });
  elementosAcerca.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('acerca');
  });
  elementosAcerca2.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('acerca2');
  });
  elementosAcerca3.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('acerca3');
  });
  elementosDark.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('dark');
  });
  elementosCart.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('cart');
  });
  elementosUser.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('user');
  });
  elementosUser2.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('user2');
  });
  elementosPass.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('pass');
  });
  elementosRegister.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('register');
  });
  elementosConfirm.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('confirm-pass');
  });
  elementosCarritocomp.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('carritocomp');
  });
  elementosComprar.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('comprar');
  });
  elementosAdicional.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('adicional');
  });
  elementosCedula.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('cedula');
  });
  elementosFecha.forEach(function (elemento) {
    elemento.innerText = getTextoTraducido('fecha');
  });
}
