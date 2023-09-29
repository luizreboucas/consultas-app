import MedicosRequest from "../MedicosRequests"
import MedicoModel from "../../models/MedicoModel"


describe('Requests from medicos database',() => {
    it('should return a array of medicos', async() => {
        const medicos = await MedicosRequest.getMedicos()
        expect(medicos).not.toBeUndefined()
    })

    it('should return a single medico', async() => {
        const medico = await  MedicosRequest.getMedico('UxtTSJQRJF')
        expect(medico).not.toBeUndefined()
    })
    it('should post a medico instance', async()=>{
        const medico: MedicoModel = new MedicoModel({
            nome: 'Joaquim das Neves',
            especialidade: 'cardiologia',
            objectId: 'I5Mf6sgwD3'
        })
        const newMedico = await MedicosRequest.postMedico(medico)
        expect(newMedico).not.toBeUndefined()
    })

    it('should return a updated medico', async() => {
        const medico = new MedicoModel({
            especialidade: 'atualizacao',
            nome: 'medico atualizado',
            objectId: 'I5Mf6sgwD3'
        })

        const medicoAtualizado = await MedicosRequest.updateMedico(medico)

        expect(medicoAtualizado).not.toBeUndefined()
    })

    it('should return a deleted medico', async() => {
        const medicoToBeDeleted = new MedicoModel({
            especialidade: 'atualizacao',
            nome: 'medico atualizado',
            objectId: 'I5Mf6sgwD3'
        })
        const medico = await MedicosRequest.deleteMedico(medicoToBeDeleted)
        expect(medico).not.toBe(undefined)
    })
})