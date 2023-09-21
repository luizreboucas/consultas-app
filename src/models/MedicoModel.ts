
type TMedicoModel = {
    objectId: string | undefined | null,
    especialidade: string,
    nome: string
}

export default class MedicoModel{
    private objectId
    private especialidade
    private nome
   

    constructor({nome,especialidade, objectId} : TMedicoModel){
        
        this.especialidade = especialidade,
        this.nome = nome
        this.objectId = objectId
       
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