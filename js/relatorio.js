function relcliente_pdf() {

    var dadoscliente = '<p style="text-align:center;">RELATÓRIO DE CLIENTES <\p> <hr>  <p style="font-weight: bold;"> Nome: Claudio da Silva Sauro <\p>  <hr>  CPF: 102.450.340-99    UF: PR         Cidade: Curitiba  <hr>  Rua: Michale Jackson        Numero:300      <hr>    Email: Claudiosaouro22@gmaill.com <br> <hr><br> <p style="font-weight: bold;"> Nome: Ana Claudia <\p>  <hr>  CPF: 102.450.340-99    UF: PR         Cidade: Curitiba  <hr>  Rua: Maicon Jaquison        Numero:300      <hr>    Email: v1d4l0k422@gmaill.com <br><hr><br> <p style="font-weight: bold;"> Nome: Claudia da Silva Sauro <\p>  <hr>  CPF: 102.450.340-99    UF: PR         Cidade: Curitiba  <hr>  Rua: Michale Jackson        Numero:300      <hr>    Email: Claudiasaouro22@gmaill.com <br>'
    var janela = window.open('', '', 'width=500,heigth=200');
    janela.document.write('<html><head>');
    janela.document.write('<title>Relatorio de Clientes</title></head>');
    janela.document.write('<body>');
    janela.document.write(dadoscliente);
    janela.document.write('</body></html>');
    janela.document.close();
    janela.print();
}
function reltopcliente_pdf() {


    var dadosclientetop = '<p style="text-align:center;">RELATÓRIO DE CLIENTES TOP <\p> <hr>  <p style="font-weight: bold;"> Nome: Claudio da Silva Sauro <\p>  <hr>  CPF: 102.450.340-99    UF: PR         Cidade: Curitiba  <hr>  Rua: Michale Jackson        Numero:300      <hr>    Email: Claudiosaouro22@gmaill.com <br> <br> Total Pedido 1 = R$50,00 <br> Total Pedido 2 = R$80,00 <br> Total Pedido 3 = R$100,00 <br> <p style="text-align:end;"> Total: R$230,00 <\p> <hr><br> <p style="font-weight: bold;"> Nome: Ana Cristina <\p>  <hr>  CPF: 102.450.340-99    UF: PR         Cidade: Curitiba  <hr>  Rua: Maicon Jaquison    Numero:300      <hr>    Email: v1d4l0k422@gmaill.com <br> Total Pedido 1 = R$50,00 <br> Total Pedido 2 = R$80,00 <br> Total Pedido 3 = R$200,00 <br> <p style="text-align:end;"> Total: R$330,00 <\p> <br><hr><br> <p style="font-weight: bold;"> Nome: Claudia da Silva Sauro <\p>  <hr>  CPF: 102.450.344-99    UF: PR         Cidade: Curitiba  <hr>  Rua: Michale Jackson        Numero:300      <hr>    Email: Claudiasaouro22@gmaill.com <br> Quantidade de pedidos : 3 <br> Total Pedido 1 = R$50,00 <br> Total Pedido 2 = R$80,00 <br> Total Pedido 3 = R$50,00 <br> <p style="text-align:end;"> Total: R$180,00 <\p>'
    var janela = window.open('', '', 'width=500,heigth=200');
    janela.document.write('<html><head>');
    janela.document.write('<title>Relatorio de Clientes TOP</title></head>');
    janela.document.write('<body>');
    janela.document.write(dadosclientetop);
    janela.document.write('</body></html>');
    janela.print();
    janela.document.close();
    window.close();
}

function relceita_pdf() {


    var dadosrelceita = '<p style="text-align:center;">RECEITA POR PERÍODO <br> Periodo:xx/xx/xx á xx/xx/xx<\p> <hr>  <p style="text-align: end;"> Quantidade de lavagens 5 <\p> <br> Lavagen 1      01/02/2023<br>    1 Calça  R$40,00     |     1 Meia R$10,00     |     Total: 50R$    <hr> Lavagen 2      10/03/2023<br> 1 Calça  R$40,00     |     3 Camisa R$30,00     |     Total: 120R$   <hr> Lavagen 3      12/04/2023<br>    2 Calça  R$40,00     |     1 Camisa R$30,00     |     Total: 110R$    <hr> Lavagen 4      15/05/2023<br> 1 Calça  R$40,00     |     2 Camisa R$30,00     |     Total: 100R$    <hr> Lavagen 5      20/10/2023<br> 1 Calça  R$40,00     |     1 Camisa R$30,00     |     Total: 70R$    <hr><p style="text-align:end;">Total = R$450,00 <\p>  '
    var janela = window.open('', '', 'width=500,heigth=200');
    janela.document.write('<html><head>');
    janela.document.write('<title>Relatorio de Clientes TOP</title></head>');
    janela.document.write('<body>');
    janela.document.write(dadosrelceita);
    janela.document.write('</body></html>');
    janela.document.close();
    janela.print();
}


