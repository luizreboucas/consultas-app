import MedicoModel from "@/models/MedicoModel";
import request from "./config";

export default class MedicosRequest {
    

    static getMedicos = async() => {
        try {
            const medicos : Promise<MedicoModel[]> = (await request.get('/classes/medicos')).data.results
            return medicos
        } catch (error) {
            console.error(error)
        }
    }

    static getMedico = async(id:string) => {
        try {
            const medico = (await request.get(`/classes/medicos/${id}`)).data
            return medico
        } catch (error) {
            console.error(error)
        }
    }

    static postMedico = async(medico: MedicoModel) => {
        try {
            const res = await request.post('/classes/medicos', {
                nome: medico.getData().nome,
                especialidade: medico.getData().especialidade
            })
            return res
        } catch (error) {
            console.error(error)
        }
    }

    static updateMedico = async(medico: MedicoModel) => {
        try {
            const response = await request.put(`/classes/medicos/${medico.getData().objectId}`, {
                nome: medico.getData().nome,
                especialidade: medico.getData().especialidade 
            })
            return response
        } catch (error) {
            console.error(error)
        }
    }
}