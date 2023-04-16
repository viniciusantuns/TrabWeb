
document.addEventListener("DOMContentLoaded", function(e) {
    listarPedidos('',pedidos);
});


pedidos = [
    { id_Pedido: "1", status: "Cancelado", dt_pedido: "11/04/2023", valor: "100,00" },
    { id_Pedido: "2", status: "Aguardando Pagamento", dt_pedido: "01/05/2023",  valor: "200,00" },
    { id_Pedido: "3", status: "Aguardando Pagamento", dt_pedido: "31/03/2023", valor: "75,00" },
    { id_Pedido: "4", status: "Em aberto", dt_pedido: "31/03/2022",  valor: "103,00" },
    { id_Pedido: "5", status: "Pago", dt_pedido: "02/03/2022", valor: "110,00"},
    { id_Pedido: "6", status: "Finalizado", dt_pedido: "30/02/2022", valor: "203,00"}
]


var select_status = document.querySelector("#st_pedidos");

select_status.addEventListener('change',(event)=>{
    listarPedidos(event.currentTarget.value, pedidos);
})



var table 
function listarPedidos(status, pedidos)
{
    // mudar para fetch() request depois
    table  = document.getElementById("tabelap");
    //limpa tabela
    table.children[1].innerHTML='<tr></tr>';

    //filtro dos pedidos
    let pedidos_filtrados;
    if(status === ""){
        pedidos_filtrados = pedidos;
        // console.log(pedidos_filtrados);
    }else{ 
        pedidos_filtrados = pedidos.filter(pedido => pedido.status === status);
        // console.log(pedidos_filtrados);
    }

    //desenhando a tabela
    pedidos_filtrados.forEach(element => {//para cada produto
        var row = table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = element.id_Pedido;
        cell2.innerHTML = element.dt_pedido;
        cell3.innerHTML = element.valor;
        cell4.innerHTML = element.status;
        if(element.status === 'Aguardando Pagamento'){
            cell5.innerHTML = "<button class='btn btn-primary'data-bs-toggle='modal' data-bs-target='#exampleModal'>Pagamento</button>"
        }else if(element.status == 'Em aberto'){
            cell5.innerHTML = "<button onclick='cancelar_pedido(this.value)' value="+element.id_Pedido +" id='btn_ccl_pedido'class='btn btn-danger'>Cancelar Pedido</button>"
        }
    });

}


function cancelar_pedido(id_pedido) {
    var pedido = pedidos.find(ped => ped.id_Pedido === id_pedido);
    
    console.log(pedidos);
    if (pedido) { // se achou alguma merda
        if(confirm("Realmente deseja fazer essa pira?")){
            pedido.status = 'Cancelado'; //altera dentro do json a brincadeira
            listarPedidos(select_status.value, pedidos);
        }
    
    }else{
        console.log('Pdsas');
    }
}




  