var produto = [
    {id: 1, nome: "camiseta", valor: "10", prazo: 1},
    {id: 2, nome: "camisa", valor: "20",  prazo: 3},
    {id: 3,nome: "calcas", valor: "12",  prazo: 2},
    {id: 4,nome: "cueca", valor: "15",  prazo: 1},
    {id: 5,nome: "meia", valor: "9",  prazo: 1},
];

var i = 6;
document.addEventListener("DOMContentLoaded", function(e) {
    listarProdutos('',produto);
});

document.querySelector("#nv_produto").addEventListener("click", function(e){
    $('#modal_prod').modal("show");
})

document.querySelector("#nv_s").addEventListener("click", function(e){
    adicionarProduto();
});


document.querySelector("#nv_e").addEventListener("click", function(e){
    let id = document.querySelector("#aux_id").value;
    let produt = produto.find(prod => prod.id == id);

    $nome = document.querySelector("#nome_1").value;
    $preco = document.querySelector("#preco_1").value;
    $prazo = document.querySelector("#prazo_1").value;

    produt.nome = $nome ;
    produt.valor = $preco ;
    produt.prazo = $prazo ;
    $('#modal_prod2').modal("hide");
    listarProdutos();

});


function listarProdutos(){
    // mudar para fetch() request depois
    table  = document.getElementById("tabelapr");
    
    //limpa tabela
    table.children[1].innerHTML='<tr></tr>';
    
    if(!(produto.length > 0)){
        table.children[1].innerHTML='<tr>Sem produtos</tr>';
        return;
    }else{
        table.children[1].innerHTML='<tr></tr>';
    }

    //desenhando a tabela
    produto.forEach(element => {//para cada produto
        let row = table.insertRow(table.rows.length);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerHTML = element.id;
        cell2.innerHTML = element.nome;
        cell3.innerHTML = element.valor;
        cell4.innerHTML = element.prazo + " Dias";
        cell5.innerHTML = "<button id='btn-confirm-recol' onclick='editarProduto(this.value)' value="+element.id+" class='btn btn-primary'>Editar</button>\
        <button id='btn-confirm-recol' onclick='excluirProduto(this.value)' value="+element.id+" class='btn btn-danger'>Excluir</button>";
    });

}

function adicionarProduto(){
    $nome = document.querySelector("#nome").value;
    $preco = document.querySelector("#preco").value;
    $prazo = document.querySelector("#prazo").value;

    let obj = {id: i, nome: $nome, valor: $preco ,  prazo: $prazo};
    i++;
    produto.push(obj);
    listarProdutos();

}

function editarProduto(id){
    document.querySelector("#aux_id").value = id;
    $('#modal_prod2').modal("show");
    let produt = produto.find(prod => prod.id == id);
    console.log(produt)
    document.querySelector("#nome_1").value = produt.nome ;
    document.querySelector("#preco_1").value = produt.valor;
    document.querySelector("#prazo_1").value = produt.prazo;

}


function excluirProduto(id_prod){
    // console.log(id_prod);
    let produt = produto.find(prod => prod.id == id_prod);
    // console.log(produt);
    if (produt) { // se achou alguma coisa
        if(confirm("Confirmar exclusão do produto?")){
            alert('Produto removido!');
            produto = produto.filter(prod => prod.id !== produt.id);
            listarProdutos();
        }
    }else{
        console.log('Pdsas');
    }
    
}
