import React,{ useEffect, useState } from 'react'
 
const Registro = ({registro,historial,setHistorial,libro,socio}) => {

    const [socioFiltrado,setSocioFiltrado] = useState([])
    const [registroFiltrado,setRegistroFiltrado] = useState([])
    const [idSeleccionado,setIdSeleccionado] = useState(0)

    const getId = (evento) => {
        setIdSeleccionado(evento.target.value)
    }

    useEffect(()=>{
        setSocioFiltrado([])
        socio.findIndex((soc,s) => {
            registro.findIndex((reg,r) => {
                if(soc.id === reg.socio.id){
                    setSocioFiltrado((old)=> [...old,soc])
                    return true 
                }
            })
        })
    },[socioFiltrado])

    useEffect(()=>{
        setRegistroFiltrado([])
        registro.findIndex((reg,r) => {
            if(idSeleccionado === reg.socio.id){
                setRegistroFiltrado((old) => [...old,reg])
            }
    })},[registroFiltrado])
        

    const devolverLibro = (evento) =>{
        
        var fechaD = document.querySelector("input[type=date]").value
        var regHistorial = {"id":historial.at(-1)?(parseInt(historial.at(-1).id)+1).toString():"1","socio":evento.socio,"libro":evento.libro,"fechaS":evento.fecha,"fechaD":fechaD}
        //En esta parte almacenamos un objeto que contiene el socio, el libro la fecha de solicitud y la fecha de devolucion del libro que se ha devuelto
        setHistorial((old)=>[...old,regHistorial])

        //En esta parte estamos modificando el estado del libro que se esta devolviendo a true y almacenandolo nuevamente
        //en el localStorage 
        libro.findIndex((l,i)=>{
            if(parseInt(l.id) === parseInt(regHistorial.libro.id)){
                l.disponible = true
                localStorage.setItem("libro",JSON.stringify(libro))         
            }
        })
        //En esta parte estamos eliminando del registro el libro que se ha devuelto
        registro.findIndex((reg,index)=>{
            if((reg.socio.id === regHistorial.socio.id) && (reg.libro.id === regHistorial.libro.id)){
                registro.splice(index,1)
                localStorage.setItem("registro",JSON.stringify(registro))
            }
        })
    }
    

  return (
    <div>
        <h3>Filtro de Socio</h3>
        <select onChange={getId}>
            <option>-</option>
            {socioFiltrado.map((valor,index)=>(
                <option key={valor.id} value={valor.id}>{valor.nombre+ " " +valor.apellido}</option>
            ))}
        </select>
        <h3>Libros Prestados</h3>
        <table>
            <thead>
                <tr>
                    <td>Usuario</td>
                    <td>Libro</td>
                    <td>Fecha Solicitud</td>
                    <td>Fecha Devolucion</td>
                </tr>
            </thead>
            <tbody>
                {registroFiltrado.map((valor,index) => (
                    <tr key={valor.id}>
                        <td>{valor.socio.nombre}</td>
                        <td>{valor.libro.titulo}</td>
                        <td>{valor.fecha}</td>
                        <td><input type="date" /></td>
                        <td><button type='button' onClick={() => devolverLibro(valor)}>Devolver</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Registro