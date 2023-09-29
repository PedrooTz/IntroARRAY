// Objetivo: Aprender a utilizar estrutura de array e json
// [] -> Representa a estrutura array
// {} -> Representa a estrutura json

const introducaoArray = function(){
    //Criando um array de forma manual
    let listaDeNomes = ['José' , 'Ana' , 'Luiz', 'Maria', 'Carlos', 'Eduardo'];

    //Exibe os dados do array
    console.log(listaDeNomes);

    //Exibe os dados do array em formato de tabela
    console.table(listaDeNomes);

    //Retorna a quantidade de elementos no array
    console.log(listaDeNomes.length);

    //Adiciona elementos novos no final da lista
    listaDeNomes.push('Pedro');

    //Adiciona elementos novos no inicio da lista
    listaDeNomes.unshift('Ricardo');
    console.table(listaDeNomes);

    //Remove o último elemento da tabela
    listaDeNomes.pop();
    console.table(listaDeNomes);

    //Remove o primeiro elemento da tabela
    listaDeNomes.shift();
    console.table(listaDeNomes);

    //Remove um elemento baseado no índice, podendo definir a serem excluídos
    //Ex: (2, 3) 2 -> referente a índice e 3 à quantidade de itens
    listaDeNomes.splice(2, 3);
    console.table(listaDeNomes);

    listaDeNomes.push('André da Silva', 'Ricardo Borges', 'João da Silva', 10, true);
    console.log(listaDeNomes);

    //typeof - Retorna o tipo de dados de um elemento
    console.log(typeof(listaDeNomes[7]));

    //Retorna o conteúdo de um elemento
    console.log(listaDeNomes[2]);

    
} 

const percorrendoArray = function(){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD'];

    //while
    // let cont = 0;
    // while(cont < listaDeProdutos.length){
    //     console.log('Nome do produto: ' + listaDeProdutos[cont]);
    //     cont +=1;
    // }

    //FOR
//     for(let cont = 0; cont <listaDeProdutos.length; cont++)
//     console.log('Nome do produto: ' + listaDeProdutos[cont]);
//}
    //FOREACH
//     listaDeProdutos.forEach(function(produto, indice){
//         console.log(indice + ' - Nome do produto: ' + produto)
//     })

    //Retorna o índice do elemento escolhido
    //Caso não exista o índice buscado, retornará -1
    console.log(listaDeProdutos.indexOf('Impressora'));

    //Retorna verdadeiro ou falso
    console.log(listaDeProdutos.includes('Mouse'))

}

const filtrarProdutos = function(nomeProduto){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD'];
    let nome = String (nomeProduto);

    let status = false;
   // return listaDeProdutos.includes(nome);

    listaDeProdutos.forEach(function(produto){
       if(produto.toUpperCase() == nome.toUpperCase())
       status = true;
    })
    return status;
}

    console.log(filtrarProdutos('not'));

//percorrendoArray();

//introducaoArray();