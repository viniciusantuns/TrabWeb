// perfis ADMIN, FUNCIONARIO, CLIENTE
export class Usuario {
    constructor(
        public id?: number,
        public nome?: string,
        public email?: string,
        public senha?: string,
        public data_nascimento?: Date,
        public perfil?: string,

    ){}
}
