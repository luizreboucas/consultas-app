'use client'

import { useEffect, useState } from "react"
import NavBar from '../components/NavBar'
import Column from "@/components/Column"
import MedicoModel from "@/data/models/MedicoModel"
import PacienteModel from "@/data/models/PacienteModel"
import MedicosRequest from "@/data/api/MedicosRequests"
import PacientesRequest from "@/data/api/PacientesRequests"
import ConsultasRequests from "@/data/api/consultasRequests"
import ConsultaModel from "@/data/models/ConsultaModel"
import ConsultaColumn from "@/components/ConsultaColumn"
import ModalConsultas from "@/components/ModalConsultas"

export default function Home() {

  const [openNavBar, setOpenNavBar] = useState<boolean>(true)
  const [medicos, setMedicos] = useState<MedicoModel[] | undefined>()
  const [pacientes, setPacientes] = useState<PacienteModel[] | undefined>()
  const [consultas, setConsultas] = useState<ConsultaModel[] | undefined>()
  const [consultasModalOpen, setConsultasModalOpen] = useState(false)
  const [medico, setMedico] = useState<MedicoModel | undefined>()
  const [paciente, setPaciente] = useState<PacienteModel | undefined>()


  useEffect(()=>{
        const getMedicos = () => {
          MedicosRequest.getMedicos()
          .then((result) => {
            setMedicos(result)
          })
          .catch((e) => {
            console.log(e)
          })
        }

        const getPacientes = () => {
          PacientesRequest.getPacientes()
            .then((results) => {
              setPacientes(results)
            })
            .catch((e) => {
              console.log(e)
            })
        }

        const getConsultas = () => {
          ConsultasRequests.getConsultas()
            .then((results) => {
              setConsultas(results)
            })
            .catch((e) => {
              console.log(e)
            })
        }



        getMedicos()
        getPacientes()
        getConsultas()
console.log('passou')
        
  },[medico, paciente])

  return (
    <div className="w-full bg-white ">
      <NavBar 
        consultasModalOpen = {consultasModalOpen} 
        setConsultasModalOpen = {setConsultasModalOpen}
        pacientes={pacientes}
        paciente={paciente}
        setPaciente = {setPaciente}
        setPacientes = {setPacientes}
        />
      <div className={`flex mx-48 mt-3 ${consultasModalOpen? "hidden": ''}`}>
        <ConsultaColumn label="Consultas" data={consultas}/>
        <Column label="Médicos" data={medicos}/>
        <Column label="Pacientes" data={pacientes}/>
        
      </div>
      <div className={`modalConsultas absolute top-20 left-0  ${consultasModalOpen? "flex": "hidden"}`}>
          <ModalConsultas 
            medicos={medicos}
            pacientes={pacientes} 
            setMedico = {setMedico} 
            medico= {medico}
            paciente={paciente}
            setPaciente={setPaciente}
            setConsultasModalOpen = {setConsultasModalOpen}/>
            


      </div>
    
      
    </div>
  )
}
