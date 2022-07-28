import React from 'react'

const Historial = ( {historial} ) => {

  //Funcion para calcular la diferencia de horas
  const diferencia = (f1,f2) => {//Recibimos las dos fechas
    //transformamos cada fecha a timestamp y las restamos para posteriormente dividirla por 86400000
    //que es la cantidad de milisegundos que posee un dia
    //esto nos devolveria la cantidad de dias de diferencia entre las dos fechas
    var dife = ( (Date.parse(f2)) - (Date.parse(f1)) ) / 86400000
    //comprobamos si la diferencia es mayor a 2
    if(dife > 2){
      return "table-warning"
    }else{
      return "table-light"  
    }
  }

  return (
    <>
      <div>
        <h3>HISTORIAL DE DEVOLUCIONES</h3>
        <table className='table table-bordered border-primary'>
          <thead className='table-dark'>
            <tr>
              <td></td>
              <td>SOCIO</td>
              <td>LIBRO</td>
              <td>SOLICITUD</td>
              <td>DEVOLUCION</td>
            </tr>
          </thead>
          <tbody>
            {historial.map((valor,index)=>(
              //En esta linea estamos asignando con el atributo style un color de fondo a la fila
              //que dependera de lo que retorne la funcion diferencia() a la cuanl le estamos pasando
              //por parametro la fecha de solicitud y la fecha de devolucion
              <tr key={valor.id} className={diferencia(valor.fechaS,valor.fechaD)}>
                <td>{valor.id}</td>
                <td>{valor.socio.nombre+" "}{valor.socio.apellido}</td>
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