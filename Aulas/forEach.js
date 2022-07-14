// let pessoas = ['joao', 'carlos', 'jose'];
// pessoas.forEach((valAtu, indice) =>{
//     console.log(valAtu, indice)
// })


let produtos = [
{
    nomeProduto: 'Celular',
    valorProduto: 1220.00,
    porcentagemDesconto: 0.20
},
{
    nomeProduto: 'Laptop',
    valorProduto: 3520.00,
    porcentagemDesconto: 0.30
},
{
    nomeProduto: 'TV',
    valorProduto: 2520.00,
    porcentagemDesconto: 0.40
}
]

// produtos.forEach((produtoAtual) =>{
//     console.log(produtoAtual.nomeProduto + " " + produtoAtual.valorProduto)
// })


// produtos.forEach((produtoAtual) => {  //criado uma nova variavel que vai recebendo valores de dentro 
//do array, por isso produtoAtual.valorProduto
//  let valorDesconto = produtoAtual.valorProduto * produtoAtual.porcentagemDesconto;

//  console.log(produtoAtual)
//  console.log(valorDesconto)
// })



produtos.forEach((produtoAtual) => {
    let valorDesconto = produtoAtual.valorProduto * produtoAtual.porcentagemDesconto;
    let valorFinal = produtoAtual.valorProduto - valorDesconto; //o produto atual recebe o valor que esta apontado no array 
    //+ uma variavel criado para verificar o desconto, por isso ela não é proutoAtual.valorDesconto
    produtoAtual.valorTotalProduto = valorFinal //nesse momento foi inserido uma nova informação no array 
    // o valorTotalProduto que receba o valor Final
    console.log(produtoAtual)
   })
