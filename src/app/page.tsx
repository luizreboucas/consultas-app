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

export default function Home() {

  const [openNavBar, setOpenNavBar] = useState<boolean>(true)
  const [medicos, setMedicos] = useState<MedicoModel[] | undefined>()
  const [pacientes, setPacientes] = useState<PacienteModel[] | undefined>()
  const [consultas, setConsultas] = useState<ConsultaModel[] | undefined>()

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
  },[])

  return (
    <div className="w-full bg-white">
      <NavBar/>
      <div className="flex mx-48 mt-3">
        <ConsultaColumn label="Consultas" data={consultas}/>
        <Column label="Médicos" data={medicos}/>
        <Column label="Pacientes" data={pacientes}/>
        
      </div>
    </div>
  )
}
