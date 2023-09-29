import PacienteModel from "./PacienteModel"
import MedicoModel from "./MedicoModel"

type TConsultaModel = {
    objectId?: String | undefined | null,
    updatedAt?: Date | undefined,
    createdAt?: Date | undefined,
    paciente: PacienteModel | undefined,
    datetime?: Date,
    medico: MedicoModel | undefined
}

export default class ConsultaModel{
    objectId
    updatedAt
    createdAt
    paciente
    datetime
    medico

    constructor({objectId,updatedAt,createdAt,paciente,datetime,medico}: TConsultaModel){

            this.objectId =  objectId
            this.updatedAt = updatedAt
            this.createdAt = createdAt
            this.paciente = paciente
            this.datetime = datetime
            this.medico = medico

        }

    getData(){
        return {
            objectId: this.objectId,
            updatedAt: this.updatedAt,
            createdAt: this.createdAt,
            paciente: this.paciente,
            datetime: this.datetime,
            medico: this.medico
        }
    }
}