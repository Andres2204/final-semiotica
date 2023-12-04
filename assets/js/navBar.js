function tema() {
  console.log('entra')
  let actual = localStorage.getItem('darkmode')
  var elementoConTema = document.getElementById("elementoConTema");
  elementoConTema.setAttribute("data-bs-theme", actual);
}

function goToConfig() {
  window.location.href = "configuraciones.html"
}

function goToUser() {
  window.location.href = "usuario.html"
}