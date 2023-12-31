class Usuario {

    #id;
    nome;
    cpf;
    telefone;
    email;

    constructor(id, nome, cpf, telefone, email) {
        if (!id || !nome || !cpf || !telefone || !email) {
            throw new Error("Dados inválidos!");
        }
        this.#id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
    }

    get id() {
        return this.#id;
    }

    get cpf() {
        return this.cpf;
    }

    get contato() {
        return this.telefone;
    }

    set contato(novoContato) {
        return this.telefone = novoContato;
    }

    get email() {
        return this.email;
    }

    set email(novoEmail) {
        return this.email = novoEmail;
    }

    exibirDados() {
        console.log(`Id: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`e-mail: ${this.email}`);
    }

}

module.exports = {
    Usuario,
}
