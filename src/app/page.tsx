'use client'
import request from "@/api/config"
import { useEffect } from "react"

export default function Home() {
  useEffect(()=>{
      const getMedicos = async() => {
        try {
          const medicos = (await request.get('/classes/medicos')).data.results
          console.log(medicos)
        } catch (error) {
          console.error(error)
        }
      }
      
      
  },[])

  return (
    <div>
      <h2 className='text-red-700 font-bold'>teste</h2>
    </div>
  )
}
