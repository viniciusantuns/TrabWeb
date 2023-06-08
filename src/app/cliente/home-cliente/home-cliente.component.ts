import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})


export class HomeClienteComponent  implements OnInit{

  pedidos:any[] = [];

  constructor(private clienteService: ClienteService){

  }

  ngOnInit(): void {
    this.pedidos = this.clienteService.listarPedidosHome();
    console.log(this.pedidos);
  }

}
