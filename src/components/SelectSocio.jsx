import React from 'react'

const SelectSocio = ({ socio, setCapSocio }) => {

  const getSocio = (evento) => {
    setCapSocio(parseInt(evento.target.value))
  }

  return (
    <>
      <select onChange={getSocio}>
        <option>-</option>
          {socio.map((e,i) => (<option key={e.id} value={e.id }>{e.nombre + " " + e.apellido }</option>))}
      </select>
    </>
  )
}

export default SelectSocio