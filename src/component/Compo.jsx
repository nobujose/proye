import logo from'./assets/img/logobanco.png';
import { Encabezado } from './Encabezado';
import { Menu } from './Menu';
import { Pie } from './Pie';


export function Compo() {
  

    return(

      
    <div className="flex flex-col h-screen font-['Montserrat_Alternates']">
      <Encabezado/>
      <div className="flex flex-1 overflow-hidden">
       <Menu/>

        {/* Main content */}
        <div className="flex-1 p-8 bg-white overflow-auto">
          <main>
            <h1>asjdajdasdasdaskdasldñaskdklasdkasdamsdlkasdkjasldjasdlkasdlasdjlasdjasldjasldjasld</h1>
          </main>
           
          
        </div>

      </div>
      
      <Pie/>

      
    </div>
  


    );
}