import MedicoModel from "../../models/MedicoModel";
import PacienteModel from "../../models/PacienteModel";
import ConsultaModel from "../../models/ConsultaModel";
import ConsultasRequests from "../consultasRequests";
import MedicosRequest from "../MedicosRequests";
import PacientesRequest from "../PacientesRequests";


describe('testes de requests de consultas', () => {
    it('should return an array of consultas', async() => {
        const consultas = await ConsultasRequests.getConsultas()
        console.log(consultas)
        expect(consultas).not.toBe(undefined)
    })

    it('should return an single row of consultas',async()=>{
        const consulta = await ConsultasRequests.getConsulta("Bu6wwhCusi")
        console.log(consulta)
        expect(consulta).not.toBe(undefined)
    })

    it('should post a instance of consultas', async()=>{
        const newConsulta = new ConsultaModel({
            datetime: new Date(),
            medico: await MedicosRequest.getMedico('S7hnu2ODzM'),
            createdAt: new Date(),
            objectId: '',
            paciente: await PacientesRequest.getPaciente('6YcGVTHhHf'),
            updatedAt: new Date()
        })

        const consulta = await ConsultasRequests.postConsulta(newConsulta)
        expect(consulta).not.toBe(undefined)
    })

    it('should delete the consoluta row', () => {
        const deletedConsultaID = ConsultasRequests.deleteConsulta("aQgwkF2qPc")
        expect(deletedConsultaID).not.toBe(undefined)
    })
})
    
