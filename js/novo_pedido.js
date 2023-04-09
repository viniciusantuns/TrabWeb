const orcamento = [
    
];


const form_login = document.querySelector("#form_pedido");
const selectItems = document.querySelector("#pecas");

const items = [
    {id: 1, nome: "camiseta", valor: "10"},
    {id: 2, nome: "camisa", valor: "20"},
    {id: 2,nome: "calcas", valor: "12"},
    {id: 3,nome: "cueca", valor: "15"},
    {id: 5,nome: "meia", valor: "9"},
];


for(item in items) {
    option = new Option(items[item].nome, items[item].valor);
    option.dataset.prazo = items[item].prazo;
    option.dataset.id = items[item].id;
    selectItems.options[selectItems.options.length] = option;
}


form_login.onsubmit = event =>{
    event.preventDefault();}

//botao adicionar itens ao orçamento

// const addItemsBtn = document.getElementById("btn-item");
// addItemsBtn.addEventListener('click',adicionarItem);


var prod = "";
function adicionarItem(){

    var qtd = document.getElementById("qtd_pecas").value;
    var select = document.getElementById("pecas"); //select
    var idx = select.selectedIndex;
    prod = select.options[idx];

    // novo
    var obj = {  
        id: prod.dataset.id,
        valor: prod.value,
        qtd: parseInt(qtd)
    }
    orcamento.push(obj);

    var indx;
    var table = document.getElementById("tbl");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = prod.text;
    cell2.innerHTML = qtd;
    cell3.innerHTML = prod.value;
    cell4.innerHTML = "<button class='btn btn-danger'onclick='removeTableRow(this)'>Excluir</button>"

}

function removeTableRow(row) {
    var tableRow = row.parentNode.parentNode; // obtém a linha da tabela a partir do botão que foi clicado
    tableRow.parentNode.removeChild(tableRow); // remove a linha da tabela
}
