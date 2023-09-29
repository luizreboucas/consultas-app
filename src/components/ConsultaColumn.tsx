
import { List, ListItem, Card } from '@material-tailwind/react'
import React from 'react'

interface IColumn{
    color?: String,
    label: string,
    data?: any[]
}

const ConsultaColumn = ({color,label,data}: IColumn) => {
  return (
    <div className={`w-1/3 ${color} h-screen`}>
        <h3 className='text-2xl font-bold shadow-lg py-4 text-center mb-3'>{label}</h3>
        <Card>
            <List>
                {data?.map((item) => {
                    return(
                        <ListItem key={item.objectId}>
                            <Card className='w-full p-2'>
                                <h2>Médico: {item.medico.nome}</h2>
                                <h2>Paciente: {item.paciente.nome}</h2>
                            </Card>
                        </ListItem>
                    )
                })}
            </List>
        </Card>
    </div>
  )
}

export default ConsultaColumn