import React from 'react'
import Registro from '../components/Registro'

const DevolverLibro = ({socio,registro,historial,setHistorial,libro,setLDisponible}) => {
  return (
    <>
        <Registro 
        libro={libro}
        socio={socio}
        registro={registro}
        historial={historial}
        setHistorial={setHistorial}
        setLDisponible={setLDisponible}
        />
    </>
  )
}

export default DevolverLibro