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
  }

  return (
    <>
      <div>
        <h3>Ingresar Socio</h3>
        <table>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Apellido</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" onChange={getNombre}/></td>
              <td><input type="text" onChange={getApellido}/></td>
              <td><button type='button' onClick={agregar}>Ingresar</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default IngresarSocio