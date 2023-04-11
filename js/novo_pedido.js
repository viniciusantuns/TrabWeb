var orcamento = [
    
];

const form_login = document.querySelector("#form_pedido");
const selectItems = document.querySelector("#pecas");

const items = [
    {id: 1, nome: "camiseta", valor: "10", prazo: 1},
    {id: 2, nome: "camisa", valor: "20",  prazo: 3},
    {id: 2,nome: "calcas", valor: "12",  prazo: 2},
    {id: 3,nome: "cueca", valor: "15",  prazo: 1},
    {id: 5,nome: "meia", valor: "9",  prazo: 1},
];


for(item in items) {
    option = new Option(items[item].nome, items[item].valor);
    option.dataset.prazo = items[item].prazo;
    option.dataset.id = items[item].id;
    selectItems.options[selectItems.options.length] = option;
}


form_login.onsubmit = event =>{
    event.preventDefault();
}

//botao adicionar itens ao orçamento

// const addItemsBtn = document.getElementById("btn-item");
// addItemsBtn.addEventListener('click',adicionarItem);


function adicionarItem(){

    var qtd = document.getElementById("qtd_pecas").value;
    var select = document.getElementById("pecas"); //select
    var idx = select.selectedIndex;

    var prod = select.options[idx];

	console.log(qtd)
	console.log(prod)

	if(!qtd || (!prod || prod.text === "Selecione um produto")){
		return
	}

    console.log(prod);

    var table = document.getElementById("tbl");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = prod.text;
    cell2.innerHTML = qtd;
    cell3.innerHTML = prod.value;
    cell4.innerHTML = prod.dataset.prazo; 
    cell5.innerHTML = "<button class='btn btn-danger'onclick='removeTableRow(this)'>Excluir</button>"

    orcamento = tableToJson(table);
}

function removeTableRow(row) {
    var tableRow = row.parentNode.parentNode; // obtém a linha da tabela a partir do botão que foi clicado
    tableRow.parentNode.removeChild(tableRow); // remove a linha da tabela

}

function tableToJson(table) {
  var data = [];

  // primeira linha do cabeçalho da tabela
  var headers = [];
  for (var i = 0; i < table.rows[0].cells.length; i++) {
    headers[i] = table.rows[0].cells[i].textContent;
  }

  // percorre as linhas da tabela
  for (var i = 2; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
    var rowData = {};

    // percorre as células da linha atual
    for (var j = 0; j < tableRow.cells.length; j++) {
      rowData[headers[j]] = tableRow.cells[j].textContent;
    }

    // adiciona a linha atual ao array de dados
    data.push(rowData);
  }

  // converte o array de dados em um objeto JSON e retorna
  return data;
}




function objectToTable(objList) {

  let hoje = new Date();
  let prazo = new Date();
  let tableHtml = '<table class="table">';

  // Cria o cabeçalho da tabela com base nas chaves do primeiro objeto da lista
  let keys = Object.keys(objList[0]);
  tableHtml += '<tr>';
  for (let i = 0; i < keys.length-1; i++) {
    tableHtml += '<th>' + keys[i] + '</th>';
  }
  tableHtml += '</tr>';

  // Cria uma linha na tabela para cada objeto da lista e calcula a soma dos preços
  let somaPrecos = 0;
  let maiorData = null;
  let quantidade = 0;
  for (let i = 0; i < objList.length; i++) {
    let obj = objList[i];
    tableHtml += '<tr>';
    for (let j = 0; j < keys.length-1; j++) {
      let key = keys[j];
      tableHtml += '<td>' + obj[key] + '</td>';
      if (key === 'Quantidade') {
	quantidade = parseFloat(obj[key]);
      } else if (key === "Valor Unitário"){
        somaPrecos += parseFloat(obj[key])*quantidade;
      }	else if (key === 'Prazo') {
        let data = obj[key];
        if (maiorData === null || data > maiorData) {
          maiorData = data;
        }
      }
    }
    tableHtml += '</tr>';
  }

  // Adiciona uma linha adicional no final da tabela com a soma dos preços e a maior data
  tableHtml += '<tr><td style="text-align: right;" colspan="' + keys.length + '">Soma dos preços: ' + somaPrecos + '</td></tr>';
  if (maiorData !== null) {
    prazo.setDate(hoje.getDate()+ parseInt(maiorData));
    tableHtml += '<tr><td style="text-align: right;"> Prazo: ' + prazo.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</td></tr>';
  }

  tableHtml += '</table>';
  return tableHtml;
}





