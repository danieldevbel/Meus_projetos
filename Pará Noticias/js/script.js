function validarEmail() {
        var email = document.getElementById("email").value;
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(email === ""){
        alert('VOCE PRECISA DIGITAR UM EMAIL NO CAMPO!')
    }else if (regexEmail.test(email)) {
        alert('PAI D ÉGUA! VOCÊ ACABA DE SE CADASTRAR NO NOSSO SITE.')
    } else {
        alert('EMAIL INVÁLIDO! VERIFIQUE O EMAIL DIGITADO.')
    }
}
