import PacienteModel from "../models/PacienteModel";
import request from "./config";


export default class PacientesRequest {
    

    static getPacientes = () => {
        let listaPacientes = request.get('/classes/pacientes')
            .then((pacientes) => {
                return pacientes.data.results
            })
            .catch((e)=> {
                console.log(e)
            })
        return listaPacientes
        }

    static getPaciente = (id:string) => {
       
        const paciente =  request.get(`/classes/pacientes/${id}`)
        .then((pacienteSelecionado) => {
            
            return pacienteSelecionado.data
        })
        return paciente
    
    }

    static postPaciente = (paciente: PacienteModel) => {
       
        const res = request.post('/classes/pacientes', {
            nome: paciente.getData().nome,
        })
        .then((response) => {
            
            return response.data
        })
        .catch((error)=> {
            console.log(error)
        })
        
        
        return res
        
    }

    static updatePaciente = async(paciente: PacienteModel) => {
        
        const response = await request.put(`/classes/pacientes/${paciente.getData().objectId}`, {
            nome: paciente.getData().nome, 
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

    static deletePaciente = async(paciente: PacienteModel) => {
        const deletedPaciente = request.delete(`/classes/pacientes/${paciente.getData().objectId}`)
        .then((response)=>{
            return response.data
        })
        .catch((error)=>{
            console.log(error)
        })

        return deletedPaciente
    }
}