import { Injectable } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto.model';
import { Pedido, ItemPedido } from 'src/app/shared/models/pedido';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  BASE_URL="http://localhost:8080/pedidos";

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  listarProdutos(){
    return this.httpClient.get<Produto[]>(this.BASE_URL, this.httpOptions);
  }

  inserirNovoProduto(produto :Produto){
    this.httpClient.post<Produto>(this.BASE_URL, produto, this.httpOptions);
  }


  listarPedidos(tipo: String | null = null){
    return this.httpClient.get<Pedido[]>(this.BASE_URL + (tipo != null? `?type=${tipo}` : ""), this.httpOptions);
  }

  listarPedidosHome(){
    return this.httpClient.get<Pedido[]>(this.BASE_URL+ "?type='all'", this.httpOptions);
  }

}
