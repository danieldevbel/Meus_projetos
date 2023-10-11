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

const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

function slider() {
    contador++;

    if (contador >= imagens.length) {
        contador = 0;
    }
    
    box.style.transform = `translateY(${-contador * 299}px)`
}

setInterval(slider, 4000);

document.getElementById("botao-redirecionar").addEventListener("click", function() {
    window.location.href = "fotos.html";
});
