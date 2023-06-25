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


    calcularValores() {
        let quantidadeTotal = 0;
        let valorTotal = 0;
        let maiorPrazo = 0;
    
        for (const item of this.lista) {
          const quantidade = item.quantidade ?? 0; // Use 0 if item.quantidade is undefined
          const valorUnitario = item.valor_unitario ?? 0; // Use 0 if item.valor_unitario is undefined
          const prazo = item.prazo ?? 0; // Use 0 if item.prazo is undefined
    
          quantidadeTotal += quantidade;
          valorTotal += valorUnitario * quantidade;
    
          if (prazo > maiorPrazo) {
            maiorPrazo = prazo;
          }
        }
    
        this.valorTotal = valorTotal;
        this.prazo_final = this.calcularPrazoFinal(maiorPrazo);
    }
    
    private calcularPrazoFinal(prazo: number): Date {
        const hoje = new Date();
        const prazoFinal = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + prazo);
        return prazoFinal;
    }
}
 

export class ItemPedido extends Produto {
    constructor(
        id: number,
        nome: string,
        valor_unitario: number,
        prazo: number,
        public quantidade: number 
    ) {
        super(id, nome, valor_unitario, prazo);
    }
}

