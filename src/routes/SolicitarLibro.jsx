import React, { useState } from 'react'
import Prestamo from '../components/Prestamo'

const SolicitarLibro = ({libro,socio,setRegistro,registro}) => {

  return (
    <>
      <Prestamo
      libro={libro}
      socio={socio}
      registro={registro}
      setRegistro={setRegistro}
      />
    </>
  )
}

export default SolicitarLibro