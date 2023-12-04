$("#login").click(function (e) { 
    e.preventDefault();
var nombreUsuarioLogin = $("#typeEmailX").val();
var contrasenaLogin = $("#typePasswordX").val();
// Checking for blank fields.
if( nombreUsuarioLogin =='' || contrasenaLogin ==''){
alert("por favor rellena todos los espacios...!!!!!!");
}else{
    // Recuperar usuarios almacenados en localStorage
    var usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si el usuario y la contraseña coinciden con alguno almacenado
    var usuarioValido = usuariosGuardados.find(function(usuario) {
        return usuario.nombreUsuario === nombreUsuarioLogin && usuario.contrasena === contrasenaLogin;
    });

    if (usuarioValido) {
        alert('Inicio de sesión exitoso');
        // Puedes redirigir a otra página o realizar acciones adicionales después del inicio de sesión
        localStorage.setItem("login",nombreUsuarioLogin);
        console.log(localStorage.getItem('usuarios'));
        location.href = "usuario.html";
    } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
}
});

