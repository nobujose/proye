
import { Routes, Route, Link } from "react-router-dom";  
import Nav from './Nav';
import PasswordManager from './PasswordManager';
import Datos from "./Datos";
import InicioUsuario from "./components/InicioUsuario";
import Tranfe from "./components/Tranfe";
import Directorio from "./components/Directorio";
import { Reguistro } from "./components/Reguistro";



const Router = () => {  
  return (  
    <>
    
    <div className="relative h-screen">  
      
       <Nav >
      <div >  
        <Routes>  
           <Route path="prueba" element={<InicioUsuario/>}/>
           <Route path="mi-cuenta" element={<Datos/>}/>
           <Route path="transferencia" element={<Tranfe/>}/>
           <Route path="directorio" element={<Directorio/>}/>
          <Route path="/passwordManager" element={<PasswordManager />} />  
        </Routes>  
      </div>
      </Nav>
      
      
    </div>  
    </>
    
  );  
};  

export default Router;

