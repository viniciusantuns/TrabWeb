import { Produto } from "./produto.model";

// export class Produto {
//     constructor(
//         public id?: number,
//         public nome?: string,
//         public valor?: number,
//         public prazo?: number,
//     ){}
// }

export class Pedido {
    constructor(
    
      public lista:ItemPedido[] = [],
      public id?: number,
      public valorTotal?: number,
      public status?: string,
      public data_pedido?: Date,
      public prazo_final?: Date,
      public id_cliente?: number
    ){}
}
 

export class ItemPedido extends Produto {
    constructor(
        id?: number,
        nome?: string,
        valor?: number,
        prazo?: number,
        public quantidade?: number
    ) {
        super(id, nome, valor, prazo);
    }
}

