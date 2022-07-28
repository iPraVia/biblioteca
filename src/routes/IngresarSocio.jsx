import React,{useState} from 'react'

const IngresarSocio = ({socio,setSocio}) => {

  const [nombre,setNombre] = useState("")
  const [apellido,setApellido] = useState("")

  //Almacenamos lo que se escriba en el input nombre dentro de la const nombre con el metodo setNombre
  const getNombre = (evento) => {
    setNombre(evento.target.value)
  }
  //Almacenamos lo que se escribe en el input apellido dentro de la const apellido con el metodo setApellido
  const getApellido = (evento) => {
    setApellido(evento.target.value)
  }
  //Con la funcion setSocio agregamos el nuevo objeto socio, manteniendo los objetos que ya contiene 
  const agregar = () => {
    setSocio((old)=>[...old,{"id":(parseInt(socio.at(-1).id)+1).toString(),"nombre":nombre,"apellido":apellido}])
    alert("SOCIO INGRESADO CON EXITO")
    document.querySelectorAll("input[type=text]").forEach((valor,index)=>valor.value = "")
  }

  return (
    <>
      <div>
        <h3>INGRESAR SOCIO</h3>
        <table className="table table-bordered border-primary table-sm">
          <thead className='table-dark'>
            <tr>
              <td>NOMBRE</td>
              <td>APELLIDO</td>
              <td>ACCION</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" className="form-control" onChange={getNombre}/></td>
              <td><input type="text" className="form-control" onChange={getApellido}/></td>
              <td className='t_d'><button type='button' className="btn btn-outline-primary" onClick={agregar}>AGREGAR</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default IngresarSocio