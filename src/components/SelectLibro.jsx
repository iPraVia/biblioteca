import React from 'react'

const SelectLibro = ({ libro, setCapLibro }) => {

  const getLibro = (evento) => {
    setCapLibro(parseInt(evento.target.value))
  }

  return (
    <>
      <select onChange={getLibro} className="form-select">
        <option>- Elige el Libro -</option>
        {
          libro.map((e,i) => (<option key={e.id} value={e.id}>{e.titulo}</option>))
        }
      </select>
    </>
  )
}

export default SelectLibro