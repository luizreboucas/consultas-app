'use client'
import React, { Dispatch, SetStateAction } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { UserPlusIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import MedicoModel from "@/data/models/MedicoModel";
import PacienteModel from "@/data/models/PacienteModel";
import PacientesRequest from "@/data/api/PacientesRequests";

type TNavBarComponent = {
  consultasModalOpen: boolean,
  setConsultasModalOpen: Dispatch<SetStateAction<boolean>>
  paciente?: PacienteModel,
  pacientes?: PacienteModel[],
  setPaciente: Dispatch<SetStateAction<PacienteModel>>,
  setPacientes:  Dispatch<SetStateAction<PacienteModel[]>>

}
 
export function NavbarComponent({consultasModalOpen, setConsultasModalOpen, paciente, pacientes, setPaciente, setPacientes}: TNavBarComponent) {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const cadastraCliente = () => {
    const nome = prompt("digite o nome do cliente")
    const novoPaciente = new PacienteModel({nome: nome})
    PacientesRequest.postPaciente(novoPaciente)
      .then(() => {
        alert('Paciente Cadastrado com sucesso')
      })
      .catch((e) => {
        console.log(e)
      })
  }
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-md"
      >
        <div className="flex ">
            <a href="#" className="flex items-center">
            Novo Médico
            </a>
            <AcademicCapIcon className="ml-1" height={25}/>
        </div>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold text-md"
      >
        <div className="flex " onClick={cadastraCliente}>
            <a href="#" className="flex items-center">
            Novo Cliente
            </a>
            <UserPlusIcon className="ml-1" height={25}/>
        </div>
        
        
        
      </Typography>
      
      
    </ul>
  );

  const criarNovaConsulta = async(medico: MedicoModel) => {
    setConsultasModalOpen(!consultasModalOpen)
  }
 
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 text-xl font-bold "
        >
          Consultas Já - 
        </Typography>
        <p>Consultas de emergência</p>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block" onClick={(medico: MedicoModel) => criarNovaConsulta(medico)}>
          <span>Nova Consulta</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Nova Consulta</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default NavbarComponent
