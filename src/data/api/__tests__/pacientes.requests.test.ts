import PacienteModel from "../../models/PacienteModel";
import PacientesRequest from "../PacientesRequests";
describe('testes de request de pacientes', () => {
    it('should return a array of pacientes', async() => {
        const pacientes = await PacientesRequest.getPacientes()
        expect(pacientes).not.toBe(undefined)
    })

    it('should return a single row of pacientes', async() => {
        const paciente = await PacientesRequest.getPaciente('N7lsDanBUg')
        expect(paciente).not.toBe(undefined)
    })

    it('should update a paciente', async()=>{
        const paciente = await PacientesRequest.getPaciente('N7lsDanBUg')
        const pacienteAtualizado = new PacienteModel(paciente)
        pacienteAtualizado.setNome("Amélia da Silva")
        await PacientesRequest.updatePaciente(pacienteAtualizado)
        console.log(paciente)
        expect(paciente).not.toBe(undefined)
    })

    it('should return a deleted paciente', async()=>{
        const paciente = await PacientesRequest.getPaciente("1qrn4eFwPA");
        const pacienteASerDeletado = new PacienteModel(paciente)
        const deleted = await PacientesRequest.deletePaciente(pacienteASerDeletado)
        console.log(deleted)
        expect(deleted).not.toBe(undefined)
    })
})