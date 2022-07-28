import React,{useEffect, useState} from 'react'
import SelectLibro from './SelectLibro'
import SelectSocio from './SelectSocio'

const Prestamo = ( {libro, socio,registro,setRegistro} ) => {

    const [ldisponible,setLDisponible] = useState([])
    const [capSocio,setCapSocio] = useState(0)
    const [capLibro,setCapLibro] = useState(0)

    useEffect(()=>{
        //Filtramos todos los objetos libro que tengan el valor true en la clave disponible
        setLDisponible(libro.filter((l) => l.disponible === true))
    },[libro])//Este useEffect se ejecuta cada vez que hay un cambio dentro del arreglo libro

    const solicitarLibro = () => {
        //Una vez que se haya seleccionado un socio del select filtramos sus datos desde el arreglo socio
        //para obtener el objeto y sus valores
        var socioSeleccionado = socio.filter((s)=> parseInt(s.id) === capSocio )
        //Una vez que se haya seleccionado un libro del select filtramos sus datos desde el arreglo libro
        //para obtener el objeto y sus valores
        var libroSeleccionado = libro.filter((l) => parseInt(l.id) === capLibro)
        //Obtenemos la fecha seleccionada desde el input como un tipo String
        var fechaActual = document.querySelector("input[type=date]").value

        //Recorremos el arreglo libro, objeto por objeto
        libro.findIndex((valor,index)=>{
            //Si lo que tenga el objeto en la clave id es igual al id del libro seleccionado
            //entrara dentro del if y cambiara su estado a false, dejando de estar disponible
            if(valor.id === libroSeleccionado[0].id){
                valor.disponible = false//cambiamos el valor de la clave disponible a false
                //Almacenamos nuevamente el arreglo libro con las modificaciones realizadas
                localStorage.setItem("libro",JSON.stringify(libro))
                setLDisponible(libro.filter((l) => l.disponible === true))//ver linea 11           
            }
        })
        //para entender esta linea ir a "./routes/IngresarLibro.jsx" linea 12 - 16
        setRegistro((old) => [...old,{"id":registro.at(-1)?(parseInt(registro.at(-1).id)+1).toString():"1","socio":socioSeleccionado[0],"libro":libroSeleccionado[0],"fecha":fechaActual}])
        alert("Libro Solicitado exitosamente")
        document.querySelectorAll("input").forEach((valor,index)=>valor.value = "")
    }

  return (
    <>
        <div>
            <h3>PRESTAMO DE LIBROS</h3>
            <table className='table table-bordered border-primary' >
                <thead className='table-dark'>
                    <tr>
                        <td>SOCIO</td>
                        <td>LIBRO</td>
                        <td>FECHA</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><SelectSocio socio={socio} setCapSocio={setCapSocio}/></td>
                        <td><SelectLibro libro={ldisponible} setCapLibro={setCapLibro}/></td>
                        <td><input type="date" className="form-control"/></td>
                        <td><button type='button' className="btn btn-outline-primary" onClick={solicitarLibro}>SOLICITAR LIBRO</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Prestamo