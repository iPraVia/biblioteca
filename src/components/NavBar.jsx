import React from 'react'
import IngresarLibro from '../routes/IngresarLibro'
import IngresarSocio from '../routes/IngresarSocio'
import DevolverLibro from '../routes/DevolverLibro'
import SolicitarLibro from '../routes/SolicitarLibro'
import Historial from '../routes/Historial'
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'

const NavBar = ({libro,setLibro,socio,setSocio,registro,setRegistro,historial,setHistorial}) => {
  return (
    <>
        <BrowserRouter >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/solicitar">SOLICITAR LIBRO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/devolver">DEVOLVER LIBRO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ingresarSocio">INGRESAR SOCIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ingresarLibro">INGRESAR LIBRO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/historial">HISTORIAL</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/solicitar" 
                    element={
                    <SolicitarLibro
                        libro={libro}
                        socio={socio}
                        registro={registro}
                        setRegistro={setRegistro} />}
                />

                <Route path="/devolver" 
                    element={
                    <DevolverLibro
                        libro={libro}
                        socio={socio}
                        registro={registro}
                        setRegistro={setRegistro} 
                        historial={historial}
                        setHistorial={setHistorial}
                    />}
                />

                <Route path="/ingresarSocio" 
                    element={
                    <IngresarSocio 
                    socio={socio}
                    setSocio={setSocio}
                    />}
                />

                <Route path="/ingresarLibro"   
                    element={
                    <IngresarLibro
                        libro={libro}
                        setLibro={setLibro}
                    />}
                />

                <Route path="/historial"
                    element={
                    <Historial
                        historial={historial}
                        setHistorial={setHistorial}    
                    />}
                />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default NavBar