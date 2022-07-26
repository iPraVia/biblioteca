import React,{ useState } from 'react'

const IngresarLibro = ({libro,setLibro}) => {
  
  const [textLibro,setTextLibro] = useState("")

  const capTexto = (evento) => {
    setTextLibro(evento.target.value)//capturamos lo que se escriba en el input
  }

  const agregarLibro = () => {
    //En esta linea estamos almacenando dentro del array libro un nuevo objeto libro con la funcion setLibro
    //para la clave "id" traemos del array libro el ultimo objeto, con notacion punto accedemos al id, como el id
    //es tipo string lo transformamos a entero con parseInt y luego le sumamos uno, para mantener el orden correlativo
    //al ir registrando libros, el titulo lo campturamos desde el input con la funcion capTexto, y la disponibilidad
    //del libro por logica al momento de ingresarlo debe ser true
    setLibro((old) => [...old,{"id":(parseInt(libro.at(-1).id)+1).toString(),"titulo":textLibro,"disponible":true}])
    alert("LIBRO INGRESADO CON EXITO")
    document.querySelectorAll("input[type=text]").forEach((valor,index)=>valor.value="")
  }

  return (
    <>
      <div>
        <h3>INGRESAR LIBRO</h3>
        <table className="table table-bordered border-primary">
          <thead  className='table-dark'>
            <tr>
              <td>NOMBRE DEL LIBRO</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" className="form-control" onChange={capTexto}/>
              </td>
              <td className='tdBoton'>
                <button type='button' className="btn btn-outline-primary" onClick={agregarLibro}>AGREGAR</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default IngresarLibro