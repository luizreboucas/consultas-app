'use client'
import request from "../../api/config"
import { useEffect, useState } from "react"
import MedicosRequest from "../../api/MedicosRequests"
import MedicoModel from "@/models/MedicoModel"

export default function Home() {

  const [medicos, setMedicos] = useState<MedicoModel[] | undefined>([])
  const [medico, setMedico] = useState<MedicoModel | undefined>()
  

  const getMedicos = async() => {
    try {

      // const medicoRequest : MedicoModel| undefined = await MedicosRequest.getMedico('pOktPvvBC7')
      // const medicos = await MedicosRequest.getMedicos()
      const medico = await MedicosRequest.getMedico('bD4keDCDbW')
      const medicoRecebido = new MedicoModel(medico)
      medicoRecebido.setNome('Alessandro Vilésias')
      medicoRecebido.setEspecialidade('pediatria')
      const mudanca = await MedicosRequest.updateMedico(medicoRecebido)
      console.log(mudanca)
    } catch (error) {
      console.error(error)
    }
  }



  useEffect(()=>{
      getMedicos()
      
  },[])

  return (
    <div>
      <h2 className='text-red-700 font-bold'>{medico?.getData().nome}</h2>
    </div>
  )
}
