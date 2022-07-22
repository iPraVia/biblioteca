import React,{useEffect, useState} from 'react'
import SelectLibro from './SelectLibro'
import SelectSocio from './SelectSocio'

const Prestamo = ( {libro, socio,registro,setRegistro} ) => {

    const [ldisponible,setLDisponible] = useState([])
    const [capSocio,setCapSocio] = useState(0)
    const [capLibro,setCapLibro] = useState(0)

    useEffect(()=>{
        setLDisponible(libro.filter((l) => l.disponible === true))
    },[libro])

    const solicitarLibro = () => {
        var socioSeleccionado = socio.filter((s)=> parseInt(s.id) === capSocio )
        var libroSeleccionado = libro.filter((l) => parseInt(l.id) === capLibro)
        var fechaActual = document.querySelector("input[type=date]").value

        //
        libro.findIndex((valor,index)=>{
            if(parseInt(valor.id) === parseInt(libroSeleccionado[0].id)){
                valor.disponible = false
                localStorage.setItem("libro",JSON.stringify(libro))
                setLDisponible(libro.filter((l) => l.disponible === true))             
            }
        })
        //para entender esta linea ir a "./routes/IngresarLibro.jsx" linea 12 - 16
        setRegistro((old) => [...old,{"id":registro.at(-1)?(parseInt(registro.at(-1).id)+1).toString():"1","socio":socioSeleccionado[0],"libro":libroSeleccionado[0],"fecha":fechaActual}])
    }

  return (
    <>
        <div className='table-responsive-sm'>
            <h3>PRESTAMO DE LIBROS</h3>
            <table className='table table-bordered border-primary' >
                <thead className='table-dark'>
                    <tr>
                        <td>SOCIO</td>
                        <td>LIBRO</td>
                        <td>FECHA</td>
                        <td>ACCION</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><SelectSocio socio={socio} setCapSocio={setCapSocio}/></td>
                        <td><SelectLibro libro={ldisponible} setCapLibro={setCapLibro}/></td>
                        <td><input type="date"/></td>
                        <td><button type='button' onClick={solicitarLibro}>SOLICITAR LIBRO</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Prestamo