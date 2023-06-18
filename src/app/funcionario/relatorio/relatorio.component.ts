import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  ngOnInit(): void { }

   relceita_pdf() {
    var dadosrelceita = '                                       RELATÓRIO DE RECEITA \n                                     Periodo:xx/xx/xx á xx/xx/xxxx \n\n\nQuantidade de lavagens 5 \n\nLavagen 1      01/02/2023\n1 Calça  R$40,00     |     1 Meia R$10,00     |     Total: 50R$    \n\nLavagen 2      10/03/2023 \n1 Calça  R$40,00     |     3 Camisa R$30,00     |     Total: 120R$   \n\nLavagen 3      12/04/2023    \n2 Calça  R$40,00     |     1 Camisa R$30,00     |     Total: 110R$    \n\nLavagen 4      15/05/2023 \n1 Calça  R$40,00     |     2 Camisa R$30,00     |     Total: 100R$    \n\nLavagen 5      20/10/2023 \n1 Calça  R$40,00     |     1 Camisa R$30,00     |     Total: 70R$    \n\n                                                                                      Total = R$450,00 '
    var doc = new jsPDF();
    doc.text(dadosrelceita,10,10)
    doc.save('RelatoriodeReceita.pdf');
}
 relcliente_pdf()
{
    var dadoscliente = '                                       RELATÓRIO DE CLIENTES \n\n\nNome: Claudio da Silva Sauro \nCPF: 102.450.340-99    UF: PR         Cidade: Curitiba  \nRua: Michale Jackson        Numero:300      \nEmail: Claudiosaouro22@gmaill.com \n \nNome: Ana Claudia  \nCPF: 102.450.340-99    UF: PR         Cidade: Curitiba  \nRua: Maicon Jaquison        Numero:300      \nEmail: v1d4l0k422@gmaill.com \n \nNome: Claudia da Silva Sauro  \nCPF: 102.450.340-99    UF: PR         Cidade: Curitiba  \nRua: Michale Jackson        Numero:300    \nEmail: Claudiasaouro22@gmaill.com'
   var doc = new jsPDF();
   doc.text(dadoscliente,10,10)
   doc.save('RelatoriodeCLientes.pdf');
}
reltopcliente_pdf() {


  var doc = new jsPDF();
  doc.text('                                       RELATÓRIO DE CLIENTES TOP \n\n\nNome: Claudio da Silva Sauro \nCPF: 102.450.340-99    UF: PR         Cidade: Curitiba  \nRua: Michale Jackson        Numero:300      \nEmail: Claudiosaouro22@gmaill.com \n\nTotal Pedido 1 = R$50,00 \nTotal Pedido 2 = R$80,00 \nTotal Pedido 3 = R$100,00 \n                                                                                            Total: R$230,00  \n\n\nNome: Ana Cristina \nCPF: 102.450.340-99    UF: PR         Cidade: Curitiba  \nRua: Maicon Jaquison    Numero:300      \nEmail: v1d4l0k422@gmaill.com \n\nTotal Pedido 1 = R$50,00 \nTotal Pedido 2 = R$80,00 \nTotal Pedido 3 = R$200,00 \n                                                                                            Total: R$330,00 \n\n\nNome: Claudia da Silva Sauro \nCPF: 102.450.344-99    UF: PR         Cidade: Curitiba  \nRua: Michale Jackson        Numero:300      \nEmail: Claudiasaouro22@gmaill.com \nQuantidade de pedidos : 3 \n\nTotal Pedido 1 = R$50,00 \nTotal Pedido 2 = R$80,00 \nTotal Pedido 3 = R$50,00 \n                                                                                            Total: R$180,00 ',10,10)
  doc.save('RelatorioClienteTop.pdf');
}

}
