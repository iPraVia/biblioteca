import React,{ useEffect, useState } from 'react'
 
const Registro = ({registro,historial,setHistorial,libro,socio}) => {

    const [socioFiltrado,setSocioFiltrado] = useState([])
    const [registroFiltrado,setRegistroFiltrado] = useState([])
    const [idSeleccionado,setIdSeleccionado] = useState(0)

    //Aqui estamos obteniendo el socio que sea seleccionado desde el select
    const getId = (evento) => {
        setIdSeleccionado(evento.target.value)
    }

    //Aqui estaremos ejecutando una busqueda dentro de los registros para mostrar solo los socios
    //que tengan algun libro solicitado, este useEffect se ejecutara cada vez que haya un cambio en socioFiltrado
    useEffect(()=>{
        setSocioFiltrado([])//Vaciamos el listado de los sociosFiltrados, para volver a llenarlo
        socio.findIndex((soc,s) => {//recorremos el listado de socios
            registro.findIndex((reg,r) => {//recorremos el listado con los registros
                if(soc.id === reg.socio.id){//Verificamos por cada socio si tiene algun libro solicitado
                    setSocioFiltrado((old)=> [...old,soc])//si el socio ha solicitado un libro almacenamos sus datos el el listado de los sociosFiltrados
                    return true //Cortamos el ciclo para continuar con el siguiente socio
                }
            })
        })
    },[socioFiltrado])//Este useEffect se ejecutara cada vez que socioFiltrado sea modificado


    useEffect(()=>{
        setRegistroFiltrado([])//vaciamos el registroFiltrado
        registro.findIndex((reg,r) => {//recorremos el array registro objeto por objeto
            //si lo que tiene el objeto reg.socio.id corresponde con el id del cliente selecciondo
            //desede el select se agregaran al arreglo todos los libros que este a solicitado
            if(idSeleccionado === reg.socio.id){
                setRegistroFiltrado((old) => [...old,reg])
            }
    })},[registroFiltrado])//Este useEffect se ejecutara cada vez que registroFiltrado sea modificado
        

    const devolverLibro = (evento) =>{
        
        var fechaD = document.querySelector("input[type=date]").value//traemos la fecha desde el input de tipo date en formato string
        //Creamos un objeto que contendra los datos del socio, del libro, la fecha de solicitud, la fecha de devolucion y su propio id 
        var regHistorial = {"id":historial.at(-1)?(parseInt(historial.at(-1).id)+1).toString():"1","socio":evento.socio,"libro":evento.libro,"fechaS":evento.fecha,"fechaD":fechaD}
        //En esta parte almacenamos un objeto que contiene el socio, el libro la fecha de solicitud y la fecha de devolucion del libro que se ha devuelto
        setHistorial((old)=>[...old,regHistorial])

        //En esta parte estamos modificando el estado del libro que se esta devolviendo a true y almacenandolo nuevamente
        //en el localStorage 
        libro.findIndex((l,i)=>{//Recorremos el arrego libro objeto por objeto
            //Verificamos is el objeto libro.id es igual al libro que se esta devolviendo
            //cambiamos su estado disponible a true antes de ser devuelto para que este disponible nuevamente 
            if(l.id === regHistorial.libro.id){
                l.disponible = true
                //Almacenamos nuevamente el arreglo modificado en el localStorage
                localStorage.setItem("libro",JSON.stringify(libro))         
            }
        })
        //En esta parte estamos eliminando del registro el libro que se ha devuelto
        registro.findIndex((reg,index)=>{//Recorremos el arreglo que contiene el registro de las solicitudes realizadas
            //Verificamos si lo que esta dentro del objeto registro.socio.id es igual a lo que posee
            //el objeto regHistorial.socio.id y verificamos tambien si lo que esta dentro del objeto registro.libro.id
            //es igual a lo que esta en el objeto regHistoria.libro.id
            if((reg.socio.id === regHistorial.socio.id) && (reg.libro.id === regHistorial.libro.id)){
                //Si la verificacion es correcta eliminamos desde el index que posee el objeto
                //la cantidad de elementos indicados en el segundo parametro de la funcion splice()
                registro.splice(index,1)
                //Volvemos a almacenar el arreglo registro dentro del localStorage
                localStorage.setItem("registro",JSON.stringify(registro))
            }
        })
    }
    

  return (
    <div>
        <h3>FILTRO DE SOCIO</h3>
        <select onChange={getId}>{/*Ejecutamos la funcion getId en cada cambio que se genere en el select*/}
            <option>-</option>
            {socioFiltrado.map((valor,index)=>(
                <option key={valor.id} value={valor.id}>{valor.nombre+ " " +valor.apellido}</option>
            ))}
        </select>
        <br />
        <br />
        <h3>LIBROS PRESTADOS</h3>
        <table className='table table-bordered border-primary'>
            <thead className='table-dark'>
                <tr>
                    <td>USUARIO</td>
                    <td>LIBRO</td>
                    <td>FECHA SOLICITUD</td>
                    <td>FECHA DEVOLUCION</td>
                    <td>ACCION</td>
                </tr>
            </thead>
            <tbody>
                {/*Creamos una fila por cada elemento dentro de registroFiltrado
                y por cada uno creamos una columna para mostrar los datos que este objeto posee*/}
                {registroFiltrado.map((valor,index) => (
                    <tr key={valor.id}>
                        <td>{valor.socio.nombre}</td>
                        <td>{valor.libro.titulo}</td>
                        <td>{valor.fecha}</td>
                        <td><input type="date" /></td>
                        {/*En este boton estamos enviando a la funcion devolverLibro el valor que venga del registro filtrado dependiendo de la iteracion en la que valla*/}
                        <td><button type='button' onClick={() => devolverLibro(valor)}>DEVOLVER</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Registro