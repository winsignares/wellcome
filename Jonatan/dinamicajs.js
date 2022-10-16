var usuariocreado;
var num = 2;

for (let i = 0; i < num; i++) {

    var Login_Or_Regist = prompt("Bienvenido a JS!\nTiene cuenta en esta app?  (si/no)");

    if (Login_Or_Regist == "si") {

        var validar_nombre = prompt("Ingrese su nombre de usuario para validar");
        var validar_passwd = prompt("Ingrese su contraseña");

        if (contraseña_creado == validar_passwd || usuariocreado == validar_nombre) {
            alert("Bienvenido "+usuariocreado+"!");
        } else{
            alert("Favor ingrese bien la contraseña");
            num++;
        }

    } else if (Login_Or_Regist == "no") {
        var h = 1;
        for (let j = 0; j < h; j++) {

            var nombre_usuario_reg = prompt("Ingrese un nombre de usuario para el registro");
            var passwd = prompt("ingrese una contraseña");
            var confirmacion = prompt("Quiere tener '" + nombre_usuario_reg + "' como nombre de usuario?");

            if (confirmacion == "si") {

                var conf_usuario = prompt("Usuario registrado!\nIngrese su nombre de usuario nuevamente");
                var conf_passwd = prompt("Ingrese su contraseña de usuario");

                if (conf_usuario == nombre_usuario_reg || conf_passwd == passwd) {
                                        
                    usuariocreado = conf_usuario;
                    contraseña_creado = conf_passwd;
                    alert("Se realizo bien "+ usuariocreado);
                    break;                    

                } else {
                    alert("Favor ingrese bien la contraseña o usuario")
                    h++;
                }

            } else if (confirmacion == "no") {
                h++;
            } else {
                alert("Favor oprimir ('si' o 'no')");
                h++;
            }

        }
    } else{
        alert("Solamente ingrese (si/no)");
    }
}