// Máscara Telefone

function maskTel() {
    var input_tel = document.querySelector('#id_phone');

    var inputlength = input_tel.value.length;

    if (inputlength === 0) {
        input_tel.value += '(';
    }
    else if (inputlength === 3) {
        input_tel.value += ')';
    }

    if (input_tel.value[4] == '9') {

        if (inputlength === 9) {
            input_tel.value += '-';
        }
    }
    else {
        if (inputlength === 8) {
            input_tel.value += '-';
        }
    }
}

// Máscara CPF

function maskCpf() {
    var input_cpf = document.querySelector('#id_cpf');

    var inputCpfLength = input_cpf.value.length;

    if (inputCpfLength === 3) {
        input_cpf.value += '.';
    }
    else if (inputCpfLength === 7) {
        input_cpf.value += '.';
    }
    else if (inputCpfLength === 11) {
        input_cpf.value += '-';
    }
}

// Máscara Senha - mostrar/ocultar senha

function showPass() {
    var shiftTextPass = document.querySelector('#inputPassword');
    if (shiftTextPass.type === "password") {
        shiftTextPass.type = "text";
    } else {
        shiftTextPass.type = "password";
    }
}


function validaCadastro() {

    // Valiadação Campo Nome

    let nomeCompleto = document.getElementById("nomeCompleto").value;
    let validaNome = false;


    if ((nomeCompleto == "") || // Campo não pode ser vazio
        (nomeCompleto == "Nome Completo")) // Campo não pode conter a palavra "Nome Completo"
    {
        document.getElementById("obg-field-name").style.visibility = "visible";
        validaNome = false;
    }
    else {
        document.getElementById("obg-field-name").style.visibility = "hidden";
        validaNome = true;
    }



    // Valiadação Campo E-mail

    let eMail = document.getElementById("eMail").value;
    let validaEmail = false;

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



    // Valiadação Campo Telefone
    let id_phone = document.querySelector('#id_phone').value;
    let validaTel = false;

    if ((id_phone == "") || // Campo não pode ser vazio
        (id_phone == "(00)00000-0000") || // Campo não pode conter a string "(00)00000-0000"
        (id_phone.length < 13)) // Campo não pode conter menos de 13 números
    {
        document.getElementById("obg-field-tel").style.visibility = "visible";
        validaTel = false;
    }
    else {
        document.getElementById("obg-field-tel").style.visibility = "hidden";
        validaTel = true;
    }


    // Valiadação Campo CPF
    let id_cpf = document.querySelector('#id_cpf').value;
    let validaCpf = false;

    if ((id_cpf == "") || // Campo não pode ser vazio
        (id_cpf == "000.000.000-00") || // Campo não pode conter a palavra "000.000.000-00"
        (id_cpf.length < 14)) // Campo não pode conter menos de 14 números
    {
        document.getElementById("obg-field-cpf").style.visibility = "visible";
        validaCpf = false;
    }
    else {
        document.getElementById("obg-field-cpf").style.visibility = "hidden";
        validaCpf = true;
    }


    // Valiadação Campo Senha
    let id_pass = document.querySelector('#inputPassword').value;
    let validaPass = false;

    if ((id_pass == "") || // Campo não pode ser vazio
        (id_pass == "*******************") || // Campo não pode conter a palavra "*******************"
        (id_pass.length < 19)) // Campo não pode conter menos de 14 números
    {
        document.getElementById("obg-field-pass").style.visibility = "visible";
        validaPass = false;
    }
    else {
        document.getElementById("obg-field-pass").style.visibility = "hidden";
        validaPass = true;
    }



    // ######## Validação Cadastro ########

    if (validaNome == false ||
        validaEmail == false ||
        validaTel == false ||
        validaCpf == false ||
        validaPass == false) {

        console.log(`validaNome: ${validaNome}`)
        console.log(`validaEmail: ${validaEmail}`)
        console.log(`validaTel: ${validaTel}`)
        console.log(`validaCpf: ${validaCpf}`)
        console.log(`validaPass: ${validaPass}`)

        document.getElementById("alerta-campo-obrig-cad").innerHTML = "Campos obrigatórios não registrados."
        document.getElementById("alerta-campo-obrig-cad").style.color = "var(--red-alert)";

    }
    else if (validaNome == true &&
        validaEmail == true &&
        validaTel == true &&
        validaCpf == true &&
        validaPass == true) {

        console.log(`validaNome: ${validaNome}`)
        console.log(`validaEmail: ${validaEmail}`)
        console.log(`validaTel: ${validaTel}`)
        console.log(`validaCpf: ${validaCpf}`)
        console.log(`validaPass: ${validaPass}`)

        document.getElementById("alerta-campo-obrig-cad").innerHTML = "Sucesso!"
        document.getElementById("alerta-campo-obrig-cad").style.color = "var(--green-alert)";
    }
}