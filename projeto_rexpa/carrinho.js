$(document).ready(function() {

});


var produtos = [];
$(".adicionarcarrinho").click(function (){
    var nome = $(this).parent().find(".descricao_produtos").text();
    var preco = $(this).parent().find(".preco_produto").text().replace('R$ ','');
    var imagem = $(this).parent().find(".imagem_caminho").text();
    
    var produto = new Object();
    produto.nome = nome;
    produto.preco = preco;
    produto.imagem = imagem;    

    produtos.push(produto);

    chamarmodel();
});

function chamarmodel(){
    // $('#myModal').modal('show'); 
    alert("Produto Adicionado ao carrinho!")
}

function ircarrinho(){
    localStorage.setItem('produtoslist', JSON.stringify(produtos));
    window.location = "carrinho.html";
}



function teste (){
    for( var i = 0 ; i < produtos.length;i++){
        console.log(produtos[i].nome )
    }

    var html = "";

    for( var i = 0 ; i < produtos.length;i++){
        html = '<section class="produtos">';
        html += '   <a href="#" class="link_produtos">';
        html += '       <img class="img_produtos" src="'+produtos[i].imagem+'" alt="Good Girl">';
        html += '       <p class="preco_produto">R$ '+produtos[i].preco+'</p>';
        html += '       <p class="descricao_produtos">'+produtos[i].nome+' </p>';
        html += '   </a>';
        html += '</section>';
    }

    $(".secao_produtos_carrinho").append(html);

}


































// var produtos = "";


// $(".adicionarcarrinho").click(function (){
//         var nome = $(this).parent().find(".descricao_produtos").text();
//         var preco = $(this).parent().find(".preco_produto").text();
//         var imagem = $(this).parent().find(".imagem_caminho").text();
      
//         console.log(nome);
//         console.log(preco);
//         console.log(imagem);

//         html = '<section class="produtos">';
//         html += '   <a href="#" class="link_produtos">';
//         html += '       <img class="img_produtos" src="'+imagem+'" alt="Good Girl">';
//         html += '       <p class="preco_produto">R$ '+preco+'</p>';
//         html += '       <p class="descricao_produtos">'+nome+' </p>';
//         html += '   </a>';
//         html += '</section>';

//         produtos = produtos + html;

//         console.log(produtos)
    
//         chamarmodel();
// });


// function mostrar (){

//     $(".secao_produtos_teste").append(produtos);

// }

// function ircarrinho(){
//     // localStorage.setItem('produtos', text);
//     window.location = "carrinho.html?produtos="+produtos;

// }

// function chamarmodel(){
//     // $('#myModal').modal('show'); 
//     alert("Produto Adicionado ao carrinho!")
// }













// var produtos = [];
// $(".adicionarcarrinho").click(function (){
//     var nome = $(this).parent().find(".descricao_produtos").text();
//     var preco = $(this).parent().find(".preco_produto").text();
//     var imagem = $(this).parent().find(".imagem_caminho").text();
    
//     var produto = new Object();
//     produto.nome = nome;
//     produto.preco = preco;
//     produto.imagem = imagem;    

//     produtos.push(produto);

//     chamarmodel();
// });

// function chamarmodel(){
//     // $('#myModal').modal('show'); 
//     alert("Produto Adicionado ao carrinho!")
// }


// function teste (){
//     for( var i = 0 ; i < produtos.length;i++){
//         console.log(produtos[i].nome )
//     }

//     var html = "";

//     for( var i = 0 ; i < produtos.length;i++){
//         html = '<section class="produtos">';
//         html += '   <a href="#" class="link_produtos">';
//         html += '       <img class="img_produtos" src="'+produtos[i].imagem+'" alt="Good Girl">';
//         html += '       <p class="preco_produto">R$ '+produtos[i].preco+'</p>';
//         html += '       <p class="descricao_produtos">'+produtos[i].nome+' </p>';
//         html += '   </a>';
//         html += '</section>';
//     }

//     $(".secao_produtos_carrinho").append(html);

// }



