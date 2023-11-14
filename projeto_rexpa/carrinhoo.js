$(document).ready(function() {
    
    // Receber a string
    let produtosString = localStorage.getItem('produtoslist');
    // transformar em objeto novamente
    let produtos = JSON.parse(produtosString);

    

    teste(produtos);
    somarvalor(produtos);
});


function teste (produtos){
    var html = "";
    for( var i = 0 ; i < produtos.length;i++){
        html += '<section class="produtos">';
        html += '   <a href="#" class="link_produtos">';
        html += '       <img class="img_produtos" src="'+produtos[i].imagem+'" alt="Good Girl">';
        html += '       <p class="preco_produto">R$ '+produtos[i].preco+'</p>';
        html += '       <p class="descricao_produtos">'+produtos[i].nome+' </p>';
        html += '   </a>';
        html += '   <button type="button" class="btn btn-danger btnremover" onclick="remover(this)" >Excluir</button>';
        html += '</section>';
    }

    $(".secao_produtos_carrinho").append(html);
}

function remover(element){
    console.log("ok");
    $(element).parent().html('');    

    recalcular();
}

function recalcular(){    
    var valor = 0;
    var total = 0;
    $('.preco_produto').each(function(){
        str = $(this).text().replace('R$ ','').replace('.','').replace(',','.');
        valor = parseFloat(str);
        total = total + valor;
    })
    $("#htotal").text(total.toFixed(2));
}

function somarvalor(produtos){

    var valor = 0;
    var total = 0;
    for( var i = 0 ; i < produtos.length;i++){
        str = produtos[i].preco.replace('.','').replace(',','.');
        console.log("1 = " ,str);
        valor = parseFloat(str);
        console.log("2 = " ,valor);
        total = total + valor;
        console.log("3 = " ,total);
    }

    $("#htotal").text(total.toFixed(2));

}
