
let cepInput = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let complemento = document.querySelector('#complemento');
let bairro = document.querySelector('#bairro');
let localidade = document.querySelector('#localidade');
let estado = document.querySelector('#estado');

cepInput.addEventListener('blur', function (e) {
    let cep = e.target.value;
    let script = document.createElement('script');
    script.src = `https://viacep.com.br/ws/${cep}/json/?callback=popularForm`;
    document.body.appendChild(script);
});

function popularForm(resposta) {
    if (!resposta.erro) {
        console.log(resposta);
        rua.value = resposta.logradouro;
        complemento.value = resposta.complemento;
        bairro.value = resposta.bairro;
        localidade.value = resposta.localidade;
        estado.value = resposta.uf;
    } else {
        alert('CEP não encontrado');
    }
}

function limpar(){
    cep.value = '';
    rua.value = '';
    complemento.value = '';
    bairro.value = '';
    localidade.value = '';
    estado.value = '';
}