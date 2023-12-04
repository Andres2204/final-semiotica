$("#registrar").click(function (e) { 
    e.preventDefault();
    var nombreUsuario = $("#typeEmailX").val();
    var contrasena = $("#typePasswordX").val();
    var passwordconfir = $("#typePasswordXconfir").val();
// Checking for blank fields.
if( nombreUsuario =='' || contrasena =='' || passwordconfir ==''){
alert("por favor rellena todos los espacios...!!!!!!");
}else if(contrasena != passwordconfir){
    alert("La contraseña tiene que ser igual...!!!!!!");
}else{
    var usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    var usuarioExistente = usuariosGuardados.find(function(usuario) {
        return usuario.nombreUsuario === nombreUsuario;
    });
    if (usuarioExistente) {
        alert('El usuario ya existe. Por favor, elige otro nombre de usuario.');
    } else {
        // Agregar el nuevo usuario al array
        usuariosGuardados.push({
            nombreUsuario: nombreUsuario,
            contrasena: contrasena,
            email: "",
            cedula: "",
            fechaNacimiento: ""
        });

        // Guardar el array actualizado en localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
        alert('Usuario guardado exitosamente');
        location.href = 'login.html';
    }
   
}
});