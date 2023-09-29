
import ConsultasRequests from '@/data/api/consultasRequests'
import ConsultaModel from '@/data/models/ConsultaModel'
import MedicoModel from '@/data/models/MedicoModel'
import PacienteModel from '@/data/models/PacienteModel'
import { List, ListItem, Card, Button } from '@material-tailwind/react'
import React, { Dispatch, SetStateAction } from 'react'

interface IColumn{
    medicos: MedicoModel[] | undefined,
    pacientes: PacienteModel[] | undefined,
    medico: MedicoModel | undefined,
    setMedico: Dispatch<SetStateAction<MedicoModel | undefined>>
    paciente: PacienteModel | undefined,
    setPaciente: Dispatch<SetStateAction<PacienteModel | undefined>>,
    color?: String,
    setConsultasModalOpen: Dispatch<SetStateAction<boolean>>
}

const ModalConsultas = ({medicos, pacientes,medico, setMedico, paciente, setPaciente,color, setConsultasModalOpen}: IColumn) => {
    const criarNovaConsulta = () => {
        const consulta = new ConsultaModel({paciente: paciente, medico: medico})
        ConsultasRequests.postConsulta(consulta)
            .then(()=>{
                alert("nova consulta cadastrada")
                setConsultasModalOpen(false)
            })
            .catch((e) => {
                console.log(e)
            })
    }

  return (
    <div className='flex gap-4'>
    <div className={`w-1/2${color} h-screen `}>
        <h3 className='text-2xl font-bold shadow-lg py-4 text-center mb-3'>Selecione O Médico</h3>
        <Card>
            <List>
                {medicos?.map((item) => {
                    return(
                        <ListItem key={item.objectId} onClick={() => setMedico(item)}>{item.nome}</ListItem>
                    )
                })}
            </List>
        </Card>
    </div>
    <div className={`w-1/2${color} h-screen`}>
        <h3 className='text-2xl font-bold shadow-lg py-4 text-center mb-3'>Selecione o Paciente</h3>
        <Card>
            <List>
                {pacientes?.map((item) => {
                    return(
                        <ListItem key={item.objectId} onClick={() => setPaciente(item)}>{item.nome}</ListItem>
                    )
                })}
            </List>
        </Card>
    </div>
    <Button className='h-14 mt-14' onClick={criarNovaConsulta}>Criar Nova Consulta</Button>
    </div>
  )
}

export default ModalConsultas