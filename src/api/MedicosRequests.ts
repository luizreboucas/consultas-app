import MedicoModel from "@/models/MedicoModel";
import request from "./config";
import { error } from "console";

export default class MedicosRequest {
    

    static getMedicos = () => {
        let listaMedicos = request.get('/classes/medicos')
            .then((medicos) => {
                return medicos.data.results
            })
            .catch((e)=> {
                console.log(e)
            })
        return listaMedicos
        }

    static getMedico = (id:string) => {
       
        const medico =  request.get(`/classes/medicos/${id}`)
        .then((medicoSelecionado) => {
            
            return medicoSelecionado.data
        })
        return medico
    
    }

    static postMedico = (medico: MedicoModel) => {
       
        const res = request.post('/classes/medicos', {
            nome: medico.getData().nome,
            especialidade: medico.getData().especialidade
        })
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((error)=> {
            console.log(error)
        })
        
        
        return res
        
    }

    static updateMedico = async(medico: MedicoModel) => {
        
        const response = await request.put(`/classes/medicos/${medico.getData().objectId}`, {
            nome: medico.getData().nome,
            especialidade: medico.getData().especialidade 
        })
        .then((res)=>{
            console.log(res.data)
            return res.data
        })
        .catch((error)=>{
            console.log(error)
        })
           
        
        return response
    
    }
}