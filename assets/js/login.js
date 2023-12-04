$("#login").click(function (e) { 
    e.preventDefault();
var email = $("#typeEmailX").val();
var password = $("#typePasswordX").val();
// Checking for blank fields.
if( email =='' || password ==''){
alert("por favor rellena todos los espacios...!!!!!!");
}else{
}
});

function tema() {
    console.log('entra')
    let actual = localStorage.getItem('darkmode')
    var elementoConTema = document.getElementById("elementoConTema");
    elementoConTema.setAttribute("data-bs-theme", actual);
  }

