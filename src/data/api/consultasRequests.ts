import MedicoModel from "../models/MedicoModel";
import PacienteModel from "../models/PacienteModel";
import ConsultaModel from "../models/ConsultaModel";
import request from "./config";

export default class ConsultasRequests{

    static getConsultas = () => {
        const consultas = request.get('/classes/consultas?include=medico,paciente')
            .then((result) => {
                return result.data.results
            })
            .catch((e) => {
                console.log(e)
            })
        return consultas
    }

    static getConsulta = async (id: String): Promise<ConsultaModel | undefined> => {
        const consulta = await request.get(`/classes/consultas/${id}?include=medico,paciente`)
            .then((result) => {
                return result.data
            })
            .catch((error) => {
                console.log(error)
            })
        const retornoConsulta = new ConsultaModel(consulta)
            console.log(retornoConsulta)
        return retornoConsulta
    }

    static postConsulta = async(consulta: ConsultaModel) => {
        const consultaPostada = request.post('/parse/functions/hello',{
                
                medico: consulta.getData().medico.objectId,
                
                
                paciente: consulta.getData().paciente.objectId,
                
            }
        )
        // const consultaPostada = request.post('/classes/consultas',JSON.stringify(consulta))
            .then((result) => {
                console.log(result)
                return result
            })
            .catch((e) => {
                console.log(e)
            })
            console.log(consultaPostada)
        return consultaPostada

    }

    static deleteConsulta(id: String){
        const consultaDeletada = request.delete(`/classes/consultas/${id}`)
            .then((result) => {
                return result
            })
            .catch((error)=> {
                console.log(error)
            })
        return consultaDeletada
    }
}