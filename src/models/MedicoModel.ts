
type TMedicoModel = {
    createdAt: Date,
    especialidade: string,
    nome: string
    objectId: string
    updatedAt: Date
}

class MedicoModel{
    createdAt
    especialidade
    nome
    objectId
    updatedAt

    constructor({createdAt,especialidade,nome,objectId,updatedAt} : TMedicoModel){
        this.createdAt = createdAt
        this.especialidade = especialidade,
        this.nome = nome
        this.objectId = objectId
        this.updatedAt = updatedAt
    }
}