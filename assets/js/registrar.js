$("#registrar").click(function (e) { 
    e.preventDefault();
    var email = $("#typeEmailX").val();
    var password = $("#typePasswordX").val();
    var passwordconfir = $("#typePasswordXconfir").val();
// Checking for blank fields.
if( email =='' || password =='' || passwordconfir ==''){
alert("por favor rellena todos los espacios...!!!!!!");
}else if(password != passwordconfir){
    alert("La contraseña tiene que ser igual...!!!!!!");
}else{
    alert("Registrado con exito");
    location.href = 'login.html';
}
});