import { Injectable } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto.model';
import { Pedido, ItemPedido } from 'src/app/shared/models/pedido';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  BASE_URL="http://localhost:8080/pedidos";
  URL_PRODUTOS= "http://localhost:8080/produtos"

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  listarProdutos(){
    return this.httpClient.get<Produto[]>(this.URL_PRODUTOS, this.httpOptions);
  }

  inserirNovoProduto(produto :Produto){
    return this.httpClient.post<Produto>(this.URL_PRODUTOS, produto, this.httpOptions);
  }

  editarProduto(produto: Produto){
    return this.httpClient.put(this.URL_PRODUTOS + `/${produto.id}`, produto , this.httpOptions);
  }

  removerProduto(produto: Produto){
    console.log(this.URL_PRODUTOS + `/${produto.id}`)
    return this.httpClient.delete(this.URL_PRODUTOS + `/${produto.id}`, this.httpOptions);
  }

  listarPedidos(tipo: String | null = null, data_inicio?: Date, data_fim?: Date){
    let url = this.BASE_URL ;
    
    if (data_inicio && data_fim){
      url = url + ""
    }
    return this.httpClient.get<Pedido[]>(this.BASE_URL + (tipo != null? `?type=${tipo}` : ""), this.httpOptions);
  }

  // listarPedidosHome(){
  //   return this.httpClient.get<Pedido[]>(this.BASE_URL+ "?type='all'", this.httpOptions);
  // }

}
