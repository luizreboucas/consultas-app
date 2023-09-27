
type TMedicoModel = {
    objectId: string | undefined | null,
    especialidade: string,
    nome: string,
    __type: String ,
    className: String
}

export default class MedicoModel{
    objectId
    especialidade
    nome
    __type
    className

    constructor({nome,especialidade, objectId, __type = 'Object', className = 'medicos'} : TMedicoModel){
        
        this.especialidade = especialidade,
        this.nome = nome
        this.objectId = objectId
        this.__type = __type
        this. className = className
       
    }

    public getData(){
        return {
            objectId: this.objectId,
            especialidade: this.especialidade,
            nome: this.nome
        }
    }
    
    public setNome(nome: string){
        this.nome = nome
    }
    public setEspecialidade(especialidade: string){
        this.especialidade = especialidade
    }
}