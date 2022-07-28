import React,{useEffect,useState} from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const urlLibro = "http://45.236.130.191/api-prueba/biblioteca.php?action=libros";
  const urlSocio = "http://45.236.130.191/api-prueba/biblioteca.php?action=socios";

  const [libro,setLibro] = useState([]);//Aqui creamos un array para almacenar cada objeto libro que viene desde la API
  const [socio,setSocio] = useState([]);//Aqui creamos un array para almacenar cada objeto socio que viene desde la API
  const [registro,setRegistro] = useState([]);
  const [historial, setHistorial] = useState([]);

  //Traemos los objetos libro de la API y los almacenamos dentro de un array
  const getLibro = async() => {
    const datos = await fetch(urlLibro);
    setLibro(await datos.json());
  }
  //Traemos los objetos socio de la API y los almacenamos dentro de un array
  const getSocio = async () => {
    const datos = await fetch(urlSocio);
    setSocio(await datos.json());
  }
  //Al cargar por primera vez la pagina verificamos si hay datos en el localStorage, si los hay se almacenan en el array
  //correspondiente, de lo contrario se ejecuta la funcion que traera los datos de la API y los guardara dentro del array
  //ya sea para los socios o para los libros
  useEffect(()=>{localStorage.getItem("libro")?setLibro(JSON.parse(localStorage.getItem("libro"))):getLibro()},[]);
  useEffect(()=>{localStorage.getItem("socios")?setSocio(JSON.parse(localStorage.getItem("socios"))):getSocio()},[]);
  useEffect(()=>{localStorage.getItem("registro")?setRegistro(JSON.parse(localStorage.getItem("registro"))):setRegistro([])},[])
  useEffect(()=>{localStorage.getItem("historial")?setHistorial(JSON.parse(localStorage.getItem("historial"))):setHistorial([])},[])
  //Aqui estamos agregando los valores al localStorage cuando detecte un cambio en 'libro' o en 'socio'
  useEffect(()=>{localStorage.setItem("libro",JSON.stringify(libro))},[libro]);
  useEffect(()=>{localStorage.setItem("socio",JSON.stringify(socio))},[socio]);
  useEffect(()=>{localStorage.setItem("registro",JSON.stringify(registro))},[registro]);
  useEffect(()=>{localStorage.setItem("historial",JSON.stringify(historial))},[historial]);


  return (
    <>
      <NavBar
        libro={libro}
        setLibro={setLibro}
        socio={socio}
        setSocio={setSocio}
        registro={registro}
        setRegistro={setRegistro}
        historial={historial}
        setHistorial={setHistorial}
      />
    </>
  );
}

export default App;
