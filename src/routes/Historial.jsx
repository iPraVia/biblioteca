import React from 'react'

const Historial = ({historial}) => {

  const diferencia = (f1,f2) => {
    var dife = ((Date.parse(f2)) - (Date.parse(f1))) / 86400000
    if(dife > 2){
      return "red"
    }else{
      return "green"
    }
  }

  return (
    <>
      <div>
        <h3>Historial de devoluciones</h3>
        <table className='table table-bordered border-primary'>
          <thead className='table-dark'>
            <tr>
              <td>ID</td>
              <td>NOMBRE SOCIO</td>
              <td>TITULO DEL LIBRO</td>
              <td>FECHA SOLICITUD</td>
              <td>FECHA DEVOLUCION</td>
            </tr>
          </thead>
          <tbody>
            {historial.map((valor,index)=>(
              <tr key={valor.id} style={ { backgroundColor: diferencia(valor.fechaS,valor.fechaD) } }>
                <td>{valor.id}</td>
                <td>{valor.socio.nombre}</td>
                <td>{valor.libro.titulo}</td>
                <td>{valor.fechaS}</td>
                <td>{valor.fechaD}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Historial