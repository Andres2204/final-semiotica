var checkbox = document.getElementById("flexSwitchCheckChecked");
var estado = checkbox.checked;

function tema() {
  console.log('entra')
  let actual = localStorage.getItem('darkmode')
  var elementoConTema = document.getElementById("elementoConTema");
  elementoConTema.setAttribute("data-bs-theme", actual);
}

function darkMode(event) {
  let actual = localStorage.getItem('darkmode')



  console.log(estado)
  if (actual !== null) { 
    let setMode = actual === 'dark' ? 'light' : 'dark';
    localStorage.setItem('darkmode', setMode);
    tema()
    // var elementoConTema = document.getElementById("elementoConTema");
    // elementoConTema.setAttribute("data-bs-theme", setMode);

  } else {
    localStorage.setItem('darkmode', 'dark');
  }

}

document.addEventListener('DOMContentLoaded', function() {
  actualizarTraducciones();
});

document.getElementById("flexSwitchCheckChecked").addEventListener("change", darkMode);
