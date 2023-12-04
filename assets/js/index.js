function tema() {
  console.log('entra')
  let actual = localStorage.getItem('darkmode')
  var elementoConTema = document.getElementById("elementoConTema");
  elementoConTema.setAttribute("data-bs-theme", actual);
}