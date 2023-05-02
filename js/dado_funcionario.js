var funcionario = [
    {id: 1, nome: "Cristhian Rodrigues Kindermann", email: "cristian@ufpr.br", Nascimento: "20-04-2001", Senha: "123"},
    {id: 2, nome: "Jessica Souza", email: "jessica@ufpr.br",  Nascimento: "19-03-1994", Senha: "312"},
    {id: 3,nome: "Natan Susin Cervinski", email: "natan@ufpr.br",  Nascimento: "20-04-2002", Senha: "joaoaa"},
    {id: 4,nome: "Vinícius Santos Antunes", email: "vinicius@ufpr.br",  Nascimento: "20-04-2002", Senha: "senha"}
];

var i = 5;
document.addEventListener("DOMContentLoaded", function(e) {
    listarFuncionarios('',funcionario);
});

document.querySelector("#nv_funcionario").addEventListener("click", function(e){
    $('#modal_func').modal("show");
})

document.querySelector("#nv_fc_novo").addEventListener("click", function(e){
    adicionarFuncionario();
});


document.querySelector("#nv_fc").addEventListener("click", function(e){
    let id = document.querySelector("#aux").value;
    let dadosfc = funcionario.find(func => func.id == id);

    console.log(dadosfc);

    $nome = document.querySelector("#nome_1").value;
    $email = document.querySelector("#email_1").value;
    $nascimento = document.querySelector("#nasc_1").value;
    $senha = document.querySelector("#senha_1").value;

    var lala = $nascimento.split("-");
    lala = lala[2] +'-'+lala[1] +'-'+lala[0]

    dadosfc.nome = $nome ;
    dadosfc.email = $email ;
    dadosfc.Nascimento = lala;
    dadosfc.Senha = $senha;
    $('#modal_func2').modal("hide");
    listarFuncionarios();

});


function listarFuncionarios(){
    // mudar para fetch() request depois
    table  = document.getElementById("tabelafc");
    
    //limpa tabela
    table.children[1].innerHTML='<tr></tr>';
    
    if(!(funcionario.length > 0)){
        table.children[1].innerHTML='<tr>Sem Funcionarios</tr>';
        return;
    }else{
        table.children[1].innerHTML='<tr></tr>';
    }

    //desenhando a tabela
    funcionario.forEach(element => {//para cada funcionario
        let row = table.insertRow(table.rows.length);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        cell1.innerHTML = element.id;
        cell2.innerHTML = element.nome;
        cell3.innerHTML = element.email;
        cell4.innerHTML = element.Nascimento;
        cell5.innerHTML = element.Senha;
        cell6.innerHTML = "<button id='editar_func'  onclick='editarFuncionario(this.value)' value="+element.id+" class='btn btn-primary'>Editar</button>\
        <button id='btn-confirm-recol' onclick='excluirFuncionario(this.value)' value="+element.id+" class='btn btn-danger'>Excluir</button>";
    });

}

function adicionarFuncionario(){
    $nome = document.querySelector("#nome").value;
    $email = document.querySelector("#email").value;
    $nascimento = document.querySelector("#nasc").value;
    $senha = document.querySelector("#senha").value;

    let obj = {id: i, nome: $nome, email: $email , Nascimento: $nascimento};
    i++;
    funcionario.push(obj);
    listarFuncionarios();

}

function editarFuncionario(id){
    document.querySelector("#aux").value = id;
    $('#modal_func2').modal("show");
    let dadosfc = funcionario.find(func => func.id == id);
    console.log(dadosfc)
    document.querySelector("#nome_1").value = dadosfc.nome;
    document.querySelector("#email_1").value = dadosfc.email;
    document.querySelector("#nasc_1").value = dadosfc.Nascimento;
    document.querySelector("#senha_1").value  = dadosfc.senha;

}

// esse está funcionando normalmente
function excluirFuncionario(id_func){
    let dadosfc = funcionario.find(func => func.id == id_func);
    if (dadosfc) { // se achou alguma coisa
        if(confirm("Confirmar exclusão do funcionario?")){
            alert('Funcionario removido!');
            funcionario = funcionario.filter(func => func.id !== dadosfc.id);
            listarFuncionarios();
        }
    }else{
        console.log('teste');
    }
    
}
