const UsuariosSingleton = require("./usuarios_singleton.js")

const print_usuarios = (lista_usuarios) => {
  console.log("-------------------------");
  lista_usuarios.forEach(usuario => {
    console.log(usuario)
  });
}

var us = new UsuariosSingleton().getInstance()
console.log("Número de Usuários:", us.number_of_usuarios())
us.add_usuario("Juvenal")
us.add_usuario("Donald")
print_usuarios(us.list_of_usuarios())
console.log("Número de Usuários:", us.number_of_usuarios())
us2 = new UsuariosSingleton().getInstance()
us2.add_usuario("Óxto")
print_usuarios(us2.list_of_usuarios())
console.log("Número de Usuários:", us.number_of_usuarios())
