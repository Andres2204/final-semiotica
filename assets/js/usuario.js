var usuario = localStorage.getItem("login");
var usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

// Buscar el usuario por nombre
var i = 0;
while (usuariosGuardados[i].nombreUsuario != usuario) {
    i++;
}

$("#usuario").attr("placeholder", usuario);
$("#contraseña").attr("placeholder", usuariosGuardados[i].contrasena);
$("#email").attr("placeholder", usuariosGuardados[i].email);
$("#cedula").attr("placeholder", usuariosGuardados[i].cedula);
$("#FechaNacimiento").attr("placeholder", usuariosGuardados[i].fechaNacimiento);


$("#guardar").click(function (e) { 
    e.preventDefault();
    if($("#usuario").val() != ""){
        usuariosGuardados[i].nombreUsuario = $("#usuario").val();
        localStorage.setItem("login") = $("#usuario").val();
    }
    if($("#contraseña").val() != ""){
        usuariosGuardados[i].contrasena = $("#contraseña").val();
    }
    if($("#email").val() != ""){
        usuariosGuardados[i].email = $("#email").val();
    }
    if($("#cedula").val() != "" && !isNaN($("#cedula").val())){
        usuariosGuardados[i].cedula = $("#cedula").val();
    }
    if($("#FechaNacimiento").val() != ""){
        usuariosGuardados[i].fechaNacimiento = $("#FechaNacimiento").val();
    }
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
    console.log(usuariosGuardados[i]);
});