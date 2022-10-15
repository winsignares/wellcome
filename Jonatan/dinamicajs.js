/*console.log("Jajaja a empezado el registro!");
var Login_Or_Regist = prompt("Bienvenido a JS!\nTiene cuenta en esta app?");
var usuariocreado;
var num = 1;
var confirmaciones_si = ["si", "yes","Si", "SI","YES"];
var confirmaciones_no = ["no", "nou", "No", "nO", "NO"];

for (let i = 0; i < num; i++) {
    
    if (Login_Or_Regist == confirmaciones_si) {

        alert(usuariocreado);
} else if (Login_Or_Regist == "no") {
    
    var nombre_usuario_reg = prompt("Ingrese un nombre de usuario para el registro");
    var passwd = prompt("ingrese una contraseña");
    var confirmacion = prompt("Quiere tener "+nombre_usuario_reg+" como nombre de usuario?");
    
    if (confirmacion == confirmaciones_si) {

        var conf_usuario = prompt("Usuario registrado!\nIngrese su nombre de usuario nuevamente");
        var conf_passwd = prompt("Ingrese su contraseña de usuario");

        if  (conf_usuario == nombre_usuario_reg || conf_passwd == passwd) {
            
            usuariocreado = conf_usuario;
            //return usuariocreado;
    } else {
        alert("Favor ingrese bien la contraseña")
    }

} else {
    alert("Favor oprimir ('si' o 'no')");
}
}
}*/