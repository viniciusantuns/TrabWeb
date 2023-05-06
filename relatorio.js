function funcao_pdf(){
//  var pegar_dados = document.getElementById('dadosc').innerHTML;
console.log("oi");


var dadoscliente = "RELATÓRIO DE CLIENTES <hr>   Nome: Claudio da Silva Sauro    CPF: 102.450.340-99  <hr>  UF: PR         Cidade: Curitiba  <hr>  Rua: Michale Jackson        Numero:300      <hr>    Email: Claudiosaouro22@gmaill.com "
 var janela = window.open('','','width=10,heigth=10');
 janela.document.write('<html><head>');
 janela.document.write('<title>Relatorio de Clientes</title></head>');
 janela.document.write('<body>');
 janela.document.write(dadoscliente);
 janela.document.write('</body></html>');
 janela.document.close();
 janela.print();

 
}

