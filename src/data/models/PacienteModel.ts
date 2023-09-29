
type TPacienteModel = {
    objectId?: string | null | undefined,
    nome?: string | null

}

export default class PacienteModel{
    nome
    objectId

    constructor({nome , objectId}: TPacienteModel){
        this.nome = nome
        this.objectId = objectId
    }

    getData(){
        return {
            objectId:  this.objectId,
            nome: this.nome
        }
    }

    setNome(nome:string){
        this.nome = nome
    }
    
}