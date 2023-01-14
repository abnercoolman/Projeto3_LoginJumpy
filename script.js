function validaCadastro() {

    let nomeCompleto = document.getElementById("nomeCompleto").value;
    let eMail = document.getElementById("eMail").value;
    let validaNome = false;
    let validaEmail = false;



    // Valiadação Campo Nome
    if ((nomeCompleto == "") || // Campo não pode ser vazio
        (nomeCompleto == "Nome Completo")) // Campo não pode conter a palavra "Nome Completo"
    {
        document.getElementById("obg-field-name").style.visibility = "visible";
        validaNome = false;
    }
    else {
        document.getElementById("obg-field-name").style.visibility = "hidden";
        validaNome = false;
    }



    // Valiadação Campo E-mail
    let usuario = eMail.substring(0, eMail.indexOf("@")); // Cria uma 'string' que vai até antes do @
    /* 'console.log()' só funcionará com a inserção do e-mail */
    // console.log(usuario);
    let dominio = eMail.substring(eMail.indexOf("@") + 1, eMail.length); // Cria uma 'substring' que vai depois do @
    // console.log(dominio);

    if ((usuario.length >= 1) && // Tamanho usuário >=l a 1 caractere
        (dominio.length >= 3) && // Tamanho do domínio >= a 3 caracteres
        (usuario.search("@") == -1) && // Usuário não pode conter o @
        (dominio.search("@") == -1) && // Domínio não pode conter o @
        (usuario.search(" ") == -1) && // Usuario não pode ser vazio
        (dominio.search(" ") == -1) && // Domínio não pode ser vazio
        (dominio.search(".") != -1) && // Domínio precisa ter "."
        (dominio.indexOf(".") >= 1) && // Posição do primeiro ponto tem que ser >= 1, a posição 0 deve ser ocupado depois do @
        (dominio.lastIndexOf(".") < dominio.length - 1)) // Dominio deve ser finalizado por um caractere
    {
        document.getElementById("obg-field-email").style.visibility = "hidden";
        validaEmail = true;
    }
    else {
        document.getElementById("obg-field-email").style.visibility = "visible";
        validaEmail = false;
    }



    // Validação Cadastro
    if (validaNome == false && validaEmail == false) {
        
        document.getElementById("alerta-campo-obrig-cad").innerHTML = "Campos obrigatórios não registrados."
        document.getElementById("alerta-campo-obrig-cad").style.color = "var(--red-alert)";

    } else {
        document.getElementById("alerta-campo-obrig-cad").innerHTML = "Sucesso!"
        document.getElementById("alerta-campo-obrig-cad").style.color = "var(--green-alert)";
    }
    
}

