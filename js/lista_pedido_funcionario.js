
document.addEventListener("DOMContentLoaded", function(e) {
    listarPedidos('',pedidos);
});


pedidos = [
    { id_Pedido: "1", status: "Cancelado", dt_pedido: "30/02/2022", valor: "200,00" },
    { id_Pedido: "2", status: "Finalizado", dt_pedido: "02/03/2022",  valor: "400,00" },
    { id_Pedido: "3", status: "Pago", dt_pedido: "31/03/2023", valor: "150,00" },
    { id_Pedido: "4", status: "Aguardando Pagamento", dt_pedido: "31/03/2022",  valor: "206,00" },
    { id_Pedido: "5", status: "Recolhido", dt_pedido: "11/04/2023", valor: "220,00"},
    { id_Pedido: "6", status: "Em Aberto", dt_pedido: "01/05/2023", valor: "406,00"}
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
        if(element.status === 'Pago'){
            cell5.innerHTML = "<button onclick='finalizar_pedido(this.value)' value="+element.id_Pedido +" id='btn_ccl_pedido'class='btn btn-success'>Finalizar Pedido</button>"
        }if(element.status == 'Em Aberto'){
            cell5.innerHTML = "<button onclick='confirmar_recolhimento(this.value)' value="+element.id_Pedido +" id='btn_ccl_pedido'class='btn btn-primary'>Informar Recolhimento</button>"
        }else if(element.status === 'Recolhido') {
            cell5.innerHTML = "<button onclick='confirmar_lavagem(this.value)' value="+element.id_Pedido +" id='btn_ccl_pedido'class='btn btn-dark'>Informar Lavagem</button>"
        }
    });

}

function confirmar_recolhimento(id_pedido){
    let pedido = pedidos.find(ped => ped.id_Pedido == id_pedido);
    if (pedido) { // se achou alguma coisa
        if(confirm("Confirmar recolhimento do pedido?")){
            alert('Pedido: ' + pedido.id_Pedido + ', Status alterado com sucesso');
            pedidos = pedidos.filter(ped => ped.id_Pedido !== pedido.id_Pedido);
            listarPedidos(pedidos);
        }
    }else{
        console.log('Pdsas');
    }

}

function confirmar_lavagem(id_pedido){
    let pedido = pedidos.find(ped => ped.id_Pedido == id_pedido);
    if (pedido) { // se achou alguma coisa
        if(confirm("Confirmar lavagem das roupas?")){
            alert('Pedido: ' + pedido.id_Pedido + ', Status alterado com sucesso');
            pedidos = pedidos.filter(ped => ped.id_Pedido !== pedido.id_Pedido);
            listarPedidos(pedidos);
        }
    }else{
        console.log('Pdsas');
    }

}

function finalizar_pedido(id_pedido){
    let pedido = pedidos.find(ped => ped.id_Pedido == id_pedido);
    if (pedido) { // se achou alguma coisa
        if(confirm("Realmente deseja finalizar o pedido?")){
            alert('Pedido: ' + pedido.id_Pedido + ', Status alterado com sucesso');
            pedidos = pedidos.filter(ped => ped.id_Pedido !== pedido.id_Pedido);
            listarPedidos(pedidos);
        }
    }else{
        console.log('Pdsas');
    }

}