class Usuarios {

    constructor() {
        this.usuarios = [];
    }

    add_usuario(nome) {
	    this.usuarios.push({nome});
    }

    list_of_usuarios() {
	    return this.usuarios
    }

    number_of_usuarios() {
        return this.usuarios.length;
    }

}

class UsuariosSingleton {

  constructor() {
      if (!UsuariosSingleton.instance) {
        UsuariosSingleton.instance = new Usuarios();
      }
  }

  getInstance() {
      return UsuariosSingleton.instance;
  }

}

module.exports = UsuariosSingleton;
