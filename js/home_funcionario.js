
document.addEventListener("DOMContentLoaded", function(e) {
    listarPedidos(pedidos);
});


pedidos = [
    { id_Pedido: "7", status: estados[0].estado, dt_pedido: "31/03/2023", valor: "75,00"},
    { id_Pedido: "8", status: estados[1].estado, dt_pedido: "11/04/2023", valor: "100,00" },
    { id_Pedido: "9", status: estados[2].estado, dt_pedido: "01/05/2023",  valor: "200,00" },
]


var table 
function listarPedidos(l_pedidos)
{
    
    // mudar para fetch() request depois
    table  = document.getElementById("tabela_home_funcionario");
    
    //limpa tabela
    table.children[1].innerHTML='<tr></tr>';
    
    if(!(l_pedidos.length > 0)){
        table.children[1].innerHTML='<tr>Sem Pedidos em Aberto</tr>';
        return;
    }else{
        table.children[1].innerHTML='<tr></tr>';
    }

    //desenhando a tabela
    l_pedidos.forEach(element => {//para cada produto
        let row = table.insertRow(table.rows.length);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerHTML = element.id_Pedido;
        cell2.innerHTML = element.dt_pedido;
        cell3.innerHTML = element.valor;
        cell4.innerHTML = element.status;
        cell5.innerHTML = "<button id='btn-confirm-recol' value="+element.id_Pedido+" class='recolhido btn btn-primary' >Confirmar Recolhimento</button>"
	var style = ""
	if (element.status !== "EM ABERTO"){
		console.log('a');
		style = "Display: None;"
	}
	cell5.style = style
    });

}

function confirmar_recolhimento(id_pedido){
    let pedido = pedidos.find(ped => ped.id_Pedido == id_pedido);
    if (pedido) { // se achou alguma coisa
        if(confirm("Confirmar recolhimento do pedido?")){
            alert('Pedido: ' + pedido.id_Pedido + ', Status alterado com sucesso');
            //pedidos = pedidos.filter(ped => ped.id_Pedido !== pedido.id_Pedido);
            listarPedidos(pedidos);
        }
    }else{
        console.log('Pdsas');
    }

}
