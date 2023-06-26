import { Injectable } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto.model';
import { Pedido, ItemPedido } from 'src/app/shared/models/pedido';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  BASE_URL="http://localhost:8080/pedidos";
  URL_PRODUTOS= "http://localhost:8080/produtos"
  URL_FUNCIONARIOS ="http://localhost:8080/funcionarios"

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
    return this.httpClient.delete(this.URL_PRODUTOS + `/${produto.id}`, this.httpOptions);
  }


  listarPedidos(tipo_data: string | null = null, status?:string |null , data_inicio?: string | null, data_fim?: string | null){
    let params = new HttpParams();
    if (tipo_data) {
      params = params.set('type', tipo_data);
    }

    if(status)
      params = params.set("status", status);
    
    if (data_inicio && data_fim) {
      params = params.set('inicio', data_inicio);
      params = params.set('fim', data_fim);
    }
    return this.httpClient.get<Pedido[]>(this.BASE_URL, { params });
  }

  listarFuncionarios(){
    return this.httpClient.get<Usuario[]>(this.URL_FUNCIONARIOS, this.httpOptions);
  }

  inserirFuncionario(funcionario :Usuario){
    return this.httpClient.post<Usuario>(this.URL_FUNCIONARIOS, funcionario, this.httpOptions);
  }

  editarFuncionario(funcionario: Usuario){
    return this.httpClient.put(this.URL_FUNCIONARIOS + `/${funcionario.id}`, funcionario , this.httpOptions);
  }

  removerFuncionario(funcionario: Usuario){
    return this.httpClient.delete(this.URL_FUNCIONARIOS + `/${funcionario.id}`, this.httpOptions);
  }

}
